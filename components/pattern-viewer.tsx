"use client"

import { useEffect, useState } from "react"

interface PatternViewerProps {
  source: string
}

export function PatternViewer({ source }: PatternViewerProps) {
  const [svg, setSvg] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [zoom, setZoom] = useState<number>(0.75)

  useEffect(() => {
    const controller = new AbortController()
    const timer = window.setTimeout(async () => {
      setIsLoading(true)
      setError("")

      try {
        const response = await fetch("/api/patterns", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source }),
          signal: controller.signal,
        })

        if (!response.ok) {
          const payload = (await response.json().catch(() => ({}))) as { error?: string }
          throw new Error(payload.error || "Pattern generation failed.")
        }

        const svgMarkup = await response.text()
        setSvg(svgMarkup)
      } catch (err) {
        if (controller.signal.aborted) {
          return
        }
        setSvg("")
        setError(err instanceof Error ? err.message : "Pattern generation failed.")
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }, 250)

    return () => {
      controller.abort()
      window.clearTimeout(timer)
    }
  }, [source])

  return (
    <div className="h-full overflow-auto bg-white p-4">
      <div className="mb-3 flex items-center justify-end gap-2">
        <span className="text-xs text-gray-500">Zoom</span>
        {[0.5, 0.75, 1].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setZoom(value)}
            className={
              value === zoom
                ? "border border-blue-500 bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700"
                : "border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 hover:border-gray-400"
            }
          >
            {Math.round(value * 100)}%
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="mb-3 border border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-700">
          Generating patterns from the SoleScript parser...
        </div>
      )}

      {error && (
        <div className="mb-3 border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </div>
      )}

      {svg ? (
        <div className="inline-block" style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}>
          <div
            className="[&>svg]:h-auto [&>svg]:max-w-none"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      ) : !isLoading ? (
        <div className="border border-gray-200 bg-gray-50 px-3 py-8 text-center text-sm text-gray-500">
          No graph available yet. Fix syntax or semantic issues in the DSL to render the SVG.
        </div>
      ) : null}
    </div>
  )
}
