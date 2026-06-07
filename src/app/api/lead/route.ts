import { NextResponse } from "next/server"

export interface LeadData {
  interest: string
  name: string
  email: string
  city: string
  address: string
  propertyType: string
  sqft: string
  minPrice: number
  maxPrice: number
  bedrooms: number
  baths: number
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

    console.log("=== Halifax Properties & Investments New Lead ===")
    console.log("Interest:", data.interest)
    console.log("Name:", data.name)
    console.log("Email:", data.email)
    console.log("City:", data.city)
    console.log("Address:", data.address)
    console.log("Property Type:", data.propertyType)
    console.log("Sq Ft:", data.sqft)
    console.log("Min Price:", data.minPrice)
    console.log("Max Price:", data.maxPrice)
    console.log("Bedrooms:", data.bedrooms)
    console.log("Baths:", data.baths)
    console.log("================================================")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
