"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const categories = [
  { id: "all", name: "Wszystkie" },
  { id: "website", name: "Strony" },
  { id: "shop", name: "Sklepy" },
  { id: "app", name: "Aplikacje" },
]

const projects = [
  {
    title: "Fashion Shop",
    description: "Nowoczesny sklep internetowy z modą",
    image: "/placeholder.svg?height=400&width=600",
    category: "shop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    title: "TaskMaster",
    description: "Aplikacja do zarządzania projektami",
    image: "/placeholder.svg?height=400&width=600",
    category: "app",
    tags: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
    link: "#",
  },
  {
    title: "La Bella Italia",
    description: "Strona restauracji włoskiej",
    image: "/placeholder.svg?height=400&width=600",
    category: "website",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP"],
    link: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Aplikacja do śledzenia treningów",
    image: "/placeholder.svg?height=400&width=600",
    category: "app",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
  },
  {
    title: "Eco Store",
    description: "Sklep z produktami ekologicznymi",
    image: "/placeholder.svg?height=400&width=600",
    category: "shop",
    tags: ["Shopify", "Liquid", "JavaScript", "SCSS"],
    link: "#",
  },
  {
    title: "Law Firm",
    description: "Strona kancelarii prawnej",
    image: "/placeholder.svg?height=400&width=600",
    category: "website",
    tags: ["WordPress", "PHP", "JavaScript", "CSS3"],
    link: "#",
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="rounded-full"
          >
            {category.name}
          </Button>
        ))}
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
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
          <Link href={link} className="flex items-center justify-center gap-2">
            Zobacz projekt
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
