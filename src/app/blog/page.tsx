import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"
import { posts } from "@/lib/blog-data"
import ScrollReveal from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "East Bay Real Estate Blog | Halifax Properties & Investments",
  description:
    "Expert real estate advice for the East Bay. Neighborhood guides, market reports, buyer tips, and selling strategies from Geoffrey Enebly at Halifax Properties & Investments.",
  openGraph: {
    title: "East Bay Real Estate Blog | Halifax Properties & Investments",
    description:
      "Expert real estate advice for the East Bay. Neighborhood guides, market reports, buyer tips, and selling strategies from Geoffrey Enebly.",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  return (
    <main>
      <section className="bg-near-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-page section-padding relative">
          <div className="py-16 md:py-20">
            <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
              Blog
            </p>
            <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-white leading-[1.1] mb-3">
              East Bay Real Estate Blog
            </h1>
            <div className="w-16 h-[3px] bg-crimson mb-6" />
            <p className="text-white/60 text-[15px] md:text-[17px] leading-relaxed max-w-2xl font-light">
              Neighborhood guides, market reports, buyer tips, and selling
              strategies from Geoffrey Enebly. Written for East Bay homeowners,
              buyers, and sellers who want straight talk and real expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-page section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-[#FCFAF5] rounded-lg overflow-hidden shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-300"
                >
                  <div className="h-[3px] bg-crimson w-full" />
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-3 text-xs text-near-black/50 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-2.5 py-1 mb-3">
                      {post.category}
                      {post.city && <span> &middot; {post.city}</span>}
                    </span>
                    <h2 className="font-serif italic text-xl md:text-[22px] text-near-black leading-[1.25] mb-3 group-hover:text-crimson transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[14px] text-near-black/60 leading-relaxed font-light line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-crimson group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
