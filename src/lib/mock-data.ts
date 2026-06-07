import { Home, Building2, Warehouse, Building } from "lucide-react"

export interface Property {
  id: string
  title: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  beds: number
  baths: number
  sqft: number
  lotSize: string
  yearBuilt: number
  garage: number
  description: string
  images: string[]
  type: "House" | "Condo" | "Townhouse" | "Craftsman" | "Victorian" | "Bungalow"
  status: "Active" | "Pending" | "Sold"
  featured: boolean
  listDate: string
  agent: {
    name: string
    phone: string
    email: string
    image: string
  }
  features: string[]
  location: {
    lat: number
    lng: number
  }
}

export const agent = {
  name: "Alex Rivera",
  phone: "(510) 555-0142",
  email: "alex@halifaxproperties.com",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Renovated Craftsman Bungalow",
    address: "1246 Park Boulevard",
    city: "Oakland",
    state: "CA",
    zip: "94610",
    price: 849000,
    beds: 3,
    baths: 2,
    sqft: 1650,
    lotSize: "0.12 acres",
    yearBuilt: 1923,
    garage: 1,
    description:
      "Beautifully updated Craftsman bungalow in Oakland's coveted Adams Point neighborhood. Original built-ins and hardwood floors throughout, modern kitchen with quartz counters and stainless steel appliances. Private backyard with mature landscaping and a detached studio perfect for a home office.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    ],
    type: "Craftsman",
    status: "Active",
    featured: true,
    listDate: "2026-05-01",
    agent,
    features: [
      "Hardwood Floors",
      "Quartz Counters",
      "Detached Studio",
      "Private Backyard",
      "Original Built-ins",
      "Updated Bath",
      "Stainless Appliances",
      "Walk Score 90",
    ],
    location: { lat: 37.8108, lng: -122.2606 },
  },
  {
    id: "prop-002",
    title: "Modern Downtown Condo",
    address: "200 20th Street #305",
    city: "Oakland",
    state: "CA",
    zip: "94612",
    price: 525000,
    beds: 2,
    baths: 1,
    sqft: 950,
    lotSize: "N/A",
    yearBuilt: 2019,
    garage: 1,
    description:
      "Sleek modern condo in the heart of Oakland's thriving Uptown district. Open floor plan with floor-to-ceiling windows, chef's kitchen with island, and in-unit laundry. Building amenities include rooftop deck, fitness center, and co-working lounge. Steps from 19th Street BART and the best dining in the East Bay.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    type: "Condo",
    status: "Active",
    featured: true,
    listDate: "2026-05-10",
    agent,
    features: [
      "Rooftop Deck",
      "Fitness Center",
      "In-unit Laundry",
      "Hardwood Floors",
      "BART Nearby",
      "Co-working Lounge",
      "Stainless Appliances",
      "Walk Score 95",
    ],
    location: { lat: 37.8101, lng: -122.2679 },
  },
  {
    id: "prop-003",
    title: "Charming Berkeley Tudor",
    address: "1842 Sonoma Avenue",
    city: "Berkeley",
    state: "CA",
    zip: "94707",
    price: 1195000,
    beds: 3,
    baths: 2,
    sqft: 1850,
    lotSize: "0.14 acres",
    yearBuilt: 1932,
    garage: 1,
    description:
      "Enchanting Tudor-style home in Berkeley's tranquil Thousand Oaks neighborhood. Features include a cozy living room with wood-burning fireplace, formal dining room, updated eat-in kitchen, and a primary suite with walk-in closet. Beautifully landscaped yard with rose garden and patio. Top-rated schools nearby.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7c3a0b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c3c?w=1200&q=80",
    ],
    type: "House",
    status: "Active",
    featured: true,
    listDate: "2026-04-28",
    agent,
    features: [
      "Hardwood Floors",
      "Wood Fireplace",
      "Rose Garden",
      "Updated Kitchen",
      "Walk-in Closet",
      "Top Schools",
      "Patio",
      "Detached Garage",
    ],
    location: { lat: 37.9033, lng: -122.2797 },
  },
  {
    id: "prop-004",
    title: "Walnut Creek Townhome",
    address: "3203 Mt Diablo Boulevard #A",
    city: "Walnut Creek",
    state: "CA",
    zip: "94598",
    price: 675000,
    beds: 3,
    baths: 2.5,
    sqft: 1420,
    lotSize: "N/A",
    yearBuilt: 2016,
    garage: 2,
    description:
      "End-unit townhome in a quiet Walnut Creek complex with mountain views. Open layout with high ceilings, luxury vinyl plank flooring, and a modern kitchen with granite countertops. Primary suite features a walk-in closet and en-suite bath. Close to downtown dining, shopping, and the Iron Horse Trail.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18b8b7b10?w=1200&q=80",
    ],
    type: "Townhouse",
    status: "Active",
    featured: true,
    listDate: "2026-05-05",
    agent,
    features: [
      "End Unit",
      "Mountain Views",
      "Attached Garage",
      "Granite Counters",
      "High Ceilings",
      "Walk-in Closet",
      "Community Pool",
      "Near Downtown",
    ],
    location: { lat: 37.9101, lng: -122.0652 },
  },
  {
    id: "prop-005",
    title: "Dublin New Build Townhome",
    address: "4568 Fallon Road",
    city: "Dublin",
    state: "CA",
    zip: "94568",
    price: 785000,
    beds: 3,
    baths: 3,
    sqft: 1650,
    lotSize: "0.08 acres",
    yearBuilt: 2024,
    garage: 2,
    description:
      "Brand-new townhome in Dublin's vibrant Positano community. Open concept main level with gourmet kitchen, great room, and powder room. Upstairs features three bedrooms including a primary suite with dual vanity and walk-in closet. Solar panels, smart home features, and a two-car garage. Near BART and great schools.",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c3c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
    type: "Townhouse",
    status: "Active",
    featured: true,
    listDate: "2026-05-12",
    agent,
    features: [
      "Solar Panels",
      "Smart Home",
      "Dual Vanity",
      "Gourmet Kitchen",
      "Walk-in Closet",
      "2-Car Garage",
      "Near BART",
      "Energy Efficient",
    ],
    location: { lat: 37.7021, lng: -121.9358 },
  },
  {
    id: "prop-006",
    title: "Pleasanton Family Home",
    address: "7242 Bernal Avenue",
    city: "Pleasanton",
    state: "CA",
    zip: "94566",
    price: 1349000,
    beds: 4,
    baths: 3,
    sqft: 2450,
    lotSize: "0.22 acres",
    yearBuilt: 2002,
    garage: 3,
    description:
      "Well-maintained family home in Pleasanton's desirable Val Vista neighborhood. Open floor plan with a remodeled kitchen featuring quartz island, farmhouse sink, and walk-in pantry. Large backyard with covered patio, built-in BBQ, and mature trees. Top-rated Pleasanton schools and easy commute access.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    type: "House",
    status: "Active",
    featured: false,
    listDate: "2026-04-20",
    agent,
    features: [
      "Remodeled Kitchen",
      "Covered Patio",
      "Built-in BBQ",
      "Walk-in Pantry",
      "3-Car Garage",
      "Top Schools",
      "Mature Trees",
      "Farmhouse Sink",
    ],
    location: { lat: 37.6624, lng: -121.8747 },
  },
  {
    id: "prop-007",
    title: "Fremont Starter Condo",
    address: "3980 Mowry Avenue #206",
    city: "Fremont",
    state: "CA",
    zip: "94538",
    price: 449000,
    beds: 1,
    baths: 1,
    sqft: 680,
    lotSize: "N/A",
    yearBuilt: 2008,
    garage: 1,
    description:
      "Affordable first-time buyer condo in central Fremont. Bright open layout with updated laminate flooring, newer paint, and a remodeled bathroom. Kitchen features granite counters and stainless appliances. In-unit washer/dryer, assigned parking, and low HOA dues. Walking distance to Fremont BART and Central Park.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80",
    ],
    type: "Condo",
    status: "Active",
    featured: false,
    listDate: "2026-05-08",
    agent,
    features: [
      "Updated Bath",
      "Granite Counters",
      "In-unit Laundry",
      "Near BART",
      "Assigned Parking",
      "Low HOA",
      "Laminate Floors",
      "Central Park Nearby",
    ],
    location: { lat: 37.5485, lng: -121.9886 },
  },
  {
    id: "prop-008",
    title: "San Leandro Mid-Century Ranch",
    address: "15560 Washington Avenue",
    city: "San Leandro",
    state: "CA",
    zip: "94578",
    price: 729000,
    beds: 3,
    baths: 2,
    sqft: 1380,
    lotSize: "0.18 acres",
    yearBuilt: 1956,
    garage: 2,
    description:
      "Classic mid-century ranch with incredible potential in San Leandro's Broadmoor neighborhood. Original hardwood floors, large picture windows, and a spacious backyard ready for your personal touch. Updated roof and HVAC. Close to Bayfair Center, BART, and major commuter routes.",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18b8b7b10?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    type: "House",
    status: "Active",
    featured: false,
    listDate: "2026-05-03",
    agent,
    features: [
      "Hardwood Floors",
      "Large Yard",
      "Updated Roof",
      "New HVAC",
      "Picture Windows",
      "Near BART",
      "Detached Garage",
      "Good Bones",
    ],
    location: { lat: 37.7224, lng: -122.1465 },
  },
  {
    id: "prop-009",
    title: "Hayward Bungalow",
    address: "26845 Mission Boulevard",
    city: "Hayward",
    state: "CA",
    zip: "94544",
    price: 598000,
    beds: 2,
    baths: 1,
    sqft: 1015,
    lotSize: "0.14 acres",
    yearBuilt: 1947,
    garage: 1,
    description:
      "Adorable bungalow in the heart of Hayward. Freshly painted with new flooring throughout. Updated kitchen with butcher block counters and farmhouse sink. Large backyard with fruit trees and a covered porch. Minutes to Cal State East Bay, Hayward BART, and the new downtown dining scene.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7c3a0b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c3c?w=1200&q=80",
    ],
    type: "Bungalow",
    status: "Active",
    featured: false,
    listDate: "2026-05-06",
    agent,
    features: [
      "New Flooring",
      "Fruit Trees",
      "Covered Porch",
      "Updated Kitchen",
      "Butcher Block",
      "Near BART",
      "Near University",
      "Big Backyard",
    ],
    location: { lat: 37.6688, lng: -122.0808 },
  },
  {
    id: "prop-010",
    title: "Richmond Hilltop Condo",
    address: "5200 Hilltop Drive #412",
    city: "Richmond",
    state: "CA",
    zip: "94803",
    price: 415000,
    beds: 2,
    baths: 1,
    sqft: 840,
    lotSize: "N/A",
    yearBuilt: 2005,
    garage: 1,
    description:
      "Top-floor condo in Richmond's Hilltop area with panoramic Bay views. Open living and dining area with vaulted ceilings and a cozy fireplace. Kitchen features updated counters and tile backsplash. Resort-style amenities include pool, spa, and clubhouse. Minutes to Hilltop Mall and I-80.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    ],
    type: "Condo",
    status: "Active",
    featured: false,
    listDate: "2026-04-25",
    agent,
    features: [
      "Bay Views",
      "Top Floor",
      "Vaulted Ceilings",
      "Fireplace",
      "Pool & Spa",
      "Clubhouse",
      "Updated Kitchen",
      "Assigned Parking",
    ],
    location: { lat: 37.9862, lng: -122.3194 },
  },
  {
    id: "prop-011",
    title: "Concord Family Townhome",
    address: "1845 Willow Pass Road #24",
    city: "Concord",
    state: "CA",
    zip: "94520",
    price: 549000,
    beds: 3,
    baths: 2.5,
    sqft: 1320,
    lotSize: "N/A",
    yearBuilt: 2013,
    garage: 2,
    description:
      "Spacious townhome in a gated Concord community. Open layout with laminate flooring downstairs, upgraded carpet upstairs. Kitchen features granite counters, island, and stainless appliances. Primary suite with dual closets and en-suite bath. Low-maintenance yard with patio. Near BART and Todos Santos Plaza.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18b8b7b10?w=1200&q=80",
    ],
    type: "Townhouse",
    status: "Active",
    featured: false,
    listDate: "2026-05-02",
    agent,
    features: [
      "Gated Community",
      "Granite Counters",
      "Dual Closets",
      "Patio",
      "2-Car Garage",
      "Near BART",
      "Community Pool",
      "Low Maintenance",
    ],
    location: { lat: 37.9735, lng: -122.0291 },
  },
  {
    id: "prop-012",
    title: "Oakland Victorian Triplex",
    address: "2348 Lakeshore Avenue",
    city: "Oakland",
    state: "CA",
    zip: "94606",
    price: 1395000,
    beds: 5,
    baths: 3,
    sqft: 3200,
    lotSize: "0.1 acres",
    yearBuilt: 1908,
    garage: 2,
    description:
      "Grand Victorian triplex in Oakland's coveted Lakeshore district. Three units — a spacious 3-bed owner's unit plus two income-producing 1-bed flats. Original architectural details including crown molding, stained glass windows, and ornate fireplaces. Updated systems and separate utilities. Walking distance to Lake Merritt.",
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    type: "Victorian",
    status: "Active",
    featured: false,
    listDate: "2026-04-15",
    agent,
    features: [
      "Income Property",
      "Stained Glass",
      "Crown Molding",
      "Lake Merritt Nearby",
      "Separate Utilities",
      "Updated Systems",
      "Ornate Fireplaces",
      "3 Units",
    ],
    location: { lat: 37.8018, lng: -122.2553 },
  },
]

