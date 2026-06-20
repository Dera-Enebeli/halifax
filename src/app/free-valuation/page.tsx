import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, Home, Building2, DollarSign, Check, ChevronRight, MapPin, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import { ValuationFormWrapper } from "./valuation-form-wrapper"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Free Home Value Estimate | Geoffrey Enebly — East Bay Real Estate",
  description:
    "Get a free, no-obligation home valuation for your East Bay property. Geoffrey Enebly provides accurate market analysis for Oakland, Berkeley, Walnut Creek, Dublin & Pleasanton.",
  openGraph: {
    title: "Free Home Value Estimate | Geoffrey Enebly — East Bay Real Estate",
    description:
      "Get a free, no-obligation home valuation for your East Bay property. Geoffrey Enebly provides accurate market analysis.",
  },
  twitter: {
    title: "Free Home Value Estimate | Geoffrey Enebly — East Bay Real Estate",
    description:
      "Get a free, no-obligation home valuation for your East Bay property.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/free-valuation",
  },
}

const steps = [
  {
    icon: Home,
    title: "Submit Your Info",
    desc: "Fill out the quick form with your name, contact details, and property address. It takes less than 60 seconds.",
  },
  {
    icon: Building2,
    title: "Geoffrey Reviews Comps",
    desc: "He analyzes recent comparable sales, market trends, and your property details to determine an accurate value.",
  },
  {
    icon: DollarSign,
    title: "You Get a Call",
    desc: "Geoffrey reaches out personally to walk you through your home&rsquo;s estimated value and answer any questions.",
  },
]

const benefits = [
  "Know exactly how much equity you have in your home",
  "Price it right from day one — no overpricing or leaving money on the table",
  "Negotiate with confidence when you know your home&rsquo;s true value",
  "Free with zero obligation — no strings, no spam, just honest numbers",
  "Get expert insight into the current East Bay market conditions",
  "Plan your next move — whether selling, refinancing, or investing",
]

