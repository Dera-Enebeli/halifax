"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home, Building2, DollarSign, Phone, Mail, MessageCircle, Check, Loader2, ExternalLink } from "lucide-react"
import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities, agent } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"

function FieldHint({ children, error, id, errorId }: { children: React.ReactNode; error?: string | false; id?: string; errorId?: string }) {
  return (
    <p id={error ? errorId : id} className={`text-sm mt-1.5 ${error ? "text-red-600 font-medium" : "text-near-black/40"}`} role={error ? "alert" : undefined}>
      {error || children}
    </p>
  )
}

const mortgageUrl = "https://www.empirelending.net"

const interestOptions = [
  { value: "buyer" as const, label: "Buying", sub: "Find a home", icon: Home },
  { value: "seller" as const, label: "Selling", sub: "List my home", icon: Building2 },
  { value: "homeowner" as const, label: "Valuation", sub: "Home value", icon: DollarSign },
]

const contactOptions = [
  { value: "phone" as const, label: "Phone Call", sub: "Geoffrey will call you", icon: Phone },
  { value: "email" as const, label: "Email", sub: "Get a detailed response", icon: Mail },
  { value: "whatsapp" as const, label: "WhatsApp", sub: "Quick chat on WhatsApp", icon: MessageCircle },
]

export default function LeadForm() {
  const router = useRouter()
  const { state, dispatch } = useFunnel()
  const [showContactStep, setShowContactStep] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState<"phone" | "email" | "whatsapp" | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneDigits = state.phone.replace(/\D/g, "")

  const validate = (): boolean => {
    const errors: Record<string, string> = {}
    if (!state.interest) errors.interest = "Please select your interest"
    if (!state.name.trim()) errors.name = "Full name is required"
    if (!state.email.trim()) {
      errors.email = "Email is required"
    } else if (!emailRegex.test(state.email)) {
      errors.email = "Please enter a valid email"
    }
    if (!state.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (phoneDigits.length < 10) {
      errors.phone = "Please enter a valid phone number (10+ digits)"
    }
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const canSubmit = !!state.interest && !!state.name.trim() && !!state.email.trim() && !!state.phone.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setShowContactStep(true)
  }

  const handleConfirmContact = async () => {
    if (!selectedMethod) return
    setSubmitting(true)
    setSubmitError(null)

    try {
      const payload: Record<string, string> = {
        interest: state.interest ?? "homeowner",
        name: state.name,
        email: state.email,
        phone: state.phone,
        contactMethod: selectedMethod,
      }

      if (state.bestTimeToCall.trim()) payload.bestTimeToCall = state.bestTimeToCall
      if (state.areaOfInterest) payload.areaOfInterest = state.areaOfInterest
      if (state.budget) payload.budget = state.budget
      if (state.timeline) payload.timeline = state.timeline
      if (state.consentEmail) payload.consentEmail = "yes"
      if (state.consentSMS) payload.consentSMS = "yes"
      if (state.message.trim()) payload.message = state.message

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || "Failed to submit")
      }

      dispatch({ type: "SET_CONTACT_METHOD", payload: selectedMethod })
      dispatch({ type: "SUBMIT" })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-page section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream">
            <div className="h-1 w-full bg-crimson" />

            <div className="px-7 sm:px-10 py-8 sm:py-10">

              <button
                type="button"
                onClick={() => router.back()}
                className="flex items-center gap-1.5 text-sm font-medium text-near-black/40 hover:text-crimson transition-colors mb-8 cursor-pointer group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>

              <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-full bg-cream-dark flex items-center justify-center flex-shrink-0">
                    <Image src="/main-logo.png?v=2" alt="Halifax" width={256} height={256} className="object-contain" />
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-serif italic text-sm text-near-black leading-tight">
                      Geoffrey Enebly
                    </p>
                    <p className="text-xs text-near-black/50">{agent.type} &middot; {agent.experience} &middot; (510) 507-5088</p>
                  </div>
                  <Image src="/realtor-badge.png?v=2" alt="Realtor" width={40} height={45} className="object-contain flex-shrink-0" />
                </div>
              </div>

              <div className="mb-10">
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
                  Free Consultation
                </p>
                <h1 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-3">
                  Let&rsquo;s find your next home.
                </h1>
                <div className="w-10 h-[3px] bg-crimson mb-4" />
                <p className="text-sm text-near-black/55 leading-relaxed font-light max-w-lg">
                  Tell us a bit about yourself and Geoffrey will reach out personally within 24 hours.
                </p>
              </div>

              {showContactStep ? (
                <div className="space-y-7">
                  <div>
                    <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
                      Almost done
                    </p>
                    <h2 className="font-serif italic text-[clamp(22px,3vw,32px)] text-near-black leading-[1.15] mb-3">
                      How should Geoffrey reach you?
                    </h2>
                    <div className="w-10 h-[3px] bg-crimson mb-4" />
                    <p className="text-sm text-near-black/55 leading-relaxed font-light max-w-lg">
                      Pick your preferred way to connect and we&rsquo;ll take it from there.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {contactOptions.map((opt) => {
                      const Icon = opt.icon
                      const isActive = selectedMethod === opt.value
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setSelectedMethod(opt.value)}
                          className={`flex items-center gap-3 sm:flex-col sm:text-center py-4 px-4 rounded-lg transition-all duration-200 cursor-pointer border ${
                            isActive
                              ? "bg-crimson text-white border-crimson"
                              : "bg-cream text-near-black border-warm-border hover:border-near-black/30"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? "bg-white/15" : "bg-crimson/10"
                          }`}>
                            <Icon className={`h-[20px] w-[20px] ${isActive ? "text-white" : "text-crimson"}`} />
                          </div>
                          <div className="sm:mt-0.5">
                            <span className={`block text-sm font-bold ${isActive ? "text-white" : "text-near-black"}`}>
                              {opt.label}
                            </span>
                            <span className={`block text-xs mt-px ${isActive ? "text-white/65" : "text-near-black/40"}`}>
                              {opt.sub}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                      {submitError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleConfirmContact}
                      disabled={!selectedMethod || submitting}
                      className="h-12 px-8 text-base font-bold tracking-wide text-crimson border-2 border-crimson rounded-lg hover:bg-crimson hover:text-white transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 w-full sm:w-auto"
                    >
                      {submitting ? (
                        <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" />
                      ) : (
                        <Check className="h-5 w-5 flex-shrink-0" />
                      )}
                      <span>{submitting ? "Submitting..." : "Confirm & Submit"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactStep(false)}
                      className="flex items-center gap-1.5 text-sm font-medium text-near-black/40 hover:text-crimson transition-colors cursor-pointer group"
                    >
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                      Back
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">

                <div>
                  <label className="block text-sm font-semibold text-near-black mb-3" id="interest-label">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-labelledby="interest-label" aria-describedby={validationErrors.interest ? "error-interest" : "hint-interest"}>
                    {interestOptions.map((option) => {
                      const Icon = option.icon
                      const isActive = state.interest === option.value
                      return (
                        <button
                          key={option.value}
                          type="button"
                          role="radio"
                          aria-checked={isActive}
                          onClick={() => dispatch({ type: "SET_INTEREST", payload: option.value })}
                          className={`flex items-center gap-3 sm:flex-col sm:text-center py-3.5 px-4 rounded-lg transition-all duration-200 cursor-pointer border ${
                            isActive
                              ? "bg-crimson text-white border-crimson"
                              : "bg-cream text-near-black border-warm-border hover:border-near-black/30"
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isActive ? "bg-white/15" : "bg-crimson/10"
                          }`}>
                            <Icon className={`h-[18px] w-[18px] ${isActive ? "text-white" : "text-crimson"}`} />
                          </div>
                          <div className="sm:mt-0.5">
                            <span className={`block text-sm font-bold ${isActive ? "text-white" : "text-near-black"}`}>
                              {option.label}
                            </span>
                            <span className={`block text-xs mt-px ${isActive ? "text-white/65" : "text-near-black/40"}`}>
                              {option.sub}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                  <FieldHint error={validationErrors.interest} id="hint-interest" errorId="error-interest">Select the option that best fits your goal.</FieldHint>
                  <div className="mt-3 pt-3 border-t border-warm-border">
                    <a
                      href={mortgageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Opens empirelending.net in a new tab"
                      className="group flex items-center gap-3 py-3 px-4 rounded-lg border border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100 transition-all duration-200"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <ExternalLink className="h-[18px] w-[18px] text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-sm font-bold text-emerald-800">
                          Need a mortgage?
                        </span>
                        <span className="block text-xs mt-px text-emerald-600/70">
                          Get pre-approved &mdash; you&rsquo;ll leave our site
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      value={state.name}
                      onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                      placeholder="Your full name"
                      required
                      aria-invalid={!!validationErrors.name}
                      aria-describedby={validationErrors.name ? "error-name" : "hint-name"}
                    />
                    <FieldHint error={validationErrors.name} id="hint-name" errorId="error-name">So we know how to address you.</FieldHint>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={state.email}
                      onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                      placeholder="your@email.com"
                      required
                      aria-invalid={!!validationErrors.email}
                      aria-describedby={validationErrors.email ? "error-email" : "hint-email"}
                    />
                    <FieldHint error={validationErrors.email} id="hint-email" errorId="error-email">So we can follow up with you.</FieldHint>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={state.phone}
                      onChange={(e) => dispatch({ type: "SET_PHONE", payload: e.target.value })}
                      placeholder="(555) 123-4567"
                      required
                      aria-invalid={!!validationErrors.phone}
                      aria-describedby={validationErrors.phone ? "error-phone" : "hint-phone"}
                    />
                    <FieldHint error={validationErrors.phone} id="hint-phone" errorId="error-phone">So we can reach you directly.</FieldHint>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      Best Time to Call
                    </label>
                    <Input
                      type="text"
                      value={state.bestTimeToCall}
                      onChange={(e) => dispatch({ type: "SET_BEST_TIME_TO_CALL", payload: e.target.value })}
                      placeholder="Morning, Afternoon, Evening, Anytime"
                    />
                    <FieldHint>When is the most convenient time to reach you?</FieldHint>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      Area of Interest
                    </label>
                    <Select
                      value={state.areaOfInterest || ""}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch({ type: "SET_AREA_OF_INTEREST", payload: e.target.value })}
                      options={[
                        { value: "", label: "Select an area" },
                        ...eastBayCities.filter((c) => c !== "All Cities").map((city) => ({
                          value: city,
                          label: city,
                        })),
                      ]}
                    />
                    <FieldHint>Which part of the East Bay are you interested in?</FieldHint>
                  </div>

                  {(state.interest === "buyer" || state.interest === "seller") && (
                    <div>
                      <label className="block text-sm font-semibold text-near-black mb-1.5">
                        {state.interest === "buyer" ? "What's your budget?" : "What's your expected price?"}
                      </label>
                      <Select
                        value={state.budget}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch({ type: "SET_BUDGET", payload: e.target.value })}
                        placeholder="Select a range"
                        options={[
                          { value: "under-500k", label: "Under $500,000" },
                          { value: "500k-750k", label: "$500,000 – $750,000" },
                          { value: "750k-1m", label: "$750,000 – $1,000,000" },
                          { value: "1m-1.5m", label: "$1,000,000 – $1,500,000" },
                          { value: "1.5m-2m", label: "$1,500,000 – $2,000,000" },
                          { value: "2m-plus", label: "$2,000,000+" },
                          { value: "not-sure", label: "Not sure yet" },
                        ]}
                      />
                      <FieldHint>Optional — helps me find the right options for you.</FieldHint>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-near-black mb-1.5">
                      What&rsquo;s your timeline?
                    </label>
                    <Select
                      value={state.timeline}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch({ type: "SET_TIMELINE", payload: e.target.value })}
                      placeholder="Select a timeline"
                      options={[
                        { value: "just-looking", label: "Just looking / Browsing" },
                        { value: "1-3", label: "1 – 3 months" },
                        { value: "3-6", label: "3 – 6 months" },
                        { value: "6-plus", label: "6+ months" },
                        { value: "not-sure", label: "Not sure" },
                      ]}
                    />
                    <FieldHint>Optional — so I know how quickly to follow up.</FieldHint>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-near-black">
                    Keep me updated
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={state.consentEmail}
                      onChange={(e) => dispatch({ type: "SET_CONSENT_EMAIL", payload: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-warm-border text-crimson focus:ring-crimson/20 focus:ring-2 accent-crimson"
                    />
                    <span className="text-sm text-near-black/60 group-hover:text-near-black/80 transition-colors">
                      Yes, I&rsquo;d like to receive email updates about new properties and market trends.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={state.consentSMS}
                      onChange={(e) => dispatch({ type: "SET_CONSENT_SMS", payload: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded border-warm-border text-crimson focus:ring-crimson/20 focus:ring-2 accent-crimson"
                    />
                    <span className="text-sm text-near-black/60 group-hover:text-near-black/80 transition-colors">
                      Yes, I agree to receive text messages from Geoffrey Enebly about my inquiry. Reply STOP to opt out.
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-near-black mb-1.5">
                    Message / Comments
                  </label>
                  <textarea
                    value={state.message}
                    onChange={(e) => dispatch({ type: "SET_MESSAGE", payload: e.target.value })}
                    placeholder="Tell me about your needs..."
                    rows={3}
                    className="flex w-full rounded-lg border border-warm-border bg-cream px-3.5 py-2.5 text-base placeholder:text-near-black/35 focus:outline-none focus:ring-2 focus:ring-crimson/20 focus:border-crimson resize-vertical"
                  />
                  <FieldHint>Any questions or details you&rsquo;d like to share.</FieldHint>
                </div>

                <Button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full h-12 text-base font-bold tracking-wide"
                  size="xl"
                >
                  Submit Inquiry
                </Button>

              </form>
              )}
            </div>

            <div className="border-t border-warm-border px-7 sm:px-10 py-4">
              <p className="text-xs text-near-black/35 text-center">
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
