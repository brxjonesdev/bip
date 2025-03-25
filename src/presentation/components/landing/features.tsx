import Image from "next/image"
import { Code, GitCommit, LayoutDashboard, Share2 } from "lucide-react"
import { Card,  CardDescription, CardHeader, CardTitle } from "@/presentation/components/ui/card"

export default function FeatureSection() {
  const features = [
    {
      icon: <GitCommit className="h-10 w-10 text-primary" />,
      title: "Automated GitHub Tracking",
      description:
        "BIP automatically syncs with your GitHub repos to track commits, issues, and milestones in real-time.",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
      title: "Beautiful Project Pages",
      description: "Create aesthetic, bento-style Quip pages that showcase your work in a visually structured way.",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Roadmaps & UI Gallery",
      description: "Track upcoming features, milestones, and share screenshots of your project's visual evolution.",
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Easy Sharing & Embeds",
      description: "Share your progress via links or embed your Quip pages in portfolios, blogs, or social media.",
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <section id="features" className="w-full py-12   font-chakra-petch">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Developers Love BIP</h2>
            <p className="mx-auto max-w-[500px] text-muted-foreground  font-prompt">
              BIP is designed to be simple, focused, and useful for showcasing your development journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-8 md:pt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-1 transition-all hover:shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={`${feature.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="py-0">
                <CardTitle className="text-2xl py-0">{feature.title}</CardTitle>
                <CardDescription className="font-prompt text-sm font-medium text-muted-foreground">{feature.description}</CardDescription>
              </CardHeader>
            
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

