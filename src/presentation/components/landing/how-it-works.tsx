import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Sign In & Create a Quip",
      description: "Sign in with GitHub and create a Quip page linked to your repository.",
      points: ["Quick GitHub authentication", "Select which repo to connect", "Set up your project page in seconds"],
    },
    {
      number: "2",
      title: "Link Repo with BIP CLI",
      description: "Use our simple CLI tool to connect your project and start tracking.",
      points: [
        "Easy-to-use Rust-based CLI",
        "Automatic syncing of commits and issues",
        "Real-time updates to your Quip page",
      ],
    },
    {
      number: "3",
      title: "Project Page Updates Automatically",
      description: "Your Quip becomes a live feed of your project's progress.",
      points: ["Auto-fetched commits", "Issue & milestone tracking", "Roadmap and UI gallery integration"],
    },
    {
      number: "4",
      title: "Customize & Share",
      description: "Personalize your Quip and share it with the world.",
      points: ["Add custom descriptions and images", "Edit project timeline", "Share via link or embed"],
    },
  ]

  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How BIP Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get your project showcased in four simple steps
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-12 md:mt-16 px-10 container mx-auto bg-black/40">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="flex-1 space-y-4">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative h-[250px] w-full md:h-[300px]">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

