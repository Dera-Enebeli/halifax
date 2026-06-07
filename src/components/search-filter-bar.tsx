import { Search } from "lucide-react"

export default function SearchFilterBar() {
  return (
    <div className="relative z-20 -mt-10 mb-12">
      <div className="max-w-page section-padding">
        <div className="text-center mb-6">
          <p className="text-xs font-medium tracking-[2px] uppercase text-olive">
            Search East Bay Properties
          </p>
        </div>
        <div className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-warm-border px-5 py-3 flex flex-wrap items-center gap-3">
          <div className="flex-1 min-w-[130px]">
            <input
              type="text"
              placeholder="Enter keywords"
              className="w-full h-10 px-3 text-sm text-near-black placeholder:text-gray-400 outline-none bg-transparent"
            />
          </div>
          <div className="hidden sm:block w-px h-7 bg-warm-border" />
          <div className="flex-1 min-w-[110px]">
            <select
              className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundPosition: "right 4px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "16px",
              }}
            >
              <option>Sell or Rent</option>
              <option>Sell</option>
              <option>Rent</option>
            </select>
          </div>
          <div className="hidden sm:block w-px h-7 bg-warm-border" />
          <div className="flex-1 min-w-[120px]">
            <select
              className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundPosition: "right 4px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "16px",
              }}
            >
              <option>Property Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
              <option>Bungalow</option>
            </select>
          </div>
          <div className="hidden md:block w-px h-7 bg-warm-border" />
          <div className="flex-1 min-w-[120px]">
            <select
              className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundPosition: "right 4px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "16px",
              }}
            >
              <option>Location</option>
              <option>Oakland</option>
              <option>Berkeley</option>
              <option>Walnut Creek</option>
              <option>Dublin</option>
            </select>
          </div>
          <div className="hidden lg:block w-px h-7 bg-warm-border" />
          <div className="flex-1 min-w-[120px]">
            <select
              className="w-full h-10 px-3 text-sm text-near-black outline-none bg-transparent appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundPosition: "right 4px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "16px",
              }}
            >
              <option>Amenities</option>
              <option>Pool</option>
              <option>Garage</option>
              <option>Garden</option>
              <option>Fireplace</option>
            </select>
          </div>
          <button className="flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 cursor-pointer shrink-0">
            <Search className="h-4 w-4" />
            Search
          </button>
        </div>
      </div>
    </div>
  )
}
