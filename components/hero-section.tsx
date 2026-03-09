"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-secondary max-w-5xl leading-tight text-balance">
        Confort personalizat
        <br />
        <span className="text-primary">pentru fiecare pas</span>
      </h1>
      
      <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
        Creăm încălțăminte personalizată pentru persoane cu dizabilități, anomalii și traume la picior. 
        Introduceți măsurătorile și vizualizați designul perfect.
      </p>
      
      <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
        <Link 
          href="#configurator"
          className="bg-primary text-primary-foreground px-8 py-4 text-lg font-medium border-2 border-secondary hover:bg-primary/90 transition-colors"
        >
          Configurează Încălțăminte
        </Link>
        <Link 
          href="#despre"
          className="bg-transparent text-secondary px-8 py-4 text-lg font-medium border-2 border-secondary hover:bg-muted transition-colors"
        >
          Află Mai Multe
        </Link>
      </div>
      
      <div className="mt-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Scroll pentru a continua
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}
