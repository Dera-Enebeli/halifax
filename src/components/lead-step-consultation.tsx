"use client"

import Image from "next/image"
import { useFunnel } from "@/lib/funnel-store"
import { agent } from "@/lib/mock-data"
import { openWhatsApp } from "@/lib/whatsapp"

export default function LeadStepConsultation() {
  const { state, dispatch } = useFunnel()

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-crimson" />

            <div className="p-6 sm:p-8">

              <div className="text-center mb-5">
                <p className="font-serif italic text-[22px] text-near-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax <span className="text-olive text-[11px] tracking-[2px] uppercase font-semibold not-italic">· East Bay Real Estate</span>
                </p>
                <p className="text-[17px] text-gray-500 mt-1.5 font-normal leading-snug">
                  Thanks, {state.name?.split(" ")[0]}!
                </p>
              </div>

              <div className="space-y-5">

                {state.interest === "buyer" && (
                  <div className="bg-white p-8 shadow-inner text-center">
                    <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      Let&apos;s Find Your Next Home
                    </p>
                    <p className="text-[17px] text-gray-500 leading-relaxed">
                      I&apos;ll reach out to learn more about what you&apos;re looking for and help you find the perfect property in the East Bay.
                    </p>
                  </div>
                )}

                {state.interest === "seller" && (
                  <div className="bg-white p-8 shadow-inner text-center">
                    <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      Let&apos;s Sell Your Home
                    </p>
                    <p className="text-[17px] text-gray-500 leading-relaxed">
                      I&apos;ll help you prepare a market analysis, set the right price, and market your property to the right buyers.
                    </p>
                  </div>
                )}

                {state.interest === "homeowner" && (
                  <div className="bg-white p-8 shadow-inner text-center">
                    <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-2">
                      Let&apos;s Discuss Your Home&apos;s Value
                    </p>
                    <p className="text-[17px] text-gray-500 leading-relaxed">
                      I&apos;ll prepare a full market analysis and walk you through what your property is worth in today&apos;s market.
                    </p>
                  </div>
                )}

                <div className="bg-white p-8 shadow-inner">
                  <p className="text-[17px] font-bold text-olive-dark uppercase tracking-wider mb-3">
                    Speak with your agent
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 relative flex items-center justify-center">
                      <Image src="/logo.png" alt="Halifax" width={64} height={64} className="object-contain" />
                    </div>
                    <div>
                      <p className="text-[20px] font-bold text-near-black">
                        {agent.name}
                      </p>
                      <p className="text-[15px] text-gray-400 font-medium">
                        {agent.type} &middot; {agent.experience}
                      </p>
                      <p className="text-[17px] text-gray-500 font-normal">
                        {agent.phone}
                      </p>
                      <p className="text-[17px] text-crimson font-medium">
                        {agent.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      const data: Record<string, string> = {
                        Name: state.name,
                        Email: state.email,
                        Phone: state.phone,
                      }
                      if (state.bestTimeToCall) data["Best Time to Call"] = state.bestTimeToCall
                      if (state.areaOfInterest) data["Area of Interest"] = state.areaOfInterest
                      if (state.message) data["Message"] = state.message
                      data["Schedule"] = state.interest === "buyer" ? "Home Buying Consultation" : state.interest === "seller" ? "Listing Consultation" : "Full Valuation"
                      openWhatsApp(data)
                    }}
                    className="w-full h-14 bg-crimson text-white text-[19px] font-bold tracking-wide hover:bg-crimson-dark transition-all duration-300 cursor-pointer"
                  >
                    Get in Touch
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch({ type: "RESET" })}
                    className="w-full h-14 bg-white border-2 border-near-black/20 text-near-black text-[19px] font-bold hover:border-crimson hover:text-crimson transition-all duration-300 cursor-pointer"
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
