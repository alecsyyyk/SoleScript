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
              Încălțăminte personalizată pentru confort și mobilitate. 
              Fiecare pas contează.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Navigare
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="#configurator" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Configurator
                </Link>
              </li>
              <li>
                <Link href="#despre" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Condiții
            </h4>
            <ul className="space-y-2 text-secondary-foreground/80 text-sm">
              <li>Hallux Valgus</li>
              <li>Picior Diabetic</li>
              <li>Fasciită Plantară</li>
              <li>Post-Amputație</li>
              <li>Artrită</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@solescript.ro</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+40 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>București, România</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t-2 border-secondary-foreground/20 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 SoleScript. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
