import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Home, Building2, DollarSign, Phone, Mail, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"
import { agent, certifications } from "@/lib/mock-data"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "About Geoffrey Enebly | Halifax Properties — East Bay Real Estate Agent",
  description:
    "Meet Geoffrey Enebly — East Bay real estate agent with 30 years experience. Buy, sell, or value your home in Oakland, Berkeley, Walnut Creek, Dublin & beyond. Broker, CalBRE# 00899654.",
  openGraph: {
    title: "About Geoffrey Enebly | Halifax Properties — East Bay Real Estate Agent",
    description:
      "Meet Geoffrey Enebly — East Bay real estate agent with 30 years experience. Buy, sell, or value your home in Oakland, Berkeley, Walnut Creek, Dublin & beyond.",
  },
  twitter: {
    title: "About Geoffrey Enebly | Halifax Properties — East Bay Real Estate Agent",
    description:
      "Meet Geoffrey Enebly — East Bay real estate agent with 30 years experience.",
  },
  alternates: {
    canonical: "/about",
  },
}

const values = [
  {
    icon: Home,
    title: "Buy",
    desc: "We help you find the perfect East Bay home — from Oakland craftsman bungalows to Walnut Creek townhomes. We handle the search, the paperwork, and the negotiation so you can focus on moving in.",
  },
  {
    icon: Building2,
    title: "Sell",
    desc: "We market your property to the right buyers, stage it for success, and negotiate the best price. Our East Bay expertise means your home gets seen by people who are ready to buy.",
  },
  {
    icon: DollarSign,
    title: "Valuation",
    desc: "Curious what your home is worth? We provide free, accurate property valuations based on recent comparable sales and local market trends — no obligation, just straight answers.",
  },
]

