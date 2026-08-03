import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Home, Building2, DollarSign, ExternalLink } from "lucide-react"
import ExitConfirmLink from "./exit-confirm-link"

const mortgageUrl = "https://www.empirelending.net"

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-24 lg:-mt-28">
      <div className="relative min-h-[calc(100dvh+96px)] lg:min-h-[calc(100dvh+112px)] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
          alt="East Bay real estate — Halifax Properties & Investments"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/15" />

        <div className="absolute bottom-0 left-0 right-0 h-20 md:h-28 bg-gradient-to-t from-black/40 via-black/20 to-transparent z-[5]" />

        <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-24 lg:pt-28 pb-6 sm:pb-12 animate-fade-up opacity-0">
            <div className="w-[160px] aspect-[3/2] sm:w-64 mx-auto mb-6 relative flex items-center justify-center">
              <Image src="/main-logo.png?v=2" alt="Halifax Properties & Investments" width={256} height={256} loading="eager" className="object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-white font-serif text-[clamp(28px,6vw,48px)] leading-[1.1] tracking-tight mb-2">
              Halifax Properties <span className="text-crimson">&amp;</span> Investments
            </h1>
            <p className="text-white/80 font-medium text-body sm:text-lead mb-1">
              East Bay Real Estate
            </p>
            <p className="text-white/85 font-medium text-body sm:text-lead mb-0.5">
              30 Yrs Experience &middot; Realtor &middot; CalBRE# 00899654
            </p>
            <p className="text-white/65 font-light text-body mb-4 sm:mb-6 inline-flex items-center gap-2">
              by Geoffrey Enebly
              <Image src="/realtor-badge.png?v=2" alt="Realtor" width={24} height={27} className="object-contain inline-block" />
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-5 sm:mb-6">
              <a
                href="tel:+15105075088"
                className="inline-flex items-center justify-center gap-1.5 font-bold text-sm sm:text-lead text-white bg-crimson hover:bg-crimson-dark px-3 sm:px-8 py-2.5 sm:py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
              >
                <Phone className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                (510) 507-5088
              </a>
              <a
                href="mailto:Enebly@aol.com"
                className="inline-flex items-center justify-center gap-1.5 font-semibold text-sm sm:text-body text-white/85 hover:text-white border border-white/30 hover:border-white/60 px-3 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200"
              >
                <Mail className="h-3.5 w-3.5 sm:h-[18px] sm:w-[18px]" />
                Enebly@aol.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-6 max-w-xs sm:max-w-none mx-auto">
              <Link
                href="/consultation?interest=buyer"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm sm:text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5 justify-center"
              >
                <Home className="h-3.5 w-3.5 text-white/75" />
                Buy
              </Link>
              <Link
                href="/consultation?interest=seller"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm sm:text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5 justify-center"
              >
                <Building2 className="h-3.5 w-3.5 text-white/75" />
                Sell
              </Link>
              <Link
                href="/consultation?interest=homeowner"
                className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm sm:text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5 justify-center"
              >
                <DollarSign className="h-3.5 w-3.5 text-white/75" />
                Valuation
              </Link>
              <ExitConfirmLink
                href={mortgageUrl}
                className="basis-full sm:basis-auto flex items-center gap-1.5 text-white/80 hover:text-white text-sm sm:text-body font-medium transition-colors duration-200 border-b border-transparent hover:border-white/40 pb-0.5 justify-center sm:justify-center cursor-pointer"
              >
                <ExternalLink className="h-3.5 w-3.5 text-white/75" />
                Pre-Approval
              </ExitConfirmLink>
            </div>
          </div>
        </div>
      </section>
  )
}
