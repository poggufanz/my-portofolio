"use client"

import { useEffect, useState } from "react"
import { Code, Database, Globe, Zap } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: Code, text: "Full-Stack Development", color: "text-blue-500" },
    { icon: Database, text: "Database Management", color: "text-green-500" },
    { icon: Globe, text: "Web3 & Blockchain", color: "text-purple-500" },
    { icon: Zap, text: "Performance Optimization", color: "text-yellow-500" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold mb-6 text-balance">
              About <span className="text-primary glow-effect">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300">
                I'm a Software Engineering student at Telkom University with hands-on experience building full-stack web
                applications for MSMEs and digital operations. Skilled in PHP, Laravel, and modern web technologies with
                strong interest in Blockchain, Web3, and AI.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                Successfully developed applications that improved business efficiency by automating reporting,
                optimizing inventory, and enabling collaboration among SMEs. Passionate about creating scalable,
                impactful, and community-driven digital solutions.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                Currently working as a Full Stack Developer at LMFEB UNPAD, where I develop Laravel-based applications
                and create collaboration features for MSMEs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg bg-card/50 hover:bg-card transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <item.icon
                    className={`h-5 w-5 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="perspective-card bg-card p-8 rounded-lg border hover:border-primary/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-4 text-primary group-hover:glow-effect transition-all duration-300">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  🎓 Software Engineering at Telkom University
                </li>
                <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  🌐 Web3 & Blockchain Enthusiast
                </li>
                <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  🗣️ Bahasa Indonesia, English
                </li>
                <li className="hover:text-foreground hover:translate-x-2 transition-all duration-300 cursor-pointer">
                  📧 mfaiq1205@gmail.com
                </li>
              </ul>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation" />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg float-animation"
              style={{ animationDelay: "2s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
