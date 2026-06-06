"use client"

import { useFunnel } from "@/lib/funnel-store"
import { estimatePropertyValue, properties, agent } from "@/lib/mock-data"

export default function LeadStepConsultation() {
  const { state, dispatch } = useFunnel()

  const showEstimate = state.interest === "homeowner" || state.interest === "seller"
  const showMatchCount = state.interest === "buyer"

  const estimate = showEstimate
    ? estimatePropertyValue({
        city: state.specs.city || "Oakland",
        propertyType: state.specs.propertyType || "House",
        beds: state.specs.beds || "3",
        baths: state.specs.baths || "2",
        sqft: state.specs.sqft || "1500",
      })
    : null

  const matchCount = showMatchCount
    ? properties.filter((p) => {
        if (state.specs.city && p.city !== state.specs.city) return false
        if (state.specs.minPrice && p.price < state.specs.minPrice) return false
        if (state.specs.maxPrice && p.price > state.specs.maxPrice) return false
        if (state.specs.bedrooms && p.beds < state.specs.bedrooms) return false
        return true
      }).length
    : null

  const listingsUrl = `/listings?city=${encodeURIComponent(state.specs.city || "")}&minPrice=${state.specs.minPrice || ""}&maxPrice=${state.specs.maxPrice || ""}&bedrooms=${state.specs.bedrooms || ""}`

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center section-padding py-20">
        <div className="w-full max-w-lg">
          <div className="mb-5">
            <button
              type="button"
              onClick={() => dispatch({ type: "SET_STEP", payload: 3 })}
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
                Your Consultation
              </h2>
              <p className="text-gray-500 text-[15px] font-normal">
                Here is what we found for you, {state.name?.split(" ")[0]}
              </p>
            </div>

            <div className="space-y-5">

              {estimate && (
                <div className="bg-white p-5 shadow-inner">
                  <p className="text-[14px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                    {state.interest === "seller" ? "Estimated Listing Range" : "Estimated Value"}
                  </p>
                  <p className="font-serif text-[clamp(28px,4vw,36px)] text-near-black font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                    {estimate.formatted}
                  </p>
                  <p className="text-[14px] text-gray-500 mt-2 font-normal italic">
                    Based on recent comparable sales in {state.specs.city || "the East Bay"}
                  </p>
                  <p className="text-[12px] text-gray-400 mt-2 font-normal">
                    {state.interest === "seller"
                      ? "This is a preliminary listing estimate. A full market analysis will be prepared during your consultation."
                      : "This is a preliminary estimate. Actual market value may vary."}
                  </p>
                </div>
              )}

              {state.interest === "seller" && (
                <div className="bg-white p-5 shadow-inner">
                  <p className="text-[14px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                    Listing Preparation
                  </p>
                  <ul className="text-[14px] text-gray-600 space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">&bull;</span>
                      Professional staging and photography
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">&bull;</span>
                      Targeted MLS marketing strategy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">&bull;</span>
                      Open houses and private showings
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-terracotta mt-0.5">&bull;</span>
                      Negotiation and closing support
                    </li>
                  </ul>
                </div>
              )}

              {matchCount !== null && (
                <div className="bg-white p-5 shadow-inner text-center">
                  <p className="text-[14px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                    Properties Matching Your Criteria
                  </p>
                  <p className="font-serif text-[clamp(36px,5vw,48px)] text-near-black font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
                    {matchCount}
                  </p>
                  <p className="text-[15px] text-gray-500 mt-1 font-normal">
                    {matchCount === 1 ? "property found" : "properties found"}
                  </p>
                </div>
              )}

              <div className="bg-white p-5 shadow-inner">
                <p className="text-[14px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                  Speak with your agent
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center font-serif text-[22px] font-bold bg-terracotta text-white" style={{ fontFamily: "var(--font-serif)" }}>
                    AR
                  </div>
                  <div>
                    <p className="text-[17px] font-bold text-near-black">
                      {agent.name}
                    </p>
                    <p className="text-[14px] text-gray-500 font-normal">
                      {agent.phone}
                    </p>
                    <p className="text-[14px] text-terracotta font-medium">
                      {agent.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {state.interest === "buyer" && (
                  <a
                    href={listingsUrl}
                    className="block w-full h-12 leading-[48px] text-center bg-terracotta text-white text-[15px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300"
                  >
                    Browse Available Properties
                  </a>
                )}

                {state.interest === "seller" && (
                  <button
                    type="button"
                    className="w-full h-12 bg-terracotta text-white text-[15px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300"
                  >
                    Schedule a Listing Consultation
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: "RESET" })
                    dispatch({ type: "SET_STEP", payload: 1 })
                  }}
                  className="w-full h-12 border-2 border-near-black/20 text-near-black text-[15px] font-bold hover:border-terracotta hover:text-terracotta transition-all duration-300 bg-white"
                >
                  Start Over
                </button>
              </div>

              <p className="text-[12px] text-gray-400 text-center leading-relaxed font-normal">
                By submitting, you agree to be contacted by {agent.name} regarding
                your real estate inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
