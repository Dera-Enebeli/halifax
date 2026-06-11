import Image from "next/image"
import Link from "next/link"
import { Home, Building2, DollarSign, Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import UtilityBar from "@/components/utility-bar"

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
      <main className="pt-20">
        <div className="py-16" style={{ background: "rgba(30, 74, 122, 0.85)" }}>
          <div className="max-w-page section-padding">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="text-center">
            <h1 className="font-serif italic text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              About Halifax Properties &amp; Investments
            </h1>
            <p className="text-white/70 text-sm font-light max-w-xl mx-auto">
              Your trusted East Bay real estate partner — helping families buy, sell, and value homes across Oakland, Berkeley, Walnut Creek, Dublin, and beyond.
            </p>
          </div>
        </div>
      </div>

        <section className="py-16 md:py-20">
          <div className="max-w-page section-padding">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-[13px] font-medium tracking-[2px] uppercase text-olive mb-2">
                Our Mission
              </p>
              <h2 className="font-serif italic text-[clamp(26px,3.5vw,38px)] text-near-black leading-tight mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                Making East Bay Real Estate Simple
              </h2>
              <p className="text-[16px] text-gray-500 font-light leading-relaxed">
                At Halifax Properties &amp; Investments, we believe buying or selling a home should be exciting, not overwhelming. 
                Led by Geoffrey Enebeli, we bring years of East Bay market knowledge, honest advice, and a genuine commitment 
                to helping you reach your goals — whether that&apos;s finding your first home, upgrading to more space, downsizing, 
                or getting the best value for a property you&apos;re ready to sell.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-xl border border-warm-border p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-olive/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-olive" />
                    </div>
                    <h3 className="font-bold text-lg text-near-black mb-2">{item.title}</h3>
                    <p className="text-[16px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
          <div className="max-w-page section-padding">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl border border-warm-border p-8 sm:p-10 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-20 h-20 flex-shrink-0 relative flex items-center justify-center">
                    <Image src="/logo.png" alt="Halifax" width={80} height={80} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-near-black mb-1">Geoffrey Enebeli</h3>
                    <p className="text-sm text-crimson font-semibold tracking-wide mb-1">
                      Realtor, BA, CRS, CHS &middot; DRE# 0899654
                    </p>
                    <p className="text-sm text-olive font-medium tracking-wide uppercase mb-3">East Bay Real Estate Agent</p>
                    <div className="text-[15px] text-gray-500 leading-relaxed mb-4 space-y-4">
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
                    <p className="text-[13px] text-navy font-bold tracking-[2px] uppercase mb-4">
                      Halifax Properties &amp; Investment &mdash; One Stop Real Estate
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-[16px] text-gray-500">
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-crimson" />
                        (510) 507-5088
                      </span>
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-crimson" />
                        geoffrey@halifaxproperties.com
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-crimson" />
                        East Bay, CA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-page section-padding text-center">
            <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-near-black leading-tight mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              Ready to Get Started?
            </h2>
            <p className="text-[16px] text-gray-500 font-light mb-6">
              Reach out for a free consultation and let&apos;s discuss your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 bg-crimson text-white text-[16px] font-semibold px-6 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                Get a Free Consultation
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-crimson text-crimson text-[16px] font-semibold px-6 py-3.5 rounded-full hover:bg-crimson hover:text-white transition-all duration-200"
              >
                Contact Geoffrey Enebeli
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
