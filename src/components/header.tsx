"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Menu, ExternalLink } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
]

const mortgageUrl = "https://www.empirelending.net"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const drawer = drawerRef.current
    if (!drawer) return

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    drawer.addEventListener("keydown", handleKeyDown)
    return () => drawer.removeEventListener("keydown", handleKeyDown)
  }, [mobileOpen])

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
            ? "bg-cream shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            : "bg-cream"
        }`}
      >
        <div className="max-w-page section-padding">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 lg:w-9 lg:h-9 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image src="/main-logo.png" alt="Halifax" width={36} height={36} className="object-contain" />
              </div>
              <div className="flex flex-col items-start gap-0 leading-tight">
                <span
                  className="font-serif italic text-xl lg:text-heading text-near-black tracking-tight transition-transform duration-300 group-hover:scale-105"
                >
                  Halifax
                </span>
                <span className="text-[10px] font-semibold text-crimson tracking-[2px] uppercase sm:block transition-transform duration-300 group-hover:scale-105 origin-left">
                  East Bay
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-near-black/80 hover:text-crimson transition-colors duration-200 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-crimson after:transition-all after:duration-300 after:w-0 hover:after:w-full"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={mortgageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-near-black/80 hover:text-crimson transition-colors duration-200 relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-crimson after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                Mortgage
                <ExternalLink className="h-3 w-3 ml-1 inline-block -mt-0.5 opacity-60" />
              </a>
              <a
                href="https://www.facebook.com/geffreyeneblyrealestate"
                className="w-8 h-8 rounded-full flex items-center justify-center text-near-black/60 hover:text-crimson hover:bg-cream-dark transition-all duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <Link
                href="/consultation"
                className="text-sm font-semibold text-white bg-crimson hover:bg-crimson-dark px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-crimson/25"
              >
                Get in Touch
              </Link>
            </nav>

            <button
              ref={toggleRef}
              className={`lg:hidden flex items-center justify-center w-12 h-12 cursor-pointer bg-none border-none z-50 transition-colors duration-300 text-near-black touch-target`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          ref={drawerRef}
          className={`fixed top-0 right-0 w-[280px] h-full bg-cream z-40 transition-transform duration-300 lg:hidden ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal={mobileOpen ? "true" : undefined}
          aria-label="Navigation menu"
        >
          <div className="flex flex-col gap-6 pt-20 px-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-lead font-medium text-near-black hover:text-crimson transition-colors touch-target py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 rounded"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={mortgageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lead font-medium text-near-black hover:text-crimson transition-colors touch-target py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2 rounded"
              onClick={() => setMobileOpen(false)}
            >
              Mortgage
              <ExternalLink className="h-3.5 w-3.5 ml-1.5 inline-block opacity-50" />
            </a>
            <a
              href="https://www.facebook.com/geffreyeneblyrealestate"
              className="w-10 h-10 rounded-full flex items-center justify-center mx-auto text-near-black/60 hover:text-crimson hover:bg-cream-dark transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              onClick={() => setMobileOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <Link
              href="/consultation"
              className="text-lead font-semibold text-white bg-crimson px-6 py-4 rounded-full text-center hover:bg-crimson-dark transition-colors touch-target focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson focus-visible:ring-offset-2"
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
