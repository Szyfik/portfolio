import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ServicesPreview } from "@/components/sections/services-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
