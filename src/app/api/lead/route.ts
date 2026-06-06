import { NextResponse } from "next/server"

export interface LeadData {
  interest: string
  name: string
  email: string
  city: string
  propertyType: string
  address: string
  beds: string
  baths: string
  sqft: string
  budget: string
  timeline: string
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json()

    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      )
    }

    console.log("=== Halifact's New Lead ===")
    console.log("Interest:", data.interest)
    console.log("Name:", data.name)
    console.log("Email:", data.email)
    console.log("City:", data.city)
    console.log("Property Type:", data.propertyType)
    console.log("Address:", data.address)
    console.log("Beds:", data.beds)
    console.log("Baths:", data.baths)
    console.log("Sq Ft:", data.sqft)
    console.log("Budget:", data.budget)
    console.log("Timeline:", data.timeline)
    console.log("==========================")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
