"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Fashion Shop",
    description: "Nowoczesny sklep internetowy z modą",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "TaskMaster",
    description: "Aplikacja do zarządzania projektami",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
  },
  {
    title: "La Bella Italia",
    description: "Strona restauracji włoskiej",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
    link: "#",
  },
]

export function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            Wybrane projekty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Poznaj moje najnowsze realizacje. Każdy projekt to unikalne rozwiązanie dopasowane do potrzeb klienta.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/portfolio" className="group">
              Zobacz wszystkie projekty
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}) {
  return (
    <Card className="group overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Zobacz projekt</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
