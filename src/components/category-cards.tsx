import { Home, Building2, Building, Warehouse, TreePine } from "lucide-react"

const categories = [
  { label: "Houses", icon: Home, count: "22 Properties" },
  { label: "Apartments", icon: Building2, count: "14 Properties" },
  { label: "Office", icon: Building, count: "8 Properties" },
  { label: "Townhome", icon: Warehouse, count: "12 Properties" },
  { label: "Bungalow", icon: TreePine, count: "6 Properties" },
]

export default function CategoryCards() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-page section-padding">
        <div className="text-center mb-10">
          <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-2">
            Browse by Type
          </p>
          <h2
            className="font-serif italic text-[clamp(28px,3.5vw,40px)] text-near-black leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            East Bay Property Types
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.label}
                className="group relative bg-white rounded-xl border border-warm-border shadow-sm w-[160px] sm:w-[180px] px-5 py-7 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-olive/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-olive/20">
                  <Icon className="h-6 w-6 text-olive" />
                </div>
                <h3 className="text-sm font-bold text-near-black mb-1">{cat.label}</h3>
                <p className="text-[12px] text-gray-500 font-medium">{cat.count}</p>
                <div className="absolute bottom-0 left-[20%] right-[20%] h-[3px] bg-terracotta rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
