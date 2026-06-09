import Link from "next/link"
import { Phone, Mail, Home, Building2, DollarSign } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-page section-padding">
        <div className="relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=90")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

          <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-8 sm:py-12">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center font-serif text-[20px] sm:text-[24px] font-bold bg-terracotta text-white rounded-full" style={{ fontFamily: "var(--font-serif)" }}>
              H
            </div>
            <h1 className="text-white font-serif text-[clamp(28px,6vw,48px)] leading-[1.1] tracking-tight mb-2" style={{ fontFamily: "var(--font-serif)" }}>
              Halifax Properties <span className="text-terracotta">&amp;</span> Investments
            </h1>
            <p className="text-white/70 text-[15px] sm:text-[17px] font-medium mb-1">
              East Bay Real Estate
            </p>
            <p className="text-white/50 text-[13px] sm:text-[14px] font-light mb-5 sm:mb-6">
              by Geoffrey Enebeli
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              <a
                href="tel:+15105075088"
                className="inline-flex items-center justify-center gap-2 text-[15px] sm:text-[17px] font-bold text-white bg-terracotta hover:bg-terracotta-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25"
              >
                <Phone className="h-5 w-5" />
                (510) 507-5088
              </a>
              <a
                href="mailto:geoffrey@halifaxproperties.com"
                className="inline-flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-semibold text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200"
              >
                <Mail className="h-4.5 w-4.5" />
                geoffrey@halifaxproperties.com
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
              <Link
                href="/consultation?interest=buyer"
                className="group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-semibold px-2 sm:px-4 py-3 rounded-xl transition-all duration-200"
              >
                <Home className="h-5 w-5 sm:h-4 sm:w-4 text-terracotta" />
                <span>Buy</span>
              </Link>
              <Link
                href="/consultation?interest=seller"
                className="group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-semibold px-2 sm:px-4 py-3 rounded-xl transition-all duration-200"
              >
                <Building2 className="h-5 w-5 sm:h-4 sm:w-4 text-terracotta" />
                <span>Sell</span>
              </Link>
              <Link
                href="/consultation?interest=homeowner"
                className="group flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 text-white text-sm font-semibold px-2 sm:px-4 py-3 rounded-xl transition-all duration-200"
              >
                <DollarSign className="h-5 w-5 sm:h-4 sm:w-4 text-terracotta" />
                <span>Valuation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
