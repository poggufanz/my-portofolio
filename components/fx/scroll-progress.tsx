"use client"

import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

/** Fixed top scroll-progress bar in the accent color, scrubbed to page scroll. */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const bar = barRef.current
    if (!bar) return

    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "max",
          scrub: 0.3,
        },
      },
    )
  })

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[5px] origin-left scale-x-0 bg-[var(--neo-primary)] border-b-[2px] border-[var(--neo-border)] z-[60] pointer-events-none"
    />
  )
}
