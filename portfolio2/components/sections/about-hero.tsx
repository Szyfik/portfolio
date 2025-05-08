"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export function AboutHero() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">O mnie</h1>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Jestem doświadczonym freelancerem specjalizującym się w tworzeniu nowoczesnych stron internetowych i
              aplikacji webowych. Od ponad 5 lat pomagam firmom i przedsiębiorcom w budowaniu ich obecności w
              internecie.
            </p>
            <p className="text-lg text-muted-foreground">
              Moja pasja do tworzenia stron internetowych zaczęła się już w czasach szkolnych. Z biegiem lat rozwijałem
              swoje umiejętności, aby dostarczać klientom rozwiązania na najwyższym poziomie.
            </p>
            <p className="text-lg text-muted-foreground">
              Wierzę, że dobra strona internetowa to nie tylko atrakcyjny design, ale przede wszystkim funkcjonalność i
              użyteczność. Dlatego w moich projektach zawsze stawiam na intuicyjność i doświadczenie użytkownika.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square overflow-hidden rounded-2xl md:aspect-auto"
        >
          <Image src="/placeholder.svg?height=600&width=600" alt="Filip Szykulski" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
