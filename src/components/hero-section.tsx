import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="max-w-page section-padding">
        <div className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
            <p className="text-terracotta text-xs font-semibold tracking-[3px] uppercase mb-4">
              Halifax Properties &amp; Investments — East Bay Listings
            </p>
            <h1 className="text-white font-serif text-[clamp(34px,5.5vw,60px)] leading-[1.05] tracking-tight mb-5">
              Find Your Place in the<br />East Bay
            </h1>
            <p className="text-white/85 text-[16px] sm:text-[17px] leading-relaxed font-light max-w-xl mx-auto mb-9">
              Exclusive East Bay listings. From Oakland to Walnut Creek,
              Dublin to Berkeley — your next home starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 min-w-[180px]"
              >
                Browse East Bay Listings
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center text-sm font-semibold text-white border-2 border-white/40 hover:border-white px-8 py-3.5 rounded-full transition-all duration-200 min-w-[160px]"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
