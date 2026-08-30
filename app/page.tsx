import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Preloader from "@/components/fx/preloader"
import CustomCursor from "@/components/fx/custom-cursor"
import ScrollProgress from "@/components/fx/scroll-progress"
import NeoMarquee from "@/components/fx/neo-marquee"

const TICKER_ITEMS = [
  "Full Stack Developer",
  "Laravel",
  "Vue.js",
  "React",
  "TypeScript",
  "Stellar",
  "Web3",
  "AI",
  "DevOps",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--neo-bg)] overflow-x-hidden">
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />

      {/* Skills ticker — velocity-reactive divider between hero and about */}
      <NeoMarquee
        className="py-4 bg-[var(--neo-text)] border-t-[3px] border-b-[3px] border-[var(--neo-border)] -rotate-1 scale-[1.02] origin-center relative z-20"
        speed={24}
      >
        {TICKER_ITEMS.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-6 mx-6 text-base md:text-lg font-extrabold uppercase tracking-widest text-[var(--neo-bg)]"
          >
            <span translate="no">{item}</span>
            <span className="text-[var(--neo-accent)]" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </NeoMarquee>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