export const propertyTypes = [
  { value: "all", label: "All Types", icon: Home },
  { value: "House", label: "Houses", icon: Building2 },
  { value: "Condo", label: "Condos", icon: Building },
  { value: "Townhouse", label: "Townhomes", icon: Warehouse },
  { value: "Craftsman", label: "Craftsman", icon: Building2 },
  { value: "Victorian", label: "Victorian", icon: Building2 },
  { value: "Bungalow", label: "Bungalows", icon: Building2 },
] as const

export const eastBayCities = [
  "All Cities",
  "Oakland",
  "Berkeley",
  "Walnut Creek",
  "Dublin",
  "Pleasanton",
  "Fremont",
  "San Leandro",
  "Hayward",
  "Richmond",
  "Concord",
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured)
}

export function getPropertiesByCity(city: string): Property[] {
  if (!city || city === "All Cities") return properties
  return properties.filter((p) => p.city === city)
}

export function getMarketStats() {
  return {
    totalListings: properties.length,
    averagePrice: Math.round(
      properties.reduce((sum, p) => sum + p.price, 0) / properties.length
    ),
    medianPrice: 735000,
    avgDaysOnMarket: 18,
    pricePerSqft: 485,
    inventory: properties.filter((p) => p.status === "Active").length,
  }
}

export function estimatePropertyValue(specs: {
  city: string
  propertyType: string
  beds: string
  baths: string
  sqft: string
}): { low: number; high: number; formatted: string } {
  const baseByCity: Record<string, number> = {
    Oakland: 550,
    Berkeley: 650,
    "Walnut Creek": 500,
    Dublin: 480,
    Pleasanton: 550,
    Fremont: 520,
    "San Leandro": 460,
    Hayward: 420,
    Richmond: 380,
    Concord: 400,
  }
  const sqftNum = parseInt(specs.sqft) || 1200
  const base = baseByCity[specs.city] || 450
  const estimate = base * sqftNum
  const margin = Math.round(estimate * 0.12)
  const low = estimate - margin
  const high = estimate + margin
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
  return {
    low,
    high,
    formatted: `${formatter.format(low)} – ${formatter.format(high)}`,
  }
}
