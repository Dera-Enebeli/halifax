"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"

type Anim = "fade-up" | "fade-in" | "scale-in"

const animClasses: Record<Anim, string> = {
  "fade-up": "opacity-0 translate-y-8",
  "fade-in": "opacity-0",
  "scale-in": "opacity-0 scale-95",
}

const animActive: Record<Anim, string> = {
  "fade-up": "opacity-100 translate-y-0",
  "fade-in": "opacity-100",
  "scale-in": "opacity-100 scale-100",
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode
  animation?: Anim
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${animClasses[animation]} ${
        visible ? animActive[animation] : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
