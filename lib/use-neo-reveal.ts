"use client"

import { useRef, type MutableRefObject } from "react"
import { gsap, useGSAP, NEO_EASE_SOFT } from "@/lib/gsap"

interface NeoRevealOptions {
  /** CSS selector for elements to reveal within the scope. */
  selector?: string
  /** Seconds between each item. */
  stagger?: number
  /** Initial vertical offset in px. */
  y?: number
  /** Initial rotation in degrees (alternates sign per item). */
  rotate?: number
}

/**
 * Scroll-triggered batch reveal for a section. Returns a scope ref to
 * attach to the section root. Elements matching `selector` slide up and
 * snap into place as they enter the viewport. No-ops under
 * prefers-reduced-motion (content stays fully visible).
 */
export function useNeoReveal<T extends HTMLElement>(
  options: NeoRevealOptions = {},
): MutableRefObject<T | null> {
  const { selector = "[data-reveal]", stagger = 0.1, y = 48, rotate = 0 } = options
  const scopeRef = useRef<T | null>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(selector)
        if (!items.length) return

        items.forEach((item, i) => {
          gsap.from(item, {
            y,
            autoAlpha: 0,
            rotate: rotate ? (i % 2 === 0 ? -rotate : rotate) : 0,
            duration: 0.7,
            ease: NEO_EASE_SOFT,
            delay: (i % 3) * stagger,
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          })
        })
      })

      return () => mm.revert()
    },
    { scope: scopeRef },
  )

  return scopeRef
}
