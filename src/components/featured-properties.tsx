"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Square, Car } from "lucide-react"
import { getFeaturedProperties } from "@/lib/mock-data"
import type { Property } from "@/lib/mock-data"

function PropertyCard({ property }: { property: Property }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-warm-border transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-near-black text-white text-[12px] sm:text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
          {property.status === "Active" ? (property.type === "Condo" ? "Rent" : "Sale") : property.status}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-[18px] font-bold text-near-black mb-1.5 leading-snug">
          {property.title}
        </h3>
        <p className="text-[15px] sm:text-[13px] text-gray-500 mb-4">
          {property.address}, {property.city}
        </p>

        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-warm-border">
          <div className="flex items-center gap-1.5 text-gray-500">
            <Bed className="h-4.5 sm:h-4 sm:w-4" />
            <span className="text-[15px] sm:text-[13px] font-medium">{property.beds}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Bath className="h-4.5 sm:h-4 sm:w-4" />
            <span className="text-[15px] sm:text-[13px] font-medium">{property.baths}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Car className="h-4.5 sm:h-4 sm:w-4" />
            <span className="text-[15px] sm:text-[13px] font-medium">{property.garage}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500">
            <Square className="h-4.5 sm:h-4 sm:w-4" />
            <span className="text-[15px] sm:text-[13px] font-medium">{property.sqft}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-[20px] font-bold text-near-black whitespace-nowrap">
            {formatter.format(property.price)}
          </span>
          <Link
            href={`/listings/${property.id}`}
            className="shrink-0 text-[14px] font-semibold text-white bg-terracotta hover:bg-terracotta-dark px-4 py-2 rounded-full transition-all duration-200"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedProperties() {
  const featured = getFeaturedProperties()
  const [activeDot, setActiveDot] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(featured.length / itemsPerPage)
  const visible = featured.slice(activeDot * itemsPerPage, (activeDot + 1) * itemsPerPage)

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--color-cream-dark, #EAE2D6)" }}>
      <div className="max-w-page section-padding">
        <div className="text-center mb-10">
          <p className="text-[13px] sm:text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
            Explore
          </p>
          <h2
            className="font-serif italic text-[clamp(28px,3.5vw,40px)] text-near-black leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Featured East Bay Listings
          </h2>
          <p className="text-[16px] sm:text-[15px] text-gray-500 font-light max-w-lg mx-auto mt-3">
            Hand-selected East Bay properties you won&apos;t want to miss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveDot(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                activeDot === i
                  ? "bg-terracotta w-6 sm:w-7 h-2.5 sm:h-2.5"
                  : "bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5 sm:w-2.5 sm:h-2.5"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
