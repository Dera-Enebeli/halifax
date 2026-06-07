import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"
import type { Property } from "@/lib/mock-data"

interface PropertyCardProps {
  property: Property
  variant?: "grid" | "list"
}

export default function PropertyCard({ property, variant = "grid" }: PropertyCardProps) {
  if (variant === "list") {
    return (
      <Link href={`/listings/${property.id}`}>
        <div className="bg-white border border-warm-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#d5cdc0] flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-56 shrink-0 h-40 sm:h-auto min-h-[160px]">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 224px"
            />
          </div>
          <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[12px] sm:text-[10px] font-medium tracking-[1.2px] uppercase px-3 py-1 sm:px-2.5 sm:py-0.5 rounded bg-olive/10 text-olive mb-2">
                  {property.status}
                </span>
                <h3
                  className="font-serif text-[18px] sm:text-lg text-near-black leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {property.title}
                </h3>
                <p className="text-[15px] sm:text-[13px] text-gray-500 font-light mt-1">{property.city}</p>
              </div>
              <p className="text-[20px] font-medium text-terracotta whitespace-nowrap">{formatPrice(property.price)}</p>
            </div>
            <div className="flex gap-4 text-[14px] sm:text-xs text-gray-500 pt-3 mt-3 border-t border-warm-border">
              <span>{property.beds} bd</span>
              <span>{property.baths} ba</span>
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/listings/${property.id}`}>
      <div className="bg-white border border-warm-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-[#d5cdc0] group">
        <div className="relative h-52 sm:h-[280px] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-5 sm:p-6">
          <span className="inline-block text-[12px] sm:text-[10px] font-medium tracking-[1.2px] uppercase px-3 py-1 sm:px-2.5 sm:py-0.5 rounded bg-olive/10 text-olive mb-3">
            {property.status}
          </span>
          <h3
            className="font-serif text-[18px] sm:text-xl text-near-black mb-1.5 sm:mb-1 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {property.title}
          </h3>
          <p className="text-[15px] sm:text-[13px] text-gray-500 font-light mb-3">{property.city}</p>
          <p className="text-[22px] sm:text-[22px] font-medium text-terracotta mb-3">{formatPrice(property.price)}</p>
          <div className="flex gap-4 text-[14px] sm:text-xs text-gray-500 pt-3 border-t border-warm-border">
            <span>{property.beds} bd</span>
            <span>{property.baths} ba</span>
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
