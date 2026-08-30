"use client"

import { MapPin, Calendar, Building2, Cpu } from "lucide-react"
import { useNeoReveal } from "@/lib/use-neo-reveal"

export default function Experience() {
  const sectionRef = useNeoReveal<HTMLElement>({ rotate: 1.2, y: 64 })

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "PT ANYAR RETAIL INDONESIA",
      companyType: "Retail Group · RKM, Triwarna, ABM",
      location: "Rancaekek, West Java",
      period: "July 2026 — Present",
      isCurrent: true,
      project: "Business Operations Systems",
      description: [
        "Designing and developing web & mobile application solutions supporting business operations across the RKM, Triwarna, and ABM retail brands",
        "Analyzing business requirements and developing technology solutions aligned with company goals",
        "Implementing, testing, and maintaining the company's IT systems and applications",
        "Collaborating with cross-functional teams to identify and resolve IT issues",
        "Assisting in the development, improvement, and optimization of the company's IT infrastructure",
        "Documenting IT processes and procedures to ensure operational continuity",
      ],
      tech: ["Web Development", "Mobile", "System Analysis", "DevOps", "IT Infrastructure"],
      accentBg: "bg-[var(--neo-primary)]",
      accentText: "text-white",
    },
    {
      title: "Full Stack Developer",
      company: "SUNURTECH",
      companyType: "IT Consultant",
      location: "Bandung, West Java",
      period: "January 2026 — July 2026",
      isCurrent: false,
      project: "Manajemen Proyek",
      description: [
        "Built the 'Manajemen Proyek' platform end-to-end for an IT consulting company",
        "Conducted system analysis to define functional & technical specifications aligned with client needs",
        "Wrote and developed program code per tasks assigned by the Team Leader / Project Manager",
        "Performed module integration and internal functional testing across the system",
        "Handled DevOps: setup, deployment, and management of both development and production server environments",
        "Resolved bugs, errors, and change requests following the project revision workflow",
        "Participated in daily standups and client-facing meetings per project schedule",
      ],
      tech: ["Laravel", "PHP", "MySQL", "Vue.js", "DevOps", "System Analysis"],
      accentBg: "bg-[var(--neo-secondary)]",
      accentText: "text-white",
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
      accentBg: "bg-[var(--neo-lavender)]",
      accentText: "text-[var(--neo-text)]",
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
      accentBg: "bg-[var(--neo-mint)]",
      accentText: "text-[var(--neo-text)]",
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 bg-[var(--neo-bg)] relative"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 neo-grid-lines pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-block">
            <span className="neo-tag bg-[var(--neo-secondary)] text-white mb-4">Career Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[var(--neo-text)]">
            Professional{" "}
            <span
              className="text-[var(--neo-primary)]"
              style={{ textShadow: "2px 2px 0px var(--neo-accent)" }}
            >
              Experience
            </span>
          </h2>
        </div>

        {/* Experience cards — stacked layout */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} data-reveal>
              <div className="neo-card overflow-hidden">
                {/* Colored header bar */}
                <div className={`${exp.accentBg} ${exp.accentText} px-6 py-4 border-b-[3px] border-[var(--neo-border)]`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-extrabold">{exp.title}</h3>
                      {exp.isCurrent && (
                        <span className="neo-tag bg-[var(--neo-accent)] text-[var(--neo-text)] text-[10px]">
                          <span className="w-1.5 h-1.5 bg-[var(--neo-text)] animate-pulse mr-1 inline-block" aria-hidden="true" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-bold opacity-90">{exp.company}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-white">
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="neo-tag bg-white text-xs">
                      <Building2 className="h-3 w-3 mr-1" aria-hidden="true" />
                      {exp.companyType}
                    </span>
                    <span className="neo-tag bg-white text-xs">
                      <MapPin className="h-3 w-3 mr-1" aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="neo-tag bg-white text-xs">
                      <Calendar className="h-3 w-3 mr-1" aria-hidden="true" />
                      {exp.period}
                    </span>
                    <span className="neo-tag bg-[var(--neo-bg)] text-xs">
                      <Cpu className="h-3 w-3 mr-1" aria-hidden="true" />
                      {exp.project}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--neo-text)]/80">
                        <span
                          className="mt-1.5 block w-2 h-2 border-[2px] border-[var(--neo-border)] bg-[var(--neo-accent)] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="neo-tag bg-[var(--neo-bg)] text-[var(--neo-text)] text-xs"
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
    </section>
  )
}
