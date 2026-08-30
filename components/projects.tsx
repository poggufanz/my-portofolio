"use client"

import { Calendar, Tag, Github, ExternalLink } from "lucide-react"
import { getImagePath } from "@/lib/utils"
import { gsap, useGSAP } from "@/lib/gsap"
import { useNeoReveal } from "@/lib/use-neo-reveal"

type Project = {
  title: string
  description: string
  tech: string[]
  type: string
  period: string
  status: string
  statusBg: string
  statusText: string
  impact: string
  image: string
  imageCaption: string
  cardBg: string
  accentBg: string
  github?: string
  live?: string
  liveLabel?: string
}

export default function Projects() {
  const sectionRef = useNeoReveal<HTMLElement>({ y: 72 })

  const groups: { label: string; tagBg: string; projects: Project[] }[] = [
    {
      label: "Side Projects",
      tagBg: "bg-[var(--neo-accent)] text-[var(--neo-text)]",
      projects: [
        {
          title: "Rocky",
          description:
            "Local CLI companion for AI coding agents (Claude Code, Codex, and others). Remembers failed commands and the fixes that actually worked, feeds that memory back over MCP so the same error never repeats — and requires a stated rationale before an agent touches your files. Local-only, zero runtime dependencies, append-only ledger you own.",
          tech: ["TypeScript", "Node.js", "MCP", "CLI", "Ollama"],
          type: "Side Project",
          period: "Aug 2026 — Present",
          status: "Active",
          statusBg: "bg-[var(--neo-accent)]",
          statusText: "text-[var(--neo-text)]",
          impact: "Published on npm",
          image: getImagePath("/images/projects/rocky-demo.gif"),
          imageCaption: "rocky remembers a failed build — and the fix that turned it green",
          cardBg: "bg-[var(--neo-primary)]/10",
          accentBg: "bg-[var(--neo-primary)] text-white",
          github: "https://github.com/poggufanz/rocky",
          live: "https://www.npmjs.com/package/@poggufanz/rocky-cli",
          liveLabel: "npm",
        },
        {
          title: "Vibing Farmer",
          description:
            "AI agent swarm that farms yield on Stellar under limits you sign once and the chain enforces. An AI strategist + council plans the allocation, workers deposit in parallel gas-free via a fee-bump relay, and kill switches live on-chain. Live on Stellar testnet, supplying real Blend Capital v2 pools.",
          tech: ["Stellar", "Soroban", "Rust", "React", "Blend Capital"],
          type: "Side Project",
          period: "2026",
          status: "Live · Testnet",
          statusBg: "bg-[var(--neo-mint)]",
          statusText: "text-[var(--neo-text)]",
          impact: "1 signature · 0 gas for users",
          image: getImagePath("/images/projects/vibing-farmer.png"),
          imageCaption: "Plan · Protect · Start — one signed grant, parallel gas-free agents",
          cardBg: "bg-[var(--neo-mint)]/15",
          accentBg: "bg-[var(--neo-mint)]",
          github: "https://github.com/poggufanz/vibingfarmer",
          live: "https://vibing-farmer.pages.dev",
          liveLabel: "Live App",
        },
        {
          title: "OpenVote",
          description:
            "Decentralized voting platform ensuring secure, transparent, and participatory governance. Features wallet integration and multiple voting methods (single, multiple, and ranked choice).",
          tech: ["Web3", "Blockchain", "Smart Contracts", "React", "Solidity"],
          type: "Hackathon · WCHL 2025",
          period: "July 2025",
          status: "In Development",
          statusBg: "bg-[var(--neo-secondary)]",
          statusText: "text-white",
          impact: "Enabling transparent governance",
          image: getImagePath("/images/projects/openvote.png"),
          imageCaption: "wallet-based voting with ranked choice support",
          cardBg: "bg-[var(--neo-lavender)]/15",
          accentBg: "bg-[var(--neo-lavender)]",
          github: "https://github.com/poggufanz/dao-tools",
        },
      ],
    },
    {
      label: "Client Work",
      tagBg: "bg-[var(--neo-secondary)] text-white",
      projects: [
        {
          title: "MSME Management System",
          description:
            "Laravel-based application empowering 10+ MSMEs to digitize operations with performance dashboards, inventory management, and automated financial reporting.",
          tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
          type: "Client Project",
          period: "July 2024 — December 2024",
          status: "Completed",
          statusBg: "bg-[var(--neo-mint)]",
          statusText: "text-[var(--neo-text)]",
          impact: "Improved efficiency by 25%",
          image: getImagePath("/images/projects/freelance_on_unpad.png"),
          imageCaption: "performance dashboards for MSME decision-making",
          cardBg: "bg-[var(--neo-mint)]/15",
          accentBg: "bg-[var(--neo-mint)]",
          github: "https://sipeci.gitbook.io/",
        },
        {
          title: "Financial Reporting System",
          description:
            "Comprehensive accounting system for managing purchase orders, sales, and generating financial reports including ledger, balance sheet, and P&L statements.",
          tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
          type: "Internship Project",
          period: "October 2023 — March 2024",
          status: "Completed",
          statusBg: "bg-[var(--neo-mint)]",
          statusText: "text-[var(--neo-text)]",
          impact: "Automated 5+ financial reports",
          image: getImagePath("/images/projects/internship.png"),
          imageCaption: "ledger, balance sheet, and P&L generated from raw transactions",
          cardBg: "bg-[var(--neo-accent)]/15",
          accentBg: "bg-[var(--neo-accent)]",
          github: "https://github.com/poggufanz/project-akuntan",
        },
      ],
    },
  ]

  // Subtle parallax drift inside each project image frame while scrolling.
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".project-img").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -10, scale: 1.15 },
            {
              yPercent: 10,
              scale: 1.15,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.4,
              },
            },
          )
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-white border-t-[3px] border-b-[3px] border-[var(--neo-border)] relative"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-dots pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-block">
            <span className="neo-tag bg-[var(--neo-pink)] text-[var(--neo-text)] mb-4">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[var(--neo-text)]">
            Featured{" "}
            <span
              className="text-[var(--neo-primary)]"
              style={{ textShadow: "2px 2px 0px var(--neo-accent)" }}
            >
              Projects
            </span>
          </h2>
        </div>

        {/* Project groups */}
        {groups.map((group) => (
          <div key={group.label} className="mb-14 last:mb-0">
            {/* Group sub-heading */}
            <div className="flex items-center gap-4 mb-8" data-reveal>
              <span className={`neo-tag ${group.tagBg} text-sm shrink-0`}>{group.label}</span>
              <div className="flex-1 border-t-[3px] border-[var(--neo-border)]" aria-hidden="true" />
            </div>

            {/* Project cards */}
            <div className="space-y-10">
              {group.projects.map((project, index) => (
                <div key={index} data-reveal>
                  <div className={`neo-card overflow-hidden ${project.cardBg}`}>
                    {/* Project image */}
                    <div className="border-b-[3px] border-[var(--neo-border)] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} — Project Screenshot`}
                        className="project-img w-full aspect-video object-cover will-change-transform"
                        width={1280}
                        height={720}
                        loading="lazy"
                      />
                    </div>
                    <p className="px-6 md:px-8 pt-3 pb-1 text-[11px] font-bold uppercase tracking-widest text-[var(--neo-text)]/50">
                      {project.imageCaption}
                    </p>

                    {/* Content */}
                    <div className="p-6 md:p-8 pt-4 md:pt-5">
                      {/* Title row */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <h3 className="text-2xl font-extrabold text-[var(--neo-text)]">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 shrink-0">
                          <span className={`neo-tag ${project.statusBg} ${project.statusText} text-[10px]`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="neo-tag bg-white text-xs">
                          <Tag className="h-3 w-3 mr-1" aria-hidden="true" />
                          {project.type}
                        </span>
                        <span className="neo-tag bg-white text-xs">
                          <Calendar className="h-3 w-3 mr-1" aria-hidden="true" />
                          {project.period}
                        </span>
                        <span className={`neo-tag ${project.accentBg} text-xs`}>
                          {project.impact}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[var(--neo-text)]/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack + action buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="neo-tag bg-[var(--neo-bg)] text-[var(--neo-text)] text-xs hover:bg-[var(--neo-accent)] transition-colors duration-150"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 shrink-0">
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide bg-[var(--neo-accent)] text-[var(--neo-text)] border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-[transform,box-shadow] duration-150 shrink-0"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              {project.liveLabel}
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wide bg-[var(--neo-text)] text-white border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-[transform,box-shadow] duration-150 shrink-0"
                            >
                              <Github className="h-4 w-4" aria-hidden="true" />
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
