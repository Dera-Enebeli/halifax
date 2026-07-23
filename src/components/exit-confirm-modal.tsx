"use client"

import { useEffect, useCallback } from "react"
import { ExternalLink, X } from "lucide-react"

interface ExitConfirmModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function ExitConfirmModal({ isOpen, onClose, onConfirm }: ExitConfirmModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 animate-fade-up"
        role="dialog"
        aria-modal="true"
        aria-label="Leaving site confirmation"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-near-black/40 hover:text-near-black hover:bg-cream-dark transition-all cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center mb-4 mx-auto">
          <ExternalLink className="h-5 w-5 text-crimson" />
        </div>

        <h3 className="text-lg font-bold text-near-black text-center mb-2">
          You&apos;re Leaving Our Site
        </h3>

        <p className="text-sm text-near-black/60 text-center leading-relaxed mb-6">
          This link will take you to <strong className="text-near-black/80">Empire Lending Group</strong>, our trusted mortgage partner. We don&apos;t originate loans ourselves &mdash; they handle all financing needs separately.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onConfirm}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-crimson text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-crimson-dark transition-all duration-200 cursor-pointer"
          >
            Continue to Empire Lending Group
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-near-black/15 text-near-black/70 text-sm font-semibold px-5 py-3 rounded-full hover:border-near-black/30 hover:text-near-black transition-all duration-200 cursor-pointer"
          >
            Stay on Page
          </button>
        </div>
      </div>
    </div>
  )
}
