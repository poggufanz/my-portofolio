"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/utils"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  const focusTags = [
    { label: "Laravel", color: "border-red-500/30 text-red-400/80" },
    { label: "Vue.js", color: "border-green-500/30 text-green-400/80" },
    { label: "PHP", color: "border-violet-500/30 text-violet-400/80" },
    { label: "React", color: "border-cyan-500/30 text-cyan-400/80" },
    { label: "Web3", color: "border-yellow-500/30 text-yellow-400/80" },
    { label: "MySQL", color: "border-blue-500/30 text-blue-400/80" },
    { label: "DevOps", color: "border-orange-500/30 text-orange-400/80" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 futuristic-grid opacity-30" />

      {/* Animated ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl float-animation interactive-blob"
          style={{
            left: mousePosition.x * 0.03 + "px",
            top: mousePosition.y * 0.03 + "px",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-white/5 rounded-full blur-2xl float-animation interactive-blob"
          style={{
            right: mousePosition.x * 0.02 + "px",
            bottom: mousePosition.y * 0.02 + "px",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-48 h-48 bg-white/8 rounded-full blur-xl float-animation interactive-blob"
          style={{
            left: "20%",
            top: mousePosition.y * 0.01 + 100 + "px",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Information */}
            <div className={`space-y-8 transition-all duration-1000 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-xs text-white/70 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for collaboration
              </div>

              <div className="perspective-card group">
                <p className="text-sm font-mono text-white/50 uppercase tracking-[0.25em] mb-3">Full Stack Developer</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-[1.05] tracking-tight">
                  Muhammad
                  <br />
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent selection:bg-white/20 selection:text-white">
                    Faiq
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
                  Building scalable web applications & exploring the frontier of AI, Web3, and Behavioral Science.
                </p>
                <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full" />
              </div>

              {/* Contact info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail className="h-4 w-4 text-white/60" />
                  <span>mfaiq1205@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-white/60 text-base">📍</span>
                  <span>Bandung, West Java, Indonesia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 hover:border-white/40 hover:scale-105 transition-all duration-300 text-xs"
                  onClick={() => window.open("https://github.com/poggufanz", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 hover:border-white/40 hover:scale-105 transition-all duration-300 text-xs"
                  onClick={() => window.open("https://www.linkedin.com/in/muhammad-faiq-1450832ab/", "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-white text-black hover:bg-gray-100 font-medium text-sm px-6"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            {/* Right side */}
            <div
              className={`flex flex-col items-center lg:items-end space-y-8 transition-all duration-1000 delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              {/* Flip card */}
              <div className="relative">
                <div
                  className="flip-card w-64 h-80 md:w-72 md:h-96 cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                    <div className="flip-card-front overflow-hidden bg-white border border-gray-200 relative">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={getImagePath("/images/projects/image.png")}
                          alt="Muhammad Faiq - Profile Photo"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                          <h2 className="text-base font-medium text-white text-center tracking-wide">
                            "Tonight's the night"
                          </h2>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                        <span className="text-[10px] text-white font-medium">Click me</span>
                      </div>
                    </div>

                    <div className="flip-card-back overflow-hidden bg-white border border-gray-200">
                      <div className="h-full flex flex-col p-5 md:p-6">
                        <h3 className="text-base font-bold mb-4 text-center text-black tracking-wide">Developer Card</h3>
                        <div className="space-y-2.5 font-sans text-sm mb-4">
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-gray-500 text-xs">ID</span>
                            <span className="text-black font-mono text-xs">SE-2025-0125</span>
                          </div>
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-gray-500 text-xs">Role</span>
                            <span className="text-black font-medium text-xs">Full Stack Dev</span>
                          </div>
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-gray-500 text-xs">Company</span>
                            <span className="text-black font-medium text-xs">SUNURTECH</span>
                          </div>
                          <div className="flex justify-between items-center py-1 border-b border-gray-100">
                            <span className="text-gray-500 text-xs">Location</span>
                            <span className="text-black font-medium text-xs">Bandung, ID</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="text-gray-500 text-xs">Status</span>
                            <span className="text-green-600 font-semibold text-xs flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-gray-100 rounded px-2 py-1">
                          <span className="text-[10px] text-gray-400">Click to flip back</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="space-y-3 w-full max-w-sm">
                <h3 className="text-[10px] font-mono font-medium text-gray-500 uppercase tracking-[0.3em] text-center lg:text-left">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {focusTags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`px-3 py-1.5 bg-transparent text-xs rounded-full border font-medium hover:bg-white/5 transition-colors duration-200 ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white/40 hover:text-white/70 transition-colors duration-300"
          >
            <ChevronDown className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  )
}
