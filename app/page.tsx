import Link from "next/link"
import Image from "next/image"
import { Github } from "lucide-react"
import { Button } from "@/presentation/components/ui/button"
import HeroSection from "@/presentation/components/landing/hero"
import FeatureSection from "@/presentation/components/landing/features"
import HowItWorksSection from "@/presentation/components/landing/how-it-works"
// import TestimonialSection from "@/presentation/components/landing/testimonials"
import Footer from "@/presentation/components/landing/footer"
import CTASection from "@/presentation/components/landing/cta"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  ">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur px-8 ">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
          <p className="font-bold text-xl text-foreground">
            Bip
          </p>
          </div>
          <nav className="hidden md:flex items-center gap-6 font-chakra-petch self-center tracking-wide font-semibold" >
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground font-chakra-petch">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Testimonials
            </Link>
          </nav>
          
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        {/* <TestimonialSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

