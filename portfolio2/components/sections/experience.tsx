"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "Freelancer",
    period: "2019 - obecnie",
    description:
      "Realizacja projektów webowych dla klientów z różnych branż. Specjalizacja w tworzeniu stron internetowych, sklepów online i aplikacji webowych.",
  },
  {
    icon: Briefcase,
    title: "Senior Web Developer",
    period: "2017 - 2019",
    description:
      "Praca w agencji interaktywnej nad projektami dla dużych klientów korporacyjnych. Rozwój aplikacji w React i Node.js.",
  },
  {
    icon: Briefcase,
    title: "Web Developer",
    period: "2015 - 2017",
    description:
      "Tworzenie stron internetowych i sklepów online w oparciu o popularne CMS. Implementacja niestandardowych funkcjonalności.",
  },
  {
    icon: GraduationCap,
    title: "Informatyka, specjalizacja webowa",
    period: "2012 - 2016",
    description:
      "Studia na kierunku Informatyka ze specjalizacją w technologiach webowych. Zdobycie solidnych podstaw programistycznych.",
  },
]

const achievements = [
  "Ponad 50 zrealizowanych projektów",
  "Certyfikowany ekspert w zakresie UX/UI",
  "Nagroda za najlepszą stronę e-commerce 2021",
  "Prelegent na konferencjach webowych",
]

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-3xl font-bold md:text-4xl"
      >
        Moje doświadczenie
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col justify-center"
        >
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Osiągnięcia</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({
  icon: Icon,
  title,
  period,
  description,
}: {
  icon: React.ElementType
  title: string
  period: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-1 text-xl font-bold">{title}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{period}</p>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
