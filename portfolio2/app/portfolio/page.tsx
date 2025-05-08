import { PortfolioHero } from "@/components/sections/portfolio-hero"
import { PortfolioGrid } from "@/components/sections/portfolio-grid"

export const metadata = {
  title: "Portfolio | Filip Szykulski",
  description: "Portfolio - Przykłady realizacji projektów webowych",
}

export default function PortfolioPage() {
  return (
    <div className="container py-24 md:py-32">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  )
}
