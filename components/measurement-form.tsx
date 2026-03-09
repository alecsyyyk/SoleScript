"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowRight } from "lucide-react"

export interface FootMeasurements {
  footLength: string
  footWidth: string
  archHeight: string
  heelWidth: string
  instepHeight: string
  toeBoxWidth: string
  ankleCircumference: string
  footType: string
  condition: string
  notes: string
}

interface MeasurementFormProps {
  onSubmit: (measurements: FootMeasurements) => void
  isCalculating: boolean
}

export function MeasurementForm({ onSubmit, isCalculating }: MeasurementFormProps) {
  const [measurements, setMeasurements] = useState<FootMeasurements>({
    footLength: "",
    footWidth: "",
    archHeight: "",
    heelWidth: "",
    instepHeight: "",
    toeBoxWidth: "",
    ankleCircumference: "",
    footType: "",
    condition: "",
    notes: ""
  })

  const handleChange = (field: keyof FootMeasurements, value: string) => {
    setMeasurements(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(measurements)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border-2 border-secondary bg-card p-6">
        <h3 className="text-lg font-serif font-bold text-secondary mb-4 uppercase tracking-wide">
          Pasul 1: Măsurători de Bază
        </h3>
        <p className="text-muted-foreground mb-6">
          Introduceți măsurătorile piciorului în milimetri pentru cel mai precis rezultat.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="footLength" className="text-secondary font-medium uppercase text-sm">
              Lungime Picior (mm)
            </Label>
            <Input
              id="footLength"
              type="number"
              placeholder="260"
              value={measurements.footLength}
              onChange={(e) => handleChange("footLength", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="footWidth" className="text-secondary font-medium uppercase text-sm">
              Lățime Picior (mm)
            </Label>
            <Input
              id="footWidth"
              type="number"
              placeholder="100"
              value={measurements.footWidth}
              onChange={(e) => handleChange("footWidth", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="archHeight" className="text-secondary font-medium uppercase text-sm">
              Înălțime Boltă (mm)
            </Label>
            <Input
              id="archHeight"
              type="number"
              placeholder="35"
              value={measurements.archHeight}
              onChange={(e) => handleChange("archHeight", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="heelWidth" className="text-secondary font-medium uppercase text-sm">
              Lățime Călcâi (mm)
            </Label>
            <Input
              id="heelWidth"
              type="number"
              placeholder="65"
              value={measurements.heelWidth}
              onChange={(e) => handleChange("heelWidth", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-secondary bg-card p-6">
        <h3 className="text-lg font-serif font-bold text-secondary mb-4 uppercase tracking-wide">
          Pasul 2: Măsurători Avansate
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="instepHeight" className="text-secondary font-medium uppercase text-sm">
              Înălțime Rist (mm)
            </Label>
            <Input
              id="instepHeight"
              type="number"
              placeholder="50"
              value={measurements.instepHeight}
              onChange={(e) => handleChange("instepHeight", e.target.value)}
              className="border-2 border-secondary bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="toeBoxWidth" className="text-secondary font-medium uppercase text-sm">
              Lățime Degete (mm)
            </Label>
            <Input
              id="toeBoxWidth"
              type="number"
              placeholder="95"
              value={measurements.toeBoxWidth}
              onChange={(e) => handleChange("toeBoxWidth", e.target.value)}
              className="border-2 border-secondary bg-background"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ankleCircumference" className="text-secondary font-medium uppercase text-sm">
              Circumferință Gleznă (mm)
            </Label>
            <Input
              id="ankleCircumference"
              type="number"
              placeholder="230"
              value={measurements.ankleCircumference}
              onChange={(e) => handleChange("ankleCircumference", e.target.value)}
              className="border-2 border-secondary bg-background"
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-secondary bg-card p-6">
        <h3 className="text-lg font-serif font-bold text-secondary mb-4 uppercase tracking-wide">
          Pasul 3: Informații Condiție
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="footType" className="text-secondary font-medium uppercase text-sm">
              Tip Picior
            </Label>
            <Select onValueChange={(value) => handleChange("footType", value)}>
              <SelectTrigger className="border-2 border-secondary bg-background">
                <SelectValue placeholder="Selectați tipul" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="flat">Picior Plat</SelectItem>
                <SelectItem value="normal">Boltă Normală</SelectItem>
                <SelectItem value="high">Boltă Înaltă</SelectItem>
                <SelectItem value="cavus">Picior Cavus</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="condition" className="text-secondary font-medium uppercase text-sm">
              Condiție Medicală
            </Label>
            <Select onValueChange={(value) => handleChange("condition", value)}>
              <SelectTrigger className="border-2 border-secondary bg-background">
                <SelectValue placeholder="Selectați condiția" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bunion">Hallux Valgus</SelectItem>
                <SelectItem value="hammertoe">Degete în Ciocan</SelectItem>
                <SelectItem value="plantar">Fasciită Plantară</SelectItem>
                <SelectItem value="diabetes">Picior Diabetic</SelectItem>
                <SelectItem value="arthritis">Artrită</SelectItem>
                <SelectItem value="amputation">Post-Amputație</SelectItem>
                <SelectItem value="clubfoot">Picior Strâmb</SelectItem>
                <SelectItem value="other">Altă Condiție</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-secondary font-medium uppercase text-sm">
            Note Adiționale
          </Label>
          <Textarea
            id="notes"
            placeholder="Descrieți orice particularități sau cerințe speciale..."
            value={measurements.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            className="border-2 border-secondary bg-background min-h-[100px]"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground border-2 border-secondary hover:bg-primary/90 py-6 text-lg font-medium"
        disabled={isCalculating}
      >
        {isCalculating ? (
          <>
            <Calculator className="mr-2 h-5 w-5 animate-spin" />
            Se calculează...
          </>
        ) : (
          <>
            Calculează Design
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  )
}
