import { create } from 'zustand'
import type { Emotion, SessionThought } from '../types/rationalization'

interface RationalizationStore {
  when: string
  situation: string
  initialEmotions: Emotion[]
  thoughts: SessionThought[]
  finalEmotions: Emotion[]

  setWhen: (when: string) => void
  setSituation: (situation: string) => void
  setInitialEmotions: (emotions: Emotion[]) => void
  addThought: (content: string, beliefBefore: number) => void
  updateThought: (id: number, patch: Partial<Omit<SessionThought, 'id'>>) => void
  deleteThought: (id: number) => void
  setFinalEmotions: (emotions: Emotion[]) => void
  reset: () => void
}

const initialState = {
  when: '',
  situation: '',
  initialEmotions: [] as Emotion[],
  thoughts: [] as SessionThought[],
  finalEmotions: [] as Emotion[],
}

export const useRationalizationStore = create<RationalizationStore>((set) => ({
  ...initialState,

  setWhen: (when) => set({ when }),
  setSituation: (situation) => set({ situation }),
  setInitialEmotions: (emotions) => set({ initialEmotions: emotions }),

  addThought: (content, beliefBefore) =>
    set((state) => ({
      thoughts: [
        ...state.thoughts,
        { id: Date.now(), content, beliefBefore, distortion: '', reframe: '', beliefAfter: 50 },
      ],
    })),

  updateThought: (id, patch) =>
    set((state) => ({
      thoughts: state.thoughts.map((t) => (t.id === id ? { ...t, ...patch } : t)),
    })),

  deleteThought: (id) =>
    set((state) => ({ thoughts: state.thoughts.filter((t) => t.id !== id) })),

  setFinalEmotions: (emotions) => set({ finalEmotions: emotions }),

  reset: () => set(initialState),
}))
