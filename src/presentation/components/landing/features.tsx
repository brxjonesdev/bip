import { Code, GitCommit, LayoutDashboard, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/presentation/components/ui/card"

export default function FeatureSection() {
  const features = [
    {
      icon: <GitCommit className="h-10 w-10 text-primary" />,
      title: "Automated GitHub Tracking",
      description:
        "BIP automatically syncs with your GitHub repos to track commits, issues, and milestones in real-time.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
      title: "Beautiful Project Pages",
      description: "Create aesthetic, bento-style Quip pages that showcase your work in a visually structured way.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Roadmaps & UI Gallery",
      description: "Track upcoming features, milestones, and share screenshots of your project's visual evolution.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-primary" />,
      title: "Easy Sharing & Embeds",
      description: "Share your progress via links or embed your Quip pages in portfolios, blogs, or social media.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Indie Developers Love BIP</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              BIP is designed to be simple, focused, and useful for showcasing your development journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 pt-8 md:pt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

