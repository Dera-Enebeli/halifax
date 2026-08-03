import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone, Mail, Building2, ExternalLink, MapPin } from "lucide-react"
import ExitConfirmLink from "@/components/exit-confirm-link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import { agent, teamMembers, certifications, eastBayCities } from "@/lib/mock-data"
import ScrollReveal from "@/components/scroll-reveal"
import TestimonialsSection from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Our Team | Halifax Properties — East Bay Real Estate",
  description:
    "Meet the team at Halifax Properties & Investments. Led by Geoffrey Enebly, we help families buy, sell, and value homes across the East Bay.",
  openGraph: {
    title: "Our Team | Halifax Properties — East Bay Real Estate",
    description:
      "Meet the team at Halifax Properties & Investments. Led by Geoffrey Enebly, we help families buy, sell, and value homes across the East Bay.",
  },
  twitter: {
    title: "Our Team | Halifax Properties — East Bay Real Estate",
    description:
      "Meet the team at Halifax Properties & Investments.",
  },
  alternates: {
    canonical: "/team",
  },
}

const [geoffrey, braimah] = teamMembers

const keyCerts = certifications.filter((cert) =>
  ["CRS", "BPOR", "CDPE"].includes(cert.abbrev)
)

const serviceCities = eastBayCities.filter((city) => city !== "All Cities").slice(0, 5)

const stats = [
  { value: agent.experience.split(" ")[0], label: "Years Experience" },
  { value: agent.licensedSince, label: "Licensed Since" },
  { value: agent.license.replace("CalBRE# ", ""), label: "CalBRE License" },
  { value: "12", label: "5-Star Reviews" },
]

