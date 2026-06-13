export interface Emotion {
  coreName: string
  coreColor: string
  secondaryName: string
  tertiaryName: string
  intensity: number
}

export function emotionKey(emotion: Pick<Emotion, 'coreName' | 'secondaryName' | 'tertiaryName'>) {
  return `${emotion.coreName}::${emotion.secondaryName}::${emotion.tertiaryName}`
}

export interface SessionThought {
  id: number
  content: string
  beliefBefore: number
  distortion: string
  evidenceFor: string
  evidenceAgainst: string
  reframe: string
  beliefAfter: number
}