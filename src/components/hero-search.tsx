"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function HeroSearch() {
  const router = useRouter()
  const [location, setLocation] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.set("location", location)
    router.push(`/listings?${params.toString()}`)
  }

  const cities = ["Santa Monica", "Beverly Hills", "Malibu", "Laguna Beach"]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(45, 25, 15, 0.6)" }} />

      <div className="relative z-10 w-full max-w-page section-padding text-center">
        <div className="max-w-[720px] mx-auto">
          <h1
            className="font-serif italic text-white leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(42px, 6vw, 72px)", fontFamily: "var(--font-serif)" }}
          >
            California Dream, Found
          </h1>
          <p className="font-sans font-light text-[18px] text-white/85 mb-9 leading-relaxed">
            Curated luxury properties across California&apos;s most coveted destinations
          </p>

          <form onSubmit={handleSearch} className="flex max-w-[560px] mx-auto mb-10 rounded-[8px] overflow-hidden border border-white/15" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}>
            <input
              type="text"
              placeholder="Search by city, address, or ZIP..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 min-w-0 px-5 py-[14px] bg-transparent border-none text-sm text-white outline-none placeholder:text-white/60 placeholder:font-light"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-[14px] bg-terracotta text-white text-xs font-medium tracking-[1.2px] uppercase hover:bg-terracotta-dark transition-colors duration-300 whitespace-nowrap"
            >
              Search
            </button>
          </form>

          <div className="flex justify-center gap-2 flex-wrap text-[13px] text-white/75">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setLocation(city)}
                className="text-white/85 hover:text-white transition-colors duration-300"
              >
                <span className="text-terracotta mr-1">&#9679;</span>
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
