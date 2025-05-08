"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function PortfolioHero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Portfolio</h1>
        <p className="text-lg text-muted-foreground">
          Poznaj moje najlepsze realizacje. Każdy projekt to unikalne rozwiązanie dopasowane do potrzeb klienta. Poniżej
          znajdziesz wybrane prace z różnych kategorii.
        </p>
      </motion.div>
    </section>
  )
}
