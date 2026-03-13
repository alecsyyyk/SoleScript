"use client"

import type { FootMeasurements } from "@/lib/solescript"
import { buildSoleScriptProgram } from "@/lib/solescript"
import { Braces, FileCode2, Workflow } from "lucide-react"

interface ShoePreviewProps {
  measurements: FootMeasurements | null
}

export function ShoePreview({ measurements }: ShoePreviewProps) {
  if (!measurements) {
    return (
      <div className="border-2 border-secondary bg-card p-8 h-full min-h-[500px] flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 border-2 border-dashed border-secondary rounded-full flex items-center justify-center">
            <Braces className="w-16 h-16 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-serif font-bold text-secondary mb-2">
            Program Preview
          </h3>
          <p className="text-muted-foreground max-w-xs">
            Fill the form to generate a complete SoleScript source file.
          </p>
        </div>
      </div>
    )
  }

  const program = buildSoleScriptProgram(measurements)

  return (
    <div className="border-2 border-secondary bg-card h-full min-h-[500px] flex flex-col overflow-hidden">
      <div className="border-b-2 border-secondary p-4 flex items-center justify-between">
        <h3 className="text-lg font-serif font-bold text-secondary uppercase tracking-wide">
          Generated .sole Program
        </h3>
        <FileCode2 className="h-5 w-5 text-primary" />
      </div>

      <div className="flex-1 p-4 bg-muted/20 overflow-auto">
        <pre className="border-2 border-secondary bg-background p-4 text-sm md:text-[13px] leading-6 whitespace-pre-wrap break-words font-mono text-secondary">
          {program}
        </pre>
      </div>

      <div className="border-t-2 border-secondary p-4 bg-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Lexer</p>
            <p className="text-sm font-serif font-bold text-secondary">Token stream from source text</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Parser</p>
            <p className="text-sm font-serif font-bold text-secondary">Typed AST via recursive descent</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground tracking-wide">Semantic</p>
            <p className="text-sm font-serif font-bold text-primary flex items-center justify-center gap-1">
              <Workflow className="h-4 w-4" /> SR1-SR9 checks
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
