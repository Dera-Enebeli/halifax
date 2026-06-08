"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Search, MapPin, X, LayoutGrid, List, SlidersHorizontal, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"
import PropertyCard from "@/components/property-card"
import { properties, propertyTypes } from "@/lib/mock-data"

const priceRanges = [
  { value: "", label: "Any Price" },
  { value: "0-450000", label: "Under $450K" },
  { value: "450000-600000", label: "$450K - $600K" },
  { value: "600000-800000", label: "$600K - $800K" },
  { value: "800000-1000000", label: "$800K - $1M" },
  { value: "1000000-1300000", label: "$1M - $1.3M" },
  { value: "1300000-99999999", label: "$1.3M+" },
]

const bedsOptions = [
  { value: "", label: "Any Beds" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
  { value: "5", label: "5+" },
]

const bathsOptions = [
  { value: "", label: "Any Baths" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
]

const sqftOptions = [
  { value: "", label: "Any Sq Ft" },
  { value: "500", label: "500+ sqft" },
  { value: "1000", label: "1,000+ sqft" },
  { value: "1500", label: "1,500+ sqft" },
  { value: "2000", label: "2,000+ sqft" },
  { value: "2500", label: "2,500+ sqft" },
  { value: "3000", label: "3,000+ sqft" },
  { value: "4000", label: "4,000+ sqft" },
  { value: "5000", label: "5,000+ sqft" },
]

const garageOptions = [
  { value: "", label: "Any Garage" },
  { value: "1", label: "1+" },
  { value: "2", label: "2+" },
  { value: "3", label: "3+" },
  { value: "4", label: "4+" },
]

const yearBuiltOptions = [
  { value: "", label: "Any Year" },
  { value: "2025", label: "2025+" },
  { value: "2020", label: "2020+" },
  { value: "2010", label: "2010+" },
  { value: "2000", label: "2000+" },
  { value: "1990", label: "1990+" },
  { value: "1980", label: "1980+" },
  { value: "1950", label: "1950+" },
  { value: "1900", label: "1900+" },
]

const statusOptions = [
  { value: "", label: "Any Status" },
  { value: "Active", label: "Active" },
  { value: "Pending", label: "Pending" },
  { value: "Sold", label: "Sold" },
]

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "beds", label: "Most Bedrooms" },
  { value: "baths", label: "Most Bathrooms" },
  { value: "sqft", label: "Largest First" },
  { value: "garage", label: "Most Garage Spaces" },
  { value: "yearBuilt", label: "Newest Build" },
]

