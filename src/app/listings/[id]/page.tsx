import { notFound } from "next/navigation"
import Image from "next/image"
import { BedDouble, Bath, Square, Calendar, MapPin, Home, Ruler, Building2, ChevronLeft } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PropertyGallery from "@/components/property-gallery"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
import { getPropertyById, properties } from "@/lib/mock-data"
import PropertyCard from "@/components/property-card"
import RequestInfoForm from "@/components/request-info-form"

export default async function PropertyDetailPage(props: PageProps<"/listings/[id]">) {
  const { id } = await props.params
  const property = getPropertyById(id)

  if (!property) {
    notFound()
  }

  const similar = properties
    .filter((p) => p.type === property.type && p.id !== property.id)
    .slice(0, 3)

  const statusColor = {
    Active: "success" as const,
    Pending: "warning" as const,
    Sold: "danger" as const,
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="max-w-page section-padding py-6">
          <Link
            href="/listings"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-terracotta transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Listings
          </Link>
        </div>

        <div className="max-w-page section-padding pb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 min-w-0">
              <PropertyGallery images={property.images} title={property.title} />

              <div className="mt-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="font-serif text-2xl md:text-3xl text-near-black" style={{ fontFamily: "var(--font-serif)" }}>
                        {property.title}
                      </h1>
                      <Badge variant={statusColor[property.status]}>
                        {property.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {property.address}, {property.city}, {property.state} {property.zip}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-medium text-terracotta">
                      {formatPrice(property.price)}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${Math.round(property.price / property.sqft).toLocaleString()} / sqft
                    </p>
                  </div>
                </div>

                <div className="h-px mb-6" style={{ background: "var(--color-warm-border, #E5DDD3)" }} />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { icon: BedDouble, label: "Bedrooms", value: property.beds },
                    { icon: Bath, label: "Bathrooms", value: property.baths },
                    { icon: Square, label: "Square Feet", value: property.sqft.toLocaleString() },
                    { icon: Ruler, label: "Lot Size", value: property.lotSize },
                    { icon: Home, label: "Property Type", value: property.type },
                    { icon: Building2, label: "Year Built", value: property.yearBuilt },
                    { icon: Calendar, label: "Listed", value: new Date(property.listDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 p-4 rounded" style={{ background: "var(--color-cream, #F5F0E8)" }}>
                      <div className="w-10 h-10 rounded flex items-center justify-center shrink-0" style={{ background: "rgba(192, 74, 26, 0.1)" }}>
                        <item.icon className="h-5 w-5" style={{ color: "var(--color-terracotta, #C04A1A)" }} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-near-black">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-px mb-6" style={{ background: "var(--color-warm-border, #E5DDD3)" }} />

                <div>
                  <h2 className="font-serif text-xl text-near-black mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    About This Property
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {property.description}
                  </p>
                </div>

                <div className="h-px mb-6" style={{ background: "var(--color-warm-border, #E5DDD3)" }} />

                <div>
                  <h2 className="font-serif text-xl text-near-black mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Features &amp; Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {property.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--color-terracotta, #C04A1A)" }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-96 shrink-0">
              <div className="sticky top-28 space-y-6">
                <div className="rounded border border-warm-border bg-white p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={property.agent.image}
                      alt={property.agent.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-near-black">
                        {property.agent.name}
                      </p>
                      <p className="text-sm text-gray-500">Listing Agent</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <RequestInfoForm property={property}>
                      <Button className="w-full" size="lg">
                        Request Info
                      </Button>
                    </RequestInfoForm>
                  </div>

                  <div className="h-px mb-4" style={{ background: "var(--color-warm-border, #E5DDD3)" }} />

                  <div className="space-y-3 text-sm">
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors"
                    >
                      <span className="font-medium text-near-black w-16">Phone:</span>
                      {property.agent.phone}
                    </a>
                    <a
                      href={`mailto:${property.agent.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-terracotta transition-colors"
                    >
                      <span className="font-medium text-near-black w-16">Email:</span>
                      <span className="truncate">{property.agent.email}</span>
                    </a>
                  </div>
                </div>

                <div className="rounded border border-warm-border bg-white p-6">
                  <h3 className="font-serif text-base text-near-black mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                    Mortgage Calculator
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Loan Amount
                      </label>
                      <p className="text-lg font-medium text-near-black">
                        {formatPrice(property.price * 0.8)}
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">
                        Estimated Monthly
                      </label>
                      <p className="text-2xl font-bold text-terracotta">
                        {(() => {
                          const loan = property.price * 0.8
                          const r = 0.065 / 12
                          const n = 360
                          const payment = loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
                          return formatPrice(Math.round(payment / 100) * 100)
                        })()}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400">
                      Based on 20% down, 30-year fixed at 6.5% APR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <section className="py-16" style={{ background: "var(--color-cream, #F5F0E8)" }}>
            <div className="max-w-page section-padding">
              <h2 className="font-serif text-2xl text-near-black mb-8" style={{ fontFamily: "var(--font-serif)" }}>
                Similar Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
