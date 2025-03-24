import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/presentation/components/ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "BIP has completely changed how I showcase my side projects. The automatic GitHub integration saves me hours of manual updates.",
      author: "Alex Chen",
      role: "Indie Developer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "As an open-source maintainer, BIP helps me keep my community updated on project progress without any extra work.",
      author: "Sarah Johnson",
      role: "Open Source Maintainer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The bento-style project pages are beautiful and my clients love seeing real-time updates on their projects.",
      author: "Michael Rodriguez",
      role: "Freelance Developer",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by Developers</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See what others are saying about their experience with BIP
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 pt-8 md:pt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 transition-all hover:border-primary/50 hover:shadow-md">
              <CardContent className="p-6">
                <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 p-6 pt-0">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

