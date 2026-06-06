import { getMarketStats } from "@/lib/mock-data"
import { formatPriceShort } from "@/lib/utils"

export default function MarketStats() {
  const stats = getMarketStats()

  const items = [
    { label: "Active Listings", value: stats.inventory },
    { label: "Average Price", value: formatPriceShort(stats.averagePrice) },
    { label: "Median Price", value: formatPriceShort(stats.medianPrice) },
    { label: "Avg Days on Market", value: stats.avgDaysOnMarket },
  ]

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-page section-padding">
        <div className="text-center mb-12">
          <span className="section-label">Market Overview</span>
          <h2 className="section-title" style={{ marginBottom: 0 }}>California at a glance</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => (
            <div
              key={item.label}
              className="text-center px-6 relative"
            >
              {i < items.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-[10%] h-[80%] w-px bg-warm-border" />
              )}
              <p
                className="font-serif text-[clamp(36px,4vw,52px)] text-terracotta leading-[1.1] mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {item.value}
              </p>
              <p className="text-xs tracking-[1.2px] uppercase text-gray-500 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
