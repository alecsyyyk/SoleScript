"use client"

import { Heart, Shield, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Declarative Workflow",
    description: "SoleScript models the full pipeline: Foot, Observations, Last, Boot, and Export in explicit order."
  },
  {
    icon: Shield,
    title: "Semantic Rules SR1-SR9",
    description: "The analyzer validates references, required parameters, and domain constraints before export."
  },
  {
    icon: Sparkles,
    title: "Formal Grammar",
    description: "ANTLR grammar and recursive-descent implementation keep syntax predictable and machine-readable."
  },
  {
    icon: Users,
    title: "Python Integration",
    description: "Use the standalone parser API to parse, inspect AST nodes, and automate validation in tooling."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 border-t-2 border-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why This DSL?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            SoleScript is designed for orthopedic footwear specification, not generic programming.
            It captures domain intent directly and keeps clinical-to-design communication precise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border-2 border-secondary bg-card p-6 hover:bg-muted/50 transition-colors group"
            >
              <div className="p-4 bg-primary/10 text-primary border-2 border-secondary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 border-2 border-secondary bg-secondary text-secondary-foreground p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">16</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Grammar Rules</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">9</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Semantic Rules</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Declarative Syntax</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
