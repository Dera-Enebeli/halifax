"use client"

import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities, propertyTypes } from "@/lib/mock-data"

function FieldFAQ({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] text-gray-400 italic mt-1.5 leading-snug font-normal">
      {children}
    </p>
  )
}

export default function LeadForm() {
  const { state, dispatch } = useFunnel()

  const canSubmit = !!state.interest && !!state.name.trim() && !!state.email.trim() && !!state.city

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...state, submitted: true }),
    }).catch(() => {})

    dispatch({ type: "SUBMIT" })
  }

  return (
    <div className="relative min-h-screen bg-wood-warm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex items-start justify-center section-padding py-12 sm:py-16">
        <div className="w-full max-w-xl my-8">
          <div className="bg-cream shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <div className="h-1 w-full bg-terracotta" />

            <div className="p-6 sm:p-8">

              <div className="text-center mb-5">
                <p className="font-serif italic text-[22px] text-near-black leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
                  Halifax <span className="text-olive text-[11px] tracking-[2px] uppercase font-semibold not-italic">· East Bay Listings</span>
                </p>
                <p className="text-[17px] text-gray-500 mt-1.5 font-normal leading-snug">
                  Tell us about yourself and we&apos;ll show you what the East Bay has to offer.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">

                <div>
                  <label className="block text-[20px] font-bold text-near-black mb-4">
                    Are you buying, selling, or looking for a valuation on your property?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {([
                      { value: "buyer" as const, label: "Buying" },
                      { value: "seller" as const, label: "Selling" },
                      { value: "homeowner" as const, label: "Valuation" },
                    ]).map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => dispatch({ type: "SET_INTEREST", payload: option.value })}
                        className={`text-center p-5 transition-all duration-200 cursor-pointer ${
                          state.interest === option.value
                            ? "bg-near-black text-white shadow-md"
                            : "bg-white text-near-black border-2 border-warm-border hover:border-near-black/30"
                        }`}
                      >
                        <span className="block text-[19px] font-bold leading-tight">
                          {option.label}
                        </span>
                        <span className={`block text-[15px] mt-1.5 leading-snug font-normal ${state.interest === option.value ? "text-white/70" : "text-gray-500"}`}>
                          {option.value === "buyer" ? "Find a home" : option.value === "seller" ? "List my home" : "Home value"}
                        </span>
                      </button>
                    ))}
                  </div>
                  <FieldFAQ>Select the option that best fits your goal.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[20px] font-bold text-near-black mb-2">
                    What&apos;s your name?
                  </label>
                  <input
                    type="text"
                    value={state.name}
                    onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta"
                  />
                  <FieldFAQ>So we know how to address you.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[20px] font-bold text-near-black mb-2">
                    What&apos;s your email address?
                  </label>
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta"
                  />
                  <FieldFAQ>So we can send your results and follow up.</FieldFAQ>
                </div>

                <div>
                  <label className="block text-[20px] font-bold text-near-black mb-2">
                    Which city interests you?
                  </label>
                  <select
                    value={state.city}
                    onChange={(e) => dispatch({ type: "SET_CITY", payload: e.target.value })}
                    required
                    className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                      backgroundPosition: "right 16px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "20px",
                    }}
                  >
                    <option value="">Select a city</option>
                    {eastBayCities.filter((c) => c !== "All Cities").map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <FieldFAQ>
                    {state.interest === "homeowner" && "Your city helps us estimate your property value based on local market data."}
                    {state.interest === "buyer" && "We'll show available properties in your area of interest."}
                    {state.interest === "seller" && "Your city helps us prepare an accurate market analysis."}
                    {!state.interest && "We'll use your city to provide the most relevant information."}
                  </FieldFAQ>
                </div>

                {(state.interest === "homeowner" || state.interest === "seller") && (
                  <div className="space-y-5 pt-1 border-t border-warm-border">
                    <p className="text-[17px] font-bold text-olive-dark mt-3">Property Details</p>

                    <div>
                      <label className="block text-[20px] font-bold text-near-black mb-2">
                        Property address
                      </label>
                      <input
                        type="text"
                        value={state.address}
                        onChange={(e) => dispatch({ type: "SET_ADDRESS", payload: e.target.value })}
                        placeholder="Street address"
                        className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta"
                      />
                      <FieldFAQ>Your address helps us give you a more accurate estimate. Your information is kept private.</FieldFAQ>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Property type
                        </label>
                        <select
                          value={state.propertyType}
                          onChange={(e) => dispatch({ type: "SET_PROPERTY_TYPE", payload: e.target.value })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
                          }}
                        >
                          <option value="">Select</option>
                          {propertyTypes.filter((t) => t.value !== "all").map((t) => (
                            <option key={t.value} value={t.value}>{t.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Sq. Footage
                        </label>
                        <select
                          value={state.sqft}
                          onChange={(e) => dispatch({ type: "SET_SQFT", payload: e.target.value })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Bedrooms
                        </label>
                        <select
                          value={state.bedrooms || ""}
                          onChange={(e) => dispatch({ type: "SET_BEDROOMS", payload: Number(e.target.value) || 0 })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
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
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Bathrooms
                        </label>
                        <select
                          value={state.baths || ""}
                          onChange={(e) => dispatch({ type: "SET_BATHS", payload: Number(e.target.value) || 0 })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
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

                {state.interest === "buyer" && (
                  <div className="space-y-5 pt-1 border-t border-warm-border">
                    <p className="text-[17px] font-bold text-olive-dark mt-3">Search Preferences</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Min budget
                        </label>
                        <select
                          value={state.minPrice || ""}
                          onChange={(e) => dispatch({ type: "SET_MIN_PRICE", payload: Number(e.target.value) || 0 })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
                          }}
                        >
                          <option value="">No min</option>
                          <option value="400000">$400,000</option>
                          <option value="600000">$600,000</option>
                          <option value="800000">$800,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1250000">$1,250,000</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[20px] font-bold text-near-black mb-2">
                          Max budget
                        </label>
                        <select
                          value={state.maxPrice || ""}
                          onChange={(e) => dispatch({ type: "SET_MAX_PRICE", payload: Number(e.target.value) || 0 })}
                          className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                            backgroundPosition: "right 12px center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "18px",
                          }}
                        >
                          <option value="">No max</option>
                          <option value="600000">$600,000</option>
                          <option value="800000">$800,000</option>
                          <option value="1000000">$1,000,000</option>
                          <option value="1250000">$1,250,000</option>
                          <option value="1500000">$1,500,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[20px] font-bold text-near-black mb-2">
                        Bedrooms
                      </label>
                      <select
                        value={state.bedrooms || ""}
                        onChange={(e) => dispatch({ type: "SET_BEDROOMS", payload: Number(e.target.value) || 0 })}
                        className="w-full h-14 px-4 bg-white text-[19px] text-near-black font-medium outline-none focus:ring-2 focus:ring-terracotta/30 transition-all border-l-4 border-transparent focus:border-terracotta appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                          backgroundPosition: "right 12px center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "18px",
                        }}
                      >
                        <option value="">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4+</option>
                      </select>
                      <FieldFAQ>We&apos;ll only show homes that match.</FieldFAQ>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full h-14 text-[20px] font-bold tracking-wide transition-all duration-300 ${
                    canSubmit
                      ? "bg-terracotta text-white hover:bg-terracotta-dark cursor-pointer"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Get My Results
                </button>

              </form>
            </div>

            <div className="border-t border-warm-border px-8 sm:px-10 py-4">
              <p className="text-[14px] text-gray-400 text-center leading-relaxed font-normal">
                By submitting, you agree to be contacted regarding your real estate inquiry.
                Your information is kept private and never shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
