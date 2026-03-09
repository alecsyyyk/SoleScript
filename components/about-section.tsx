"use client"

import { Heart, Shield, Sparkles, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Care For Everyone",
    description: "Each pair is created with attention to individual needs, providing maximum comfort for any condition."
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "We use only the highest quality materials, tested for durability and long-term comfort."
  },
  {
    icon: Sparkles,
    title: "Advanced Technology",
    description: "3D scanning and precision manufacturing for a perfect fit, adapted to each foot's unique anatomy."
  },
  {
    icon: Users,
    title: "Medical Expertise",
    description: "We collaborate with orthopedists and podiatrists to ensure each design meets medical standards."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 border-t-2 border-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why SoleScript?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We are dedicated to creating footwear that changes lives. 
            Every step should be comfortable, regardless of the challenges you face.
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
              <p className="text-sm uppercase tracking-widest opacity-80">Happy Customers</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">15+</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Conditions Covered</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm uppercase tracking-widest opacity-80">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
