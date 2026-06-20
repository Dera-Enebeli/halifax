import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Home, Building2, DollarSign, ExternalLink } from "lucide-react"

const mortgageUrl = "https://www.empirelending.net"

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-16 lg:-mt-20">
      <div className="relative min-h-[calc(100dvh+64px)] lg:min-h-[calc(100dvh+80px)] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          alt="East Bay real estate — Halifax Properties & Investments"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />

        <div className="absolute bottom-0 left-0 right-0 h-28 md:h-40 bg-gradient-to-t from-near-black via-near-black/30 to-transparent backdrop-blur-[3px] z-[5]" />

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-16 lg:pt-20 pb-6 sm:pb-12 animate-fade-up opacity-0">
            <div className="w-[140px] h-[140px] sm:w-48 sm:h-48 mx-auto mb-4 relative flex items-center justify-center">
              <Image src="/main-logo.png" alt="Halifax Properties & Investments" width={128} height={128} className="object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-white font-serif text-[clamp(28px,6vw,48px)] leading-[1.1] tracking-tight mb-2">
              Halifax Properties <span className="text-crimson">&amp;</span> Investments
            </h1>
            <p className="text-white/70 font-medium text-body sm:text-lead mb-1">
              East Bay Real Estate
            </p>
            <p className="text-white/80 font-medium text-body sm:text-lead mb-0.5">
              30 Yrs Experience &middot; Realtor &middot; CalBRE# 00899654
            </p>
            <p className="text-white/50 font-light text-sm sm:text-body mb-4 sm:mb-6">
              by Geoffrey Enebly
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <a
                href="tel:+15105075088"
                className="inline-flex items-center justify-center gap-2 font-bold text-body sm:text-lead text-white bg-crimson hover:bg-crimson-dark px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
              >
                <Phone className="h-5 w-5" />
                (510) 507-5088
              </a>
              <a
                href="mailto:Enebly@aol.com"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-body text-white/80 hover:text-white border border-white/30 hover:border-white/60 px-5 sm:px-7 py-3.5 rounded-full transition-all duration-200"
              >
                <Mail className="h-[18px] w-[18px]" />
                Enebly@aol.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link
                href="/consultation?interest=buyer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <Home className="h-3.5 w-3.5 text-white/60" />
                Buy
              </Link>
              <Link
                href="/consultation?interest=seller"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <Building2 className="h-3.5 w-3.5 text-white/60" />
                Sell
              </Link>
              <Link
                href="/consultation?interest=homeowner"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <DollarSign className="h-3.5 w-3.5 text-white/60" />
                Valuation
              </Link>
              <a
                href={mortgageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5"
              >
                <ExternalLink className="h-3.5 w-3.5 text-white/60" />
                Pre-Approval
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
