"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "kontakt@filipszykulski.pl",
    href: "mailto:kontakt@filipszykulski.pl",
  },
  {
    icon: Phone,
    title: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: MapPin,
    title: "Lokalizacja",
    value: "Warszawa, Polska",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/szyfik",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/szyfik",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/szyfik",
  },
]

export function ContactInfo() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold">Skontaktuj się ze mną</h2>

        <div className="mb-8 space-y-4">
          {contactDetails.map((item, index) => (
            <ContactItem key={index} {...item} />
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Znajdź mnie w mediach społecznościowych</h3>
          <div className="flex gap-2">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="outline" size="icon" asChild>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType
  title: string
  value: string
  href: string | null
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          {href ? (
            <Link href={href} className="text-muted-foreground hover:text-primary">
              {value}
            </Link>
          ) : (
            <p className="text-muted-foreground">{value}</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