export default function ListingsContent() {
  const searchParams = useSearchParams()
  const fromFunnel = searchParams.get("fromFunnel") === "true"
  const initialLocation = searchParams.get("location") || ""
  const initialType = searchParams.get("type") || ""
  const initialMinPrice = searchParams.get("minPrice") || ""
  const initialMaxPrice = searchParams.get("maxPrice") || ""
  const initialBeds = searchParams.get("beds") || ""
  const initialBaths = searchParams.get("baths") || ""
  const initialSqft = searchParams.get("sqft") || ""
  const initialGarage = searchParams.get("garage") || ""
  const initialYearBuilt = searchParams.get("yearBuilt") || ""
  const initialStatus = searchParams.get("status") || ""

  const initialPrice =
    initialMinPrice && initialMaxPrice
      ? `${initialMinPrice}-${initialMaxPrice}`
      : initialMinPrice
        ? `${initialMinPrice}-99999999`
        : ""

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    location: initialLocation,
    type: initialType,
    price: initialPrice,
    beds: initialBeds,
    baths: initialBaths,
    sqft: initialSqft,
    garage: initialGarage,
    yearBuilt: initialYearBuilt,
    status: initialStatus,
    sort: "newest",
  })

  const [searchText, setSearchText] = useState(initialLocation)

  const filtered = useMemo(() => {
    let result = [...properties]

    if (filters.location) {
      result = result.filter(
        (p) =>
          p.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          p.address.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.type) {
      result = result.filter((p) => p.type === filters.type)
    }

    if (filters.price) {
      const [min, max] = filters.price.split("-").map(Number)
      result = result.filter((p) => p.price >= min && p.price <= max)
    }

    if (filters.beds) {
      const minBeds = parseInt(filters.beds)
      result = result.filter((p) => p.beds >= minBeds)
    }

    if (filters.baths) {
      const minBaths = parseInt(filters.baths)
      result = result.filter((p) => p.baths >= minBaths)
    }

    if (filters.sqft) {
      const minSqft = parseInt(filters.sqft)
      result = result.filter((p) => p.sqft >= minSqft)
    }

    if (filters.garage) {
      const minGarage = parseInt(filters.garage)
      result = result.filter((p) => p.garage >= minGarage)
    }

    if (filters.yearBuilt) {
      const minYear = parseInt(filters.yearBuilt)
      result = result.filter((p) => p.yearBuilt >= minYear)
    }

    if (filters.status) {
      result = result.filter((p) => p.status === filters.status)
    }

    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "beds":
        result.sort((a, b) => b.beds - a.beds)
        break
      case "sqft":
        result.sort((a, b) => b.sqft - a.sqft)
        break
      case "baths":
        result.sort((a, b) => b.baths - a.baths)
        break
      case "garage":
        result.sort((a, b) => b.garage - a.garage)
        break
      case "yearBuilt":
        result.sort((a, b) => b.yearBuilt - a.yearBuilt)
        break
      default:
        result.sort(
          (a, b) => new Date(b.listDate).getTime() - new Date(a.listDate).getTime()
        )
    }

    return result
  }, [filters])

  const clearFilters = () => {
    setFilters({
      location: "",
      type: "",
      price: "",
      beds: "",
      baths: "",
      sqft: "",
      garage: "",
      yearBuilt: "",
      status: "",
      sort: "newest",
    })
    setSearchText("")
  }

  const hasActiveFilters = Object.values(filters).some((v) => v !== "" && v !== "newest")

  return (
    <div>
      <div className="py-16" style={{ background: "rgba(45, 25, 15, 0.85)" }}>
        <div className="max-w-page section-padding">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors mb-4 lg:hidden"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          {fromFunnel && (
            <p className="text-terracotta text-xs tracking-widest uppercase font-medium mb-2">
              Matching Your Search Criteria
            </p>
          )}
          <h1 className="font-serif italic text-3xl md:text-4xl text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            East Bay Properties
          </h1>
          <p className="text-white/70 text-sm font-light">
            Browse all available East Bay listings
          </p>
        </div>
      </div>

      <div className="max-w-page section-padding py-8">
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-72 shrink-0">
            <div className="flex items-center justify-between lg:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 h-12 sm:h-10 text-[15px] sm:text-sm px-4"
              >
                <SlidersHorizontal className="h-5 w-5 sm:h-4 sm:w-4" />
                Filters
              </Button>
              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-[15px] sm:text-sm text-terracotta hover:underline">
                  Clear all
                </button>
              )}
            </div>

            <div className={`space-y-5 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 sm:h-4 sm:w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City or Address..."
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value)
                      setFilters((f) => ({ ...f, location: e.target.value }))
                    }}
                    className="w-full h-12 sm:h-10 pl-10 sm:pl-9 pr-4 sm:pr-3 rounded-xl sm:rounded border border-warm-border bg-white text-[17px] sm:text-sm text-near-black placeholder:text-gray-400 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 sm:focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Property Type
                </label>
                <Select
                  options={propertyTypes.map((t) => ({ value: t.value, label: t.label }))}
                  value={filters.type}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, type: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Price Range
                </label>
                <Select
                  options={priceRanges}
                  value={filters.price}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, price: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                    Bedrooms
                  </label>
                  <Select
                    options={bedsOptions}
                    value={filters.beds}
                    onChange={(e) =>
                      setFilters((f) => ({ ...f, beds: e.target.value }))
                    }
                    className="h-12 sm:h-10 text-[17px] sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                    Bathrooms
                  </label>
                  <Select
                    options={bathsOptions}
                    value={filters.baths}
                    onChange={(e) =>
                      setFilters((f) => ({ ...f, baths: e.target.value }))
                    }
                    className="h-12 sm:h-10 text-[17px] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Min Sq Ft
                </label>
                <Select
                  options={sqftOptions}
                  value={filters.sqft}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, sqft: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Min Garage
                </label>
                <Select
                  options={garageOptions}
                  value={filters.garage}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, garage: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Min Year Built
                </label>
                <Select
                  options={yearBuiltOptions}
                  value={filters.yearBuilt}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, yearBuilt: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-[14px] sm:text-xs font-medium text-gray-600 uppercase tracking-wider mb-2 sm:mb-1.5">
                  Status
                </label>
                <Select
                  options={statusOptions}
                  value={filters.status}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, status: e.target.value }))
                  }
                  className="h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="hidden lg:flex items-center gap-1 text-[14px] sm:text-sm text-terracotta hover:opacity-70 transition-opacity"
                >
                  <X className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
                  Clear all filters
                </button>
              )}
            </div>
          </div>

            <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Select
                  options={sortOptions}
                  value={filters.sort}
                  onChange={(e) =>
                    setFilters((f) => ({ ...f, sort: e.target.value }))
                  }
                  className="w-full sm:w-48 h-12 sm:h-10 text-[17px] sm:text-sm"
                />
              </div>
              <div className="flex items-center border border-warm-border rounded-xl sm:rounded overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 sm:p-2 transition-colors touch-target sm:min-h-0 sm:min-w-0 ${viewMode === "grid" ? "bg-terracotta text-white" : "text-gray-500 hover:bg-gray-50"}`}
                >
                  <LayoutGrid className="h-5 w-5 sm:h-4 sm:w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 sm:p-2 transition-colors touch-target sm:min-h-0 sm:min-w-0 ${viewMode === "list" ? "bg-terracotta text-white" : "text-gray-500 hover:bg-gray-50"}`}
                >
                  <List className="h-5 w-5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-300 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-serif text-lg text-near-black mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  No properties found
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Try adjusting your filters or search criteria.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
                    : "space-y-6"
                }
              >
                {filtered.map((property) => (
                  <PropertyCard key={property.id} property={property} variant={viewMode} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
