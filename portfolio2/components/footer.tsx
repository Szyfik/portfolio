import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-heading text-xl font-bold text-primary">FS</div>
            <p className="text-sm text-muted-foreground">
              Tworzenie nowoczesnych i responsywnych stron internetowych z pasją do detali i dbałością o doświadczenie
              użytkownika.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  O mnie
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground transition-colors hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Usługi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Strony wizytówki
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Sklepy internetowe
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Aplikacje webowe
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground transition-colors hover:text-primary">
                  Optymalizacja SEO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">kontakt@filipszykulski.pl</li>
              <li className="text-muted-foreground">+48 123 456 789</li>
              <li className="text-muted-foreground">Warszawa, Polska</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/szyfik" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/szyfik" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/szyfik" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Filip Szykulski. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  )
}
