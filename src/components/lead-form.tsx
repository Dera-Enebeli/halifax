"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home, Building2, DollarSign, Phone, Mail, MessageCircle, Check } from "lucide-react"
import { useFunnel } from "@/lib/funnel-store"
import { eastBayCities, agent } from "@/lib/mock-data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select } from "@/components/ui/select"

function FieldHint({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-near-black/40 mt-1.5">
      {children}
    </p>
  )
}

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

  const canSubmit = !!state.interest && !!state.name.trim() && !!state.email.trim() && !!state.phone.trim()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setShowContactStep(true)
  }

  const handleConfirmContact = () => {
    if (!selectedMethod) return
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

    dispatch({ type: "SET_CONTACT_METHOD", payload: selectedMethod })
    dispatch({ type: "SUBMIT" })
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
                <div className="w-11 h-11 rounded-full bg-cream-dark flex items-center justify-center flex-shrink-0">
                  <Image src="/main-logo.png" alt="Halifax" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <p className="font-serif italic text-[15px] text-near-black leading-tight">
                    Geoffrey Enebly
                  </p>
                  <p className="text-xs text-near-black/50">{agent.type} &middot; {agent.experience} &middot; (510) 507-5088</p>
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
                <p className="text-[15px] text-near-black/55 leading-relaxed font-light max-w-lg">
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
                    <p className="text-[15px] text-near-black/55 leading-relaxed font-light max-w-lg">
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

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowContactStep(false)}
                      className="flex-1 h-13 text-base font-semibold text-near-black border-2 border-warm-border rounded-full hover:border-near-black/30 transition-all duration-200 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmContact}
                      disabled={!selectedMethod}
                      className="flex-1 h-13 text-base font-bold tracking-wide text-white bg-crimson rounded-full hover:bg-crimson-dark transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Check className="h-5 w-5" />
                      Confirm &amp; Submit
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">

                <div>
                  <label className="block text-sm font-semibold text-near-black mb-3">
                    What are you looking for?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {interestOptions.map((option) => {
                      const Icon = option.icon
                      const isActive = state.interest === option.value
                      return (
                        <button
                          key={option.value}
                          type="button"
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
                  <FieldHint>Select the option that best fits your goal.</FieldHint>
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
                    />
                    <FieldHint>So we know how to address you.</FieldHint>
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
                    />
                    <FieldHint>So we can follow up with you.</FieldHint>
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
                    />
                    <FieldHint>So we can reach you directly.</FieldHint>
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
                  className="w-full h-13 text-base font-bold tracking-wide"
                  size="xl"
                >
                  Submit Inquiry
                </Button>

              </form>
              )}
            </div>

            <div className="border-t border-warm-border px-10 py-4">
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
