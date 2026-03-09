"use client"

import { FootMeasurements } from "./measurement-form"
import { Layers, Scissors, Ruler, Package } from "lucide-react"

interface MaterialsListProps {
  measurements: FootMeasurements | null
}

interface MaterialPiece {
  name: string
  quantity: number
  dimensions: string
  material: string
  icon: React.ReactNode
}

export function MaterialsList({ measurements }: MaterialsListProps) {
  if (!measurements) {
    return null
  }

  const footLength = parseFloat(measurements.footLength) || 260
  const footWidth = parseFloat(measurements.footWidth) || 100
  const condition = measurements.condition

  // Calculate material pieces based on measurements
  const materials: MaterialPiece[] = [
    {
      name: "Outer Sole",
      quantity: 2,
      dimensions: `${footLength + 20}mm x ${footWidth + 15}mm`,
      material: condition === "diabetes" ? "Non-Slip Rubber" : "Durable Rubber",
      icon: <Layers className="h-5 w-5" />
    },
    {
      name: "Inner Sole",
      quantity: 2,
      dimensions: `${footLength + 10}mm x ${footWidth + 10}mm`,
      material: "Orthopedic Memory Foam",
      icon: <Layers className="h-5 w-5" />
    },
    {
      name: "Upper Lining",
      quantity: 2,
      dimensions: `${footLength + 30}mm x ${Math.round(footWidth * 2.5)}mm`,
      material: condition === "diabetes" ? "Seamless Leather" : "Premium Leather",
      icon: <Scissors className="h-5 w-5" />
    },
    {
      name: "Heel Counter",
      quantity: 2,
      dimensions: `80mm x 60mm`,
      material: "Rigid Thermoplastic",
      icon: <Ruler className="h-5 w-5" />
    },
    {
      name: "Arch Support",
      quantity: 2,
      dimensions: measurements.footType === "flat" ? "120mm x 45mm" : "100mm x 35mm",
      material: measurements.footType === "flat" ? "High Density EVA" : "Medium EVA",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "Inner Lining",
      quantity: 2,
      dimensions: `${footLength + 15}mm x ${Math.round(footWidth * 2)}mm`,
      material: "Anti-Bacterial Breathable Textile",
      icon: <Scissors className="h-5 w-5" />
    },
    {
      name: "Closure System",
      quantity: 1,
      dimensions: "Complete set",
      material: condition === "arthritis" ? "Adjustable Velcro" : "Elastic Laces",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "Custom Insert",
      quantity: 2,
      dimensions: `${footLength}mm x ${footWidth}mm x ${measurements.archHeight || 35}mm`,
      material: "Custom 3D Print",
      icon: <Layers className="h-5 w-5" />
    }
  ]

  // Add special materials based on condition
  if (condition === "bunion") {
    materials.push({
      name: "Hallux Extension",
      quantity: 2,
      dimensions: "40mm x 30mm",
      material: "Soft Protective Gel",
      icon: <Package className="h-5 w-5" />
    })
  }

  if (condition === "plantar") {
    materials.push({
      name: "Extra Plantar Pad",
      quantity: 2,
      dimensions: "60mm x 40mm",
      material: "Shock Absorbing Gel",
      icon: <Layers className="h-5 w-5" />
    })
  }

  return (
    <div className="border-2 border-secondary bg-card">
      <div className="border-b-2 border-secondary p-4">
        <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
          Required Materials
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Complete list of components for manufacturing your custom footwear
        </p>
      </div>
      
      <div className="divide-y-2 divide-secondary">
        {materials.map((piece, index) => (
          <div 
            key={index}
            className="p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors"
          >
            <div className="p-3 bg-primary/10 text-primary border-2 border-secondary">
              {piece.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-secondary">{piece.name}</h4>
                <span className="text-sm bg-secondary text-secondary-foreground px-2 py-0.5">
                  x{piece.quantity}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {piece.material}
              </p>
              <p className="text-sm font-mono text-primary mt-1">
                {piece.dimensions}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t-2 border-secondary p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-secondary uppercase">
            Total Components
          </span>
          <span className="text-2xl font-serif font-bold text-primary">
            {materials.reduce((acc, m) => acc + m.quantity, 0)} pieces
          </span>
        </div>
      </div>
    </div>
  )
}
