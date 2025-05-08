import { ContactHero } from "@/components/sections/contact-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"

export const metadata = {
  title: "Kontakt | Filip Szykulski",
  description: "Kontakt - Skontaktuj się ze mną w sprawie projektu",
}

export default function ContactPage() {
  return (
    <div className="container py-24 md:py-32">
      <ContactHero />
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
