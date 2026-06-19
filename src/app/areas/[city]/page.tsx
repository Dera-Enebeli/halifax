import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Phone, Home, Building2, ArrowLeft, MapPin } from "lucide-react"
import { cities, cityBySlug, areaRoutes } from "@/lib/city-data"
import { neighborhoodsByCity } from "@/lib/neighborhood-data"
import ScrollReveal from "@/components/scroll-reveal"
import { agent } from "@/lib/mock-data"

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return areaRoutes.map((slug) => ({ city: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params
  const info = cityBySlug[city]
  if (!info) return {}

  const title = `${info.name} Real Estate Agent | Geoffrey Enebly — East Bay Homes`
  const description = `Looking for real estate in ${info.name}? Geoffrey Enebly helps buyers and sellers in ${info.name}, CA. ${info.tagline}. Free consultation.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    alternates: {
      canonical: `/areas/${city}`,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city } = await params
  const info = cityBySlug[city]
  if (!info) notFound()

  const otherCities = cities.filter((c) => c.slug !== city)

  return (
    <>
      <section className="bg-near-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-page section-padding relative">
          <div className="py-16 md:py-20">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/40 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>
            <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
              East Bay Real Estate
            </p>
            <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-white leading-[1.1] mb-3">
              {info.name}
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-crimson mb-4">
              {info.tagline}
            </p>
            <div className="w-16 h-[3px] bg-crimson mb-6" />
            <p className="text-white/60 text-[15px] md:text-[17px] leading-relaxed max-w-2xl font-light">
              {info.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-page section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-10">


              <ScrollReveal>
                <div>
                  <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2] mb-4">
                    Key Neighborhoods
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {info.keyNeighborhoods.map((n) => (
                      <span
                        key={n}
                        className="text-sm bg-crimson/10 text-crimson font-medium px-3 py-1.5"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2] mb-4">
                    Local Highlights
                  </h2>
                  <ul className="space-y-2.5">
                    {info.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-[14px] md:text-[15px] text-near-black/65 leading-relaxed font-light">
                        <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {(() => {
                const nhs = neighborhoodsByCity(city)
                if (nhs.length === 0) return null
                return (
                  <ScrollReveal key="explore-nb">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="h-5 w-5 text-crimson" />
                        <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2]">
                          Explore Neighborhoods
                        </h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {nhs.map((n) => (
                          <Link
                            key={n.slug}
                            href={`/areas/${city}/${n.slug}`}
                            className="flex items-center justify-between bg-cream hover:bg-cream-dark transition-colors duration-200 rounded-lg px-5 py-4 group"
                          >
                            <div>
                              <p className="font-serif italic text-lg text-near-black group-hover:text-crimson transition-colors">
                                {n.name}
                              </p>
                              <p className="text-xs text-near-black/50">{n.headline}</p>
                            </div>
                            <span className="text-crimson text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })()}

              <ScrollReveal>
                <div>
                  <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2] mb-4">
                    Schools & Commute
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-cream-dark rounded-lg px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-crimson mb-2">Education</p>
                      <p className="text-[14px] text-near-black/65 leading-relaxed font-light">{info.schoolNote}</p>
                    </div>
                    <div className="bg-cream-dark rounded-lg px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-crimson mb-2">Commute</p>
                      <p className="text-[14px] text-near-black/65 leading-relaxed font-light">{info.commuteNote}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-cream-dark rounded-lg p-6 md:p-7 sticky top-24">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 border-[3px] border-cream shadow-md">
                  <Image src={agent.image} alt="Geoffrey Enebly" fill className="object-cover" sizes="112px" />
                </div>
                <h3 className="font-bold text-lg text-near-black text-center mb-1">
                  Work with Geoffrey
                </h3>
                <p className="text-xs text-center text-near-black/50 mb-4">
                  {agent.type} &middot; {agent.experience}
                </p>
                <p className="text-[14px] text-near-black/65 leading-relaxed font-light text-center mb-5">
                  {info.whyGeoffrey}
                </p>
                <div className="h-px bg-warm-border mb-5" />
                <div className="space-y-3">
                  <a
                    href="tel:+15105075088"
                    className="flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full"
                  >
                    <Phone className="h-4 w-4" />
                    (510) 507-5088
                  </a>
                  <Link
                    href={`/consultation?interest=${city === "walnut-creek" ? "buyer" : "homeowner"}`}
                    className="flex items-center justify-center gap-2 border-2 border-crimson text-crimson text-sm font-semibold py-3 rounded-full hover:bg-crimson hover:text-white transition-all duration-200 w-full"
                  >
                    <Building2 className="h-4 w-4" />
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-cream-dark">
        <div className="max-w-page section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <ScrollReveal>
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                  Explore More
                </p>
                <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-near-black leading-[1.15]">
                  Other East Bay Areas
                </h2>
                <div className="w-10 h-[3px] bg-crimson mx-auto mt-4" />
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/areas/${c.slug}`}
                  className="flex items-center justify-between bg-cream hover:bg-cream-dark transition-colors duration-200 rounded-lg px-5 py-4 group"
                >
                  <div>
                    <p className="font-serif italic text-lg text-near-black group-hover:text-crimson transition-colors">
                      {c.name}
                    </p>
                    <p className="text-xs text-near-black/50">{c.tagline}</p>
                  </div>
                  <span className="text-crimson text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-near-black">
        <div className="max-w-page section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-white leading-[1.15] mb-4">
                Ready to Find Your Home in {info.name}?
              </h2>
              <div className="w-10 h-[3px] bg-crimson mx-auto mb-5" />
              <p className="text-[15px] text-white/50 font-light mb-8 max-w-md mx-auto">
                Reach out for a free consultation and let&apos;s discuss your real estate goals in {info.name}.
              </p>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full sm:w-auto"
              >
                <Home className="h-4 w-4" />
                Get a Free Consultation
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white/80 text-[15px] font-semibold px-7 py-3.5 rounded-full hover:border-white/60 hover:text-white transition-all duration-200 w-full sm:w-auto"
              >
                Meet Geoffrey Enebly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
