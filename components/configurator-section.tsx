"use client"

import { useState } from "react"
import { MeasurementForm, FootMeasurements } from "./measurement-form"
import { ShoePreview } from "./shoe-preview"
import { MaterialsList } from "./materials-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Layers, FileText } from "lucide-react"

export function ConfiguratorSection() {
  const [measurements, setMeasurements] = useState<FootMeasurements | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [activeTab, setActiveTab] = useState("preview")

  const handleSubmit = async (data: FootMeasurements) => {
    setIsCalculating(true)
    
    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setMeasurements(data)
    setIsCalculating(false)
    setActiveTab("preview")
  }

  return (
    <section id="configurator" className="py-20 px-4 border-t-2 border-secondary bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Configurator Încălțăminte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Introduceți măsurătorile piciorului și veți vedea instantaneu cum ar arăta 
            încălțămintea personalizată și toate materialele necesare pentru fabricare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <MeasurementForm onSubmit={handleSubmit} isCalculating={isCalculating} />
          </div>
          
          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <TabsList className="grid w-full grid-cols-3 border-2 border-secondary bg-card p-0 h-auto">
                <TabsTrigger 
                  value="preview" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 border-r-2 border-secondary rounded-none"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Previzualizare
                </TabsTrigger>
                <TabsTrigger 
                  value="materials"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 border-r-2 border-secondary rounded-none"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  Materiale
                </TabsTrigger>
                <TabsTrigger 
                  value="summary"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3 rounded-none"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Sumar
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="mt-4">
                <ShoePreview measurements={measurements} />
              </TabsContent>
              
              <TabsContent value="materials" className="mt-4">
                {measurements ? (
                  <MaterialsList measurements={measurements} />
                ) : (
                  <div className="border-2 border-secondary bg-card p-8 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Layers className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Completați măsurătorile pentru a vedea lista de materiale
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="summary" className="mt-4">
                {measurements ? (
                  <div className="border-2 border-secondary bg-card">
                    <div className="border-b-2 border-secondary p-4">
                      <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
                        Sumar Comandă
                      </h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-secondary p-4">
                          <p className="text-xs uppercase text-muted-foreground tracking-wide mb-1">Lungime</p>
                          <p className="text-2xl font-serif font-bold text-secondary">{measurements.footLength} mm</p>
                        </div>
                        <div className="border-2 border-secondary p-4">
                          <p className="text-xs uppercase text-muted-foreground tracking-wide mb-1">Lățime</p>
                          <p className="text-2xl font-serif font-bold text-secondary">{measurements.footWidth} mm</p>
                        </div>
                        <div className="border-2 border-secondary p-4">
                          <p className="text-xs uppercase text-muted-foreground tracking-wide mb-1">Tip Picior</p>
                          <p className="text-lg font-medium text-secondary capitalize">
                            {measurements.footType || "Nedefinit"}
                          </p>
                        </div>
                        <div className="border-2 border-secondary p-4">
                          <p className="text-xs uppercase text-muted-foreground tracking-wide mb-1">Condiție</p>
                          <p className="text-lg font-medium text-secondary capitalize">
                            {measurements.condition || "Nedefinit"}
                          </p>
                        </div>
                      </div>
                      
                      {measurements.notes && (
                        <div className="border-2 border-secondary p-4">
                          <p className="text-xs uppercase text-muted-foreground tracking-wide mb-2">Note</p>
                          <p className="text-secondary">{measurements.notes}</p>
                        </div>
                      )}
                      
                      <button className="w-full bg-primary text-primary-foreground border-2 border-secondary py-4 font-medium hover:bg-primary/90 transition-colors">
                        Solicită Ofertă Personalizată
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-secondary bg-card p-8 min-h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Completați măsurătorile pentru a vedea sumarul
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
