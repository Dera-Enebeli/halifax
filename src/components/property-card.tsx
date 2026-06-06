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
        <div className="bg-white border border-warm-border rounded overflow-hidden transition-colors duration-300 hover:border-[#d5cdc0] flex flex-row">
          <div className="relative w-48 shrink-0 min-h-[130px]">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="flex-1 min-w-0 p-5 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block text-[10px] font-medium tracking-[1.2px] uppercase px-2.5 py-0.5 rounded-sm bg-olive/10 text-olive mb-2">
                  {property.status}
                </span>
                <h3
                  className="font-serif text-lg text-near-black leading-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {property.title}
                </h3>
                <p className="text-[13px] text-gray-500 font-light mt-1">{property.city}</p>
              </div>
              <p className="text-xl font-medium text-terracotta whitespace-nowrap">{formatPrice(property.price)}</p>
            </div>
            <div className="flex gap-4 text-xs text-gray-500 pt-3 mt-3 border-t border-warm-border">
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
      <div className="bg-white border border-warm-border rounded overflow-hidden transition-colors duration-300 hover:border-[#d5cdc0] group">
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-6">
          <span className="inline-block text-[10px] font-medium tracking-[1.2px] uppercase px-2.5 py-0.5 rounded-sm bg-olive/10 text-olive mb-3">
            {property.status}
          </span>
          <h3
            className="font-serif text-xl text-near-black mb-1 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {property.title}
          </h3>
          <p className="text-[13px] text-gray-500 font-light mb-3">{property.city}</p>
          <p className="text-[22px] font-medium text-terracotta mb-3">{formatPrice(property.price)}</p>
          <div className="flex gap-4 text-xs text-gray-500 pt-3 border-t border-warm-border">
            <span>{property.beds} bd</span>
            <span>{property.baths} ba</span>
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
