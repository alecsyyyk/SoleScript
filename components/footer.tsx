"use client"

import Link from "next/link"
import { Footprints, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-secondary bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Footprints className="h-8 w-8 text-primary" />
              <span className="text-2xl font-serif font-bold">
                SoleScript
              </span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm">
              A focused domain-specific language for orthopedic footwear
              specification and parser-driven validation.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#configurator" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  DSL Playground
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Language Overview
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Blocks
            </h4>
            <ul className="space-y-2 text-secondary-foreground/80 text-sm">
              <li>Foot</li>
              <li>Observations</li>
              <li>Last</li>
              <li>Boot</li>
              <li>Export</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Resources
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>dsl.solescript@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>Semantic rules SR1-SR9</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>ANTLR4 + Python parser stack</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t-2 border-secondary-foreground/20 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 SoleScript DSL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/Moisei-D/DSL-SoleScript" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              GitHub Repository
            </Link>
            <Link href="#about" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Grammar Summary
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
