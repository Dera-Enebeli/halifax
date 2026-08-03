import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Phone, Home, Building2, ArrowLeft, MapPin, Star, School } from "lucide-react"
import { cityBySlug } from "@/lib/city-data"
import { neighborhoodBySlug, neighborhoods } from "@/lib/neighborhood-data"
import ScrollReveal from "@/components/scroll-reveal"
import { agent } from "@/lib/mock-data"
import type { NeighborhoodInfo } from "@/lib/neighborhood-data"

interface Props {
  params: Promise<{ city: string; neighborhood: string }>
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://HalifaxProperties.org"

export async function generateStaticParams() {
  return neighborhoods.map((n) => ({
    city: n.citySlug,
    neighborhood: n.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, neighborhood } = await params
  const info = neighborhoodBySlug[neighborhood]
  if (!info || info.citySlug !== city) return {}

  const cityInfo = cityBySlug[city]
  if (!cityInfo) return {}

  const title = `Homes for Sale in ${info.name}, ${info.cityName} | Geoffrey Enebly — Halifax Properties`
  const description = `Looking for homes for sale in ${info.name}, ${info.cityName}? Geoffrey Enebly is a trusted ${info.cityName} real estate agent specializing in the ${info.name} neighborhood. ${info.headline}. Free consultation.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}/areas/${city}/${neighborhood}`,
      siteName: "Halifax Properties & Investments",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `/areas/${city}/${neighborhood}`,
    },
  }
}

function HeroImage({ info }: { info: NeighborhoodInfo }) {
  const heroId = info.slug === "rockridge" ? "1480074568708-e7b720bb3f09"
    : info.slug === "montclair" ? "1512917774080-9991f1c4c750"
    : info.slug === "temescal" ? "1600596542815-ffad4c1539a9"
    : info.slug === "elmwood" ? "1570129477492-45c003edd2be"
    : info.slug === "north-berkeley" ? "1580587771525-78b9dba3b914"
    : info.slug === "berkeley-hills" ? "1434082033009-b81d41d32e1c"
    : info.slug === "downtown-walnut-creek" ? "1583608205776-bfd35f0d9f83"
    : info.slug === "northgate" ? "1588880331179-bc9b93a8cb5e"
    : info.slug === "dublin-ranch" ? "1568605114967-8130f3a36994"
    : info.slug === "east-dublin" ? "1523217582562-09d0def993a6"
    : info.slug === "downtown-pleasanton" ? "1494526585095-c41746248156"
    : info.slug === "vintage-hills" ? "1554995207-c18c203602cb"
    : "1512917774080-9991f1c4c750"

  return (
    <div className="relative h-48 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
      <Image
        src={`https://images.unsplash.com/photo-${heroId}?w=1200&q=85`}
        alt={`${info.name} neighborhood in ${info.cityName}, CA — homes for sale`}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-near-black/20 to-transparent" />
    </div>
  )
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city, neighborhood } = await params
  const info = neighborhoodBySlug[neighborhood]
  if (!info || info.citySlug !== city) notFound()

  const cityInfo = cityBySlug[city]
  if (!cityInfo) notFound()

