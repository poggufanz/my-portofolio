"use client"

import { Calendar, Tag, Github } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { getImagePath } from "@/lib/utils"

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      title: "OpenVote",
      description:
        "Decentralized voting platform ensuring secure, transparent, and participatory governance. Features wallet integration and multiple voting methods (single, multiple, and ranked choice).",
      tech: ["Web3", "Blockchain", "Smart Contracts", "React", "Solidity"],
      type: "Personal Project",
      period: "July 2025 — Present",
      status: "In Development",
      statusBg: "bg-[var(--neo-secondary)]",
      statusText: "text-white",
      impact: "Enabling transparent governance",
      image: getImagePath("/images/projects/openvote.png"),
      cardBg: "bg-[var(--neo-lavender)]/15",
      accentBg: "bg-[var(--neo-lavender)]",
      github: "https://github.com/poggufanz/dao-tools",
    },
    {
      title: "MSME Management System",
      description:
        "Laravel-based application empowering 10+ MSMEs to digitize operations with performance dashboards, inventory management, and automated financial reporting.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      type: "Professional Project",
      period: "July 2024 — December 2024",
      status: "Completed",
      statusBg: "bg-[var(--neo-mint)]",
      statusText: "text-[var(--neo-text)]",
      impact: "Improved efficiency by 25%",
      image: getImagePath("/images/projects/freelance_on_unpad.png"),
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
      cardBg: "bg-[var(--neo-accent)]/15",
      accentBg: "bg-[var(--neo-accent)]",
      github: "https://github.com/poggufanz/project-akuntan",
    },
  ]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => (prev.includes(index) ? prev : [...prev, index]))
          }
        },
        { threshold: 0.15 },
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white border-t-[3px] border-b-[3px] border-[var(--neo-border)] relative"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-dots pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
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

        {/* Project cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { projectRefs.current[index] = el }}
              className={`transition-[transform,opacity] duration-500 ease-out ${visibleProjects.includes(index)
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`neo-card overflow-hidden ${project.cardBg}`}>
                {/* Project image */}
                <div className="border-b-[3px] border-[var(--neo-border)] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — Project Screenshot`}
                    className="w-full h-56 md:h-64 object-cover hover:scale-[1.02] transition-transform duration-300"
                    width={800}
                    height={256}
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
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

                  {/* Tech stack + GitHub button */}
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
          ))}
        </div>
      </div>
    </section>
  )
}
