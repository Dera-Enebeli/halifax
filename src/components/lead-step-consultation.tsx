"use client"

import { useFunnel } from "@/lib/funnel-store"
import { estimatePropertyValue, properties, agent } from "@/lib/mock-data"

export default function LeadStepConsultation() {
  const { state, dispatch } = useFunnel()

  const showEstimate = state.interest === "homeowner" || state.interest === "seller"
  const showMatchCount = state.interest === "buyer"

  const estimate = showEstimate
    ? estimatePropertyValue({
        city: state.city || "Oakland",
        propertyType: state.propertyType || "House",
        beds: state.bedrooms ? String(state.bedrooms) : "3",
        baths: state.baths ? String(state.baths) : "2",
        sqft: state.sqft || "1500",
      })
    : null

  const matchCount = showMatchCount
    ? properties.filter((p) => {
        if (state.city && p.city !== state.city) return false
        if (state.minPrice && p.price < state.minPrice) return false
        if (state.maxPrice && p.price > state.maxPrice) return false
        if (state.bedrooms && p.beds < state.bedrooms) return false
        return true
      }).length
    : null

  const listingsUrl = `/listings?city=${encodeURIComponent(state.city || "")}&minPrice=${state.minPrice || ""}&maxPrice=${state.maxPrice || ""}&bedrooms=${state.bedrooms || ""}`

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center section-padding py-16">
        <div className="w-full max-w-xl my-8">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-terracotta" />

            <div className="p-8 sm:p-10">

              <div className="text-center mb-3">
                <h1 className="font-serif text-[clamp(28px,3.5vw,38px)] text-near-black leading-[1.15] tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax
                </h1>
                <p className="font-serif text-[clamp(13px,1.3vw,17px)] text-olive-dark tracking-[0.15em] uppercase mt-0.5" style={{ fontFamily: "var(--font-serif)" }}>
                  Properties &amp; Investments
                </p>
              </div>

              <div className="text-center mb-7">
                <p className="text-[17px] sm:text-[18px] text-gray-600 font-normal max-w-md mx-auto leading-relaxed">
                  Here are your results, {state.name?.split(" ")[0]}
                </p>
              </div>

              <div className="space-y-5">

                {estimate && (
                  <div className="bg-white p-6 shadow-inner">
                    <p className="text-[16px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      {state.interest === "seller" ? "Estimated Listing Range" : "Estimated Value"}
                    </p>
                    <p className="font-serif text-[clamp(30px,4.5vw,42px)] text-near-black font-bold leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                      {estimate.formatted}
                    </p>
                    <p className="text-[16px] text-gray-500 mt-3 font-normal italic">
                      Based on recent comparable sales in {state.city || "the East Bay"}
                    </p>
                    <p className="text-[14px] text-gray-400 mt-2 font-normal">
                      {state.interest === "seller"
                        ? "This is a preliminary listing estimate. A full market analysis will be prepared during your consultation."
                        : "This is a preliminary estimate. Actual market value may vary."}
                    </p>
                  </div>
                )}

                {state.interest === "seller" && (
                  <div className="bg-white p-6 shadow-inner">
                    <p className="text-[16px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                      Listing Preparation
                    </p>
                    <ul className="text-[16px] text-gray-600 space-y-2">
                      <li className="flex items-start gap-2.5">
                        <span className="text-terracotta font-bold mt-0.5">&bull;</span>
                        Professional staging and photography
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-terracotta font-bold mt-0.5">&bull;</span>
                        Targeted MLS marketing strategy
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-terracotta font-bold mt-0.5">&bull;</span>
                        Open houses and private showings
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-terracotta font-bold mt-0.5">&bull;</span>
                        Negotiation and closing support
                      </li>
                    </ul>
                  </div>
                )}

                {matchCount !== null && (
                  <div className="bg-white p-6 shadow-inner text-center">
                    <p className="text-[16px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      Properties Matching Your Criteria
                    </p>
                    <p className="font-serif text-[clamp(42px,6vw,60px)] text-near-black font-bold leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                      {matchCount}
                    </p>
                    <p className="text-[17px] text-gray-500 mt-1 font-normal">
                      {matchCount === 1 ? "property found" : "properties found"} in the East Bay
                    </p>
                  </div>
                )}

                <div className="bg-white p-6 shadow-inner">
                  <p className="text-[16px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                    Speak with your agent
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center font-serif text-[24px] font-bold bg-terracotta text-white" style={{ fontFamily: "var(--font-serif)" }}>
                      AR
                    </div>
                    <div>
                      <p className="text-[19px] font-bold text-near-black">
                        {agent.name}
                      </p>
                      <p className="text-[16px] text-gray-500 font-normal">
                        {agent.phone}
                      </p>
                      <p className="text-[16px] text-terracotta font-medium">
                        {agent.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {state.interest === "buyer" && (
                    <a
                      href={listingsUrl}
                      className="block w-full h-14 leading-[56px] text-center bg-terracotta text-white text-[18px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300"
                    >
                      Browse Available Properties
                    </a>
                  )}

                  {state.interest === "seller" && (
                    <button
                      type="button"
                      className="w-full h-14 bg-terracotta text-white text-[18px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300 cursor-pointer"
                    >
                      Schedule a Listing Consultation
                    </button>
                  )}

                  {state.interest === "homeowner" && (
                    <button
                      type="button"
                      className="w-full h-14 bg-terracotta text-white text-[18px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300 cursor-pointer"
                    >
                      Schedule a Full Valuation
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => dispatch({ type: "RESET" })}
                    className="w-full h-14 bg-white border-2 border-near-black/20 text-near-black text-[18px] font-bold hover:border-terracotta hover:text-terracotta transition-all duration-300 cursor-pointer"
                  >
                    Start Over
                  </button>
                </div>

                <p className="text-[13px] text-gray-400 text-center leading-relaxed font-normal pt-1">
                  By submitting, you agree to be contacted by {agent.name} regarding
                  your real estate inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
