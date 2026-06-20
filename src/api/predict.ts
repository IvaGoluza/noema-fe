const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export interface PredictRequest {
  language: string
  situation: string
  thought: string
}

export interface PredictResponse {
  language: string
  thought_used_for_classification: string
  binary: { label: string; prob_distorted: number }
  classification: { category: string; confidence: number } | null
  reframe: string | null
  latency_ms: Record<string, number>
}

export async function predictDistortion(req: PredictRequest): Promise<PredictResponse> {
  const response = await fetch(`${BACKEND_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })

  if (!response.ok) {
    throw new Error(`Predict request failed: ${response.status}`)
  }

  return response.json()
}
