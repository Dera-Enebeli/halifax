import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Phone, Mail, Building2, ExternalLink, Check } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import { teamMembers, agent } from "@/lib/mock-data"
import ScrollReveal from "@/components/scroll-reveal"

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

export default function TeamPage() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-16 lg:pt-20">

        <div className="bg-near-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div className="max-w-page section-padding relative">
            <div className="py-20 md:py-28">
              <div className="max-w-3xl">
                <p className="text-xs font-medium tracking-[2px] uppercase text-white/40 mb-4">
                  Our Team
                </p>
                <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-white leading-[1.1] mb-5">
                  Meet the <span className="text-crimson">Team</span>
                </h1>
                <div className="w-16 h-[3px] bg-crimson mb-6" />
                <p className="text-white/60 text-body leading-relaxed max-w-2xl font-light">
                  From first consultation to closing day, our team brings decades of experience and a personal commitment to your success.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 md:py-24">
          <div className="max-w-page section-padding">
            <div className="max-w-5xl mx-auto space-y-16">
              {teamMembers.map((member, i) => (
                <ScrollReveal key={member.id} delay={i * 150}>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
                    <div className="lg:col-span-2">
                      <div className="bg-cream p-6 md:p-8 rounded-lg">
                        <div className="w-28 h-28 md:w-36 md:h-36 relative mx-auto md:mx-0 rounded-full overflow-hidden mb-5 border-2 border-warm-border">
                          {member.image ? (
                            <Image src={member.image} alt={member.name} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full bg-cream-dark flex items-center justify-center">
                              <Building2 className="h-10 w-10 text-near-black/20" />
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-xl text-near-black text-center md:text-left">{member.name}</h3>
                        <p className="text-sm text-crimson font-semibold text-center md:text-left mb-1">
                          {member.title}
                        </p>
                        <p className="text-xs text-near-black/50 text-center md:text-left mb-4">
                          {member.license}
                        </p>

                        <div className="h-px bg-warm-border mb-4" />

                        <div className="space-y-2.5">
                          <a
                            href={`tel:+1${member.phone.replace(/[^\d]/g, "")}`}
                            className="flex items-center gap-2.5 text-sm sm:text-body text-near-black/60 hover:text-crimson transition-colors duration-200"
                          >
                            <Phone className="h-3.5 w-3.5 text-crimson shrink-0" />
                            {member.phone}
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2.5 text-sm sm:text-body text-near-black/60 hover:text-crimson transition-colors duration-200"
                          >
                            <Mail className="h-3.5 w-3.5 text-crimson shrink-0" />
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-3 flex flex-col justify-center">
                      <p className="text-body text-near-black/70 leading-relaxed mb-6">
                        {member.description}
                      </p>
                      <ul className="space-y-2">
                        {member.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3 text-sm sm:text-body text-near-black/65 leading-relaxed">
                            <span className="w-[5px] h-[5px] rounded-full bg-crimson mt-[9px] flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-4">
                Work With Us
              </h2>
              <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
              <p className="text-sm text-near-black/60 font-light mb-10 max-w-md mx-auto">
                Whether you&apos;re buying, selling, or just exploring your options, our team is here to help.
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
                <a
                  href="https://www.empirelending.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-near-black/15 text-near-black/70 text-sm font-semibold px-7 py-3.5 rounded-full hover:border-near-black/30 hover:text-near-black transition-all duration-200 w-full sm:w-auto"
                >
                  <ExternalLink className="h-4 w-4" />
                  Mortgage Services
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
