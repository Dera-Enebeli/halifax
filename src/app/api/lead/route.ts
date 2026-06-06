import { NextResponse } from "next/server"

export interface LeadData {
  name: string
  email: string
  phone: string
  location: string
  reason: string
  timeline: string
  budget: string
  propertyType: string
  message: string
  propertyTitle: string
  propertyAddress: string
  propertyId: string
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json()

    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      )
    }

    console.log("--- New Lead ---")
    console.log("Property:", data.propertyTitle)
    console.log("Address:", data.propertyAddress)
    console.log("Name:", data.name)
    console.log("Email:", data.email)
    console.log("Phone:", data.phone)
    console.log("Location:", data.location)
    console.log("Reason:", data.reason)
    console.log("Timeline:", data.timeline)
    console.log("Budget:", data.budget)
    console.log("Property Type:", data.propertyType)
    console.log("Message:", data.message)
    console.log("-----------------")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
