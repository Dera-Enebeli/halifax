"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navItems = [
  { label: "Properties", href: "/listings" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cream border-b border-warm-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-page section-padding">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className="font-serif italic text-[28px] text-terracotta tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Halifact's
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-medium tracking-[1.2px] uppercase relative pb-[3px] transition-colors duration-300 ${
                    scrolled ? "text-near-black hover:text-terracotta" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-terracotta transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/listings"
                className={`text-xs font-medium tracking-[1.5px] uppercase px-5 py-2.5 rounded transition-all duration-300 ${
                  scrolled
                    ? "bg-terracotta text-white hover:bg-[#a83e15]"
                    : "border border-white/30 text-white hover:bg-white/10"
                }`}
              >
                Get a Valuation
              </Link>
            </nav>

            <button
              className={`lg:hidden flex items-center justify-center w-9 h-9 cursor-pointer bg-none border-none z-50 transition-colors duration-300 ${
                mobileOpen
                  ? "text-near-black"
                  : scrolled
                    ? "text-near-black"
                    : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Menu"}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 5l12 12M17 5L5 17" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h16M3 11h16M3 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 w-[280px] h-full bg-white z-40 transition-transform duration-300 lg:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 pt-24 px-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-near-black hover:text-terracotta transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/listings"
              className="text-xs font-medium tracking-[1.5px] uppercase bg-terracotta text-white px-5 py-3 rounded text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get a Valuation
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
