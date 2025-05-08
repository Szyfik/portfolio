"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Strona główna", href: "/" },
  { name: "O mnie", href: "/about" },
  { name: "Usługi", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kontakt", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold text-primary">FS</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Współpraca</Link>
          </Button>
          <button
            className="inline-flex items-center justify-center md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-12 items-center border-b text-base font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Współpraca
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
