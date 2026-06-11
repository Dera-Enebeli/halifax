import Link from "next/link"
import Image from "next/image"
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
            <div className="w-[72px] h-[72px] sm:w-24 sm:h-24 mx-auto mb-4 relative flex items-center justify-center">
              <Image src="/logo.png" alt="Halifax Properties & Investments" width={96} height={96} className="object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-white font-serif text-[clamp(28px,6vw,48px)] leading-[1.1] tracking-tight mb-2" style={{ fontFamily: "var(--font-serif)" }}>
              Halifax Properties <span className="text-crimson">&amp;</span> Investments
            </h1>
            <p className="text-white/70 text-[15px] sm:text-[17px] font-medium mb-1">
              East Bay Real Estate
            </p>
            <p className="text-white/80 text-[14px] sm:text-[15px] font-medium mb-0.5">
              30 Yrs Experience &middot; Realtor &middot; CalBRE# 00899654
            </p>
            <p className="text-white/50 text-[13px] sm:text-[14px] font-light mb-5 sm:mb-6">
              by Geoffrey Enebly
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
              <a
                href="tel:+15105075088"
                className="inline-flex items-center justify-center gap-2 text-[15px] sm:text-[17px] font-bold text-white bg-crimson hover:bg-crimson-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
              >
                <Phone className="h-5 w-5" />
                (510) 507-5088
              </a>
              <a
                href="mailto:Enebly@aol.com"
                className="inline-flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-semibold text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-5 sm:px-7 py-3.5 rounded-full transition-all duration-200"
              >
                <Mail className="h-4.5 w-4.5" />
                Enebly@aol.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/consultation?interest=buyer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <Home className="h-3.5 w-3.5 text-sky" />
                Buy
              </Link>
              <Link
                href="/consultation?interest=seller"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <Building2 className="h-3.5 w-3.5 text-sky" />
                Sell
              </Link>
              <Link
                href="/consultation?interest=homeowner"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <DollarSign className="h-3.5 w-3.5 text-sky" />
                Valuation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
