"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities, agent } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function FieldFAQ({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-gray-400 italic mt-1.5">
      {children}
    </p>
  )
}

export default function LeadForm() {
  const router = useRouter()
  const { state, dispatch } = useFunnel()

  const canSubmit = !!state.interest && !!state.name.trim() && !!state.email.trim() && !!state.phone.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    const interestLabels: Record<string, string> = {
      buyer: "Buying",
      seller: "Selling",
      homeowner: "Valuation",
    }
    const data: Record<string, string> = {
      Interest: interestLabels[state.interest ?? ""] || "Valuation",
      Name: state.name,
      Email: state.email,
      Phone: state.phone,
    }

    if (state.bestTimeToCall.trim()) data["Best Time to Call"] = state.bestTimeToCall
    if (state.areaOfInterest) data["Area of Interest"] = state.areaOfInterest
    if (state.message.trim()) data["Message"] = state.message

    dispatch({ type: "SUBMIT" })
  }

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-crimson" />

              <div className="p-6 sm:p-8">

              <button
                type="button"
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-sm font-medium text-crimson hover:text-crimson-dark transition-colors mb-5 cursor-pointer group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>

              <div className="bg-white rounded-lg border border-warm-border p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <div className="w-10 h-10 flex-shrink-0 relative flex items-center justify-center">
                  <Image src="/logo.png" alt="Halifax" width={40} height={40} className="object-contain" />
                </div>
                <div>
                  <p className="text-sm font-bold text-near-black">Geoffrey Enebly</p>
                  <p className="text-xs text-gray-500">{agent.type} &middot; {agent.experience} &middot; (510) 507-5088</p>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="font-serif italic text-[22px] sm:text-xl text-near-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax <span className="text-olive text-[10px] tracking-[2px] uppercase font-semibold not-italic">· East Bay Real Estate</span>
                </p>
                <p className="text-[16px] text-gray-500 mt-1">
                  Tell us a bit about yourself and we&apos;ll get in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {([
                      { value: "buyer" as const, label: "Buying", sub: "Find a home" },
                      { value: "seller" as const, label: "Selling", sub: "List my home" },
                      { value: "homeowner" as const, label: "Valuation", sub: "Home value" },
                    ]).map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => dispatch({ type: "SET_INTEREST", payload: option.value })}
                        className={`text-center py-3 sm:py-4 px-3 sm:px-2 rounded-lg transition-all duration-200 cursor-pointer border ${
                          state.interest === option.value
                            ? "bg-crimson text-white border-crimson"
                            : "bg-white text-near-black border-gray-300 hover:border-near-black/40"
                        }`}
                      >
                        <span className="block text-[16px] font-bold">{option.label}</span>
                        <span className={`block text-xs mt-0.5 ${state.interest === option.value ? "text-white/70" : "text-gray-400"}`}>
                          {option.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                  <FieldFAQ>Select the option that best fits your goal.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="focus:ring-crimson/20 focus:border-crimson"
                  />
                  <FieldFAQ>So we know how to address you.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="focus:ring-crimson/20 focus:border-crimson"
                  />
                  <FieldFAQ>So we can follow up with you.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={state.phone}
                    onChange={(e) => dispatch({ type: "SET_PHONE", payload: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                    className="focus:ring-crimson/20 focus:border-crimson"
                  />
                  <FieldFAQ>So we can reach you directly.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Best Time to Call
                  </label>
                  <Input
                    type="text"
                    value={state.bestTimeToCall}
                    onChange={(e) => dispatch({ type: "SET_BEST_TIME_TO_CALL", payload: e.target.value })}
                    placeholder="e.g. Morning, Afternoon, Evening, Anytime"
                    className="focus:ring-crimson/20 focus:border-crimson"
                  />
                  <FieldFAQ>When is the most convenient time to reach you?</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Area of Interest
                  </label>
                    <select
                      value={state.areaOfInterest}
                      onChange={(e) => dispatch({ type: "SET_AREA_OF_INTEREST", payload: e.target.value })}
                      className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[16px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                        backgroundPosition: "right 12px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "16px",
                      }}
                    >
                      <option value="">Select an area</option>
                      {eastBayCities.filter((c) => c !== "All Cities").map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <FieldFAQ>Which part of the East Bay are you interested in?</FieldFAQ>
                  </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Message / Comments
                  </label>
                  <textarea
                    value={state.message}
                    onChange={(e) => dispatch({ type: "SET_MESSAGE", payload: e.target.value })}
                    placeholder="Tell me about your needs..."
                    rows={3}
                    className="flex w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[16px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson resize-vertical"
                  />
                  <FieldFAQ>Any questions or details you'd like to share.</FieldFAQ>
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full h-14 text-[18px] font-bold"
                  size="xl"
                >
                  Submit Inquiry
                </Button>

              </form>
            </div>

            <div className="border-t border-gray-200 px-8 py-4">
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to be contacted regarding your real estate inquiry.
                Your information is kept private and never shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
