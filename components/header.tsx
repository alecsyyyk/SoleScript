"use client"

import Link from "next/link"
import { Footprints } from "lucide-react"

export function Header() {
  return (
    <header className="border-b-2 border-secondary bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Footprints className="h-8 w-8 text-primary" />
          <span className="text-2xl font-serif font-bold text-secondary">
            SoleScript
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-secondary hover:text-primary transition-colors font-medium">
            Home
          </Link>
          <Link href="#dsl-ide" className="text-secondary hover:text-primary transition-colors font-medium">
            Live Editor
          </Link>
          <Link href="#about" className="text-secondary hover:text-primary transition-colors font-medium">
            Grammar
          </Link>
          <Link href="#contact" className="text-secondary hover:text-primary transition-colors font-medium">
            Resources
          </Link>
        </nav>
        <Link 
          href="#dsl-ide" 
          className="bg-primary text-primary-foreground px-6 py-2 font-medium hover:bg-primary/90 transition-colors border-2 border-secondary"
        >
          Try SoleScript
        </Link>
      </div>
    </header>
  )
}
