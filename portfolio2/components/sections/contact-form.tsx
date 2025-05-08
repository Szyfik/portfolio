"use client"

import type React from "react"

import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    })

    setIsSubmitting(false)
    router.push("/success")
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-2xl font-bold">Wyślij wiadomość</h2>

        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Imię i nazwisko</Label>
                <Input id="name" name="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Temat</Label>
                <Input id="subject" name="subject" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Wiadomość</Label>
                <Textarea id="message" name="message" rows={5} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  "Wyślij wiadomość"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
