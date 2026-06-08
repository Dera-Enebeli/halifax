"use client"

import { Search, SlidersHorizontal } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchFilterBar() {
  const router = useRouter()
  const [showFilters, setShowFilters] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [type, setType] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (keyword) params.set("location", keyword)
    if (type) params.set("type", type)
    if (location && !keyword) params.set("location", location)
    router.push(`/listings?${params.toString()}`)
  }

  return (
    <div className="relative z-20 mb-12 sm:-mt-10">
      <div className="max-w-page section-padding">
        <div className="text-center pt-4 sm:pt-0 mb-4 sm:mb-6">
          <p className="text-[11px] sm:text-xs font-medium tracking-[2px] uppercase text-olive">
            Search East Bay Properties
          </p>
        </div>

        {/* Mobile version (<sm) */}
        <div className="block sm:hidden">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-warm-border p-4">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="City, neighborhood, or address"
                  className="w-full h-12 pl-12 pr-4 text-[16px] text-near-black placeholder:text-gray-400 outline-none bg-white rounded-xl border border-warm-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleSearch}
                  className="flex-1 flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white text-[15px] font-bold px-4 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-terracotta/15 touch-target"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center gap-2 border border-warm-border text-near-black text-[15px] font-semibold px-4 py-3 rounded-xl transition-all duration-200 hover:bg-gray-50 touch-target"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  {showFilters ? "Hide" : "Filters"}
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t border-warm-border grid grid-cols-2 gap-3">
                <div className="relative">
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full h-11 px-4 pr-9 text-[15px] text-near-black outline-none bg-white rounded-xl border border-warm-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundPosition: "right 12px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "18px",
                    }}
                  >
                    <option value="">Property Type</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Bungalow">Bungalow</option>
                  </select>
                </div>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full h-11 px-4 pr-9 text-[15px] text-near-black outline-none bg-white rounded-xl border border-warm-border focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundPosition: "right 12px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "18px",
                    }}
                  >
                    <option value="">Location</option>
                    <option value="Oakland">Oakland</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="Walnut Creek">Walnut Creek</option>
                    <option value="Dublin">Dublin</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop version (sm+) */}
        <div className="hidden sm:block">
          <div className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-warm-border px-5 py-3 flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[130px]">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="City, neighborhood, or address"
                className="w-full h-10 px-3 text-sm text-near-black placeholder:text-gray-400 outline-none bg-transparent"
              />
            </div>
            <div className="w-px h-7 bg-warm-border" />
            <div className="flex-1 min-w-[120px]">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundPosition: "right 4px center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "16px",
                }}
              >
                <option value="">Property Type</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </div>
            <div className="w-px h-7 bg-warm-border hidden md:block" />
            <div className="flex-1 min-w-[120px]">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundPosition: "right 4px center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "16px",
                }}
              >
                <option value="">Location</option>
                <option value="Oakland">Oakland</option>
                <option value="Berkeley">Berkeley</option>
                <option value="Walnut Creek">Walnut Creek</option>
                <option value="Dublin">Dublin</option>
              </select>
            </div>
            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 cursor-pointer shrink-0"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
