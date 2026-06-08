import { Home, Building2, Warehouse, Building } from "lucide-react"

export const agent = {
  name: "Geoffrey Enebeli",
  phone: "(510) 507-5088",
  email: "geoffrey@halifaxproperties.com",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
}

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
