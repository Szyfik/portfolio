"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Palette, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Vue.js", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Express.js", "PHP", "REST API", "GraphQL", "Firebase"],
  },
  {
    icon: Database,
    title: "Bazy danych",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Supabase", "Firestore"],
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "Adobe XD", "Prototypowanie", "Design System", "Dostępność", "Responsive Design"],
  },
  {
    icon: Wrench,
    title: "Narzędzia",
    skills: ["Git & GitHub", "Docker", "Webpack", "Vite", "CI/CD", "Vercel/Netlify"],
  },
]

export function Skills() {
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
        Moje umiejętności
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <SkillCard {...category} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function SkillCard({
  icon: Icon,
  title,
  skills,
}: {
  icon: React.ElementType
  title: string
  skills: string[]
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <span className="mr-2 text-primary">•</span>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
