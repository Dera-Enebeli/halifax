"use client"

import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities } from "@/lib/mock-data"

const chevronUrl = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e"

export default function LeadStepSpecs() {
  const { state, dispatch } = useFunnel()

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center section-padding py-20">
        <div className="w-full max-w-lg">
          <div className="mb-5">
            <button
              type="button"
              onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
              className="inline-flex items-center gap-1.5 text-cream/60 font-semibold text-[14px] hover:text-terracotta transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back
            </button>
          </div>

          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)] p-8 sm:p-10">
            <div className="h-1 w-12 bg-terracotta mb-6" />
            <div className="text-left mb-8">
              <h2 className="font-serif text-[clamp(28px,3.5vw,36px)] text-near-black leading-[1.2] mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                A Few More Details
              </h2>
              <p className="text-gray-500 text-[15px] font-normal">
                Help us find the best options for you
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  City
                </label>
                <select
                  value={state.specs.city}
                  onChange={(e) => dispatch({ type: "SET_SPECS", payload: { city: e.target.value } })}
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("${chevronUrl}")`, backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat", backgroundSize: "18px" }}
                >
                  <option value="">Select a city</option>
                  {eastBayCities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  Min Budget
                </label>
                <select
                  value={state.specs.minPrice || ""}
                  onChange={(e) => dispatch({ type: "SET_SPECS", payload: { minPrice: Number(e.target.value) || 0 } })}
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("${chevronUrl}")`, backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat", backgroundSize: "18px" }}
                >
                  <option value="">No minimum</option>
                  <option value="400000">$400,000</option>
                  <option value="600000">$600,000</option>
                  <option value="800000">$800,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1250000">$1,250,000</option>
                </select>
              </div>

              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  Max Budget
                </label>
                <select
                  value={state.specs.maxPrice || ""}
                  onChange={(e) => dispatch({ type: "SET_SPECS", payload: { maxPrice: Number(e.target.value) || 0 } })}
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("${chevronUrl}")`, backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat", backgroundSize: "18px" }}
                >
                  <option value="">No maximum</option>
                  <option value="600000">$600,000</option>
                  <option value="800000">$800,000</option>
                  <option value="1000000">$1,000,000</option>
                  <option value="1250000">$1,250,000</option>
                  <option value="1500000">$1,500,000</option>
                </select>
              </div>

              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  Bedrooms
                </label>
                <select
                  value={state.specs.bedrooms || ""}
                  onChange={(e) => dispatch({ type: "SET_SPECS", payload: { bedrooms: Number(e.target.value) || 0 } })}
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("${chevronUrl}")`, backgroundPosition: "right 12px center", backgroundRepeat: "no-repeat", backgroundSize: "18px" }}
                >
                  <option value="">Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => dispatch({ type: "SET_STEP", payload: 4 })}
                className="w-full h-12 bg-terracotta text-white text-[15px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300 mt-2"
              >
                Review My Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
