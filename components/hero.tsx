"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 futuristic-grid opacity-30" />

      <div className="absolute inset-0 overflow-hidden">
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
            <div className="space-y-8">
              <div className="perspective-card group">
                <h1 className="text-4xl md:text-6xl font-bold mb-2 text-balance text-white drop-shadow-2xl">
                  Im,{" "}
                  <span className="text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-shimmer">
                      <br /> Muhammad Faiq 
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6 text-pretty leading-relaxed drop-shadow-lg">
                  Passionate about crafting scalable web applications and exploring the future of Web3 technology.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 rounded-full" />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-white" />
                  <span>mfaiq1205@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-white">📍</span>
                  <span>Bandung, Indonesia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="perspective-card bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  onClick={() => window.open("https://github.com/poggufanz", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="perspective-card bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/muhammad-faiq-1450832ab/", "_blank")}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-white text-black hover:bg-gray-200 border border-white/30"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Right side - Flip Card Photo */}
            <div className="flex flex-col items-center lg:items-end space-y-6">
              <div className="relative">
                <div
                  className="flip-card w-64 h-80 md:w-72 md:h-96 cursor-pointer"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
                    <div className="flip-card-front overflow-hidden bg-white border border-gray-200 relative">
                      {/* Photo area - 100% of card, full-width and full-height */}
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                        <img
                          src="/images/projects/image.png"
                          alt="Muhammad Faiq - Profile Photo"
                          className="w-full h-full object-cover"
                        />

                        {/* Name overlaid at the bottom */}
                        <div className="absolute bottom-4 left-0 right-0 p-3 md:p-4 bg-black/50 backdrop-blur-sm">
                          <h2 className="text-lg md:text-xl font-bold text-white text-center tracking-wide drop-shadow-2xl">
                            "Tonight's the night"
                          </h2>
                        </div>
                      </div>

                      <div className="absolute top-2 right-2 bg-black/50 rounded px-2 py-1">
                        <span className="text-xs text-white font-normal">Click me</span>
                      </div>
                    </div>

                    <div className="flip-card-back overflow-hidden bg-white border border-gray-200">
                      <div className="h-full flex flex-col p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-bold mb-4 text-center text-black">Details</h3>

                        {/* Details in clean vertical layout with thin sans-serif */}
                        <div className="space-y-3 font-sans text-sm md:text-base mb-6">
                          <div className="flex justify-between items-center py-1">
                            <span className="font-normal text-gray-600">ID:</span>
                            <span className="text-black font-medium">SE-2025-0125</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-normal text-gray-600">Dept:</span>
                            <span className="text-black font-medium">Engineering</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-normal text-gray-600">Location:</span>
                            <span className="text-black font-medium">Bandung, ID</span>
                          </div>
                          <div className="flex justify-between items-center py-1">
                            <span className="font-normal text-gray-600">Status:</span>
                            <span className="text-green-600 font-medium">Active</span>
                          </div>
                        </div>

                        {/* Separator line */}
                        <div className="w-full h-px bg-gray-200 mb-4"></div>

                        {/* Description */}
                        <div className="flex-1"></div>

                        <div className="absolute bottom-2 right-2 bg-gray-100 rounded px-2 py-1">
                          <span className="text-xs text-gray-500 font-normal">Click to flip back</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 w-full max-w-sm">
                <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider text-center lg:text-left">
                  FOCUS
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    Laravel
                  </span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    PHP
                  </span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    React
                  </span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    Web3
                  </span>
                  <span className="px-4 py-2 bg-gray-800 text-white text-sm rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-white/70 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
