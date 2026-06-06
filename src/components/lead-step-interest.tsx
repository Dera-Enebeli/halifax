"use client"

import { useFunnel } from "@/lib/funnel-store"

export default function LeadStepInterest() {
  const { dispatch } = useFunnel()

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div
        className="absolute right-0 top-0 w-[55%] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1400&q=80')",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#3D2415] via-[#3D2415]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-start section-padding">
        <div className="w-full max-w-lg py-16">

          <div className="border border-terracotta/40 px-8 py-5 bg-near-black/90 inline-block mb-10">
            <h1
              className="font-serif text-terracotta leading-[1.1] tracking-wide"
              style={{ fontSize: "clamp(36px, 4vw, 50px)", fontFamily: "var(--font-serif)" }}
            >
              Halifacts
            </h1>
            <p className="font-serif text-cream/60 text-[clamp(12px,1.2vw,16px)] tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily: "var(--font-serif)" }}>
              Property and Investment
            </p>
          </div>

          <p className="text-cream/80 text-[17px] font-normal mb-2 max-w-md leading-relaxed">
            Welcome to Halifacts. Your trusted East Bay real estate partner.
          </p>
          <p className="text-cream/50 text-[14px] font-normal mb-8 max-w-md leading-relaxed">
            Whether you&apos;re curious about your home&apos;s value or ready to make a move, we&apos;re here to guide you.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => dispatch({ type: "SET_INTEREST", payload: "homeowner" })}
              className="group w-full text-left bg-cream p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1.5 self-stretch bg-terracotta" />
                <div>
                  <h3 className="font-serif text-[20px] text-near-black leading-tight group-hover:text-terracotta transition-colors duration-300" style={{ fontFamily: "var(--font-serif)" }}>
                    I&apos;m a Homeowner
                  </h3>
                  <p className="text-[14px] text-gray-500 font-normal mt-1.5 leading-relaxed">
                    Interested in the value of your property and investment
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => dispatch({ type: "SET_INTEREST", payload: "buy-sell" })}
              className="group w-full text-left bg-cream p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-1.5 self-stretch bg-olive" />
                <div>
                  <h3 className="font-serif text-[20px] text-near-black leading-tight group-hover:text-olive-dark transition-colors duration-300" style={{ fontFamily: "var(--font-serif)" }}>
                    I&apos;m Looking to Buy or Sell
                  </h3>
                  <p className="text-[14px] text-gray-500 font-normal mt-1.5 leading-relaxed">
                    Ready to find your next home or list your property
                  </p>
                </div>
              </div>
            </button>
          </div>

          <p className="text-cream/35 text-[12px] mt-8 font-normal">
            East Bay &middot; California
          </p>
        </div>
      </div>

    </div>
  )
}
