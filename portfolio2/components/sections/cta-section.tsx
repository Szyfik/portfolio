"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Gotowy na transformację swojej obecności w sieci?</h2>
            <p className="mb-8 text-primary-foreground/90 md:text-lg">
              Skontaktuj się ze mną już dziś i wspólnie stwórzmy projekt, który przeniesie Twoją markę na wyższy poziom.
              Pierwsze konsultacje są zawsze bezpłatne!
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Rozpocznij współpracę
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="absolute inset-0 z-0">
            <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
