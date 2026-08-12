import { NextResponse } from "next/server"

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60_000

function rateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT) return false
  entry.count++
  return true
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
    if (!rateLimit(ip)) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
    }

    const body = await request.json()
    const {
      interest,
      name,
      email,
      phone,
      bestTimeToCall,
      areaOfInterest,
      propertyAddress,
      reasonForSelling,
      sellingTimeline,
      propertyType,
      contactMethod,
    } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const phoneDigits = phone.replace(/\D/g, "")
    if (phoneDigits.length < 10) {
      return NextResponse.json({ error: "Phone number must have at least 10 digits" }, { status: 400 })
    }

    const lines = [
      `New lead from halifaxproperties.com`,
      `---`,
      `Interest: ${interest || "homeowner"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
    ]

    if (bestTimeToCall) lines.push(`Best Time to Call: ${bestTimeToCall}`)
    if (areaOfInterest) lines.push(`Area of Interest: ${areaOfInterest}`)
    if (propertyAddress) lines.push(`Property Address: ${propertyAddress}`)
    if (reasonForSelling) lines.push(`Reason for Selling: ${reasonForSelling}`)
    if (sellingTimeline) lines.push(`Selling Timeline: ${sellingTimeline}`)
    if (propertyType) lines.push(`Property Type: ${propertyType}`)
    if (contactMethod) lines.push(`Preferred Contact Method: ${contactMethod}`)

    lines.push(`---`)
    lines.push(`Geoffrey Enebly | Halifax Properties & Investments`)

    const text = lines.join("\n")
    const subject = `New Lead: ${name}`

    console.log(`[Lead] ${subject}`)
    console.log(text)

    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER

    if (smtpHost && smtpUser) {
      const nodemailer = await import("nodemailer")
      const transporter = nodemailer.default.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: smtpUser,
          pass: process.env.SMTP_PASS || "",
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_FROM || smtpUser,
        to: process.env.NOTIFY_TO || smtpUser,
        subject,
        text,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[Lead API] Error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
