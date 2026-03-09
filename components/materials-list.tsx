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
      name: "Talpă Exterioară",
      quantity: 2,
      dimensions: `${footLength + 20}mm × ${footWidth + 15}mm`,
      material: condition === "diabetes" ? "Cauciuc Anti-Alunecare" : "Cauciuc Durabil",
      icon: <Layers className="h-5 w-5" />
    },
    {
      name: "Talpă Interioară",
      quantity: 2,
      dimensions: `${footLength + 10}mm × ${footWidth + 10}mm`,
      material: "Spumă Memory Ortopedică",
      icon: <Layers className="h-5 w-5" />
    },
    {
      name: "Căptușeală Superioară",
      quantity: 2,
      dimensions: `${footLength + 30}mm × ${Math.round(footWidth * 2.5)}mm`,
      material: condition === "diabetes" ? "Piele Fără Cusături" : "Piele Premium",
      icon: <Scissors className="h-5 w-5" />
    },
    {
      name: "Întăritură Călcâi",
      quantity: 2,
      dimensions: `80mm × 60mm`,
      material: "Termoplastic Rigid",
      icon: <Ruler className="h-5 w-5" />
    },
    {
      name: "Suport Boltă",
      quantity: 2,
      dimensions: measurements.footType === "flat" ? "120mm × 45mm" : "100mm × 35mm",
      material: measurements.footType === "flat" ? "EVA Înaltă Densitate" : "EVA Medie",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "Căptușeală Interioară",
      quantity: 2,
      dimensions: `${footLength + 15}mm × ${Math.round(footWidth * 2)}mm`,
      material: "Textil Respirabil Anti-Bacterian",
      icon: <Scissors className="h-5 w-5" />
    },
    {
      name: "Sistem Închidere",
      quantity: 1,
      dimensions: "Set complet",
      material: condition === "arthritis" ? "Velcro Ajustabil" : "Șireturi Elastice",
      icon: <Package className="h-5 w-5" />
    },
    {
      name: "Inserție Personalizată",
      quantity: 2,
      dimensions: `${footLength}mm × ${footWidth}mm × ${measurements.archHeight || 35}mm`,
      material: "3D Print Personalizat",
      icon: <Layers className="h-5 w-5" />
    }
  ]

  // Add special materials based on condition
  if (condition === "bunion") {
    materials.push({
      name: "Extensie Hallux",
      quantity: 2,
      dimensions: "40mm × 30mm",
      material: "Gel Protector Moale",
      icon: <Package className="h-5 w-5" />
    })
  }

  if (condition === "plantar") {
    materials.push({
      name: "Pad Plantar Extra",
      quantity: 2,
      dimensions: "60mm × 40mm",
      material: "Gel Absorbant Șoc",
      icon: <Layers className="h-5 w-5" />
    })
  }

  return (
    <div className="border-2 border-secondary bg-card">
      <div className="border-b-2 border-secondary p-4">
        <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
          Materiale Necesare
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Lista completă de componente pentru fabricarea încălțămintei personalizate
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
                  ×{piece.quantity}
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
            Total Componente
          </span>
          <span className="text-2xl font-serif font-bold text-primary">
            {materials.reduce((acc, m) => acc + m.quantity, 0)} piese
          </span>
        </div>
      </div>
    </div>
  )
}
