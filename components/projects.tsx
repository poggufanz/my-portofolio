"use client"

import { ExternalLink, Github, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  const projects = [
    {
      title: "OpenVote",
      description:
        "Decentralized voting platform ensuring secure, transparent, and participatory governance. Features wallet integration and multiple voting methods (single, multiple, and ranked choice).",
      tech: ["Web3", "Blockchain", "Smart Contracts", "React", "Solidity"],
      type: "Personal Project",
      period: "July 2025 — Present",
      status: "In Development",
      gradient: "from-purple-500 to-pink-500",
      impact: "Enabling transparent governance",
      image: "/images/projects/openvote.png",
    },
    {
      title: "MSME Management System",
      description:
        "Laravel-based application empowering 10+ MSMEs to digitize operations with performance dashboards, inventory management, and automated financial reporting.",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      type: "Professional Project",
      period: "July 2024 — December 2024",
      status: "Completed",
      gradient: "from-blue-500 to-cyan-500",
      impact: "Improved efficiency by 25%",
      image: "/images/projects/freelance_on_unpad.png",
    },
    {
      title: "Financial Reporting System",
      description:
        "Comprehensive accounting system for managing purchase orders, sales, and generating financial reports including ledger, balance sheet, and P&L statements.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      type: "Internship Project",
      period: "October 2023 — March 2024",
      status: "Completed",
      gradient: "from-green-500 to-emerald-500",
      impact: "Automated 5+ financial reports",
      image: "/images/projects/internship.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleProjects((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-6 bg-card/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">
          Featured <span className="text-primary glow-effect">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`project-card perspective-card bg-card p-8 rounded-lg border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden ${
                visibleProjects.includes(index) ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Project Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:glow-effect transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {project.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 md:mt-0">
                    {/* <Button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transition-all duration-300 hover:bg-primary/10 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button> */}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 cursor-pointer ${
                        hoveredProject === index ? "animate-pulse" : ""
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
