import UtilityBar from "@/components/utility-bar"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

const buyerServices = [
  "Free access to Bay Area property listings",
  "Free pre-qualification",
  "3% down",
  "Zero closing costs",
]

const sellerServices = [
  "Free property value / appraisal",
  "Free market analysis",
  "How to sell your home for top $$",
  "Free relocation",
]

const valuationServices = [
  "Free home value estimate",
  "Comparable market analysis",
  "Local market data & trends",
  "No-obligation consultation",
]

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection />

        <section className="py-16 md:py-20">
          <div className="max-w-page section-padding">
            <div className="text-center mb-12">
              <p className="text-[13px] font-medium tracking-[2px] uppercase text-olive mb-2">
                Free Consultation
              </p>
              <h2
                className="font-serif italic text-[clamp(26px,3.5vw,40px)] text-near-black leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                One Stop Real Estate
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl border border-warm-border p-6">
                <h3 className="font-bold text-lg text-near-black mb-4">For Buyers</h3>
                <ul className="space-y-3">
                  {buyerServices.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/consultation?interest=buyer"
                  className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold text-crimson hover:gap-2 transition-all"
                >
                  Get Started &rarr;
                </Link>
              </div>
              <div className="bg-white rounded-xl border border-warm-border p-6">
                <h3 className="font-bold text-lg text-near-black mb-4">For Sellers</h3>
                <ul className="space-y-3">
                  {sellerServices.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/consultation?interest=seller"
                  className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold text-crimson hover:gap-2 transition-all"
                >
                  Get Started &rarr;
                </Link>
              </div>
              <div className="bg-white rounded-xl border border-warm-border p-6">
                <h3 className="font-bold text-lg text-near-black mb-4">Valuation</h3>
                <ul className="space-y-3">
                  {valuationServices.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-crimson mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/consultation?interest=homeowner"
                  className="mt-6 inline-flex items-center gap-1 text-[16px] font-semibold text-crimson hover:gap-2 transition-all"
                >
                  Get Started &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[13px] font-medium tracking-[2px] uppercase text-olive mb-2">
                Get in Touch
              </p>
              <h2
                className="font-serif italic text-[clamp(24px,3vw,34px)] text-near-black leading-tight mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Reach Out Directly
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
                <a
                  href="tel:+15105075088"
                  className="inline-flex items-center gap-2.5 bg-crimson text-white text-base font-bold px-6 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 shadow-lg shadow-crimson/15"
                >
                  <Phone className="h-5 w-5" />
                  (510) 507-5088
                </a>
                <a
                  href="mailto:Enebly@aol.com"
                  className="inline-flex items-center gap-2.5 border-2 border-near-black/20 text-near-black text-base font-semibold px-6 py-3.5 rounded-full hover:border-crimson hover:text-crimson transition-all duration-200"
                >
                  <Mail className="h-5 w-5" />
                  Enebly@aol.com
                </a>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive-dark underline underline-offset-4 transition-colors"
              >
                Or fill out the contact form
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