  return (
    <>
      <HeroImage info={info} />

      <section className="bg-cream-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, #1A1A1A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="max-w-page section-padding relative">
          <div className="py-10 md:py-14">
            <Link
              href={`/areas/${city}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-near-black/70 hover:text-near-black transition-colors mb-5"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to {info.cityName}
            </Link>
            <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
              {info.cityName} Neighborhood
            </p>
            <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-near-black leading-[1.1] mb-3">
              {info.name}
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-crimson mb-4">
              {info.headline}
            </p>
            <div className="w-16 h-[3px] bg-crimson mb-6" />
            <p className="text-near-black/80 text-body leading-relaxed max-w-2xl font-light">
              {info.longDescription}
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
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-crimson" />
                    <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2]">
                      Why Live in {info.name}
                    </h2>
                  </div>
                  <p className="text-body text-near-black/80 leading-relaxed font-light">
                    {info.whyLiveHere}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-crimson" />
                    <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2]">
                      Neighborhood Highlights
                    </h2>
                  </div>
                  <ul className="space-y-2.5">
                    {info.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-near-black/80 leading-relaxed font-light">
                        <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <School className="h-5 w-5 text-crimson" />
                    <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2]">
                      Schools & Commute
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-cream-dark rounded-lg px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-crimson mb-2">Education</p>
                      <p className="text-sm text-near-black/80 leading-relaxed font-light">{cityInfo.schoolNote}</p>
                    </div>
                    <div className="bg-cream-dark rounded-lg px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-crimson mb-2">Commute</p>
                      <p className="text-sm text-near-black/80 leading-relaxed font-light">{cityInfo.commuteNote}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <h2 className="font-serif italic text-[clamp(22px,2.5vw,30px)] text-near-black leading-[1.2] mb-4">
                    Homes for Sale in {info.name}
                  </h2>
                  <p className="text-sm text-near-black/80 leading-relaxed font-light mb-4">
                    {info.name} is one of {info.cityName}&apos;s most desirable neighborhoods, offering a unique lifestyle that appeals to a wide range of buyers. Whether you&apos;re looking for a cozy bungalow, a modern townhome, or a hillside estate, Geoffrey Enebly can help you find the perfect property in {info.name}.
                  </p>
                  <Link
                    href={`/areas/${city}`}
                    className="inline-flex items-center gap-2 text-crimson text-sm font-bold hover:text-crimson-dark transition-colors"
                  >
                    View all {info.cityName} neighborhoods &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-cream-dark rounded-lg p-6 md:p-7 sticky top-24">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 border-[3px] border-cream shadow-md">
                  <Image src={agent.image} alt="Geoffrey Enebly" fill className="object-cover" sizes="112px" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-near-black text-center">
                    Work with Geoffrey
                  </h3>
                  <Image src="/realtor-badge.png?v=2" alt="Realtor" width={28} height={32} className="object-contain flex-shrink-0" />
                </div>
                <p className="text-xs text-center text-near-black/70 mb-4">
                  {agent.type} &middot; {agent.experience}
                </p>
                <p className="text-sm text-near-black/80 leading-relaxed font-light text-center mb-5">
                  Looking for homes in {info.name}? I know this neighborhood inside and out. Let&apos;s find your perfect home.
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
                    href={`/consultation?interest=buyer&area=${city}&neighborhood=${neighborhood}`}
                    className="flex items-center justify-center gap-2 border-2 border-crimson text-crimson text-sm font-semibold py-3 rounded-full hover:bg-crimson hover:text-white transition-all duration-200 w-full"
                  >
                    <Building2 className="h-4 w-4" />
                    Free Consultation
                  </Link>
                </div>
                <div className="mt-5 pt-5 border-t border-warm-border">
                  <p className="text-xs font-medium uppercase tracking-wider text-near-black/60 text-center mb-2">
                    Your {info.cityName} Agent
                  </p>
                  <p className="text-xs text-near-black/70 text-center font-light">
                    {agent.license}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-cream-dark">
        <div className="max-w-page section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                {info.cityName} Real Estate
              </p>
              <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-near-black leading-[1.15]">
                Ready to Find Your Home in {info.name}?
              </h2>
              <div className="w-10 h-[3px] bg-crimson mx-auto mt-4 mb-5" />
              <p className="text-sm text-near-black/70 font-light mb-8 max-w-md mx-auto">
                Whether you&apos;re buying or selling in {info.name}, Geoffrey Enebly brings decades of local expertise to every transaction. Reach out for a free consultation.
              </p>
            </ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/consultation?interest=buyer&area=${city}&neighborhood=${neighborhood}`}
                className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full sm:w-auto"
              >
                <Home className="h-4 w-4" />
                Get a Free Consultation
              </Link>
              <Link
                href={`/areas/${city}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-near-black/15 text-near-black/80 text-sm font-semibold px-7 py-3.5 rounded-full hover:border-near-black/30 hover:text-near-black transition-all duration-200 w-full sm:w-auto"
              >
                <MapPin className="h-4 w-4" />
                Explore {info.cityName}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