export default async function FreeValuationPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>

        <section className="relative overflow-hidden bg-near-black">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-full rounded-full border border-white" />
            <div className="absolute inset-16 rounded-full border border-white" />
            <div className="absolute inset-32 rounded-full border border-white" />
          </div>
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.04] pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-full h-full border border-white rotate-45" />
            <div className="absolute inset-12 border border-white rotate-45" />
          </div>

          <div className="max-w-page section-padding relative z-[1]">
            <div className="py-20 md:py-28 lg:py-32">
              <div className="max-w-3xl">
                <ScrollReveal animation="fade-up">
                  <p className="text-xs font-medium tracking-[2px] uppercase text-olive/80 mb-4">
                    Free Service
                  </p>
                  <h1 className="font-serif italic text-[clamp(34px,5.5vw,56px)] text-white leading-[1.08] mb-5">
                    Free Home <span className="text-crimson">Valuation</span>
                  </h1>
                  <div className="w-16 h-[3px] bg-crimson mb-6" />
                  <p className="text-body text-white/55 leading-relaxed max-w-xl font-light">
                    Know exactly what your home is worth in today&rsquo;s East Bay market. No obligation, no spam&mdash;just honest numbers.
                  </p>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={250}>
                  <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">30 Years</p>
                      <p className="text-sm text-white/40">Experience</p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">CalBRE#</p>
                      <p className="text-sm text-white/40">00899654</p>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Licensed</p>
                      <p className="text-sm text-white/40">Broker</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark border-b border-warm-border">
          <div className="max-w-page section-padding">
            <ScrollReveal animation="fade-in">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-center">
                {["Oakland", "Berkeley", "Walnut Creek", "Dublin", "Pleasanton"].map((city) => (
                  <span key={city} className="flex items-center gap-1.5 text-sm text-near-black/50">
                    <MapPin className="h-3.5 w-3.5 text-crimson/60" />
                    {city}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="max-w-page section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
              <div>
                <ScrollReveal>
                  <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                    Get Your Value
                  </p>
                  <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                    Tell us about your <span className="text-crimson">property</span>
                  </h2>
                  <div className="w-12 h-[3px] bg-crimson mb-6" />
                  <p className="text-sm text-near-black/60 leading-relaxed font-light max-w-lg">
                    Fill out the form and Geoffrey will prepare a personalized valuation based on recent comps, local trends, and his 30 years of East Bay market expertise.
                  </p>
                </ScrollReveal>

                <div className="mt-10 space-y-4">
                  {benefits.slice(0, 3).map((item, i) => (
                    <ScrollReveal key={item} animation="fade-up" delay={i * 100}>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3.5 w-3.5 text-crimson" />
                        </div>
                        <span className="text-sm text-near-black/70 leading-relaxed">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal animation="fade-in" delay={150}>
                <ValuationFormWrapper />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="text-center mb-14">
              <ScrollReveal>
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                  How It Works
                </p>
                <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                  Three Simple <span className="text-crimson">Steps</span>
                </h2>
                <div className="w-12 h-[3px] bg-crimson mx-auto" />
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <ScrollReveal key={step.title} delay={i * 150}>
                    <div className="relative overflow-hidden bg-cream rounded-lg shadow-lg shadow-black/10 pt-0 px-6 pb-7 text-center">
                      <div className="h-[3px] bg-crimson w-full mb-7 rounded-t-lg" />
                      {i === 0 && (
                        <div className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.2] text-crimson pointer-events-none" aria-hidden="true">
                          <div className="w-full h-full rounded-full border-2 border-current" />
                          <div className="absolute inset-7 rounded-full border-2 border-current" />
                          <div className="absolute inset-14 rounded-full border-2 border-current" />
                        </div>
                      )}
                      {i === 1 && (
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-[0.2] text-crimson pointer-events-none" aria-hidden="true">
                          <div className="w-full h-full border-2 border-current rotate-45" />
                          <div className="absolute inset-10 border-2 border-current rotate-45" />
                        </div>
                      )}
                      {i === 2 && (
                        <div className="absolute top-1 right-1 w-24 h-24 opacity-[0.15] text-crimson pointer-events-none" aria-hidden="true">
                          <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'2px', left:'2px'}} />
                          <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'0', left:'22px'}} />
                          <div className="w-[14px] h-[14px] rounded-full bg-current absolute" style={{top:'12px', left:'48px'}} />
                          <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'30px', left:'8px'}} />
                          <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'36px', left:'42px'}} />
                          <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'52px', left:'48px'}} />
                          <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'50px', left:'0px'}} />
                          <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'52px', left:'18px'}} />
                        </div>
                      )}
                      <div className="relative z-[1]">
                        <div className="w-14 h-14 rounded-full bg-crimson/10 flex items-center justify-center mx-auto mb-5">
                          <Icon className="h-6 w-6 text-crimson" />
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-xs font-bold tracking-wider text-crimson uppercase">Step {i + 1}</span>
                          {i < 2 && <ChevronRight className="h-4 w-4 text-crimson/30 hidden md:block" />}
                        </div>
                        <h3 className="font-serif italic text-xl text-near-black mb-3">{step.title}</h3>
                        <p className="text-sm text-near-black/55 leading-relaxed font-light">{step.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-page section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <ScrollReveal>
                  <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                    Why It Matters
                  </p>
                  <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                    Why Get a <span className="text-crimson">Valuation</span>?
                  </h2>
                  <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
                  <p className="text-sm text-near-black/60 leading-relaxed font-light max-w-lg mx-auto">
                    Knowing your home&rsquo;s value gives you the power to make smarter real estate decisions.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {benefits.map((item, i) => (
                  <ScrollReveal key={item} animation="fade-up" delay={i * 100}>
                    <div className="flex items-start gap-3 bg-cream rounded-lg px-5 py-4 shadow-lg shadow-black/5 border border-warm-border">
                      <div className="w-7 h-7 rounded-full bg-crimson/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-crimson" />
                      </div>
                      <span className="text-sm text-near-black/70 leading-relaxed">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                  Ready to Know Your Home&rsquo;s Value?
                </p>
                <h2 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-4">
                  Let&rsquo;s Talk Numbers
                </h2>
                <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
                <p className="text-sm text-near-black/60 font-light mb-8 max-w-md mx-auto">
                  Reach out directly for a fast, friendly valuation&mdash;no form required.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                  <a
                    href="tel:+15105075088"
                    className="inline-flex items-center justify-center gap-2.5 bg-crimson text-white text-sm sm:text-base font-bold px-6 py-3.5 sm:py-4 rounded-full hover:bg-crimson-dark transition-all duration-200 shadow-lg shadow-crimson/15 w-full sm:w-auto"
                  >
                    <Phone className="h-[18px] w-[18px]" />
                    (510) 507-5088
                  </a>
                  <a
                    href="mailto:Enebly@aol.com"
                    className="inline-flex items-center justify-center gap-2.5 border-2 border-near-black/20 text-near-black text-sm sm:text-base font-semibold px-6 py-3.5 sm:py-4 rounded-full hover:border-crimson hover:text-crimson transition-all duration-200 w-full sm:w-auto"
                  >
                    <Mail className="h-[18px] w-[18px]" />
                    Enebly@aol.com
                  </a>
                </div>

                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive-dark underline underline-offset-4 transition-colors"
                >
                  Or schedule a full consultation <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
