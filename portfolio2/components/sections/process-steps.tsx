"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Konsultacja",
    description: "Omawiamy Twoje potrzeby, cele projektu i oczekiwania. Określamy zakres prac, budżet i terminy.",
  },
  {
    number: "02",
    title: "Projekt",
    description: "Przygotowuję koncepcję i wizualizację strony. Po Twojej akceptacji przechodzę do kolejnego etapu.",
  },
  {
    number: "03",
    title: "Realizacja",
    description: "Tworzę stronę zgodnie z ustaleniami. Implementuję wszystkie funkcjonalności i dbam o każdy detal.",
  },
  {
    number: "04",
    title: "Wdrożenie",
    description: "Publikuję stronę na serwerze, przeprowadzam testy i optymalizację. Zapewniam wsparcie techniczne.",
  },
]

export function ProcessSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Jak pracuję?</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Mój proces pracy jest przejrzysty i efektywny. Dzięki temu możesz być pewny, że Twój projekt zostanie
          zrealizowany zgodnie z oczekiwaniami.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <StepCard {...step} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <span className="text-xl font-bold">{number}</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
