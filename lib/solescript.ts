export type SoleScriptCondition =
  | "Diabetic"
  | "Egyptian"
  | "Greek"
  | "Roman"
  | "Celtic"
  | "Germanic"
  | "Square"
  | "Peasant"

export interface FootMeasurements {
  bootName: string
  footName: string
  observationsName: string
  lastName: string
  footLength: string
  ballGirth: string
  footWidth: string
  heelWidth: string
  archHeight: string
  condition: SoleScriptCondition | ""
  pressurePoints: string
  heelHeight: string
  toeSpring: string
  widthFitting: string
  quarterVariant: string
  notes: string
}

export interface SemanticRuleResult {
  code: string
  name: string
  pass: boolean
  details: string
}

const BASE_COMPONENTS = [
  "Outsole",
  "Insole",
  "Vamp",
  "Tongue",
  "ToeBox",
  "Heel",
  "Shank",
  "Counter",
  "Lining",
] as const

function parseNumber(value: string): number {
  return Number.parseFloat(value)
}

export function parsePressurePoints(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
}

export function buildSoleScriptProgram(input: FootMeasurements): string {
  const quarter = input.quarterVariant.trim() ? `Quarter ${input.quarterVariant.trim()}` : "Quarter"
  const pressurePoints = parsePressurePoints(input.pressurePoints)
  const pressurePointsDsl = pressurePoints.length > 0 ? pressurePoints.map((item) => `"${item}"`).join(", ") : '"heel"'

  const componentLines = [...BASE_COMPONENTS, quarter].map((component) => `    ${component} { }`).join("\n")

  return `Foot ${input.footName} {
    length      : ${input.footLength || "265"} mm
    ball_girth  : ${input.ballGirth || "245"} mm
    width       : ${input.footWidth || "98"} mm
    heel_width  : ${input.heelWidth || "62"} mm
    arch_height : ${input.archHeight || "18"} mm
}

Observations ${input.observationsName} {
    condition       : ${input.condition || "Diabetic"}
    pressure_points : [${pressurePointsDsl}]
}

Last ${input.lastName} {
    reference_foot : ${input.footName}
    heel_height    : ${input.heelHeight || "22"} mm
    toe_spring     : ${input.toeSpring || "10"} mm
    width_fitting  : ${input.widthFitting || "98"} mm
}

Boot ${input.bootName} {
    reference_last : ${input.lastName}
${componentLines}
}

Export ${input.bootName}`
}

export function evaluateSemanticRules(input: FootMeasurements): SemanticRuleResult[] {
  const footLength = parseNumber(input.footLength)
  const ballGirth = parseNumber(input.ballGirth)
  const numericValues = [
    parseNumber(input.footLength),
    parseNumber(input.ballGirth),
    parseNumber(input.footWidth),
    parseNumber(input.heelWidth),
    parseNumber(input.archHeight),
    parseNumber(input.heelHeight),
    parseNumber(input.toeSpring),
    parseNumber(input.widthFitting),
  ]

  const declarations = [input.footName, input.observationsName, input.lastName, input.bootName].map((name) => name.trim())
  const uniqueNames = new Set(declarations)
  const pressurePoints = parsePressurePoints(input.pressurePoints)

  return [
    {
      code: "SR1",
      name: "UniqueDeclaration",
      pass: declarations.every(Boolean) && uniqueNames.size === declarations.length,
      details: "Foot, Observations, Last, and Boot names must be unique.",
    },
    {
      code: "SR2",
      name: "ReferenceIntegrity",
      pass: Boolean(input.footName.trim()) && Boolean(input.lastName.trim()) && Boolean(input.bootName.trim()),
      details: "References should target declared ids and Export must target a Boot.",
    },
    {
      code: "SR3",
      name: "MeasurementPositivity",
      pass: numericValues.every((value) => Number.isFinite(value) && value > 0),
      details: "All dimensional values must be strictly greater than 0.",
    },
    {
      code: "SR4",
      name: "TypeMatching",
      pass: pressurePoints.length > 0,
      details: "pressure_points must be a non-empty list of strings.",
    },
    {
      code: "SR5",
      name: "MandatoryParameters",
      pass: Number.isFinite(footLength) && footLength > 0 && Number.isFinite(ballGirth) && ballGirth > 0,
      details: "Foot block must include length and ball_girth.",
    },
    {
      code: "SR6",
      name: "ConditionExclusivity",
      pass: Boolean(input.condition),
      details: "Observations should declare exactly one supported condition keyword.",
    },
    {
      code: "SR7",
      name: "ComponentScope",
      pass: true,
      details: "Shoe components are generated only inside the Boot block.",
    },
    {
      code: "SR8",
      name: "LastReferenceSafety",
      pass: input.lastName.trim() !== input.footName.trim() && Boolean(input.footName.trim()),
      details: "Last must reference a Foot id and cannot self-reference.",
    },
    {
      code: "SR9",
      name: "BootExportConsistency",
      pass: Boolean(input.bootName.trim()) && Boolean(input.lastName.trim()),
      details: "Boot must reference Last and Export must point to the same Boot id.",
    },
  ]
}