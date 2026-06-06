"use client"

import { useState } from "react"
import { useFunnel } from "@/lib/funnel-store"

export default function LeadStepContact() {
  const { state, dispatch } = useFunnel()
  const [name, setName] = useState(state.name)
  const [email, setEmail] = useState(state.email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    dispatch({ type: "SET_CONTACT", payload: { name: name.trim(), email: email.trim() } })
  }

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-center justify-center section-padding py-20">
        <div className="w-full max-w-lg">
          <div className="mb-5">
            <button
              type="button"
              onClick={() => dispatch({ type: "SET_STEP", payload: 1 })}
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
                Let&apos;s Get Started
              </h2>
              <p className="text-gray-500 text-[15px] font-normal">
                Just a couple of details to begin
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  What&apos;s your name?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta"
                />
              </div>

              <div>
                <label className="block text-[15px] font-bold text-near-black mb-1.5">
                  What&apos;s your email address?
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full h-12 px-4 bg-white text-near-black text-[15px] font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-terracotta text-white text-[15px] font-bold tracking-wide hover:bg-terracotta-dark transition-all duration-300"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
