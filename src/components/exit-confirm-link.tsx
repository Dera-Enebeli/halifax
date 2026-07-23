"use client"

import { useState, type ReactNode } from "react"
import ExitConfirmModal from "./exit-confirm-modal"

interface ExitConfirmLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ExitConfirmLink({ href, children, className }: ExitConfirmLinkProps) {
  const [showModal, setShowModal] = useState(false)

  const handleConfirm = () => {
    window.open(href, "_blank", "noopener,noreferrer")
    setShowModal(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={className}
      >
        {children}
      </button>
      <ExitConfirmModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </>
  )
}
