import Link from "next/link"
import { Home, Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  {
    title: "East Bay",
    links: [
      { label: "Oakland", href: "/listings?city=Oakland" },
      { label: "Berkeley", href: "/listings?city=Berkeley" },
      { label: "Walnut Creek", href: "/listings?city=Walnut+Creek" },
      { label: "Dublin", href: "/listings?city=Dublin" },
      { label: "Pleasanton", href: "/listings?city=Pleasanton" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Buy a Home", href: "/listings" },
      { label: "Sell a Home", href: "/consultation?interest=seller" },
      { label: "Property Valuation", href: "/consultation?interest=homeowner" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/consultation" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-page section-padding">
        <div className="py-14 md:py-18">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 group mb-4">
                <div className="w-8 h-8 bg-terracotta rounded-lg flex items-center justify-center">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <span
                  className="font-serif italic text-xl text-white tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Halifax
                </span>
              </Link>
              <p className="text-[15px] sm:text-[13px] text-white/50 font-light leading-relaxed max-w-xs mb-6">
                Your East Bay real estate partner. Get access to premium properties across Oakland, Berkeley, Walnut Creek, Dublin, and the entire East Bay.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:+15105550142"
                  className="flex items-center gap-2.5 text-[15px] sm:text-[13px] text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Phone className="h-3.5 w-3.5 text-terracotta shrink-0" />
                  (510) 555-0142
                </a>
                <a
                  href="mailto:geoffrey@halifaxproperties.com"
                  className="flex items-center gap-2.5 text-[15px] sm:text-[13px] text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail className="h-3.5 w-3.5 text-terracotta shrink-0" />
                  geoffrey@halifaxproperties.com
                </a>
                <div className="flex items-center gap-2.5 text-[15px] sm:text-[13px] text-white/60">
                  <MapPin className="h-3.5 w-3.5 text-terracotta shrink-0" />
                  East Bay, CA
                </div>
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-bold text-white mb-4">{group.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[15px] sm:text-[13px] text-white/50 hover:text-white transition-colors duration-200 font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-[14px] sm:text-[12px] text-white/40 font-light">
          <span>
            &copy; {new Date().getFullYear()} Halifax Properties &amp; Investments — East Bay. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
