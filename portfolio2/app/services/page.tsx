import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesList } from "@/components/sections/services-list"
import { ProcessSteps } from "@/components/sections/process-steps"
import { Faq } from "@/components/sections/faq"

export const metadata = {
  title: "Usługi | Filip Szykulski",
  description: "Usługi - Tworzenie stron internetowych, aplikacji webowych i optymalizacja SEO",
}

export default function ServicesPage() {
  return (
    <div className="container py-24 md:py-32">
      <ServicesHero />
      <ServicesList />
      <ProcessSteps />
      <Faq />
    </div>
  )
}
