import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/presentation/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-24 font-chakra-petch ">
      <div className="container px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Build in Public, <span className="text-primary">Effortlessly</span>
              </h1>
              <p className="font-prompt text-muted-foreground max-w-[600px]">
                BIP helps developers track, organize, and share their projects&apos; progress with beautiful,
                auto-updating project pages.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1" size="lg">
                <Github className="h-4 w-4" />
                Sign in with GitHub
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
            Start showcasing your projects with ease in minutes.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="BIP Dashboard Preview"
                fill
                className="rounded-lg object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

