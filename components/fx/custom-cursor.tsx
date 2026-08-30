"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

/**
 * Neobrutalist square cursor — desktop (fine pointer) only.
 * Solid yellow square trails the pointer; grows + rotates over
 * any element marked data-cursor="hover" (links/buttons auto-detected).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (!dot || !ring) return

      gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 })

      const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" })
      const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" })
      const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" })
      const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" })

      const onMove = (e: MouseEvent) => {
        gsap.to([dot, ring], { autoAlpha: 1, duration: 0.2, overwrite: "auto" })
        dotX(e.clientX)
        dotY(e.clientY)
        ringX(e.clientX)
        ringY(e.clientY)
      }

      const isInteractive = (el: EventTarget | null) =>
        el instanceof Element &&
        !!el.closest("a, button, [data-cursor='hover'], input, textarea, [role='button']")

      const onOver = (e: MouseEvent) => {
        if (!isInteractive(e.target)) return
        gsap.to(ring, { scale: 1.8, rotate: 45, duration: 0.3, ease: "back.out(2)" })
        gsap.to(dot, { scale: 0, duration: 0.2 })
      }
      const onOut = (e: MouseEvent) => {
        if (!isInteractive(e.target)) return
        gsap.to(ring, { scale: 1, rotate: 0, duration: 0.3, ease: "back.out(2)" })
        gsap.to(dot, { scale: 1, duration: 0.2 })
      }
      const onLeave = () => gsap.to([dot, ring], { autoAlpha: 0, duration: 0.2 })

      window.addEventListener("mousemove", onMove, { passive: true })
      document.addEventListener("mouseover", onOver, { passive: true })
      document.addEventListener("mouseout", onOut, { passive: true })
      document.documentElement.addEventListener("mouseleave", onLeave)

      return () => {
        window.removeEventListener("mousemove", onMove)
        document.removeEventListener("mouseover", onOver)
        document.removeEventListener("mouseout", onOut)
        document.documentElement.removeEventListener("mouseleave", onLeave)
      }
    })

    return () => mm.revert()
  })

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] w-2.5 h-2.5 bg-[var(--neo-text)] pointer-events-none invisible hidden [@media(pointer:fine)]:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 z-[100] w-8 h-8 border-[3px] border-[var(--neo-text)] bg-[var(--neo-accent)]/40 pointer-events-none invisible hidden [@media(pointer:fine)]:block"
      />
    </>
  )
}