export default function AboutPage() {
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
                  About
                </p>
                <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-white leading-[1.1] mb-5">
                  Halifax Properties<br />
                  <span className="text-crimson">&amp;</span> Investments
                </h1>
                <div className="w-16 h-[3px] bg-crimson mb-6" />
                <p className="text-white/60 text-[15px] md:text-[17px] leading-relaxed max-w-2xl font-light">
                  Your trusted East Bay real estate partner — helping families buy, sell, and value homes across Oakland, Berkeley, Walnut Creek, Dublin, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 md:py-24">
          <div className="max-w-page section-padding">
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                Our Mission
              </p>
              <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                Making East Bay Real Estate Simple
              </h2>
              <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
              <p className="text-[15px] md:text-[16px] text-near-black/60 leading-relaxed font-light max-w-xl mx-auto">
                At Halifax Properties &amp; Investments, we believe buying or selling a home should be exciting, not overwhelming. 
                Led by Geoffrey Enebly, we bring years of East Bay market knowledge, honest advice, and a genuine commitment 
                to helping you reach your goals — whether that&apos;s finding your first home, upgrading to more space, downsizing, 
                or getting the best value for a property you&apos;re ready to sell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((item, i) => {
                const Icon = item.icon
                return (
                  <ScrollReveal key={item.title} delay={i * 150}>
                  <div className="relative overflow-hidden bg-[#FCFAF5] pt-0 px-7 pb-7 rounded-lg shadow-lg shadow-black/10">
                    {i === 0 && (
                      <div className="absolute -top-10 -right-10 w-48 h-48 opacity-[0.3] text-crimson pointer-events-none" aria-hidden="true">
                        <div className="w-full h-full rounded-full border-2 border-current" />
                        <div className="absolute inset-7 rounded-full border-2 border-current" />
                        <div className="absolute inset-14 rounded-full border-2 border-current" />
                      </div>
                    )}
                    {i === 1 && (
                      <div className="absolute -bottom-10 -left-10 w-44 h-44 opacity-[0.3] text-crimson pointer-events-none" aria-hidden="true">
                        <div className="w-full h-full border-2 border-current rotate-45" />
                        <div className="absolute inset-10 border-2 border-current rotate-45" />
                      </div>
                    )}
                    {i === 2 && (
                      <div className="absolute top-1 right-1 w-28 h-28 opacity-[0.35] text-crimson pointer-events-none" aria-hidden="true">
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
                    <div className="h-[3px] bg-crimson w-full mb-6 rounded-t-lg" />
                    <div className="relative z-[1]">
                      <div className="w-10 h-10 rounded-full bg-crimson/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-crimson" />
                      </div>
                      <h3 className="font-serif italic text-xl text-near-black mb-3">{item.title}</h3>
                      <p className="text-[15px] text-near-black/60 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                  <ScrollReveal>
                  <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                    Your Agent
                  </p>
                  <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                    Meet Geoffrey Enebly
                  </h2>
                  <div className="w-12 h-[3px] bg-crimson mx-auto mb-4" />
                  <p className="text-xs text-crimson font-bold tracking-wider uppercase">
                    Halifax Properties &amp; Investments &mdash; One Stop Real Estate
                  </p>
                  </ScrollReveal>
                </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
                <div className="lg:col-span-2">
                  <div className="bg-cream p-6 md:p-8 rounded-lg">
                    <div className="w-28 h-28 md:w-36 md:h-36 relative mx-auto md:mx-0 rounded-full overflow-hidden mb-5 border-2 border-warm-border">
                      <Image src={agent.image} alt="Geoffrey Enebly" fill className="object-cover" />
                    </div>
                    <h3 className="font-bold text-xl text-near-black text-center md:text-left">{agent.name}</h3>
                    <p className="text-sm text-crimson font-semibold text-center md:text-left mb-1">
                      {agent.type} &middot; {agent.experience}
                    </p>
                    <p className="text-xs text-near-black/50 text-center md:text-left mb-4">
                      {agent.license}
                    </p>

                    <div className="h-px bg-warm-border mb-4" />

                    <div className="space-y-2.5">
                      <span className="flex items-center gap-2.5 text-body text-near-black/60">
                        <span className="w-6 flex items-center justify-center">
                          <Phone className="h-3.5 w-3.5 text-crimson" />
                        </span>
                        (510) 507-5088
                      </span>
                      <span className="flex items-center gap-2.5 text-body text-near-black/60">
                        <span className="w-6 flex items-center justify-center">
                          <Mail className="h-3.5 w-3.5 text-crimson" />
                        </span>
                        Enebly@aol.com
                      </span>
                      <span className="flex items-center gap-2.5 text-body text-near-black/60">
                        <span className="w-6 flex items-center justify-center">
                          <MapPin className="h-3.5 w-3.5 text-crimson" />
                        </span>
                        {agent.address}
                      </span>
                      <span className="flex items-center gap-2.5 text-body text-near-black/60">
                        <span className="w-6 flex items-center justify-center">
                          <MapPin className="h-3.5 w-3.5 text-crimson" />
                        </span>
                        {agent.address2}
                      </span>
                    </div>

                    <div className="h-px bg-warm-border my-4" />

                    <div className="text-sm text-near-black/50 space-y-1 text-center md:text-left">
                      <p>{agent.brokerage}</p>
                      <p>Representing {agent.represents} &middot; Since {agent.licensedSince}</p>
                      <p>Service Areas: {agent.serviceAreas.join(", ")}</p>
                      <p>Languages: {agent.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="space-y-5 text-[15px] text-near-black/65 leading-relaxed font-light">
                    <hr className="w-12 h-[3px] bg-crimson border-0 mx-auto block lg:hidden" />
                    <p>
                      Choosing the right real estate agent makes all the difference. You need someone committed to delivering expert guidance and deep knowledge of the local market, someone who will walk you through every step of the buying or selling process with clarity and confidence. That level of dedication is what has allowed me to consistently deliver strong results for my clients.
                    </p>
                    <p>
                      There&apos;s nothing more rewarding to me than helping people achieve their real estate goals. I&apos;m committed to always acting in your best interest, and I pride myself on being honest, reliable, and knowledgeable. Whether you&apos;re searching for your dream home or aiming to secure the best possible offer for your property, I&apos;ll work tirelessly to make it happen.
                    </p>
                    <p>
                      From first-time buyers to seasoned investors, I&apos;m here to provide guidance, support, and results. Feel free to explore my website or reach out directly to schedule a consultation&mdash;I&apos;d be happy to help you every step of the way.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-4 md:mt-6">
                    <ScrollReveal delay={0}>
                    <div className="relative overflow-hidden bg-cream rounded-lg shadow-lg shadow-black/10 px-4 md:px-5 py-4 md:py-5">
                      <div className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.1] text-crimson pointer-events-none" aria-hidden="true">
                        <div className="w-full h-full rounded-full border border-current" />
                        <div className="absolute inset-7 rounded-full border border-current" />
                        <div className="absolute inset-14 rounded-full border border-current" />
                      </div>
                      <div className="h-[3px] bg-crimson w-full mb-3 md:mb-4 rounded-t" />
                      <p className="text-xs font-bold tracking-wider uppercase text-crimson mb-2">
                        Experience
                      </p>
                      <p className="text-sm md:text-[14px] text-near-black/60 leading-relaxed font-light">
                        Selling and listing residential &amp; commercial properties. Working with asset-managers and banks in property disposition.
                      </p>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal delay={150}>
                    <div className="relative overflow-hidden bg-cream rounded-lg shadow-lg shadow-black/10 px-4 md:px-5 py-4 md:py-5">
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-[0.1] text-crimson pointer-events-none" aria-hidden="true">
                        <div className="w-full h-full border border-current rotate-45" />
                        <div className="absolute inset-10 border border-current rotate-45" />
                      </div>
                      <div className="h-[3px] bg-crimson w-full mb-3 md:mb-4 rounded-t" />
                      <p className="text-xs font-bold tracking-wider uppercase text-crimson mb-2">
                        Services
                      </p>
                      <p className="text-sm md:text-[14px] text-near-black/60 leading-relaxed font-light">
                        Help home buyers find new homes. Help sellers cash in on their equity. Provide free market analysis and optimal timing.
                      </p>
                    </div>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                    <div className="relative overflow-hidden bg-cream rounded-lg shadow-lg shadow-black/10 px-4 md:px-5 py-4 md:py-5">
                      <div className="absolute top-1 right-1 w-24 h-24 opacity-[0.12] text-crimson pointer-events-none" aria-hidden="true">
                        <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'2px', left:'2px'}} />
                        <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'0', left:'22px'}} />
                        <div className="w-[14px] h-[14px] rounded-full bg-current absolute" style={{top:'12px', left:'48px'}} />
                        <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'30px', left:'8px'}} />
                        <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'36px', left:'42px'}} />
                        <div className="w-1.5 h-1.5 rounded-full bg-current absolute" style={{top:'52px', left:'48px'}} />
                        <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'50px', left:'0px'}} />
                        <div className="w-2 h-2 rounded-full bg-current absolute" style={{top:'52px', left:'18px'}} />
                      </div>
                      <div className="h-[3px] bg-crimson w-full mb-3 md:mb-4 rounded-t" />
                      <p className="text-xs font-bold tracking-wider uppercase text-crimson mb-2">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {["Default Property", "Investment Property", "Multi-Family", "Commercial"].map((item) => (
                          <span key={item} className="text-xs bg-crimson/10 text-crimson font-medium px-2.5 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="max-w-page section-padding">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <ScrollReveal>
                <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                  Credentials
                </p>
                <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                  Certifications <span className="text-crimson">&amp;</span> Designations
                </h2>
                <div className="w-12 h-[3px] bg-crimson mx-auto" />
                </ScrollReveal>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {certifications.map((cert, i) => (
                  <ScrollReveal key={cert.abbrev} delay={i * 100}>
                  <div className="relative overflow-hidden bg-cream pt-0 px-5 pb-6 text-center rounded-lg shadow-lg shadow-black/10">
                    <div className="h-[3px] bg-crimson w-full mb-5 rounded-t-lg" />
                    <div className="w-14 h-14 mx-auto mb-3 relative flex items-center justify-center bg-cream rounded-full">
                      <Image src={cert.image} alt={cert.abbrev} width={40} height={40} className="object-contain" />
                    </div>
                    <p className="text-sm font-bold text-near-black mb-0.5">{cert.abbrev}</p>
                    <p className="text-[12px] text-near-black/50 leading-snug break-words">{cert.name}</p>
                  </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-[1.15] mb-4">
                Ready to Get Started?
              </h2>
              <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
              <p className="text-[15px] text-near-black/60 font-light mb-10 sm:mb-10 md:mb-12 lg:mb-14 max-w-md mx-auto">
                Reach out for a free consultation and let&apos;s discuss your real estate goals.
              </p>
              </ScrollReveal>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-[15px] font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark hover:shadow-lg hover:shadow-crimson/25 transition-all duration-200 w-full sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Get a Free Consultation
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 border-2 border-crimson text-crimson text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-crimson hover:text-white transition-all duration-200 w-full sm:w-auto"
                >
                  Contact Geoffrey Enebly
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
