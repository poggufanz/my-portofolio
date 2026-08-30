"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

// Registering ScrollTrigger is idempotent; safe to run on import (incl. SSR).
gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Shared neobrutalist easing — snappy, overshooting, mechanical. */
export const NEO_EASE = "back.out(1.7)"
export const NEO_EASE_SOFT = "power3.out"

export { gsap, ScrollTrigger, useGSAP }
