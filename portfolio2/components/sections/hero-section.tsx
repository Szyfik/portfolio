"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 pt-24 md:pt-32">
      <div
        ref={containerRef}
        className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 text-center"
        style={
          {
            "--mouse-x": "0px",
            "--mouse-y": "0px",
          } as React.CSSProperties
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Tworzę <span className="text-primary">nowoczesne strony internetowe</span>, które wyróżniają Twoją markę w
            sieci
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Jestem Filip Szykulski, freelancer z Warszawy. Projektuję i wdrażam funkcjonalne, responsywne strony WWW,
            które pomagają rozwijać Twój biznes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/portfolio">Poznaj moje portfolio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">Sprawdź ofertę usług</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
      </div>
    </section>
  )
}
