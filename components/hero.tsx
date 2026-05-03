"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const techTags = [
    { label: "Laravel", bg: "bg-[#FF6B35]", text: "text-white" },
    { label: "Vue.js", bg: "bg-[#95F2D9]", text: "text-[var(--neo-text)]" },
    { label: "PHP", bg: "bg-[#C8B6FF]", text: "text-[var(--neo-text)]" },
    { label: "React", bg: "bg-[#00B4D8]", text: "text-white" },
    { label: "Web3", bg: "bg-[#FFD600]", text: "text-[var(--neo-text)]" },
    { label: "MySQL", bg: "bg-[#FF85A1]", text: "text-[var(--neo-text)]" },
    { label: "DevOps", bg: "bg-white", text: "text-[var(--neo-text)]" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 neo-dots pointer-events-none" />

      {/* Decorative floating shapes */}
      <div
        className="neo-shape neo-shape--circle neo-shape--float hidden md:block"
        style={{
          width: "48px", height: "48px",
          top: "15%", right: "8%",
          background: "var(--neo-accent)",
          animationDelay: "0s",
        }}
        aria-hidden="true"
      />
      <div
        className="neo-shape neo-shape--float hidden md:block"
        style={{
          width: "36px", height: "36px",
          top: "60%", left: "5%",
          background: "var(--neo-lavender)",
          animationDelay: "2s",
        }}
        aria-hidden="true"
      />
      <div
        className="neo-shape neo-shape--circle neo-shape--float hidden md:block"
        style={{
          width: "24px", height: "24px",
          bottom: "25%", right: "15%",
          background: "var(--neo-mint)",
          animationDelay: "4s",
        }}
        aria-hidden="true"
      />
      <div
        className="neo-shape neo-shape--float hidden lg:block"
        style={{
          width: "64px", height: "64px",
          top: "20%", left: "10%",
          background: "var(--neo-pink)",
          transform: "rotate(12deg)",
          animationDelay: "1s",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div
            className={`space-y-6 transition-[transform,opacity] duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 neo-tag bg-[var(--neo-mint)]">
              <span className="w-2 h-2 bg-[var(--neo-text)] animate-pulse" aria-hidden="true" />
              Available for Collaboration
            </div>

            {/* Name */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--neo-text)]/70 mb-2">
                Full Stack Developer
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight text-[var(--neo-text)]">
                MUHAMMAD
                <br />
                <span className="text-[var(--neo-primary)] inline-block" style={{ textShadow: "3px 3px 0px var(--neo-accent)" }}>
                  FAIQ
                </span>
              </h1>
              <p className="text-lg md:text-xl mt-4 leading-relaxed max-w-lg text-[var(--neo-text)]/80 font-medium">
                Building scalable web applications &amp; exploring the frontier of AI, Web3, and Behavioral Science.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--neo-text)]/70">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>mfaiq1205@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--neo-text)]/70">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span>Bandung, West Java, Indonesia</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-1 h-4 w-4" aria-hidden="true" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/poggufanz", "_blank")
                }
              >
                <Github className="mr-1 h-4 w-4" aria-hidden="true" />
                GitHub
              </Button>
              <Button
                variant="accent"
                size="lg"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/muhammad-faiq-1450832ab/", "_blank")
                }
              >
                <Linkedin className="mr-1 h-4 w-4" aria-hidden="true" />
                LinkedIn
              </Button>
            </div>

            {/* Tech tags */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--neo-text)]/50 mb-3">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`neo-tag ${tag.bg} ${tag.text}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Photo card */}
          <div
            className={`flex justify-center lg:justify-end transition-[transform,opacity] duration-500 ease-out delay-200 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main photo card */}
              <div className="neo-card p-3 bg-white w-[280px] sm:w-[300px] md:w-[320px]">
                <div className="border-[3px] border-[var(--neo-border)] overflow-hidden">
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
              <div
                className="absolute -top-4 -right-4 neo-tag bg-[var(--neo-accent)] rotate-6 text-xs z-10"
              >
                ★ DEV
              </div>

              {/* Decorative sticker — ID badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-[var(--neo-lavender)] border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] px-3 py-2 -rotate-3 z-10"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--neo-text)]/60">
                  ID
                </p>
                <p className="text-xs font-extrabold text-[var(--neo-text)]">
                  SE-2025-0125
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
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
