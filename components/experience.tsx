"use client"

import { useEffect, useState, useRef } from "react"
import { MapPin, Calendar, Building2, Cpu } from "lucide-react"

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "SUNURTECH",
      companyType: "IT Consultant",
      location: "Bandung, West Java",
      period: "January 2026 — Present",
      isCurrent: true,
      project: "Manajemen Proyek",
      description: [
        "Developing the 'Manajemen Proyek' platform end-to-end for an IT consulting company",
        "Conducted system analysis to define functional & technical specifications aligned with client needs",
        "Wrote and developed program code per tasks assigned by the Team Leader / Project Manager",
        "Performed module integration and internal functional testing across the system",
        "Handled DevOps: setup, deployment, and management of both development and production server environments",
        "Resolved bugs, errors, and change requests following the project revision workflow",
        "Participated in daily standups and client-facing meetings per project schedule",
      ],
      tech: ["Laravel", "PHP", "MySQL", "Vue.js", "DevOps", "System Analysis"],
    },
    {
      title: "Full Stack Developer",
      company: "LMFEB UNPAD",
      companyType: "University Research Lab",
      location: "Bandung, West Java",
      period: "July 2024 — December 2024",
      isCurrent: false,
      project: "MSME Digital Operations",
      description: [
        "Developed a Laravel-based application empowering 10+ MSMEs to digitize their operations",
        "Built performance analysis dashboards, improving business decision-making speed by 25%",
        "Designed user-friendly interfaces for inventory management and financial tracking",
        "Automated generation of 5+ financial reports (ledger, balance sheet, P&L, etc.)",
        "Created collaboration features enabling MSMEs to connect and grow together",
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    },
    {
      title: "Software Engineer Intern",
      company: "KJA Kasir CA BKP",
      companyType: "Accounting Firm",
      location: "Bandung, West Java",
      period: "October 2023 — March 2024",
      isCurrent: false,
      project: "Financial Report Application",
      description: [
        "Built a web-based financial report application transforming raw transactional data into actionable insights",
        "Managed complete data flows: purchase orders, goods receipts, sales orders, and invoices",
        "Generated reports including general ledger, balance sheet, and P&L statements",
        "Supported stock opname (inventory check) and cash opname (cash reconciliation)",
        "Improved report preparation efficiency by 20% through process automation",
      ],
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    },
  ]

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]))
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
    <section id="experience" className="py-24 px-6 bg-[oklch(0.06_0_0)] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 experience-bg-pattern opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        <div className="mb-16 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-3">Career Timeline</p>
          <h2 className="text-4xl font-bold text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { itemRefs.current[index] = el }}
                className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-5 -translate-x-1/2">
                  {exp.isCurrent ? (
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50" />
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
                    </span>
                  ) : (
                    <span className="block h-3 w-3 rounded-full bg-white/30 border border-white/50" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`group rounded-xl border transition-all duration-300 hover:border-white/30 overflow-hidden ${
                    exp.isCurrent
                      ? "bg-[oklch(0.12_0_0)] border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                      : "bg-[oklch(0.10_0_0)] border-white/12"
                  }`}
                >
                  {/* Top accent bar for current role */}
                  {exp.isCurrent && (
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  )}

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                          {exp.isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-black">
                              <span className="w-1.5 h-1.5 rounded-full bg-black inline-block animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="font-medium text-white/90">{exp.company}</span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Building2 className="h-3 w-3" />
                            {exp.companyType}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                        </div>

                        {/* Project badge */}
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                            <Cpu className="h-3 w-3" />
                            {exp.project}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-1.5 mb-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-muted-foreground/90">
                          <span className="mt-1.5 block w-1 h-1 rounded-full bg-white/40 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/70 rounded-md hover:bg-white/10 hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
