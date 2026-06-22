import dynamic from "next/dynamic"
import UtilityBar from "@/components/utility-bar"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ArrowRight, ExternalLink } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import { cities } from "@/lib/city-data"

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section"), {
  loading: () => <div className="py-16 md:py-24 bg-cream" />,
})
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="bg-near-black py-16" />,
})

const services = [
  {
    label: "For Buyers",
    headline: "Your first home starts here",
    items: [
      "Free access to Bay Area property listings",
      "Free pre-foreclosure & off-market listings",
      "Free pre-qualification",
      "3% down",
      "Zero closing costs",
    ],
    href: "/consultation?interest=buyer",
  },
  {
    label: "For Sellers",
    headline: "Maximize your home\u2019s value",
    items: [
      "Free property value / appraisal",
      "Free market analysis",
      "Free guide to selling for top $$",
      "Free relocation",
    ],
    href: "/consultation?interest=seller",
  },
  {
    label: "Valuation",
    headline: "Know what your home is worth",
    items: [
      "Free home value estimate",
      "Free comparable market analysis",
      "Free local market data & trends",
      "Free no-obligation consultation",
    ],
    href: "/consultation?interest=homeowner",
  },
  {
    label: "Mortgage",
    headline: "Get pre-approved today",
    items: [
      "Conventional & FHA loans",
      "First-time home buyer programs",
      "Competitive interest rates",
      "Powered by Empire Lending Group \u2014 a division of Halifax Solutions Inc",
    ],
    href: "https://www.empirelending.net",
    external: true,
  },
]

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <HeroSection />

        <section className="relative overflow-hidden bg-near-black">
          <div
            className="absolute inset-0 md:inset-auto md:-top-24 md:-bottom-24 md:-right-24 md:w-[55%] opacity-[0.2] md:opacity-[0.45]"
            style={{
              maskImage: "linear-gradient(to left, black 25%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, black 25%, transparent 100%)",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1691320396937-e3b66cd332f1"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-near-black/40 to-near-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-near-black via-transparent to-near-black pointer-events-none" />
          <div className="max-w-page section-padding relative z-[1]">
            <ScrollReveal>
              <div className="text-center py-14 md:py-16 px-4">
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-olive/80 mb-4">
                  Free Consultation
                </p>
                <h2 className="font-serif italic text-[clamp(28px,3rem,52px)] font-medium text-white leading-[1.15] mb-5">
                  One Stop <span className="text-crimson italic">Real Estate</span>
                </h2>
                <hr className="w-12 h-[2px] bg-crimson border-0 mx-auto mb-5" />
                <p className="max-w-[600px] mx-auto text-sm text-white/50 leading-relaxed [text-wrap:pretty] mb-12 md:mb-14">
                  Buying, selling, or valuing&mdash;we guide you through every step of the East Bay market with local expertise and honest advice.
                </p>

                <h3 className="font-serif italic text-[clamp(22px,2.5vw,32px)] text-white leading-[1.2] mb-8 md:mb-10">
                  Find Your Home in the East Bay
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto">
                  {cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/areas/${c.slug}`}
                      className="group flex flex-col items-center justify-center gap-1.5 bg-white/5 hover:bg-crimson/15 rounded-lg px-3 py-5 md:py-6 transition-all duration-200"
                    >
                      <span className="font-serif italic text-sm md:text-base text-white/80 group-hover:text-crimson transition-colors">
                        {c.name}
                      </span>
                      <span className="text-xs text-white/30 group-hover:text-white/50 transition-colors text-center leading-tight">
                        {c.tagline}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/areas/oakland"
                  className="inline-flex items-center gap-1.5 text-xs mt-5 text-white/40 hover:text-crimson transition-colors font-medium uppercase tracking-wider"
                >
                  Explore all areas <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7 pb-14 md:pb-20">
              {services.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 150}>
                  <div className="relative pt-6 md:pt-8 px-5 md:px-7 pb-6 md:pb-7 border-t-[3px] border-crimson">
                  {i === 0 && (
                    <div className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.15] text-crimson pointer-events-none" aria-hidden="true">
                      <div className="w-full h-full rounded-full border border-current" />
                      <div className="absolute inset-7 rounded-full border border-current" />
                      <div className="absolute inset-14 rounded-full border border-current" />
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute -bottom-10 -left-10 w-44 h-44 opacity-[0.15] text-crimson pointer-events-none" aria-hidden="true">
                      <div className="w-full h-full border border-current rotate-45" />
                      <div className="absolute inset-10 border border-current rotate-45" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute top-1 right-1 w-28 h-28 opacity-[0.18] text-crimson pointer-events-none" aria-hidden="true">
                      <div className="w-3 h-3 rounded-full bg-current absolute" style={{top:'2px', left:'2px'}} />
                      <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'0', left:'22px'}} />
                      <div className="w-[18px] h-[18px] rounded-full bg-current absolute" style={{top:'12px', left:'48px'}} />
                      <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'30px', left:'8px'}} />
                      <div className="w-3 h-3 rounded-full bg-current absolute" style={{top:'36px', left:'42px'}} />
                      <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'52px', left:'48px'}} />
                      <div className="w-3 h-3 rounded-full bg-current absolute" style={{top:'50px', left:'0px'}} />
                      <div className="w-3 h-3 rounded-full bg-current absolute" style={{top:'52px', left:'18px'}} />
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.15] text-emerald-400 pointer-events-none" aria-hidden="true">
                      <div className="w-full h-full rounded-full border border-current" />
                      <div className="absolute inset-7 rounded-full border border-current" />
                      <div className="absolute inset-14 rounded-full border border-current" />
                    </div>
                  )}
                  <p className="font-serif italic text-olive text-base mb-2">{s.label}</p>
                  <h3 className="font-serif text-[22px] md:text-[28px] font-semibold leading-[1.2] text-white mb-4 md:mb-5">
                    {s.headline}
                  </h3>
                  <ul className="space-y-1.5 mb-7">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/60">
                        <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {s.external ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm sm:text-xs uppercase tracking-[0.08em] text-crimson font-medium border-b border-transparent hover:border-crimson transition-colors duration-200 py-2"
                    >
                      Apply now <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      href={s.href}
                      className="inline-block text-sm sm:text-xs uppercase tracking-[0.08em] text-crimson font-medium border-b border-transparent hover:border-crimson transition-colors duration-200 py-2"
                    >
                      Learn more &rarr;
                    </Link>
                  )}
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        <section className="py-14 md:py-20" style={{ background: "var(--color-cream-dark, #E4D7BE)" }}>
          <div className="max-w-page section-padding">
            <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
                Get in Touch
              </p>
              <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-near-black leading-tight mb-5 md:mb-6">
                Reach Out Directly
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mb-7 md:mb-8">
                <a
                  href="tel:+15105075088"
                    className="inline-flex items-center justify-center gap-2.5 bg-crimson text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-3.5 sm:py-4 rounded-full hover:bg-crimson-dark transition-all duration-200 shadow-lg shadow-crimson/15 w-full sm:w-auto"
                  >
                    <Phone className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                    (510) 507-5088
                  </a>
                  <a
                    href="mailto:Enebly@aol.com"
                    className="inline-flex items-center justify-center gap-2.5 border-2 border-near-black/20 text-near-black text-sm sm:text-base font-semibold px-5 sm:px-6 py-3.5 sm:py-4 rounded-full hover:border-crimson hover:text-crimson transition-all duration-200 w-full sm:w-auto"
                  >
                    <Mail className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
                  Enebly@aol.com
                </a>
              </div>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-olive hover:text-olive-dark underline underline-offset-4 transition-colors"
              >
                Or fill out the contact form
              </Link>
            </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
