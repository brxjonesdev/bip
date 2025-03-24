import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background px-8 py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="BIP Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-xl font-bold">BIP</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            How It Works
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Blog
          </Link>
        </nav>
       
      </div>

    </footer>
  )
}

