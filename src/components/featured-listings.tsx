import Link from "next/link"
import PropertyCard from "@/components/property-card"
import { properties } from "@/lib/mock-data"

export default function FeaturedListings() {
  const featured = properties.filter((p) => p.featured)

  return (
    <section className="py-[100px]">
      <div className="max-w-page section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Featured Properties</span>
            <h2 className="section-title">Our finest listings</h2>
            <p className="section-desc">
              Hand-selected luxury homes in California&apos;s most sought-after locations.
            </p>
          </div>
          <Link
            href="/listings"
            className="text-xs font-medium tracking-[1.2px] uppercase text-terracotta whitespace-nowrap relative pb-[3px] hover:opacity-70 transition-opacity duration-300"
          >
            View All Properties
            <span className="absolute bottom-0 left-0 w-full h-px bg-terracotta" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((property, i) => (
            <div key={property.id} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
