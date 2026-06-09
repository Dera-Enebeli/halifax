"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities, propertyTypes } from "@/lib/mock-data"
import { openWhatsApp } from "@/lib/whatsapp"
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

  const canSubmit = !!state.interest && !!state.name.trim() && !!state.email.trim() && !!state.phone.trim() && !!state.city

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
      City: state.city,
    }

    if (state.interest === "seller" || state.interest === "homeowner") {
      if (state.address) data["Address"] = state.address
      if (state.propertyType) data["Property Type"] = state.propertyType
      if (state.sqft) {
        const sqftLabels: Record<string, string> = {
          "800": "Under 1,000",
          "1200": "1,000 – 1,500",
          "1800": "1,500 – 2,000",
          "2200": "2,000 – 2,500",
          "3000": "2,500+",
        }
        data["Sq Footage"] = sqftLabels[state.sqft] || state.sqft
      }
      if (state.bedrooms) data["Bedrooms"] = String(state.bedrooms)
      if (state.baths) data["Bathrooms"] = String(state.baths)
    }

    openWhatsApp(data)
    dispatch({ type: "SUBMIT" })
  }

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-terracotta" />

              <div className="p-6 sm:p-8">

              <button
                type="button"
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-sm font-medium text-terracotta hover:text-terracotta-dark transition-colors mb-5 cursor-pointer group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>

              <div className="bg-white rounded-lg border border-warm-border p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-serif text-lg font-bold bg-terracotta text-white rounded-full" style={{ fontFamily: "var(--font-serif)" }}>
                  GE
                </div>
                <div>
                  <p className="text-sm font-bold text-near-black">Geoffrey Enebeli</p>
                  <p className="text-xs text-gray-500">(510) 507-5088 &middot; geoffrey@halifaxproperties.com</p>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="font-serif italic text-[22px] sm:text-xl text-near-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax <span className="text-olive text-[10px] tracking-[2px] uppercase font-semibold not-italic">· East Bay Real Estate</span>
                </p>
                <p className="text-[16px] text-gray-500 mt-1">
                  Tell us about your property and we&apos;ll help you move forward.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {([
                      { value: "buyer" as const, label: "Buying", sub: "Find a home" },
                      { value: "seller" as const, label: "Selling", sub: "List my home" },
                      { value: "homeowner" as const, label: "Valuation", sub: "Home value" },
                    ]).map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => dispatch({ type: "SET_INTEREST", payload: option.value })}
                        className={`text-center py-3 sm:py-4 px-1 sm:px-2 rounded-lg transition-all duration-200 cursor-pointer border ${
                          state.interest === option.value
                            ? "bg-terracotta text-white border-terracotta"
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
                    What&apos;s your name?
                  </label>
                  <Input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="focus:ring-terracotta/20 focus:border-terracotta"
                  />
                  <FieldFAQ>So we know how to address you.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    What&apos;s your email address?
                  </label>
                  <Input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="focus:ring-terracotta/20 focus:border-terracotta"
                  />
                  <FieldFAQ>So we can send your results and follow up.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    What&apos;s your phone number?
                  </label>
                  <Input
                    type="tel"
                    value={state.phone}
                    onChange={(e) => dispatch({ type: "SET_PHONE", payload: e.target.value })}
                    placeholder="(555) 123-4567"
                    required
                    className="focus:ring-terracotta/20 focus:border-terracotta"
                  />
                  <FieldFAQ>So we can reach you quickly with results.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                    Which city are you interested in?
                  </label>
                  <select
                    value={state.city}
                    onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    required
                    className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundPosition: "right 12px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "16px",
                    }}
                  >
                    <option value="">Select a city</option>
                    {eastBayCities.filter((c) => c !== "All Cities").map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <FieldFAQ>
                    {state.interest === "homeowner" && "Your city helps us estimate your property value based on local market data."}
                    {state.interest === "seller" && "Your city helps us prepare an accurate market analysis."}
                    {!state.interest && "We'll use your city to provide the most relevant information."}
                  </FieldFAQ>
                </div>

                {(state.interest === "homeowner" || state.interest === "seller") && (
                  <div className="space-y-5 pt-4 border-t border-gray-200">
                    <p className="text-[16px] font-bold text-olive-dark">About Your Property</p>

                    <div>
                        <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                          Property address
                        </label>
                      <Input
                        type="text"
                        value={state.address}
                        onChange={(e) => dispatch({ type: "SET_ADDRESS", payload: e.target.value })}
                        placeholder="Street address"
                        className="focus:ring-terracotta/20 focus:border-terracotta"
                      />
                      <FieldFAQ>Your address helps us give you a more accurate estimate. Your information is kept private.</FieldFAQ>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                          <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                            Property type
                          </label>
                        <select
                          value={state.propertyType}
                          onChange={(e) => dispatch({ type: "SET_PROPERTY_TYPE", payload: e.target.value })}
                          className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "16px",
                          }}
                        >
                          <option value="">Select</option>
                          {propertyTypes.filter((t) => t.value !== "all").map((t) => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                          <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                            Sq. Footage
                          </label>
                        <select
                          value={state.sqft}
                          onChange={(e) => dispatch({ type: "SET_SQFT", payload: e.target.value })}
                          className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "16px",
                          }}
                        >
                          <option value="">Approx.</option>
                          <option value="800">Under 1,000</option>
                          <option value="1200">1,000 – 1,500</option>
                          <option value="1800">1,500 – 2,000</option>
                          <option value="2200">2,000 – 2,500</option>
                          <option value="3000">2,500+</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                          <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                            Bedrooms
                          </label>
                        <select
                          value={state.bedrooms ? String(state.bedrooms) : ""}
                          onChange={(e) => dispatch({ type: "SET_BEDROOMS", payload: Number(e.target.value) || 0 })}
                          className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "16px",
                          }}
                        >
                          <option value="">Any</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4+</option>
                        </select>
                      </div>
                      <div>
                          <label className="block text-[16px] font-semibold text-near-black mb-1.5">
                            Bathrooms
                          </label>
                        <select
                          value={state.baths ? String(state.baths) : ""}
                          onChange={(e) => dispatch({ type: "SET_BATHS", payload: Number(e.target.value) || 0 })}
                          className="flex h-11 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-terracotta/20 focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "16px",
                          }}
                        >
                          <option value="">Any</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full h-14 text-[18px] font-bold"
                  size="xl"
                >
                  Get My Results
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
