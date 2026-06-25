"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Phone, Mail, MessageCircle, ArrowLeft } from "lucide-react"
import { useFunnel } from "@/lib/funnel-store"
import { agent } from "@/lib/mock-data"
import { openWhatsApp } from "@/lib/whatsapp"

export default function LeadStepConsultation() {
  const router = useRouter()
  const { state } = useFunnel()

  const interestMessages: Record<string, { heading: string; body: string }> = {
    buyer: {
      heading: "Let\u2019s Find Your Next Home",
      body: "I\u2019ll reach out to learn more about what you\u2019re looking for and help you find the perfect property in the East Bay.",
    },
    seller: {
      heading: "Let\u2019s Sell Your Home",
      body: "I\u2019ll help you prepare a market analysis, set the right price, and market your property to the right buyers.",
    },
    homeowner: {
      heading: "Let\u2019s Discuss Your Home\u2019s Value",
      body: "I\u2019ll prepare a full market analysis and walk you through what your property is worth in today\u2019s market.",
    },
  }

  const msg = state.interest ? interestMessages[state.interest] : interestMessages.homeowner

  return (
    <section className="py-16 md:py-24 bg-cream-dark">
      <div className="max-w-page section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream">
            <div className="h-1 w-full bg-crimson" />

            <div className="px-7 sm:px-10 py-8 sm:py-10">

              <div className="text-center mb-8">
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
                  Inquiry Submitted
                </p>
                <h1 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-1">
                  Thanks, {state.name?.split(" ")[0]}!
                </h1>
                <div className="w-10 h-[3px] bg-crimson mx-auto mt-4 mb-5" />
                <p className="text-sm text-near-black/55 leading-relaxed font-light">
                  Your preferred contact method has been confirmed. Here&rsquo;s what happens next.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                <div className="bg-cream-dark px-6 py-8 flex flex-col items-center justify-center text-center">
                  <p className="font-serif italic text-lg text-near-black mb-3">{msg.heading}</p>
                  <p className="text-sm text-near-black/55 leading-relaxed font-light">
                    {msg.body}
                  </p>
                </div>
                <div className="bg-cream-dark px-6 py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-3 overflow-hidden">
                    <Image src="/main-logo.png?v=2" alt="Halifax" width={256} height={256} className="object-contain" />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-bold text-sm text-near-black">{agent.name}</p>
                    <Image src="/realtor-badge.png?v=2" alt="Realtor" width={24} height={27} className="object-contain flex-shrink-0" />
                  </div>
                  <p className="text-xs text-near-black/50">{agent.type} &middot; {agent.experience}</p>
                  <p className="text-sm text-near-black/60 mt-1">{agent.phone}</p>
                  <p className="text-sm text-crimson font-medium">{agent.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-near-black text-center">
                  {state.contactMethod === "phone"
                    ? "Geoffrey will call you shortly"
                    : state.contactMethod === "email"
                    ? "A detailed response is on its way"
                    : state.contactMethod === "whatsapp"
                    ? "Look out for a WhatsApp message"
                    : `Contact ${agent.name} directly`}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={`tel:+1${agent.phone.replace(/[^\d]/g, "")}`}
                    className={`flex items-center justify-center gap-2 h-12 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      state.contactMethod === "phone"
                        ? "bg-crimson text-white shadow-md"
                        : "bg-cream border border-warm-border text-near-black hover:border-crimson hover:text-crimson"
                    }`}
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className={`flex items-center justify-center gap-2 h-12 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      state.contactMethod === "email"
                        ? "bg-crimson text-white shadow-md"
                        : "bg-cream border border-warm-border text-near-black hover:border-crimson hover:text-crimson"
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
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
                      if (state.budget) {
                        const budgetLabels: Record<string, string> = {
                          "under-500k": "Under $500,000",
                          "500k-750k": "$500,000 – $750,000",
                          "750k-1m": "$750,000 – $1,000,000",
                          "1m-1.5m": "$1,000,000 – $1,500,000",
                          "1.5m-2m": "$1,500,000 – $2,000,000",
                          "2m-plus": "$2,000,000+",
                          "not-sure": "Not sure yet",
                        }
                        data["Budget"] = budgetLabels[state.budget] || state.budget
                      }
                      if (state.timeline) {
                        const timelineLabels: Record<string, string> = {
                          "just-looking": "Just looking / Browsing",
                          "1-3": "1 – 3 months",
                          "3-6": "3 – 6 months",
                          "6-plus": "6+ months",
                          "not-sure": "Not sure",
                        }
                        data["Timeline"] = timelineLabels[state.timeline] || state.timeline
                      }
                      if (state.message) data["Message"] = state.message
                      data["Schedule"] = state.interest === "buyer" ? "Home Buying Consultation" : state.interest === "seller" ? "Listing Consultation" : "Full Valuation"
                      openWhatsApp(data)
                    }}
                    className={`flex items-center justify-center gap-2 h-12 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      state.contactMethod === "whatsapp"
                        ? "bg-crimson text-white shadow-md"
                        : "bg-cream border border-warm-border text-near-black hover:border-crimson hover:text-crimson"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </button>
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-near-black/40 hover:text-crimson transition-colors cursor-pointer group"
                  >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                    Back to Home
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-warm-border px-7 sm:px-10 py-4">
              <p className="text-xs text-near-black/35 text-center">
                By submitting, you agree to be contacted by {agent.name} regarding
                your real estate inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
