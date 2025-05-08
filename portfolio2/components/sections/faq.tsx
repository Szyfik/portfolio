"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Jak długo trwa realizacja projektu?",
    answer:
      "Czas realizacji projektu zależy od jego złożoności. Prosta strona wizytówka może być gotowa w ciągu 2-3 tygodni, podczas gdy bardziej zaawansowane projekty, jak sklepy internetowe czy aplikacje webowe, mogą zająć od 4 do 12 tygodni.",
  },
  {
    question: "Czy oferujesz wsparcie po zakończeniu projektu?",
    answer:
      "Tak, oferuję wsparcie techniczne po zakończeniu projektu. Możemy ustalić pakiet wsparcia dostosowany do Twoich potrzeb, obejmujący aktualizacje, poprawki i drobne modyfikacje.",
  },
  {
    question: "Jakie są metody płatności?",
    answer:
      "Akceptuję płatności przelewem bankowym. Zazwyczaj stosuję model płatności w ratach: zaliczka na początku projektu (30-50%), płatność pośrednia po zaakceptowaniu projektu graficznego i płatność końcowa po zakończeniu projektu.",
  },
  {
    question: "Czy zajmujesz się hostingiem i domenami?",
    answer:
      "Tak, mogę pomóc w wyborze i konfiguracji hostingu oraz zakupie domeny. Oferuję również kompleksową usługę utrzymania strony, która obejmuje hosting, domenę, kopie zapasowe i aktualizacje bezpieczeństwa.",
  },
  {
    question: "Czy mogę samodzielnie aktualizować treść na stronie?",
    answer:
      "Tak, wszystkie moje projekty są wyposażone w przyjazny system zarządzania treścią (CMS), który umożliwia samodzielną aktualizację treści, dodawanie nowych podstron, artykułów, produktów itp. Zapewniam również szkolenie z obsługi CMS.",
  },
]

export function Faq() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Często zadawane pytania</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Odpowiedzi na najczęściej zadawane pytania dotyczące moich usług i procesu pracy.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-3xl"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}
