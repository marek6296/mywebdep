import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Stránka sa nenašla</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Ospravedlňujeme sa, ale stránka, ktorú hľadáte, neexistuje alebo bola presunutá.
        </p>
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Späť na domov
          </Link>
        </Button>
      </div>
    </div>
  )
}

