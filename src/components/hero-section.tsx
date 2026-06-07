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
            <h1 className="text-white font-serif text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight mb-5">
              Invest Today in Your<br />Dream Home
            </h1>
            <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed font-light max-w-lg mx-auto mb-8">
              Discover exceptional properties across the East Bay.
              From charming bungalows to modern condos — find the perfect place to call home with expert guidance every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/listings"
                className="inline-flex items-center justify-center text-sm font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25 min-w-[160px]"
              >
                View Property
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
