import Link from "next/link"
import { Home, Building, Warehouse, TreePine } from "lucide-react"

const categories = [
  { label: "Houses", icon: Home, type: "House" },
  { label: "Condos", icon: Building, type: "Condo" },
  { label: "Townhomes", icon: Warehouse, type: "Townhouse" },
  { label: "Bungalows", icon: TreePine, type: "Bungalow" },
]

export default function CategoryCards() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-page section-padding">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[12px] sm:text-[13px] font-semibold tracking-[2px] uppercase text-olive mb-2">
            Browse by Type
          </p>
          <h2
            className="font-serif italic text-[clamp(26px,3.5vw,40px)] text-near-black leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            East Bay Property Types
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-sm md:max-w-none mx-auto md:mx-0">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <Link
                key={cat.label}
                href={`/listings?type=${cat.type}`}
                className="group relative bg-white rounded-xl border border-warm-border shadow-sm hover:shadow-md px-3 sm:px-5 py-5 sm:py-7 text-center transition-all duration-300 hover:-translate-y-1 touch-target"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2.5 sm:mb-4 rounded-full bg-olive/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-olive/20">
                  <Icon className="h-[18px] w-[18px] sm:h-6 sm:w-6 text-olive" />
                </div>
                <h3 className="text-[14px] sm:text-base font-bold text-near-black mb-0.5 leading-snug">{cat.label}</h3>
                <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium">Browse All</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
