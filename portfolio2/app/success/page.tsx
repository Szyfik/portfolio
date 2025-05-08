import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Wiadomość wysłana | Filip Szykulski",
  description: "Wiadomość wysłana - Dziękujemy za kontakt",
}

export default function SuccessPage() {
  return (
    <div className="container flex items-center justify-center py-24 md:py-32">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="h-16 w-16 text-primary" />
        </div>
        <h1 className="mb-4 font-heading text-3xl font-bold md:text-4xl">Dziękujemy za wiadomość!</h1>
        <p className="mb-8 text-muted-foreground">
          Twoja wiadomość została wysłana pomyślnie. Skontaktuję się z Tobą najszybciej jak to możliwe.
        </p>
        <Button asChild size="lg">
          <Link href="/">Powrót do strony głównej</Link>
        </Button>
      </div>
    </div>
  )
}
