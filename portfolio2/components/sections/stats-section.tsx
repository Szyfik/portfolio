"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Award } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: 50,
    label: "Zrealizowanych projektów",
    delay: 0,
  },
  {
    icon: Users,
    value: 100,
    label: "Zadowolonych klientów",
    delay: 0.2,
  },
  {
    icon: Award,
    value: 5,
    label: "Lat doświadczenia",
    delay: 0.4,
  },
]

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.delay }}
            >
              <StatCard {...stat} isInView={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  isInView,
}: {
  icon: React.ElementType
  value: number
  label: string
  isInView: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setDisplayValue(Math.floor(progress * value))
        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }, [isInView, value])

  return (
    <Card className="overflow-hidden">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className="text-4xl font-bold">{displayValue}</div>
        <p className="mt-2 text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  )
}
