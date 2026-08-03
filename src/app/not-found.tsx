import Link from "next/link"
import UtilityBar from "@/components/utility-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main className="pt-24 lg:pt-28">
        <section className="py-24 md:py-32 bg-cream-dark">
          <div className="max-w-page section-padding">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-4">
                Page Not Found
              </p>
              <h1 className="font-serif italic text-[clamp(42px,6vw,72px)] text-near-black leading-[1.1] mb-4">
                404
              </h1>
              <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
              <p className="text-body text-near-black/80 leading-relaxed font-light mb-10 max-w-md mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full sm:w-auto"
                >
                  Back to Home
                </Link>
                <Link
                  href="/consultation"
                  className="inline-flex items-center justify-center gap-2 border-2 border-near-black/25 text-near-black/85 text-sm font-semibold px-7 py-3.5 rounded-full hover:border-near-black/60 hover:text-near-black transition-all duration-200 w-full sm:w-auto"
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
