import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-[100px]" style={{ background: "var(--color-cream, #F5F0E8)" }}>
      <div className="max-w-page section-padding text-center">
        <h2
          className="font-serif italic text-[clamp(32px,4vw,48px)] text-near-black mb-3 leading-tight"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Find Your Dream Home
        </h2>
        <p className="text-[15px] text-gray-500 font-light mb-9 max-w-[480px] mx-auto leading-relaxed">
          Browse our exclusive collection of luxury properties or schedule a private consultation with our team.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/listings"
            className="inline-block px-9 py-[14px] bg-terracotta text-white text-xs font-medium tracking-[1.5px] uppercase rounded hover:bg-terracotta-dark transition-all duration-300"
          >
            Browse Properties
          </Link>
          <Link
            href="#"
            className="inline-block px-9 py-[14px] bg-transparent text-terracotta text-xs font-medium tracking-[1.5px] uppercase rounded border border-terracotta hover:bg-terracotta hover:text-white transition-all duration-300"
          >
            Schedule a Tour
          </Link>
        </div>
      </div>
    </section>
  )
}
