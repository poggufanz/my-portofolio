"use client"

import { useRef, type ReactNode } from "react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"

interface NeoMarqueeProps {
  children: ReactNode
  className?: string
  /** Seconds per loop at rest. */
  speed?: number
  /** Flip base direction. */
  reverse?: boolean
}

/**
 * Infinite marquee that reacts to scroll velocity — scrolling fast
 * accelerates the ticker; scrolling up reverses it. Falls back to a
 * static strip under prefers-reduced-motion.
 */
export default function NeoMarquee({
  children,
  className = "",
  speed = 20,
  reverse = false,
}: NeoMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const track = trackRef.current
      if (!track) return

      const dir = reverse ? 1 : -1
      const loop = gsap.to(track, {
        xPercent: dir * -50,
        duration: speed,
        ease: "none",
        repeat: -1,
      })
      if (reverse) gsap.set(track, { xPercent: -50 })

      const st = ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = self.getVelocity() / 250
          const boost = gsap.utils.clamp(-4, 4, velocity)
          gsap.to(loop, {
            timeScale: 1 + Math.abs(boost),
            duration: 0.3,
            overwrite: true,
            onComplete: () => {
              gsap.to(loop, { timeScale: 1, duration: 1.2 })
            },
          })
        },
      })

      return () => {
        st.kill()
        loop.kill()
      }
    })

    return () => mm.revert()
  })

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div ref={trackRef} className="inline-flex w-max">
        {children}
        {children}
      </div>
    </div>
  )
}
