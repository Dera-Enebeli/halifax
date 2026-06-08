"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, X, Menu } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
          scrolled
            ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-page section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-near-black rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Home className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
              </div>
              <div className="flex flex-row items-baseline sm:flex-col sm:items-start gap-1.5 sm:gap-0 leading-tight">
                <span
                  className="font-serif italic text-[20px] lg:text-[22px] text-near-black tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Halifax
                </span>
                <span className="text-[10px] font-semibold text-terracotta tracking-[2px] uppercase sm:block">
                  East Bay
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-near-black/80 hover:text-terracotta transition-colors duration-200 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-terracotta after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/consultation"
                className="text-sm font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/25"
              >
                Get in Touch
              </Link>
            </nav>

            <button
              className={`lg:hidden flex items-center justify-center w-10 h-10 lg:w-9 lg:h-9 cursor-pointer bg-none border-none z-50 transition-colors duration-300 text-near-black touch-target`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`fixed top-0 right-0 w-[280px] h-full bg-white z-40 transition-transform duration-300 lg:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 pt-20 px-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[17px] font-medium text-near-black hover:text-terracotta transition-colors touch-target py-2"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              className="text-[17px] font-semibold text-white bg-terracotta px-6 py-4 rounded-full text-center hover:bg-terracotta-dark transition-colors touch-target"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
