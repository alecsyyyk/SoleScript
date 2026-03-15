"use client"

import { useState, useCallback } from "react"
import { PatternViewer } from "./pattern-viewer"
import { parseDslSource, buildSoleScriptProgram } from "@/lib/solescript"
import { FileCode2, RefreshCw } from "lucide-react"

// ─── Default program ──────────────────────────────────────────────────────────

const DEFAULT_DSL = `// SoleScript — orthopedic_boot
// Edit measurements on the left; patterns update on the right.

Foot patient_foot {
    length      : 265 mm
    ball_girth  : 245 mm
    width       : 98 mm
    heel_width  : 62 mm
    arch_height : 18 mm
}

Observations clinical_obs {
    condition       : Diabetic
    pressure_points : ["heel", "metatarsal", "toe_tip"]
}

Last standard_last {
    reference_foot : patient_foot
    heel_height    : 22 mm
    toe_spring     : 10 mm
    width_fitting  : 98 mm
}

Boot orthopedic_boot {
    reference_last : standard_last
    Outsole  { }
    Insole   { }
    Vamp     { }
    Tongue   { }
    Quarter 1 { }
    Quarter 2 { }
    Quarter 4 { }
    ToeBox   { }
    Heel     { }
    Shank    { }
    Counter  { }
    Lining   { }
}

Export orthopedic_boot`

// ─── Line-numbered code editor ────────────────────────────────────────────────

function CodeEditor({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const lines = value.split("\n")

  return (
    <div className="flex h-full font-mono text-sm overflow-hidden">
      {/* line numbers */}
      <div
        className="select-none text-right pr-3 pt-[14px] pb-[14px] text-xs leading-6 text-muted-foreground bg-muted/40 border-r border-secondary/40 min-w-[2.8rem]"
        aria-hidden
      >
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>

      {/* editable area */}
      <textarea
        className="flex-1 resize-none outline-none bg-transparent text-secondary leading-6 p-[14px] overflow-auto whitespace-pre caret-primary"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        style={{ minHeight: "100%" }}
      />
    </div>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────

export function DslIdeSection() {
  const [code, setCode] = useState(DEFAULT_DSL)

  const parsed = parseDslSource(code)

  const handleReset = useCallback(() => setCode(DEFAULT_DSL), [])

  return (
    <section
      id="dsl-ide"
      className="py-20 px-4 border-t-2 border-secondary bg-background"
    >
      <div className="container mx-auto">
        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-4">
            Live DSL Editor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Edit the SoleScript source on the left. The 2D component patterns on
            the right update instantly as you change measurements.
          </p>
        </div>

        {/* split pane */}
        <div className="border-2 border-secondary overflow-hidden" style={{ height: "76vh", minHeight: "600px" }}>
          <div className="flex h-full">

            {/* ── LEFT: DSL editor ────────────────────────────────────────── */}
            <div className="flex flex-col w-1/2 border-r-2 border-secondary">
              {/* toolbar */}
              <div className="flex items-center justify-between px-4 py-2 bg-card border-b-2 border-secondary shrink-0">
                <div className="flex items-center gap-2">
                  <FileCode2 className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-wide">
                    program.sole
                  </span>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-secondary transition-colors"
                  title="Reset to default"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Reset
                </button>
              </div>

              {/* editor body */}
              <div className="flex-1 overflow-auto bg-card">
                <CodeEditor value={code} onChange={setCode} />
              </div>
            </div>

            {/* ── RIGHT: 2D pattern viewer ─────────────────────────────────── */}
            <div className="flex flex-col w-1/2">
              {/* toolbar */}
              <div className="flex items-center px-4 py-2 bg-card border-b-2 border-secondary shrink-0">
                <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-wide">
                  2D Component Patterns
                </span>
              </div>

              {/* pattern view */}
              <div className="flex-1 overflow-auto bg-white">
                <PatternViewer parsed={parsed} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
