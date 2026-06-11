import UtilityBar from "@/components/utility-bar"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import Link from "next/link"
import { Phone, Mail, HomeIcon, Building2, DollarSign, ArrowRight } from "lucide-react"

const services = [
  {
    icon: HomeIcon,
    title: "Buy",
    desc: "Looking for your next home? I'll help you find the right property in the East Bay and guide you through every step of the purchase.",
    href: "/consultation",
  },
  {
    icon: Building2,
    title: "Sell",
    desc: "Ready to sell? I'll market your property, handle showings, and negotiate the best price on your behalf.",
    href: "/consultation?interest=seller",
  },
  {
    icon: DollarSign,
    title: "Valuation",
    desc: "Curious what your home is worth? Get a free, no-obligation valuation based on local market data.",
    href: "/consultation?interest=homeowner",
  },
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
            <div className="text-center mb-10">
              <p className="text-[13px] font-medium tracking-[2px] uppercase text-olive mb-2">
                How I Can Help
              </p>
              <h2
                className="font-serif italic text-[clamp(26px,3.5vw,40px)] text-near-black leading-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                East Bay Real Estate Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.title}
                    href={s.href}
                    className="group bg-white rounded-xl border border-warm-border p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-olive/10 flex items-center justify-center group-hover:bg-olive/20 transition-colors">
                      <Icon className="h-6 w-6 text-olive" />
                    </div>
                    <h3 className="font-bold text-lg text-near-black mb-2">{s.title}</h3>
                    <p className="text-[16px] text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-[16px] font-semibold text-crimson group-hover:gap-2 transition-all">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )
              })}
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
                  href="mailto:geoffrey@halifaxproperties.com"
                  className="inline-flex items-center gap-2.5 border-2 border-near-black/20 text-near-black text-base font-semibold px-6 py-3.5 rounded-full hover:border-crimson hover:text-crimson transition-all duration-200"
                >
                  <Mail className="h-5 w-5" />
                  geoffrey@halifaxproperties.com
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
