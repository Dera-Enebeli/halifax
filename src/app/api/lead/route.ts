import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { interest, name, email, phone, bestTimeToCall, areaOfInterest, message, contactMethod } = body

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
