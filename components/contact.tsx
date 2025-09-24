"use client"

import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            I'm always interested in discussing new opportunities, innovative projects, or just having a conversation
            about technology and Web3.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="perspective-card bg-card p-8 rounded-lg border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:mfaiq1205@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  mfaiq1205@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Bandung, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="perspective-card bg-card p-8 rounded-lg border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Follow Me</h3>
            <div className="space-y-4">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://github.com/poggufanz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <a href="https://www.linkedin.com/in/muhammad-faiq-1450832ab/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">© 2025 Muhammad Faiq. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
