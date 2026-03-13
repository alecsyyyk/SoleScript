"use client"

import type { FootMeasurements } from "@/lib/solescript"
import { evaluateSemanticRules } from "@/lib/solescript"
import { ShieldCheck, ShieldAlert } from "lucide-react"

interface MaterialsListProps {
  measurements: FootMeasurements | null
}

export function MaterialsList({ measurements }: MaterialsListProps) {
  if (!measurements) {
    return null
  }
  const rules = evaluateSemanticRules(measurements)
  const passedRules = rules.filter((rule) => rule.pass).length

  return (
    <div className="border-2 border-secondary bg-card">
      <div className="border-b-2 border-secondary p-4">
        <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
          Semantic Rule Validation
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          Live check against SoleScript semantic constraints SR1-SR9.
        </p>
      </div>

      <div className="divide-y-2 divide-secondary">
        {rules.map((rule) => (
          <div 
            key={rule.code}
            className="p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors"
          >
            <div className={`p-3 border-2 border-secondary ${rule.pass ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
              {rule.pass ? <ShieldCheck className="h-5 w-5" /> : <ShieldAlert className="h-5 w-5" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-secondary">{rule.name}</h4>
                <span className={`text-xs px-2 py-0.5 ${rule.pass ? "bg-primary text-primary-foreground" : "bg-destructive text-destructive-foreground"}`}>
                  {rule.code}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {rule.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-2 border-secondary p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-secondary uppercase">
            Rules passed
          </span>
          <span className="text-2xl font-serif font-bold text-primary">
            {passedRules}/{rules.length}
          </span>
        </div>
      </div>
    </div>
  )
}
