"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function ContactHero() {
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
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Kontakt</h1>
        <p className="text-lg text-muted-foreground">
          Masz pytania lub chcesz omówić swój projekt? Skorzystaj z poniższych danych kontaktowych lub wypełnij
          formularz. Odpowiem najszybciej jak to możliwe.
        </p>
      </motion.div>
    </section>
  )
}
