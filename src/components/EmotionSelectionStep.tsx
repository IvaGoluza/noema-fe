import { useState } from 'react'
import RationalizationLayout from './RationalizationLayout'
import EmotionPicker from './EmotionPicker'
import EmotionIntensityPanel from './EmotionIntensityPanel'
import type { SelectedLeaf } from '../types/rationalization'
import { leafKey } from '../types/rationalization'

interface Props {
  title: string
  subtitle: string
  stepNumber: number
  onPrevious: () => void
  onNext: () => void
}

export default function EmotionSelectionStep({ title, subtitle, stepNumber, onPrevious, onNext }: Props) {
  const [selectedLeaves, setSelectedLeaves] = useState<SelectedLeaf[]>([])

  function toggleLeaf(leaf: Omit<SelectedLeaf, 'intensity'>) {
    const key = leafKey(leaf)
    setSelectedLeaves(prev => {
      const exists = prev.some(l => leafKey(l) === key)
      if (exists) return prev.filter(l => leafKey(l) !== key)
      return [...prev, { ...leaf, intensity: 50 }]
    })
  }

  function changeIntensity(key: string, intensity: number) {
    setSelectedLeaves(prev => prev.map(l => leafKey(l) === key ? { ...l, intensity } : l))
  }

  return (
    <RationalizationLayout
      title={title}
      subtitle={subtitle}
      stepNumber={stepNumber}
      rightPanel={
        <EmotionIntensityPanel
          selectedLeaves={selectedLeaves}
          onIntensityChange={changeIntensity}
        />
      }
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <EmotionPicker selectedLeaves={selectedLeaves} onToggleLeaf={toggleLeaf} />
    </RationalizationLayout>
  )
}
