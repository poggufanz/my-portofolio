"use client"

import { useRef } from "react"
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"
import { gsap, useGSAP, NEO_EASE } from "@/lib/gsap"
import Magnetic from "@/components/fx/magnetic"

const NAME_LINES = ["MUHAMMAD", "FAIQ"]

/** Delay so the hero intro starts as the preloader panels finish wiping. */
const INTRO_DELAY = 1.5

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  const techTags = [
    { label: "Laravel", bg: "bg-[#FF6B35]", text: "text-white" },
    { label: "Vue.js", bg: "bg-[#95F2D9]", text: "text-[var(--neo-text)]" },
    { label: "React", bg: "bg-[#00B4D8]", text: "text-white" },
    { label: "TypeScript", bg: "bg-[#C8B6FF]", text: "text-[var(--neo-text)]" },
    { label: "PHP", bg: "bg-[#FF85A1]", text: "text-[var(--neo-text)]" },
    { label: "Stellar", bg: "bg-[#FFD600]", text: "text-[var(--neo-text)]" },
    { label: "Web3", bg: "bg-white", text: "text-[var(--neo-text)]" },
    { label: "DevOps", bg: "bg-[var(--neo-text)]", text: "text-white" },
  ]

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // ── Intro timeline ──────────────────────────────
        gsap.set(".hero-char", { yPercent: 115, rotate: () => gsap.utils.random(-12, 12) })
        gsap.set([".hero-badge", ".hero-tag", ".hero-sticker"], { scale: 0, autoAlpha: 0 })
        gsap.set([".hero-kicker", ".hero-sub", ".hero-contact-row", ".hero-cta", ".hero-tags-label", ".hero-scroll-hint"], {
          y: 24,
          autoAlpha: 0,
        })
        gsap.set(".hero-photo-frame", { clipPath: "inset(100% 0% 0% 0%)" })
        gsap.set(".hero-photo-card", { rotate: 4, y: 40, autoAlpha: 0 })

        const tl = gsap.timeline({ delay: INTRO_DELAY, defaults: { ease: NEO_EASE } })

        tl.to(".hero-badge", { scale: 1, autoAlpha: 1, duration: 0.45, ease: "back.out(2.5)" })
          .to(".hero-kicker", { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.25")
          .to(
            ".hero-char",
            { yPercent: 0, rotate: 0, duration: 0.65, stagger: 0.04, ease: "back.out(1.9)" },
            "-=0.2",
          )
          .to(".hero-sub", { y: 0, autoAlpha: 1, duration: 0.5 }, "-=0.35")
          .to(".hero-contact-row", { y: 0, autoAlpha: 1, duration: 0.4, stagger: 0.08 }, "-=0.3")
          .to(".hero-cta", { y: 0, autoAlpha: 1, duration: 0.45, stagger: 0.09 }, "-=0.25")
          .to(".hero-tags-label", { y: 0, autoAlpha: 1, duration: 0.3 }, "-=0.3")
          .to(".hero-tag", { scale: 1, autoAlpha: 1, duration: 0.35, stagger: 0.05, ease: "back.out(2.2)" }, "-=0.2")
          .to(".hero-photo-card", { rotate: 0, y: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" }, 0.7)
          .to(".hero-photo-frame", { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power4.inOut" }, "<+0.1")
          .to(".hero-sticker", { scale: 1, autoAlpha: 1, duration: 0.4, stagger: 0.12, ease: "back.out(2.5)" }, "-=0.3")
          .to(".hero-scroll-hint", { y: 0, autoAlpha: 1, duration: 0.4 }, "-=0.2")

        // ── Scroll parallax: shapes drift, content eases out ──
        gsap.utils.toArray<HTMLElement>(".hero-shape").forEach((shape, i) => {
          gsap.to(shape, {
            yPercent: (i % 2 === 0 ? -1 : 1) * gsap.utils.random(60, 140),
            rotate: gsap.utils.random(-30, 30),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          })
        })

        gsap.to(".hero-content", {
          yPercent: -8,
          autoAlpha: 0.25,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "40% top",
            end: "bottom top",
            scrub: true,
          },
        })
      })

      // ── Pointer-only: photo tilt + shape mouse drift ──
      mm.add("(pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
        const card = photoRef.current
        const section = sectionRef.current
        if (!card || !section) return

        gsap.set(card, { transformPerspective: 800 })
        const rotX = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" })
        const rotY = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" })

        const onCardMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect()
          rotX(gsap.utils.clamp(-8, 8, -((e.clientY - r.top) / r.height - 0.5) * 16))
          rotY(gsap.utils.clamp(-8, 8, ((e.clientX - r.left) / r.width - 0.5) * 16))
        }
        const onCardLeave = () => {
          rotX(0)
          rotY(0)
        }

        card.addEventListener("mousemove", onCardMove, { passive: true })
        card.addEventListener("mouseleave", onCardLeave)

        const shapeSetters = gsap.utils
          .toArray<HTMLElement>(".hero-shape")
          .map((shape, i) => ({
            x: gsap.quickTo(shape, "x", { duration: 0.8, ease: "power3.out" }),
            y: gsap.quickTo(shape, "y", { duration: 0.8, ease: "power3.out" }),
            depth: ((i % 3) + 1) * 12,
          }))

        const onSectionMove = (e: MouseEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5
          const ny = e.clientY / window.innerHeight - 0.5
          shapeSetters.forEach((s) => {
            s.x(nx * s.depth)
            s.y(ny * s.depth)
          })
        }
        section.addEventListener("mousemove", onSectionMove, { passive: true })

        return () => {
          card.removeEventListener("mousemove", onCardMove)
          card.removeEventListener("mouseleave", onCardLeave)
          section.removeEventListener("mousemove", onSectionMove)
        }
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-6"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-dots pointer-events-none" />

      {/* Decorative floating shapes */}
      <div
        className="hero-shape neo-shape neo-shape--circle hidden md:block"
        style={{ width: "48px", height: "48px", top: "15%", right: "8%", background: "var(--neo-accent)" }}
        aria-hidden="true"
      />
      <div
        className="hero-shape neo-shape hidden md:block"
        style={{ width: "36px", height: "36px", top: "60%", left: "5%", background: "var(--neo-lavender)" }}
        aria-hidden="true"
      />
      <div
        className="hero-shape neo-shape neo-shape--circle hidden md:block"
        style={{ width: "24px", height: "24px", bottom: "25%", right: "15%", background: "var(--neo-mint)" }}
        aria-hidden="true"
      />
      <div
        className="hero-shape neo-shape hidden lg:block"
        style={{ width: "64px", height: "64px", top: "20%", left: "10%", background: "var(--neo-pink)", transform: "rotate(12deg)" }}
        aria-hidden="true"
      />

      <div className="hero-content max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="space-y-6">
            {/* Status badge */}
            <div className="hero-badge inline-flex items-center gap-2 neo-tag bg-[var(--neo-mint)]">
              <span className="w-2 h-2 bg-[var(--neo-text)] animate-pulse" aria-hidden="true" />
              Available for Collaboration
            </div>

            {/* Name */}
            <div>
              <p className="hero-kicker text-sm font-bold uppercase tracking-[0.2em] text-[var(--neo-text)]/70 mb-2">
                Full Stack Developer
              </p>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-[var(--neo-text)]"
                aria-label="Muhammad Faiq"
              >
                {NAME_LINES.map((line, lineIdx) => (
                  <span
                    key={line}
                    aria-hidden="true"
                    className={`block overflow-hidden pb-1 ${lineIdx === 1 ? "text-[var(--neo-primary)]" : ""}`}
                    style={lineIdx === 1 ? { textShadow: "3px 3px 0px var(--neo-accent)" } : undefined}
                  >
                    {line.split("").map((char, i) => (
                      <span key={i} className="hero-char inline-block will-change-transform">
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
              <p className="hero-sub text-lg md:text-xl mt-4 leading-relaxed max-w-lg text-[var(--neo-text)]/80 font-medium">
                Building scalable web applications &amp; exploring the frontier of AI, Web3, and Blockchain.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-1.5">
              <div className="hero-contact-row flex items-center gap-2 text-sm font-medium text-[var(--neo-text)]/70">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>mfaiq1205@gmail.com</span>
              </div>
              <div className="hero-contact-row flex items-center gap-2 text-sm font-medium text-[var(--neo-text)]/70">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Bandung, West Java, Indonesia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Magnetic className="hero-cta">
                <Button
                  size="lg"
                  onClick={() =>
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                  Get In Touch
                </Button>
              </Magnetic>
              <Magnetic className="hero-cta">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open("https://github.com/poggufanz", "_blank")}
                >
                  <Github className="mr-1 h-4 w-4" aria-hidden="true" />
                  GitHub
                </Button>
              </Magnetic>
              <Magnetic className="hero-cta">
                <Button
                  variant="accent"
                  size="lg"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/mfaiqmf/", "_blank")
                  }
                >
                  <Linkedin className="mr-1 h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </Button>
              </Magnetic>
            </div>

            {/* Tech tags */}
            <div className="pt-2">
              <p className="hero-tags-label text-xs font-bold uppercase tracking-[0.2em] text-[var(--neo-text)]/50 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span key={tag.label} className={`hero-tag neo-tag ${tag.bg} ${tag.text}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo card */}
          <div className="flex justify-center lg:justify-end">
            <div ref={photoRef} className="hero-photo-card relative will-change-transform">
              {/* Main photo card */}
              <div className="neo-card p-3 bg-white w-[280px] sm:w-[300px] md:w-[320px]">
                <div className="hero-photo-frame border-[3px] border-[var(--neo-border)] overflow-hidden">
                  <img
                    src={getImagePath("/images/projects/image.png")}
                    alt="Muhammad Faiq — Profile Photo"
                    className="w-full h-[360px] sm:h-[380px] md:h-[400px] object-cover"
                    width={320}
                    height={400}
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-extrabold text-lg text-[var(--neo-text)] tracking-tight">
                    Muhammad Faiq
                  </p>
                  <p className="text-sm font-medium text-[var(--neo-text)]/60">
                    "Tonight's the night"
                  </p>
                </div>
              </div>

              {/* Decorative sticker — Developer badge */}
              <div className="hero-sticker absolute -top-4 -right-4 neo-tag bg-[var(--neo-accent)] rotate-6 text-xs z-10">
                ★ DEV
              </div>

              {/* Decorative sticker — ID badge */}
              <div className="hero-sticker absolute -bottom-4 -left-4 bg-[var(--neo-lavender)] border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] px-3 py-2 -rotate-3 z-10">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--neo-text)]/60">
                  ID
                </p>
                <p className="text-xs font-extrabold text-[var(--neo-text)]">SE-2025-0125</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-hint absolute bottom-4 left-1/2 -translate-x-1/2">
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="neo-bounce flex flex-col items-center gap-1 text-[var(--neo-text)]/40 hover:text-[var(--neo-text)] transition-colors duration-150 cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
