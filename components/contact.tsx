"use client"

import { Mail, MapPin, Github, Linkedin, Send, Heart } from "lucide-react"
import NeoMarquee from "@/components/fx/neo-marquee"
import { useNeoReveal } from "@/lib/use-neo-reveal"

export default function Contact() {
  const sectionRef = useNeoReveal<HTMLElement>({ stagger: 0.12 })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 bg-[var(--neo-bg)] relative"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-crosshatch pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12" data-reveal>
          <div className="inline-block">
            <span className="neo-tag bg-[var(--neo-accent)] text-[var(--neo-text)] mb-4">
              Say Hello
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[var(--neo-text)]">
            Let's{" "}
            <span
              className="text-[var(--neo-primary)]"
              style={{ textShadow: "2px 2px 0px var(--neo-accent)" }}
            >
              Connect
            </span>
          </h2>
          <p className="text-lg mt-4 text-[var(--neo-text)]/70 max-w-2xl mx-auto leading-relaxed font-medium">
            I'm always interested in discussing new opportunities, innovative projects, or just
            having a conversation about technology &amp; Web3.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Get in touch card */}
          <div className="neo-card p-8 bg-[var(--neo-mint)]/20" data-reveal>
            <h3 className="text-xl font-extrabold text-[var(--neo-text)] mb-6 uppercase tracking-wide flex items-center gap-2">
              <Send className="h-5 w-5" aria-hidden="true" />
              Get In Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:mfaiq1205@gmail.com"
                className="flex items-center gap-3 p-3 border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] hover:bg-[var(--neo-accent)] transition-[transform,box-shadow,background-color] duration-150 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--neo-primary)] border-[2px] border-[var(--neo-border)]">
                  <Mail className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--neo-text)]/50">
                    Email
                  </p>
                  <p className="text-sm font-bold text-[var(--neo-text)] truncate">
                    mfaiq1205@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)]">
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--neo-secondary)] border-[2px] border-[var(--neo-border)]">
                  <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--neo-text)]/50">
                    Location
                  </p>
                  <p className="text-sm font-bold text-[var(--neo-text)]">
                    Bandung, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links card */}
          <div className="neo-card p-8 bg-[var(--neo-lavender)]/20" data-reveal>
            <h3 className="text-xl font-extrabold text-[var(--neo-text)] mb-6 uppercase tracking-wide flex items-center gap-2">
              <Heart className="h-5 w-5" aria-hidden="true" />
              Follow Me
            </h3>
            <div className="space-y-3">
              <a
                href="https://github.com/poggufanz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] hover:bg-[var(--neo-accent)] transition-[transform,box-shadow,background-color] duration-150 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[var(--neo-text)] border-[2px] border-[var(--neo-border)]">
                  <Github className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--neo-text)]">GitHub</p>
                  <p className="text-xs text-[var(--neo-text)]/50">@poggufanz</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/mfaiqmf/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] hover:bg-[var(--neo-accent)] transition-[transform,box-shadow,background-color] duration-150 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#0A66C2] border-[2px] border-[var(--neo-border)]">
                  <Linkedin className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--neo-text)]">LinkedIn</p>
                  <p className="text-xs text-[var(--neo-text)]/50">Muhammad Faiq</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Marquee ticker — speeds up with scroll velocity */}
        <NeoMarquee
          className="mt-16 py-3 bg-[var(--neo-accent)] border-t-[3px] border-b-[3px] border-[var(--neo-border)]"
          speed={18}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 mx-6 text-sm font-extrabold uppercase tracking-widest text-[var(--neo-text)]"
            >
              <span aria-hidden="true">★</span>
              <span translate="no">Open to Work</span>
              <span aria-hidden="true">★</span>
              <span translate="no">Full Stack Dev</span>
              <span aria-hidden="true">★</span>
              <span translate="no">Web3</span>
              <span aria-hidden="true">★</span>
              <span translate="no">AI</span>
            </span>
          ))}
        </NeoMarquee>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t-[3px] border-[var(--neo-border)]">
          <p className="text-sm font-bold text-[var(--neo-text)]/60 uppercase tracking-wide">
            © 2026 Muhammad Faiq. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}
