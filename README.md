# SoleScript

SoleScript is an interactive design environment for orthopedic boot modeling.
It combines a domain-specific language (DSL) with a visual interface so you can
write structured footwear definitions and immediately see how design changes
affect generated boot component patterns.

## What Is SoleScript?

SoleScript uses a clear declaration flow to describe a boot design:

- `Foot`: anatomical measurements (length, girth, width, heel, arch)
- `Observations`: clinical context and pressure points
- `Last`: shaping constraints and fit values
- `Boot`: component composition (outsole, insole, vamp, tongue, quarter, etc.)
- `Export`: final model target

This structure helps keep design intent explicit, reproducible, and easy to
review across clinical and technical teams.

## What The UI Design Gives Us

The UI is built to reduce friction between authoring and validation:

- Live DSL editor: edit source directly in a line-numbered code pane
- Instant visual feedback: 2D component patterns update as the DSL changes
- Faster iteration: reset, tweak, and compare without leaving the page
- Better clarity: structured layout separates source authoring and pattern output
- Safety-oriented workflow: semantic rules and typed inputs support consistent
	declarations and valid parameter ranges

In short, the UI turns SoleScript from a static language definition into a
practical design workflow for real-time orthopedic boot prototyping.

## Main User Flow

1. Start from the default SoleScript template.
2. Edit measurements and component declarations.
3. Inspect generated 2D patterns immediately.
4. Refine values until the output matches fit and support goals.

## Tech Stack

- Next.js + TypeScript
- Tailwind CSS
- Component-based UI architecture

## Getting Started

Install dependencies, then run the development server:

```bash
pnpm install
pnpm dev
```

If you use npm or yarn, the equivalent commands work as well.

Open http://localhost:3000 in your browser.

## v0 Project Link

This repo is connected to v0:

https://v0.app/chat/projects/prj_OBQaf2hCwT4Daszp7BYcwN3RbnE6
