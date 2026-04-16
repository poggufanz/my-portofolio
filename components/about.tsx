"use client"

import { useEffect, useState } from "react"
import { Code2, Database, Globe, Zap, Brain, Server } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: Code2, text: "Full-Stack Development", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Database, text: "Database & Backend", color: "text-green-400", bg: "bg-green-500/10" },
    { icon: Globe, text: "Web3 & Blockchain", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Server, text: "DevOps & Deployment", color: "text-orange-400", bg: "bg-orange-500/10" },
    { icon: Brain, text: "AI & Behavioral Science", color: "text-pink-400", bg: "bg-pink-500/10" },
    { icon: Zap, text: "System Analysis", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  ]

  const facts = [
    { icon: "🎓", label: "Education", value: "Software Engineering — Telkom University (2025–2029)" },
    { icon: "🏢", label: "Currently at", value: "SUNURTECH · IT Consultant · Full Stack Dev" },
    { icon: "🌐", label: "Focus", value: "Web3, Blockchain (ICP), AI & Behavioral Science" },
    { icon: "🏆", label: "Achievement", value: "World Computer Hacker League 2025 — Regional Round" },
    { icon: "🗣️", label: "Languages", value: "Bahasa Indonesia (Native) · English (Working)" },
    { icon: "📍", label: "Location", value: "Bandung, West Java, Indonesia" },
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">Who I Am</p>
          <h2 className="text-4xl font-bold text-balance">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — Bio + highlights */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px] mb-8">
              <p className="hover:text-foreground transition-colors duration-300">
                I'm an Undergraduate Software Engineering student at{" "}
                <span className="text-white font-medium">Telkom University</span> and a Full Stack Developer
                currently working at{" "}
                <span className="text-white font-medium">SUNURTECH</span>, an IT consulting company in Bandung.
                I build practical, scalable web solutions that directly impact real business operations.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                My technical core is <span className="text-white/80">full-stack development</span> with
                Vue.js, Laravel, and PHP, backed by strong SQL and DevOps fundamentals. I've delivered
                systems for MSMEs, accounting firms, and enterprise clients — turning raw data into
                actionable insights.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                Beyond code, I actively explore the intersection of{" "}
                <span className="text-white/80">AI, Web3, and Behavioral Science</span> — bridging complex
                backend logic with human psychology to build smarter digital ecosystems. Currently deep in
                Blockchain (ICP) and decentralized governance systems.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2.5 p-3 rounded-lg border border-white/5 ${item.bg} hover:border-white/15 transition-all duration-300 hover:scale-[1.02] cursor-default group`}
                >
                  <item.icon
                    className={`h-4 w-4 shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quick facts card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-card rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group">
              {/* Card top accent */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-6 md:p-7">
                <h3 className="text-sm font-mono font-semibold text-white/80 mb-5 uppercase tracking-wider">
                  Quick Facts
                </h3>
                <ul className="space-y-3.5">
                  {facts.map((fact, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform duration-200 cursor-default"
                    >
                      <span className="text-base mt-0.5 shrink-0">{fact.icon}</span>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                          {fact.label}
                        </p>
                        <p className="text-sm text-white/80 group-hover/item:text-white transition-colors leading-snug">
                          {fact.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl float-animation pointer-events-none" />
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/3 rounded-full blur-xl float-animation pointer-events-none"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
