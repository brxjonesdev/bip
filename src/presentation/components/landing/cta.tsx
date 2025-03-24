import { Button } from "@/presentation/components/ui/button"
import { Github } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-16 font-chakra-petch border-t-1">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Build in Public?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground  font-prompt">
              Join thousands of indie developers showcasing their work with BIP
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="gap-1" size="lg">
              <Github className="h-4 w-4" />
              Sign in with GitHub
            </Button>
            <Button variant="outline" size="lg">
              See Examples
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">Crafted with love by brxjonesdev</p>
        </div>
      </div>
    </section>
  )
}