export default function TeamPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-24 lg:pt-28">

        <div className="bg-cream-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, #1A1A1A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="max-w-page section-padding relative">
            <div className="py-20 md:py-28">
              <div className="max-w-3xl">
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-4">
                  Our Team
                </p>
                <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-near-black leading-[1.1] mb-5">
                  Meet the <span className="text-crimson">Team</span>
                </h1>
                <div className="w-16 h-[3px] bg-crimson mb-6" />
                <p className="text-near-black/80 text-body leading-relaxed max-w-2xl font-light">
                  One parent company. Two expert teams. <strong className="text-near-black/85">Halifax Properties &amp; Investments</strong> handles East Bay real estate&mdash;buying, selling, and valuations. Through <strong className="text-near-black/85">Halifax Solutions Inc</strong>, our parent company, Empire Lending Group provides mortgage and financing services. From your first conversation to closing day, we cover every step.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-14 md:py-16">
          <div className="max-w-page section-padding">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
                  <div className="lg:col-span-2">
                    <div className="bg-cream p-6 md:p-8 rounded-lg">
                      <div className="w-28 h-28 md:w-36 md:h-36 relative mx-auto md:mx-0 rounded-full overflow-hidden mb-5 border-2 border-warm-border">
                        {geoffrey.image ? (
                          <Image src={geoffrey.image} alt={geoffrey.name} fill className="object-cover" />
                        ) : (
                          <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                            <Building2 className="h-10 w-10 text-near-black/20" />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3 mb-1">
                        <h3 className="font-bold text-xl text-near-black">{geoffrey.name}</h3>
                        <Image src="/realtor-badge.png?v=2" alt="Realtor" width={32} height={36} className="object-contain flex-shrink-0" />
                      </div>
                      <p className="text-sm text-crimson font-semibold text-center md:text-left mb-1">
                        {geoffrey.title}
                      </p>
                      <p className="text-xs text-near-black/70 text-center md:text-left mb-4">
                        {geoffrey.license}
                      </p>
                      <div className="h-px bg-warm-border mb-4" />
                      <div className="space-y-2.5">
                        <a href={`tel:+1${geoffrey.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2.5 text-sm sm:text-body text-near-black/75 hover:text-crimson transition-colors duration-200">
                          <Phone className="h-3.5 w-3.5 text-crimson shrink-0" />
                          {geoffrey.phone}
                        </a>
                        <a href={`mailto:${geoffrey.email}`} className="flex items-center gap-2.5 text-sm sm:text-body text-near-black/75 hover:text-crimson transition-colors duration-200">
                          <Mail className="h-3.5 w-3.5 text-crimson shrink-0" />
                          {geoffrey.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <p className="text-body text-near-black/80 leading-relaxed mb-5">
                      {geoffrey.description}
                    </p>
                    {geoffrey.sections ? (
                      <div className="space-y-5">
                        {geoffrey.sections.map((section) => (
                          <div key={section.label}>
                            <p className="text-xs font-bold tracking-[2px] uppercase text-crimson mb-2">
                              {section.label}
                            </p>
                            <ul className="space-y-1.5">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm sm:text-body text-near-black/80 leading-relaxed">
                                  <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <div className="pt-6 mt-6 border-t border-warm-border">
                      <p className="text-xs font-bold tracking-[2px] uppercase text-olive mb-3">
                        Certifications
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {keyCerts.map((cert) => (
                          <div key={cert.abbrev} className="flex items-center gap-2 bg-cream rounded-full px-4 py-2 border border-warm-border">
                            <Image src={cert.image} alt={cert.abbrev} width={20} height={20} className="object-contain" />
                            <span className="text-xs font-bold text-near-black">{cert.abbrev}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="bg-cream-dark border-y border-warm-border">
          <div className="max-w-page section-padding">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 py-8 md:py-10 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif italic text-[clamp(28px,3.5vw,40px)] text-near-black leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[1.5px] uppercase text-near-black/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-warm-border py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {serviceCities.map((city) => (
                <span key={city} className="flex items-center gap-1.5 text-sm text-near-black/70">
                  <MapPin className="h-3.5 w-3.5 text-crimson/60" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="max-w-page section-padding">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="text-center pt-2 md:pt-4 mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="h-px w-8 bg-crimson/30" />
                    <span className="text-xs font-bold tracking-[2px] uppercase text-crimson">Mortgage Referral</span>
                    <span className="h-px w-8 bg-crimson/30" />
                  </div>
                  <p className="text-sm text-near-black/70 max-w-lg mx-auto">
                    Financing handled by Empire Lending Group, a division of Halifax Solutions Inc &mdash; separate from our real estate team but working together for you.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="bg-cream rounded-lg border border-warm-border overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-warm-border">
                      <div className="flex flex-col items-center md:items-start gap-5 md:gap-0">
                        <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-full overflow-hidden border-2 border-warm-border flex-shrink-0 md:mb-4">
                          {braimah.image ? (
                            <Image src={braimah.image} alt={braimah.name} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                              <Building2 className="h-8 w-8 text-near-black/20" />
                            </div>
                          )}
                        </div>
                        <div className="text-center md:text-left min-w-0">
                          <h3 className="font-bold text-lg text-near-black">{braimah.name}</h3>
                          <p className="text-sm text-crimson font-semibold mb-1">{braimah.title}</p>
                          <p className="text-xs text-near-black/70 mb-4">{braimah.license}</p>
                          <div className="space-y-2.5">
                            <a href={`tel:+1${braimah.phone.replace(/[^\d]/g, "")}`} className="flex items-center justify-center md:justify-start gap-2.5 text-sm text-near-black/75 hover:text-crimson transition-colors duration-200">
                              <Phone className="h-3.5 w-3.5 text-crimson shrink-0" />
                              {braimah.phone}
                            </a>
                            <a href={`mailto:${braimah.email}`} className="flex items-center justify-center md:justify-start gap-2.5 text-sm text-near-black/75 hover:text-crimson transition-colors duration-200 [overflow-wrap:anywhere]">
                              <Mail className="h-3.5 w-3.5 text-crimson shrink-0" />
                              {braimah.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                      <p className="text-sm text-near-black/80 leading-relaxed mb-4">
                        {braimah.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {braimah.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm text-near-black/80 leading-relaxed">
                            <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 pt-5 border-t border-warm-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-xs text-near-black/60">
                          Empire Lending Group is a division of Halifax Solutions Inc. NMLS #1817865.
                        </p>
                        <ExitConfirmLink
                          href="https://www.empirelending.net"
                          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-crimson hover:text-crimson-dark transition-colors cursor-pointer shrink-0"
                        >
                          Visit Website <ExternalLink className="h-3.5 w-3.5" />
                        </ExitConfirmLink>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <div className="border-y border-warm-border">
          <TestimonialsSection />
        </div>

        <section className="py-14 md:py-16 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-4">
                Work With Geoffrey
              </h2>
              <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
              <p className="text-sm text-near-black/75 font-light mb-10 max-w-md mx-auto">
                Whether you&apos;re buying, selling, or just exploring your options, Geoffrey is here to help.
              </p>
              </ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/25 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
