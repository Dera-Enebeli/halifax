import Link from "next/link"
import { Home, FileText, DollarSign } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-page section-padding">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=90")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/5" />

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="text-terracotta text-sm font-bold tracking-[3px] uppercase mb-5">
              Halifax Properties &amp; Investments — East Bay Listings
            </p>
            <h1 className="text-white font-serif text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-tight mb-6">
              Find Your Place in the<br />East Bay
            </h1>
            <p className="text-white text-[18px] sm:text-[20px] leading-relaxed font-normal max-w-2xl mx-auto mb-10">
              Exclusive East Bay listings. From Oakland to Walnut Creek,
              Dublin to Berkeley — your next home starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consultation?interest=buyer"
                className="inline-flex items-center justify-center gap-2.5 text-[17px] font-bold text-white bg-terracotta hover:bg-terracotta-dark px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 min-w-[170px]"
              >
                <Home className="h-5 w-5" />
                Buy a House
              </Link>
              <Link
                href="/consultation?interest=seller"
                className="inline-flex items-center justify-center gap-2.5 text-[17px] font-bold text-white bg-terracotta hover:bg-terracotta-dark px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 min-w-[170px]"
              >
                <FileText className="h-5 w-5" />
                Sell a House
              </Link>
              <Link
                href="/consultation?interest=homeowner"
                className="inline-flex items-center justify-center gap-2.5 text-[17px] font-bold text-white bg-terracotta hover:bg-terracotta-dark px-7 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 min-w-[170px]"
              >
                <DollarSign className="h-5 w-5" />
                Home Valuation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
