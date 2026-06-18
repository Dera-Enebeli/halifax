"use client"

import { testimonials } from "@/lib/testimonials-data"
import ScrollReveal from "@/components/scroll-reveal"
import { Star } from "lucide-react"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-crimson text-crimson" />
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-page section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
                What Clients Say
              </p>
              <h2 className="font-serif italic text-[clamp(28px,4vw,42px)] text-near-black leading-[1.15] mb-4">
                Trusted by East Bay <span className="text-crimson italic">Homeowners</span>
              </h2>
              <div className="w-12 h-[3px] bg-crimson mx-auto" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-cream-dark px-6 py-7 md:px-7 md:py-8 rounded-lg h-full flex flex-col">
                  <Stars count={t.rating} />
                  <p className="text-[15px] text-near-black/65 leading-relaxed font-light mt-4 mb-5 flex-1 [text-wrap:pretty]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="h-px bg-warm-border mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-near-black">{t.name}</p>
                      <p className="text-xs text-near-black/50">{t.role} &middot; {t.city}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
