"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Współpraca z Filipem to czysta przyjemność. Profesjonalne podejście, terminowość i kreatywne rozwiązania. Polecam!",
    author: "Anna Kowalska",
    role: "CEO, Fashion Store",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Nasza strona internetowa przeszła niesamowitą metamorfozę. Wzrost konwersji o 40% mówi sam za siebie!",
    author: "Piotr Nowak",
    role: "Marketing Manager, TechCorp",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Filip stworzył dla nas sklep internetowy, który nie tylko świetnie wygląda, ale też doskonale działa. Klienci chwalą intuicyjność i szybkość.",
    author: "Magdalena Wiśniewska",
    role: "Właścicielka, Butik Online",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
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
            Co mówią klienci
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-muted-foreground"
          >
            Opinie moich klientów są najlepszym dowodem jakości świadczonych przeze mnie usług.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  avatar,
}: {
  quote: string
  author: string
  role: string
  avatar: string
}) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <Quote className="mb-4 h-8 w-8 text-primary/40" />
        <p className="mb-6 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={avatar || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold">{author}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
