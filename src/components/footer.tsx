import Link from "next/link"

const footerLinks = {
  Explore: [
    { label: "Properties", href: "/listings" },
    { label: "Get a Valuation", href: "/" },
    { label: "Buy", href: "#" },
    { label: "Sell", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Contact: [
    { label: "(510) 555-0142", href: "tel:+15105550142" },
    { label: "alex@halifaxproperties.com", href: "mailto:alex@halifaxproperties.com" },
    { label: "East Bay, CA", href: "#" },
    { label: "Instagram", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="pt-[72px] pb-10" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif italic text-2xl text-terracotta tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Halifax
            </Link>
            <p className="text-[13px] leading-relaxed text-gray-500 font-light max-w-[300px] mt-4">
              Your trusted East Bay real estate partner. Expert guidance for property valuations, buying, and selling across the East Bay.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-serif text-base text-near-black mb-5"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-gray-500 font-light hover:text-terracotta transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px mb-6" style={{ background: "rgba(0,0,0,0.07)" }} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <span>&copy; {new Date().getFullYear()} Halifax Properties &amp; Investments. All rights reserved.</span>
          <span>
            <a href="#" className="text-terracotta hover:opacity-70 transition-opacity">Privacy</a>
            {" "}&middot;{" "}
            <a href="#" className="text-terracotta hover:opacity-70 transition-opacity">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
