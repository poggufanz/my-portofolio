"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "bg-[var(--neo-bg)] border-b-[3px] border-[var(--neo-border)]"
          : "bg-transparent border-b-[3px] border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="font-[var(--font-syne)] text-2xl font-extrabold tracking-tight text-[var(--neo-text)] hover:text-[var(--neo-primary)] transition-colors duration-150"
        >
          FAIQ<span className="text-[var(--neo-primary)]">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm font-bold uppercase tracking-wide text-[var(--neo-text)] hover:bg-[var(--neo-accent)] border-[2px] border-transparent hover:border-[var(--neo-border)] hover:shadow-[2px_2px_0px_var(--neo-border)] transition-[background-color,border-color,box-shadow,transform] duration-150 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="ml-2 px-5 py-2 text-sm font-bold uppercase tracking-wide bg-[var(--neo-primary)] text-white border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_var(--neo-border)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-[transform,box-shadow] duration-150 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] transition-[transform,box-shadow] duration-150 cursor-pointer"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-[3px] border-[var(--neo-border)] bg-[var(--neo-bg)]">
          <div className="px-6 py-4 space-y-2 neo-stagger">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 text-base font-bold uppercase tracking-wide text-[var(--neo-text)] border-[3px] border-[var(--neo-border)] bg-white shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] hover:bg-[var(--neo-accent)] transition-[transform,box-shadow,background-color] duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="block w-full text-left px-4 py-3 text-base font-bold uppercase tracking-wide bg-[var(--neo-primary)] text-white border-[3px] border-[var(--neo-border)] shadow-[var(--neo-shadow-sm)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_var(--neo-border)] transition-[transform,box-shadow] duration-150 cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
