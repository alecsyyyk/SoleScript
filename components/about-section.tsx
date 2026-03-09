"use client"

import { Heart, Shield, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Cu Grijă Pentru Fiecare",
    description: "Fiecare pereche este creată cu atenție la nevoile individuale, oferind confort maxim pentru orice condiție."
  },
  {
    icon: Shield,
    title: "Materiale Premium",
    description: "Utilizăm doar materiale de cea mai înaltă calitate, testate pentru durabilitate și confort pe termen lung."
  },
  {
    icon: Sparkles,
    title: "Tehnologie Avansată",
    description: "Scanare 3D și fabricație de precizie pentru un fit perfect, adaptat anatomiei unice a fiecărui picior."
  },
  {
    icon: Users,
    title: "Expertiză Medicală",
    description: "Colaborăm cu ortopezi și podiatri pentru a asigura că fiecare design respectă standardele medicale."
  }
]

export function AboutSection() {
  return (
    <section id="despre" className="py-20 px-4 border-t-2 border-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            De Ce SoleScript?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Suntem dedicați creării de încălțăminte care schimbă vieți. 
            Fiecare pas ar trebui să fie confortabil, indiferent de provocările cu care te confrunți.
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
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Clienți Mulțumiți</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Condiții Acoperite</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Satisfacție Garantată</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
