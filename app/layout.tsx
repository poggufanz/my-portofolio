import type React from "react"
import { Syne, Archivo } from "next/font/google"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Muhammad Faiq — Full Stack Developer",
  description:
    "Full Stack Developer at SUNURTECH. Software Engineering student at Telkom University. Building scalable web apps and exploring Web3, AI, and Blockchain.",
  metadataBase: new URL("https://poggufanz.github.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${archivo.variable}`}>
      <head>
        <meta name="theme-color" content="#FEF3E2" />
      </head>
      <body>{children}</body>
    </html>
  )
}
