"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="min-h-screen bg-cream-dark flex items-center justify-center">
      <div className="max-w-page section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[2px] uppercase text-olive mb-4">
            Something Went Wrong
          </p>
          <h1 className="font-serif italic text-[clamp(32px,5vw,52px)] text-near-black leading-[1.1] mb-4">
            Unexpected Error
          </h1>
          <div className="w-12 h-[3px] bg-crimson mx-auto mb-6" />
          <p className="text-body text-near-black/80 leading-relaxed font-light mb-10 max-w-md mx-auto">
            We encountered an unexpected error. Please try again or contact Geoffrey directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-crimson-dark transition-all duration-200 w-full sm:w-auto cursor-pointer"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border-2 border-near-black/25 text-near-black/85 text-sm font-semibold px-7 py-3.5 rounded-full hover:border-near-black/60 hover:text-near-black transition-all duration-200 w-full sm:w-auto"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
