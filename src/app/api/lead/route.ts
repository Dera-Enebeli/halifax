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
    const { interest, name, email, phone, bestTimeToCall, areaOfInterest, budget, timeline, consentEmail, consentSMS, message, contactMethod } = body

    if (!name || !email || !phone || !interest) {
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

    const interestLabels: Record<string, string> = {
      buyer: "Buying",
      seller: "Selling",
      homeowner: "Valuation",
    }

    const subject = `New Lead: ${interestLabels[interest] || "Valuation"} - ${name}`
    const lines = [
      `New lead from halifaxproperties.com`,
      `---`,
      `Interest: ${interestLabels[interest] || "Valuation"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
    ]

    if (bestTimeToCall) lines.push(`Best Time to Call: ${bestTimeToCall}`)
    if (areaOfInterest) lines.push(`Area of Interest: ${areaOfInterest}`)
    if (budget) {
      const budgetLabels: Record<string, string> = {
        "under-500k": "Under $500,000",
        "500k-750k": "$500,000 – $750,000",
        "750k-1m": "$750,000 – $1,000,000",
        "1m-1.5m": "$1,000,000 – $1,500,000",
        "1.5m-2m": "$1,500,000 – $2,000,000",
        "2m-plus": "$2,000,000+",
        "not-sure": "Not sure yet",
      }
      lines.push(`Budget: ${budgetLabels[budget] || budget}`)
    }
    if (timeline) {
      const timelineLabels: Record<string, string> = {
        "just-looking": "Just looking / Browsing",
        "1-3": "1 – 3 months",
        "3-6": "3 – 6 months",
        "6-plus": "6+ months",
        "not-sure": "Not sure",
      }
      lines.push(`Timeline: ${timelineLabels[timeline] || timeline}`)
    }
    if (consentEmail === "yes") lines.push(`Consent: Email marketing`)
    if (consentSMS === "yes") lines.push(`Consent: SMS`)
    if (message) lines.push(`Message: ${message}`)
    if (contactMethod) lines.push(`Preferred Contact Method: ${contactMethod}`)

    lines.push(`---`)
    lines.push(`Geoffrey Enebly | Halifax Properties & Investments`)

    const text = lines.join("\n")

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
