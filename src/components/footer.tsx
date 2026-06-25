import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Building2, CreditCard } from "lucide-react"
import { agent } from "@/lib/mock-data"
import ExitConfirmLink from "./exit-confirm-link"

const mortgageUrl = "https://www.empirelending.net"

const areaLinks = [
  { label: "Oakland", href: "/areas/oakland" },
  { label: "Berkeley", href: "/areas/berkeley" },
  { label: "Walnut Creek", href: "/areas/walnut-creek" },
  { label: "Dublin", href: "/areas/dublin" },
  { label: "Pleasanton", href: "/areas/pleasanton" },
]

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Buy a Home", href: "/consultation" },
      { label: "Sell a Home", href: "/consultation?interest=seller" },
      { label: "Property Valuation", href: "/consultation?interest=homeowner" },
      { label: "Free Consultation", href: "/consultation" },
    ],
  },
  {
    title: "East Bay Areas",
    links: areaLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About Geoffrey", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/consultation" },
    ],
  },
  {
    title: "Mortgage Referral",
    external: true,
    links: [
      { label: "Get Pre-Approved", href: `${mortgageUrl}/apply-now/` },
      { label: "Today's Rates", href: `${mortgageUrl}/todays-rates/` },
      { label: "Refinance", href: `${mortgageUrl}/home-refinance/` },
      { label: "Loan Programs", href: `${mortgageUrl}/loan-programs/` },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-page section-padding">
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center group mb-1">
                <Image src="/main-logo.png?v=2" alt="Halifax" width={256} height={256} className="object-contain w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56" />
              </Link>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-xs mb-6">
                Your East Bay real estate partner. Get access to premium properties across Oakland, Berkeley, Walnut Creek, Dublin, and the entire East Bay.
              </p>
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="h-3.5 w-3.5 text-crimson shrink-0" />
                  <span className="text-sm text-white/40">Geoffrey Enebly &middot; {agent.type} &middot; {agent.license}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:+15105075088"
                    className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Phone className="h-3.5 w-3.5 text-crimson shrink-0" />
                    (510) 507-5088
                  </a>
                  <a
                    href="mailto:Enebly@aol.com"
                    className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <Mail className="h-3.5 w-3.5 text-crimson shrink-0" />
                    Enebly@aol.com
                  </a>
                  <div className="flex items-start gap-2.5 text-sm text-white/60">
                    <MapPin className="h-3.5 w-3.5 text-crimson shrink-0 mt-0.5" />
                    <span>{agent.address}</span>
                  </div>
                </div>
                <div className="h-px bg-white/10 my-4" />
                <div className="text-xs text-white/30 leading-relaxed">
                  <p className="font-medium text-white/50 mb-1">Company Information</p>
                  <p>{agent.brokerage} &middot; {agent.license}</p>
                  <p>{agent.address}</p>
                </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-base font-bold text-white mb-4">{group.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {group.external ? (
                        <ExitConfirmLink
                          href={link.href}
                          className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light cursor-pointer"
                        >
                          {link.label}
                        </ExitConfirmLink>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/50 hover:text-white transition-colors duration-200 font-light"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-xs sm:text-sm text-white/40 font-light">
          <span>
            &copy; {new Date().getFullYear()} {agent.brokerage} &middot; All rights reserved.
          </span>
          <ExitConfirmLink
            href={mortgageUrl}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <CreditCard className="h-3 w-3" />
            <span>Empire Lending Group</span>
          </ExitConfirmLink>
        </div>
        <div className="pb-4 text-[11px] text-white/20 text-center">
          Halifax Properties &amp; Investments is a division of {agent.brokerage}. {agent.license}.
        </div>
      </div>
    </footer>
  )
}
