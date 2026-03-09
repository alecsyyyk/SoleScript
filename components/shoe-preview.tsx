"use client"

import { FootMeasurements } from "./measurement-form"
import { RotateCw, ZoomIn, ZoomOut } from "lucide-react"
import { useState } from "react"

interface ShoePreviewProps {
  measurements: FootMeasurements | null
}

export function ShoePreview({ measurements }: ShoePreviewProps) {
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(1)

  if (!measurements) {
    return (
      <div className="border-2 border-secondary bg-card p-8 h-full min-h-[500px] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 border-2 border-dashed border-secondary rounded-full flex items-center justify-center">
            <svg 
              className="w-16 h-16 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5}
                d="M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0"
              />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-bold text-secondary mb-2">
            Previzualizare Încălțăminte
          </h3>
          <p className="text-muted-foreground max-w-xs">
            Completați formularul de măsurători pentru a vedea designul personalizat al încălțămintei
          </p>
        </div>
      </div>
    )
  }

  // Calculate shoe dimensions based on measurements
  const shoeLength = parseFloat(measurements.footLength) + 15
  const shoeWidth = parseFloat(measurements.footWidth) + 10
  const archSupport = measurements.footType === "flat" ? "high" : 
                      measurements.footType === "high" ? "low" : "medium"

  return (
    <div className="border-2 border-secondary bg-card h-full min-h-[500px] flex flex-col">
      <div className="border-b-2 border-secondary p-4 flex items-center justify-between">
        <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
          Previzualizare 3D
        </h3>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setRotation(r => r - 45)}
            className="p-2 border-2 border-secondary hover:bg-muted transition-colors"
            aria-label="Rotește stânga"
          >
            <RotateCw className="h-4 w-4 text-secondary transform -scale-x-100" />
          </button>
          <button 
            onClick={() => setRotation(r => r + 45)}
            className="p-2 border-2 border-secondary hover:bg-muted transition-colors"
            aria-label="Rotește dreapta"
          >
            <RotateCw className="h-4 w-4 text-secondary" />
          </button>
          <button 
            onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}
            className="p-2 border-2 border-secondary hover:bg-muted transition-colors"
            aria-label="Micșorează"
          >
            <ZoomOut className="h-4 w-4 text-secondary" />
          </button>
          <button 
            onClick={() => setZoom(z => Math.min(1.5, z + 0.1))}
            className="p-2 border-2 border-secondary hover:bg-muted transition-colors"
            aria-label="Mărește"
          >
            <ZoomIn className="h-4 w-4 text-secondary" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8 bg-muted/30">
        <div 
          className="relative transition-transform duration-500"
          style={{ 
            transform: `rotate(${rotation}deg) scale(${zoom})`,
          }}
        >
          {/* Shoe SVG Illustration */}
          <svg 
            viewBox="0 0 300 200" 
            className="w-full max-w-md"
            style={{ 
              width: `${Math.min(300, shoeLength)}px`,
            }}
          >
            {/* Sole */}
            <path
              d="M30 150 Q50 180 150 180 Q250 180 270 150 Q280 120 270 100 Q250 80 150 80 Q50 80 30 100 Q20 120 30 150"
              fill="var(--primary)"
              stroke="var(--secondary)"
              strokeWidth="3"
            />
            
            {/* Upper */}
            <path
              d="M40 140 Q60 160 150 160 Q240 160 260 140 Q270 110 260 90 Q240 70 150 70 Q60 70 40 90 Q30 110 40 140"
              fill="var(--card)"
              stroke="var(--secondary)"
              strokeWidth="2"
            />
            
            {/* Arch Support Zone */}
            <ellipse
              cx="120"
              cy="120"
              rx={archSupport === "high" ? 40 : archSupport === "low" ? 20 : 30}
              ry="20"
              fill="var(--primary)"
              opacity="0.3"
            />
            
            {/* Toe Box */}
            <path
              d="M220 115 Q240 100 260 115 Q270 130 260 145 Q240 160 220 145 Q210 130 220 115"
              fill="var(--muted)"
              stroke="var(--secondary)"
              strokeWidth="2"
            />
            
            {/* Heel Counter */}
            <path
              d="M40 100 Q30 115 40 130 Q50 145 60 130 Q70 115 60 100 Q50 90 40 100"
              fill="var(--secondary)"
              opacity="0.2"
            />
            
            {/* Laces */}
            <line x1="130" y1="85" x2="180" y2="85" stroke="var(--secondary)" strokeWidth="2" />
            <line x1="135" y1="95" x2="175" y2="95" stroke="var(--secondary)" strokeWidth="2" />
            <line x1="140" y1="105" x2="170" y2="105" stroke="var(--secondary)" strokeWidth="2" />
            
            {/* Width indicator */}
            <text x="150" y="195" textAnchor="middle" fontSize="10" fill="var(--secondary)" fontFamily="var(--font-sans)">
              {shoeWidth}mm lățime
            </text>
          </svg>
        </div>
      </div>
      
      <div className="border-t-2 border-secondary p-4 bg-card">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Lungime</p>
            <p className="text-lg font-serif font-bold text-secondary">{shoeLength} mm</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Lățime</p>
            <p className="text-lg font-serif font-bold text-secondary">{shoeWidth} mm</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Suport Boltă</p>
            <p className="text-lg font-serif font-bold text-primary capitalize">{archSupport}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
