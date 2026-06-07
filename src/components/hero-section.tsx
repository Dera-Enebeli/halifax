import Link from "next/link"
import { Home, FileText, DollarSign, ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="max-w-page section-padding">
        <div className="relative rounded-3xl overflow-hidden min-h-[440px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=90")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />

          <div className="relative z-10 text-center px-5 max-w-3xl mx-auto py-12">
            <p className="text-white/80 text-[12px] sm:text-sm font-semibold tracking-[3px] uppercase mb-4">
              Halifax Properties &amp; Investments
            </p>
            <h1 className="text-white font-serif text-[clamp(30px,7vw,46px)] sm:text-[clamp(34px,5.5vw,56px)] lg:text-[clamp(38px,5.5vw,64px)] leading-[1.1] tracking-tight mb-4">
              Find Your Place in the<br />East Bay
            </h1>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-relaxed font-normal max-w-2xl mx-auto mb-7 sm:mb-8">
              Exclusive East Bay listings. From Oakland to Walnut Creek,
              Dublin to Berkeley — your next home starts here.
            </p>

            {/* Primary CTA */}
            <Link
              href="/listings"
              className="inline-flex items-center justify-center gap-2 text-[15px] sm:text-[18px] font-bold text-white bg-terracotta hover:bg-terracotta-dark px-5 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 hover:scale-[1.02] mb-5 sm:mb-6"
            >
              View East Bay Listings
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* Secondary links — clearly clickable, not buttons */}
            <div className="flex items-center justify-center gap-5 sm:gap-8">
              <Link
              href="/listings"
              className="text-white/70 hover:text-white text-[14px] sm:text-[15px] font-medium transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
            >
              <span className="sm:hidden">Buy</span>
              <span className="hidden sm:inline">Buy a House</span>
              </Link>
              <span className="text-white/20 text-[13px]">|</span>
              <Link
                href="/consultation?interest=seller"
                className="text-white/70 hover:text-white text-[14px] sm:text-[15px] font-medium transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
              >
                <span className="sm:hidden">Sell</span>
                <span className="hidden sm:inline">Sell a House</span>
              </Link>
              <span className="text-white/20 text-[13px]">|</span>
              <Link
                href="/consultation?interest=homeowner"
                className="text-white/70 hover:text-white text-[14px] sm:text-[15px] font-medium transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white/60"
              >
                <span className="sm:hidden">Valuation</span>
                <span className="hidden sm:inline">Home Valuation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
