"use client"

import { Code2, Database, Globe, Zap, Brain, Server, GraduationCap, Building2, Trophy, Languages, MapPin } from "lucide-react"
import { useNeoReveal } from "@/lib/use-neo-reveal"

export default function About() {
  const sectionRef = useNeoReveal<HTMLElement>({ stagger: 0.12 })

  const highlights = [
    { icon: Code2, text: "Full-Stack Development", bg: "bg-[var(--neo-primary)]", textColor: "text-white" },
    { icon: Database, text: "Database & Backend", bg: "bg-[var(--neo-mint)]", textColor: "text-[var(--neo-text)]" },
    { icon: Globe, text: "Web3 & Blockchain", bg: "bg-[var(--neo-lavender)]", textColor: "text-[var(--neo-text)]" },
    { icon: Server, text: "DevOps & Deployment", bg: "bg-[var(--neo-accent)]", textColor: "text-[var(--neo-text)]" },
    { icon: Brain, text: "AI & Machine Learning", bg: "bg-[var(--neo-pink)]", textColor: "text-[var(--neo-text)]" },
    { icon: Zap, text: "System Analysis", bg: "bg-[var(--neo-secondary)]", textColor: "text-white" },
  ]

  const facts = [
    { icon: GraduationCap, label: "Education", value: "Software Engineering, Telkom University (2025–2029)" },
    { icon: Building2, label: "Currently At", value: "Anyar Retail · Retail Group · Full Stack Dev" },
    { icon: Globe, label: "Focus", value: "Web3, Blockchain, AI" },
    { icon: Trophy, label: "Achievement", value: "World Computer Hacker League 2025 — Regional Round" },
    { icon: Languages, label: "Languages", value: "Bahasa Indonesia (Native) · English (ECCT Certified)" },
    { icon: MapPin, label: "Location", value: "Bandung, West Java, Indonesia" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative bg-white border-t-[3px] border-b-[3px] border-[var(--neo-border)]"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-crosshatch pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-block">
            <span className="neo-tag bg-[var(--neo-accent)] mb-4">Who I Am</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[var(--neo-text)]">
            About{" "}
            <span
              className="text-[var(--neo-primary)]"
              style={{ textShadow: "2px 2px 0px var(--neo-accent)" }}
            >
              Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Bio + highlights */}
          <div data-reveal>
            <div className="neo-card p-6 md:p-8 bg-[var(--neo-bg-alt)] mb-8">
              <div className="space-y-4 text-[var(--neo-text)]/80 leading-relaxed text-base">
                <p>
                  I'm an Undergraduate Software Engineering student at{" "}
                  <strong className="text-[var(--neo-text)] font-bold">Telkom University</strong> and a
                  Full Stack Developer at{" "}
                  <strong className="text-[var(--neo-text)] font-bold">PT Anyar Retail Indonesia</strong>{" "}
                  (RKM, Triwarna, ABM). I build web apps that actually get used — not just demo
                  projects — and lately I've been focused on systems that help MSMEs make sense of
                  their financial data.
                </p>
                <p>
                  My stack leans on{" "}
                  <strong className="font-bold">Vue.js and Laravel</strong>, backed by enough SQL to
                  know when a query is doing something wrong. I've shipped systems for MSMEs,
                  accounting firms, and enterprise clients end-to-end — turning messy transactional
                  records into reports business owners can actually read and act on.
                </p>
                <p>
                  Beyond code, I'm digging into{" "}
                  <strong className="font-bold">AI, Web3, and behavioral science</strong> — not as
                  separate interests, but because the interesting problems sit at the intersection.
                  Most systems are built as if users behave rationally. They don't. I want to build
                  things that account for that.
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3.5 border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] ${item.bg} ${item.textColor} hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] transition-[transform,box-shadow] duration-150 cursor-default`}
                >
                  <item.icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quick facts */}
          <div data-reveal>
            <div className="neo-card p-6 md:p-8 bg-[var(--neo-lavender)]/20">
              <h3 className="text-lg font-extrabold text-[var(--neo-text)] mb-6 uppercase tracking-wide flex items-center gap-2">
                <span className="w-4 h-4 bg-[var(--neo-primary)] border-2 border-[var(--neo-border)] inline-block" aria-hidden="true" />
                Quick Facts
              </h3>
              <ul className="space-y-4">
                {facts.map((fact, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <div className="w-9 h-9 flex items-center justify-center border-[2px] border-[var(--neo-border)] bg-white shadow-[2px_2px_0px_var(--neo-border)] shrink-0 group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_var(--neo-border)] transition-[transform,box-shadow] duration-150">
                      <fact.icon className="h-4 w-4 text-[var(--neo-text)]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--neo-text)]/50 mb-0.5">
                        {fact.label}
                      </p>
                      <p className="text-sm font-medium text-[var(--neo-text)] leading-snug">
                        {fact.value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
