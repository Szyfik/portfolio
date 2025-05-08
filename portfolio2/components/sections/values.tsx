"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Heart, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Terminowość",
    description:
      "Zawsze dotrzymuję terminów. Szanuję czas moich klientów i wiem, jak ważna jest punktualność w biznesie.",
  },
  {
    icon: Zap,
    title: "Wydajność",
    description: "Tworzę szybkie i wydajne strony internetowe, które zapewniają doskonałe doświadczenie użytkownika.",
  },
  {
    icon: Heart,
    title: "Pasja",
    description: "Kocham to, co robię. Pasja do tworzenia stron internetowych przekłada się na jakość moich projektów.",
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    description: "Dbam o bezpieczeństwo stron internetowych, stosując najlepsze praktyki i aktualne standardy.",
  },
  {
    icon: Users,
    title: "Współpraca",
    description: "Wierzę w otwartą komunikację i ścisłą współpracę z klientem na każdym etapie projektu.",
  },
]

export function Values() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold md:text-4xl"
      >
        Moje wartości
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <ValueCard {...value} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
