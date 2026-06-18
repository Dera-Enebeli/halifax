import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, ArrowLeft, Phone, Mail } from "lucide-react"
import { posts, getPostBySlug } from "@/lib/blog-data"
import ScrollReveal from "@/components/scroll-reveal"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const title = `${post.title} | Halifax Properties & Investments`
  const description = post.description

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

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
          <div className="py-14 md:py-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/40 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Blog
            </Link>
            <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-3">
              {post.category}
              {post.city && <span> &middot; {post.city}</span>}
            </p>
            <h1 className="font-serif italic text-[clamp(28px,4vw,44px)] text-white leading-[1.1] mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="max-w-page section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=85"
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div className="space-y-5 text-[15px] md:text-[16px] text-near-black/65 leading-relaxed font-light">
                {post.content.map((paragraph, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <p>{paragraph}</p>
                  </ScrollReveal>
                ))}
              </div>

              <div className="bg-near-black rounded-lg p-6 md:p-8 mt-8">
                <div className="max-w-lg">
                  <h3 className="font-serif italic text-xl md:text-2xl text-white leading-[1.2] mb-3">
                    Ready to Make a Move?
                  </h3>
                  <div className="w-10 h-[3px] bg-crimson mb-4" />
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    Whether you&apos;re buying, selling, or just exploring options,
                    I&apos;m here to help. Reach out for a free consultation with
                    no obligation.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <a
                      href="tel:+15105075088"
                      className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-crimson-dark transition-all duration-200"
                    >
                      <Phone className="h-4 w-4" />
                      (510) 507-5088
                    </a>
                    <a
                      href="mailto:Enebly@aol.com"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 text-sm font-semibold px-5 py-3 rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
                    >
                      <Mail className="h-4 w-4" />
                      Enebly@aol.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-cream-dark rounded-lg p-6 md:p-7 sticky top-24">
                <div className="text-center mb-5">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-crimson/10 flex items-center justify-center">
                    <span className="font-serif italic text-2xl font-bold text-crimson">
                      GE
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-near-black">
                    Geoffrey Enebly
                  </h3>
                  <p className="text-xs text-crimson font-semibold">
                    Broker &middot; 30 Years Experience
                  </p>
                  <p className="text-[11px] text-near-black/50 mt-1">
                    CalBRE# 00899654
                  </p>
                </div>

                <div className="h-px bg-warm-border mb-5" />

                <div className="space-y-3 text-sm text-near-black/60">
                  <p className="text-[13px] leading-relaxed text-center">
                    Halifax Properties &amp; Investments helps East Bay families
                    buy, sell, and value homes with honest advice and local
                    expertise.
                  </p>
                </div>

                <div className="h-px bg-warm-border my-5" />

                <div className="space-y-3">
                  <a
                    href="tel:+15105075088"
                    className="flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full"
                  >
                    <Phone className="h-4 w-4" />
                    (510) 507-5088
                  </a>
                  <Link
                    href="/consultation"
                    className="flex items-center justify-center gap-2 border-2 border-crimson text-crimson text-sm font-semibold py-3 rounded-full hover:bg-crimson hover:text-white transition-all duration-200 w-full"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-near-black">
        <div className="max-w-page section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-serif italic text-[clamp(24px,3vw,34px)] text-white leading-[1.15] mb-4">
                More Articles
              </h2>
              <div className="w-10 h-[3px] bg-crimson mx-auto mb-5" />
              <p className="text-[15px] text-white/50 font-light mb-8 max-w-md mx-auto">
                Browse all our East Bay real estate guides, market reports, and
                expert advice.
              </p>
            </ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-crimson text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
