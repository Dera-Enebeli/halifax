import Link from "next/link"
import { Home, Building2, DollarSign, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

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
      <Header />
      <main className="pt-20">
        <div className="py-16" style={{ background: "rgba(45, 25, 15, 0.85)" }}>
          <div className="max-w-page section-padding text-center">
            <h1 className="font-serif italic text-3xl md:text-4xl text-white mb-3" style={{ fontFamily: "var(--font-serif)" }}>
              About Halifax Properties &amp; Investments
            </h1>
            <p className="text-white/70 text-sm font-light max-w-xl mx-auto">
              Your trusted East Bay real estate partner — helping families buy, sell, and value homes across Oakland, Berkeley, Walnut Creek, Dublin, and beyond.
            </p>
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
                Led by agent Geoffrey Enebeli, we bring years of East Bay market knowledge, honest advice, and a genuine commitment 
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
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
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
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center font-serif text-[30px] font-bold bg-terracotta text-white rounded-full" style={{ fontFamily: "var(--font-serif)" }}>
                    GE
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-near-black mb-1">Meet Geoffrey Enebeli</h3>
                    <p className="text-sm text-olive font-medium tracking-wide uppercase mb-3">East Bay Real Estate Agent</p>
                    <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
                      Alex has spent years helping East Bay families navigate the real estate market with confidence. 
                      Whether you&apos;re a first-time buyer looking in Fremont or a family selling their home of 30 years in Berkeley, 
                      Alex brings the same dedication, market knowledge, and personal attention to every client.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-terracotta" />
                        (510) 555-0142
                      </span>
                      <span className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-terracotta" />
                        geoffrey@halifaxproperties.com
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-terracotta" />
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
              Browse East Bay listings or reach out for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 bg-terracotta text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-terracotta-dark transition-all duration-200"
              >
                <Home className="h-4 w-4" />
                View East Bay Listings
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 border border-terracotta text-terracotta text-sm font-semibold px-6 py-3 rounded-full hover:bg-terracotta hover:text-white transition-all duration-200"
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
