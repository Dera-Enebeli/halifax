"use client"

import { useFunnel } from "@/lib/funnel-store"
import { estimatePropertyValue, agent } from "@/lib/mock-data"
import { openWhatsApp } from "@/lib/whatsapp"

export default function LeadStepConsultation() {
  const { state, dispatch } = useFunnel()

  const showEstimate = state.interest === "homeowner" || state.interest === "seller"

  const estimate = showEstimate
    ? estimatePropertyValue({
        city: state.city || "Oakland",
        propertyType: state.propertyType || "House",
        beds: state.bedrooms ? String(state.bedrooms) : "3",
        baths: state.baths ? String(state.baths) : "2",
        sqft: state.sqft || "1500",
      })
    : null

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-terracotta" />

            <div className="p-6 sm:p-8">

              <div className="text-center mb-5">
                <p className="font-serif italic text-[22px] text-near-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax <span className="text-olive text-[11px] tracking-[2px] uppercase font-semibold not-italic">· East Bay Listings</span>
                </p>
                <p className="text-[17px] text-gray-500 mt-1.5 font-normal leading-snug">
                  Here are your results, {state.name?.split(" ")[0]}
                </p>
              </div>

              <div className="space-y-5">

                {estimate && (
                  <div className="bg-white p-8 shadow-inner">
                    <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      {state.interest === "seller" ? "Estimated Listing Range" : "Estimated Value"}
                    </p>
                    <p className="font-serif text-[clamp(32px,4.5vw,46px)] text-near-black font-bold leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                      {estimate.formatted}
                    </p>
                    <p className="text-[17px] text-gray-500 mt-3 font-normal italic">
                      Based on recent comparable sales in {state.city || "the East Bay"}
                    </p>
                    <p className="text-[15px] text-gray-400 mt-2 font-normal">
                      {state.interest === "seller"
                        ? "This is a preliminary listing estimate. A full market analysis will be prepared during your consultation."
                        : "This is a preliminary estimate. Actual market value may vary."}
                    </p>
                  </div>
                )}

                {state.interest === "seller" && (
                  <div className="bg-white p-8 shadow-inner">
                    <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                      Listing Preparation
                    </p>
                    <ul className="text-[17px] text-gray-600 space-y-3">
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

                <div className="bg-white p-8 shadow-inner">
                  <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                    Speak with your agent
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center font-serif text-[24px] font-bold bg-terracotta text-white" style={{ fontFamily: "var(--font-serif)" }}>
                      GE
                    </div>
                    <div>
                      <p className="text-[20px] font-bold text-near-black">
                        {agent.name}
                      </p>
                      <p className="text-[17px] text-gray-500 font-normal">
                        {agent.phone}
                      </p>
                      <p className="text-[17px] text-terracotta font-medium">
                        {agent.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  {state.interest === "seller" && (
                    <button
                      type="button"
                      onClick={() => openWhatsApp({
                        "Schedule": "Listing Consultation",
                        Name: state.name,
                        Email: state.email,
                        City: state.city,
                        Address: state.address,
                        "Property Type": state.propertyType || "House",
                        "Sq Footage": state.sqft || "Unknown",
                        Beds: state.bedrooms ? String(state.bedrooms) : "Unknown",
                        Baths: state.baths ? String(state.baths) : "Unknown",
                      })}
                      className="w-full h-14 bg-terracotta text-white text-[19px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300 cursor-pointer"
                    >
                      Schedule a Listing Consultation
                    </button>
                  )}

                  {state.interest === "homeowner" && (
                    <button
                      type="button"
                      onClick={() => openWhatsApp({
                        "Schedule": "Full Valuation",
                        Name: state.name,
                        Email: state.email,
                        City: state.city,
                        Address: state.address,
                        "Property Type": state.propertyType || "House",
                        "Sq Footage": state.sqft || "Unknown",
                        Beds: state.bedrooms ? String(state.bedrooms) : "Unknown",
                        Baths: state.baths ? String(state.baths) : "Unknown",
                      })}
                      className="w-full h-14 bg-terracotta text-white text-[19px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300 cursor-pointer"
                    >
                      Schedule a Full Valuation
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => dispatch({ type: "RESET" })}
                    className="w-full h-14 bg-white border-2 border-near-black/20 text-near-black text-[19px] font-bold hover:border-terracotta hover:text-terracotta transition-all duration-300 cursor-pointer"
                  >
                    Start Over
                  </button>
                </div>

                <p className="text-[14px] text-gray-400 text-center leading-relaxed font-normal pt-1">
                  By submitting, you agree to be contacted by {agent.name} regarding
                  your real estate inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
