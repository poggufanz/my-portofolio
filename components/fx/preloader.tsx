"use client"

import { useRef, useState } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

/**
 * Stamp-style intro loader: counter punches up to 100, then the
 * five colored panels wipe upward to reveal the page. Total ~1.4s.
 * Skipped entirely under prefers-reduced-motion.
 */
export default function Preloader() {
  const [done, setDone] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setDone(true)
      return
    }

    const root = rootRef.current
    const countEl = countRef.current
    if (!root || !countEl) return

    document.documentElement.style.overflow = "hidden"

    const counter = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = ""
        setDone(true)
      },
    })

    tl.to(counter, {
      value: 100,
      duration: 0.9,
      ease: "power2.inOut",
      onUpdate: () => {
        countEl.textContent = String(Math.round(counter.value)).padStart(3, "0")
      },
    })
      .to(".preloader-badge", { scale: 1.06, duration: 0.12, ease: "power2.in" })
      .to(".preloader-badge", {
        yPercent: -160,
        rotate: -6,
        duration: 0.4,
        ease: "back.in(1.4)",
      })
      .to(".preloader-panel", {
        yPercent: -100,
        duration: 0.55,
        stagger: 0.06,
        ease: "power4.inOut",
      })

    return () => {
      document.documentElement.style.overflow = ""
      tl.kill()
    }
  })

  if (done) return null

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="fixed inset-0 z-[90] pointer-events-none"
    >
      {/* Wipe panels */}
      <div className="absolute inset-0 flex">
        {[
          "bg-[var(--neo-bg)]",
          "bg-[var(--neo-accent)]",
          "bg-[var(--neo-primary)]",
          "bg-[var(--neo-secondary)]",
          "bg-[var(--neo-text)]",
        ].map((bg, i) => (
          <div
            key={i}
            className={`preloader-panel flex-1 h-full ${bg} ${i > 0 ? "border-l-[3px] border-[var(--neo-border)]" : ""}`}
          />
        ))}
      </div>

      {/* Counter badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="preloader-badge bg-white border-[4px] border-[var(--neo-border)] shadow-[var(--neo-shadow-xl)] px-8 py-5 rotate-[-2deg]">
          <span
            ref={countRef}
            className="font-[var(--font-syne)] text-5xl md:text-7xl font-extrabold tabular-nums text-[var(--neo-text)]"
          >
            000
          </span>
          <span className="font-[var(--font-syne)] text-2xl md:text-4xl font-extrabold text-[var(--neo-primary)]">
            %
          </span>
        </div>
      </div>
    </div>
  )
}
