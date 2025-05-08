"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Globe, ShoppingCart, Smartphone, Search, Check } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Strona wizytówka",
    description: "Profesjonalna strona wizytówka dla Twojej firmy lub osoby prywatnej.",
    features: [
      "Responsywny design",
      "Optymalizacja SEO",
      "Formularz kontaktowy",
      "Integracja z mediami społecznościowymi",
      "Szybkie ładowanie",
      "Przyjazny CMS",
    ],
    price: "od 1500 zł",
  },
  {
    icon: ShoppingCart,
    title: "Sklep internetowy",
    description: "Kompleksowy sklep internetowy z systemem zarządzania produktami.",
    features: [
      "System płatności online",
      "Panel administracyjny",
      "Integracja z kurierami",
      "System rabatów i promocji",
      "Koszyk zakupowy",
      "Zarządzanie zamówieniami",
    ],
    price: "od 5000 zł",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Aplikacja webowa",
    description: "Nowoczesna aplikacja webowa dostosowana do Twoich potrzeb.",
    features: [
      "Backend w Node.js",
      "Frontend w React/Vue",
      "Baza danych MongoDB",
      "API RESTful",
      "Autoryzacja użytkowników",
      "Skalowalność",
    ],
    price: "od 8000 zł",
  },
  {
    icon: Search,
    title: "Optymalizacja SEO",
    description: "Kompleksowa optymalizacja Twojej strony pod wyszukiwarki.",
    features: [
      "Audyt SEO",
      "Optymalizacja treści",
      "Link building",
      "Raportowanie wyników",
      "Analiza konkurencji",
      "Lokalne SEO",
    ],
    price: "od 1000 zł/mies.",
  },
]

export function ServicesList() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="mb-16 md:mb-24">
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  featured,
}: {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  price: string
  featured?: boolean
}) {
  return (
    <Card className={`h-full transition-all hover:-translate-y-1 hover:shadow-md ${featured ? "border-primary" : ""}`}>
      <CardContent className="p-6 pt-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <ul className="mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 border-t p-6">
        <div className="text-xl font-bold text-primary">{price}</div>
        <Button asChild variant={featured ? "default" : "outline"} className="w-full">
          <Link href="/contact">Zapytaj o ofertę</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
