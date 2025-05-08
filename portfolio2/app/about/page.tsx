import { AboutHero } from "@/components/sections/about-hero"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Values } from "@/components/sections/values"

export const metadata = {
  title: "O mnie | Filip Szykulski",
  description: "O mnie - Filip Szykulski, Freelancer & Web Developer",
}

export default function AboutPage() {
  return (
    <div className="container py-24 md:py-32">
      <AboutHero />
      <Experience />
      <Skills />
      <Values />
    </div>
  )
}
