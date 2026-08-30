"use client"

import { useRef, type ReactNode } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

interface MagneticProps {
  children: ReactNode
  /** Pull strength: 0–1 of pointer offset applied to element. */
  strength?: number
  className?: string
}

/**
 * Magnetic hover wrapper — element leans toward the pointer,
 * snaps back with elastic ease on leave. Fine pointers only.
 */
export default function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const el = ref.current
      if (!el) return

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" })
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" })

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        xTo((e.clientX - (rect.left + rect.width / 2)) * strength)
        yTo((e.clientY - (rect.top + rect.height / 2)) * strength)
      }
      const onLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.35)" })
      }

      el.addEventListener("mousemove", onMove, { passive: true })
      el.addEventListener("mouseleave", onLeave)
      return () => {
        el.removeEventListener("mousemove", onMove)
        el.removeEventListener("mouseleave", onLeave)
      }
    })

    return () => mm.revert()
  })

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
