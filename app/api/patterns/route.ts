import { promises as fs } from "node:fs"
import os from "node:os"
import path from "node:path"
import { spawn } from "node:child_process"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface PatternRequestBody {
  source?: string
}

function runPythonParser(inputPath: string, cwd: string): Promise<void> {
  const pythonBin = process.env.PYTHON_BIN || "python"

  return new Promise((resolve, reject) => {
    const proc = spawn(pythonBin, ["solescript_parser.py", inputPath], { cwd })

    let stderr = ""
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString()
    })

    proc.on("error", (err) => {
      reject(err)
    })

    proc.on("close", (code) => {
      if (code === 0) {
        resolve()
        return
      }
      reject(new Error(stderr.trim() || `Parser exited with code ${code}`))
    })
  })
}

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json().catch(() => null)) as PatternRequestBody | null
  const source = body?.source

  if (!source || typeof source !== "string") {
    return Response.json({ error: "Missing SoleScript source text." }, { status: 400 })
  }

  const workspaceRoot = process.cwd()
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "solescript-"))
  const inputPath = path.join(tempDir, "input.sole")
  const outputPath = path.join(tempDir, "input_patterns.svg")

  try {
    await fs.writeFile(inputPath, source, "utf-8")
    await runPythonParser(inputPath, workspaceRoot)

    const svg = await fs.readFile(outputPath, "utf-8")
    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Pattern generation failed."
    return Response.json({ error: message }, { status: 500 })
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true })
  }
}
