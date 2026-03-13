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
import { Braces, ArrowRight } from "lucide-react"
import type { FootMeasurements } from "@/lib/solescript"

interface MeasurementFormProps {
  onSubmit: (measurements: FootMeasurements) => void
  isCalculating: boolean
}

export function MeasurementForm({ onSubmit, isCalculating }: MeasurementFormProps) {
  const [measurements, setMeasurements] = useState<FootMeasurements>({
    bootName: "orthopedic_boot",
    footName: "patient_foot",
    observationsName: "clinical_obs",
    lastName: "standard_last",
    footLength: "",
    ballGirth: "",
    footWidth: "",
    heelWidth: "",
    archHeight: "",
    condition: "",
    pressurePoints: "heel, metatarsal, toe_tip",
    heelHeight: "",
    toeSpring: "",
    widthFitting: "",
    quarterVariant: "1",
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
          Step 1: Block Ids + Foot Block
        </h3>
        <p className="text-muted-foreground mb-6">
          Define declaration names and required Foot attributes used by the grammar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bootName" className="text-secondary font-medium uppercase text-sm">
              Boot id
            </Label>
            <Input
              id="bootName"
              placeholder="orthopedic_boot"
              value={measurements.bootName}
              onChange={(e) => handleChange("bootName", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="footName" className="text-secondary font-medium uppercase text-sm">
              Foot id
            </Label>
            <Input
              id="footName"
              placeholder="patient_foot"
              value={measurements.footName}
              onChange={(e) => handleChange("footName", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="observationsName" className="text-secondary font-medium uppercase text-sm">
              Observations id
            </Label>
            <Input
              id="observationsName"
              placeholder="clinical_obs"
              value={measurements.observationsName}
              onChange={(e) => handleChange("observationsName", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-secondary font-medium uppercase text-sm">
              Last id
            </Label>
            <Input
              id="lastName"
              placeholder="standard_last"
              value={measurements.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="footLength" className="text-secondary font-medium uppercase text-sm">
              Length (mm)
            </Label>
            <Input
              id="footLength"
              type="number"
              placeholder="265"
              value={measurements.footLength}
              onChange={(e) => handleChange("footLength", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ballGirth" className="text-secondary font-medium uppercase text-sm">
              Ball girth (mm)
            </Label>
            <Input
              id="ballGirth"
              type="number"
              placeholder="245"
              value={measurements.ballGirth}
              onChange={(e) => handleChange("ballGirth", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="footWidth" className="text-secondary font-medium uppercase text-sm">
              Width (mm)
            </Label>
            <Input
              id="footWidth"
              type="number"
              placeholder="98"
              value={measurements.footWidth}
              onChange={(e) => handleChange("footWidth", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="heelWidth" className="text-secondary font-medium uppercase text-sm">
              Heel width (mm)
            </Label>
            <Input
              id="heelWidth"
              type="number"
              placeholder="62"
              value={measurements.heelWidth}
              onChange={(e) => handleChange("heelWidth", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="archHeight" className="text-secondary font-medium uppercase text-sm">
              Arch height (mm)
            </Label>
            <Input
              id="archHeight"
              type="number"
              placeholder="18"
              value={measurements.archHeight}
              onChange={(e) => handleChange("archHeight", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-secondary bg-card p-6">
        <h3 className="text-lg font-serif font-bold text-secondary mb-4 uppercase tracking-wide">
          Step 2: Observations Block
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label htmlFor="condition" className="text-secondary font-medium uppercase text-sm">
              Condition keyword
            </Label>
            <Select onValueChange={(value) => handleChange("condition", value)} defaultValue={measurements.condition}>
              <SelectTrigger className="border-2 border-secondary bg-background">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Diabetic">Diabetic</SelectItem>
                <SelectItem value="Egyptian">Egyptian</SelectItem>
                <SelectItem value="Greek">Greek</SelectItem>
                <SelectItem value="Roman">Roman</SelectItem>
                <SelectItem value="Celtic">Celtic</SelectItem>
                <SelectItem value="Germanic">Germanic</SelectItem>
                <SelectItem value="Square">Square</SelectItem>
                <SelectItem value="Peasant">Peasant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pressurePoints" className="text-secondary font-medium uppercase text-sm">
              Pressure points
            </Label>
            <Input
              id="pressurePoints"
              placeholder="heel, metatarsal, toe_tip"
              value={measurements.pressurePoints}
              onChange={(e) => handleChange("pressurePoints", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-secondary bg-card p-6">
        <h3 className="text-lg font-serif font-bold text-secondary mb-4 uppercase tracking-wide">
          Step 3: Last + Boot Blocks
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="heelHeight" className="text-secondary font-medium uppercase text-sm">
              Heel height (mm)
            </Label>
            <Input
              id="heelHeight"
              type="number"
              placeholder="22"
              value={measurements.heelHeight}
              onChange={(e) => handleChange("heelHeight", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="toeSpring" className="text-secondary font-medium uppercase text-sm">
              Toe spring (mm)
            </Label>
            <Input
              id="toeSpring"
              type="number"
              placeholder="10"
              value={measurements.toeSpring}
              onChange={(e) => handleChange("toeSpring", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="widthFitting" className="text-secondary font-medium uppercase text-sm">
              Width fitting (mm)
            </Label>
            <Input
              id="widthFitting"
              type="number"
              placeholder="98"
              value={measurements.widthFitting}
              onChange={(e) => handleChange("widthFitting", e.target.value)}
              className="border-2 border-secondary bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quarterVariant" className="text-secondary font-medium uppercase text-sm">
              Quarter variant number
            </Label>
            <Input
              id="quarterVariant"
              type="number"
              min="1"
              max="9"
              placeholder="1"
              value={measurements.quarterVariant}
              onChange={(e) => handleChange("quarterVariant", e.target.value)}
              className="border-2 border-secondary bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-secondary font-medium uppercase text-sm">
            Optional DSL notes
          </Label>
          <Textarea
            id="notes"
            placeholder="Comment your clinical assumptions or implementation notes..."
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
            <Braces className="mr-2 h-5 w-5 animate-pulse" />
            Building DSL program...
          </>
        ) : (
          <>
            Generate SoleScript Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  )
}
