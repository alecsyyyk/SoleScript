"use client"

import type { ParsedDslMeasurements } from "@/lib/solescript"

// ─── Colour palette ───────────────────────────────────────────────────────────
const FILL   = "#dbeafe"   // light blue fill (matches screenshot)
const STROKE = "#3b82f6"   // blue stroke

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Map a DSL mm value proportionally into SVG canvas units. */
function scale(mm: number, maxMm: number, maxPx: number): number {
  return (mm / maxMm) * maxPx
}

// ─── Individual component SVG shapes ─────────────────────────────────────────
//
// Each shape is hand-crafted to look like realistic flat pattern outlines,
// scaled from the foot measurements.  All SVGs use a 200×120 viewBox.

function Outsole({ m }: { m: ParsedDslMeasurements }) {
  const W  = 190
  const L  = scale(m.footLength, 330, 175)
  const fw = scale(m.footWidth,  130, 60)
  const hw = scale(m.heelWidth,  100, 45)
  const cx = 10 + L / 2
  const cy = 60

  // Simplified outline: heel (left) tapering, wide ball, tapered toe (right)
  const pts = [
    [10,            cy - hw * 0.4],
    [10,            cy + hw * 0.4],
    [10 + L * 0.35, cy + fw * 0.5],
    [10 + L * 0.65, cy + fw * 0.45],
    [10 + L,        cy + fw * 0.15],
    [10 + L + 12,   cy],           // toe point
    [10 + L,        cy - fw * 0.15],
    [10 + L * 0.65, cy - fw * 0.45],
    [10 + L * 0.35, cy - fw * 0.5],
  ].map(([x, y]) => `${x},${y}`).join(" ")

  return (
    <svg viewBox={`0 0 ${W} 120`} className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Insole({ m }: { m: ParsedDslMeasurements }) {
  const L  = scale(m.footLength, 330, 170)
  const fw = scale(m.footWidth,  130, 52)
  const hw = scale(m.heelWidth,  100, 38)

  const pts = [
    [12,            60 - hw * 0.45],
    [12,            60 + hw * 0.45],
    [12 + L * 0.3,  60 + fw * 0.55],
    [12 + L * 0.62, 60 + fw * 0.48],
    [12 + L,        60 + fw * 0.18],
    [12 + L + 10,   60],
    [12 + L,        60 - fw * 0.18],
    [12 + L * 0.62, 60 - fw * 0.48],
    [12 + L * 0.3,  60 - fw * 0.55],
  ].map(([x, y]) => `${x},${y}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Vamp({ m }: { m: ParsedDslMeasurements }) {
  const w = scale(m.footWidth,  130, 70)
  const h = scale(m.footLength, 330, 80)
  const x = 65
  const y = 20

  const pts = [
    [x,         y],
    [x + w * 0.9, y + 6],
    [x + w,     y + h],
    [x - 4,     y + h],
  ].map(([a, b]) => `${a},${b}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Tongue({ m }: { m: ParsedDslMeasurements }) {
  const w = scale(m.footWidth,  130, 52)
  const h = scale(m.heelHeight, 50,  28)
  const x = 16
  const y = 46

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x={x} y={y} width={w} height={h} rx="2" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function QuarterComp({ m, variant }: { m: ParsedDslMeasurements; variant: number }) {
  // Quarter 1 & 2 are medial/lateral upper panels; slight trapezoid
  const w  = scale(m.footLength * 0.55, 260, 145)
  const h1 = scale(m.heelHeight + 20,   80,  46)
  const h2 = h1 * (variant === 2 ? 0.75 : 0.65)
  const x  = 30
  const y  = 37

  const pts = [
    [x,         y],
    [x + w,     y + (h1 - h2) * 0.5],
    [x + w,     y + (h1 - h2) * 0.5 + h2],
    [x,         y + h1],
  ].map(([a, b]) => `${a},${b}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Quarter4Comp({ m }: { m: ParsedDslMeasurements }) {
  // Quarter 4: longer, lower strap panel
  const w  = scale(m.footLength * 0.5, 260, 140)
  const h1 = scale(m.heelHeight + 8,   80,  34)
  const h2 = h1 * 0.55
  const x  = 20
  const y  = 43

  const pts = [
    [x,         y],
    [x + w,     y + (h1 - h2) * 0.5],
    [x + w,     y + (h1 - h2) * 0.5 + h2],
    [x,         y + h1],
  ].map(([a, b]) => `${a},${b}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function ToeBox({ m }: { m: ParsedDslMeasurements }) {
  const w1 = scale(m.footWidth, 130, 55)
  const w2 = w1 * 0.4
  const h  = scale(m.footLength * 0.35, 200, 68)
  const x  = 62
  const y  = 26

  const pts = [
    [x,         y],
    [x,         y + h],
    [x + w1,    y + h],
    [x + w1 + w2, y + h * 0.5],
    [x + w1,    y],
  ].map(([a, b]) => `${a},${b}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function HeelComp({ m }: { m: ParsedDslMeasurements }) {
  const w = scale(m.heelWidth, 100, 68)
  const h = scale(m.heelHeight, 60, 58)
  const x = 66
  const y = 31

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x={x} y={y} width={w} height={h} rx="1" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Shank({ m }: { m: ParsedDslMeasurements }) {
  const w = scale(m.footLength * 0.45, 260, 148)
  const h = scale(m.heelHeight * 0.5,  40,  22)
  const x = 20
  const y = 49

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x={x} y={y} width={w} height={h} rx="1" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Counter({ m }: { m: ParsedDslMeasurements }) {
  const w = scale(m.heelWidth * 1.4, 150, 80)
  const h = scale(m.heelHeight * 1.1, 70, 52)
  const x = 60
  const y = 34

  const pts = [
    [x,         y + h * 0.15],
    [x + 8,     y],
    [x + w,     y],
    [x + w,     y + h],
    [x,         y + h],
  ].map(([a, b]) => `${a},${b}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

function Lining({ m }: { m: ParsedDslMeasurements }) {
  const L  = scale(m.footLength, 330, 158)
  const fw = scale(m.footWidth,  130, 46)
  const hw = scale(m.heelWidth,  100, 32)

  const pts = [
    [18,            60 - hw * 0.42],
    [18,            60 + hw * 0.42],
    [18 + L * 0.32, 60 + fw * 0.5],
    [18 + L * 0.64, 60 + fw * 0.44],
    [18 + L,        60 + fw * 0.14],
    [18 + L + 9,    60],
    [18 + L,        60 - fw * 0.14],
    [18 + L * 0.64, 60 - fw * 0.44],
    [18 + L * 0.32, 60 - fw * 0.5],
  ].map(([x, y]) => `${x},${y}`).join(" ")

  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <polygon points={pts} fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

// ─── Component registry ───────────────────────────────────────────────────────

function renderComponent(name: string, m: ParsedDslMeasurements) {
  const n = name.toLowerCase()
  if (n === "outsole")           return <Outsole m={m} />
  if (n === "insole")            return <Insole m={m} />
  if (n === "vamp")              return <Vamp m={m} />
  if (n === "tongue")            return <Tongue m={m} />
  if (n === "toebox")            return <ToeBox m={m} />
  if (n === "heel")              return <HeelComp m={m} />
  if (n === "shank")             return <Shank m={m} />
  if (n === "counter")           return <Counter m={m} />
  if (n === "lining")            return <Lining m={m} />
  if (n.startsWith("quarter 4")) return <Quarter4Comp m={m} />
  if (n.startsWith("quarter 2")) return <QuarterComp m={m} variant={2} />
  if (n.startsWith("quarter"))   return <QuarterComp m={m} variant={1} />
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="30" y="30" width="140" height="60" rx="4" fill={FILL} stroke={STROKE} strokeWidth="1.5" />
    </svg>
  )
}

// ─── Public component ─────────────────────────────────────────────────────────

interface PatternViewerProps {
  parsed: ParsedDslMeasurements
}

export function PatternViewer({ parsed }: PatternViewerProps) {
  return (
    <div className="h-full overflow-auto bg-white p-4">
      {/* header */}
      <div className="text-center mb-4 pb-3 border-b border-gray-200">
        <p className="font-mono text-sm font-semibold text-blue-700">
          SoleScript &rsaquo; {parsed.bootName} &mdash; 2D Component Patterns
        </p>
        <p className="font-mono text-xs text-blue-500 mt-1">
          length {parsed.footLength.toFixed(1)} mm &middot;&nbsp;
          width {parsed.footWidth.toFixed(1)} mm &middot;&nbsp;
          ball‑girth {parsed.ballGirth.toFixed(1)} mm &middot;&nbsp;
          heel‑height {parsed.heelHeight.toFixed(1)} mm
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-3 gap-0 border border-gray-200">
        {parsed.components.map((name) => (
          <div
            key={name}
            className="border border-gray-200 p-3 flex flex-col items-center"
          >
            <p className="font-mono text-xs text-blue-700 mb-2 font-medium">{name}</p>
            <div className="w-full" style={{ aspectRatio: "200/120" }}>
              {renderComponent(name, parsed)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
