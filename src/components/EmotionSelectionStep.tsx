import RationalizationLayout from './RationalizationLayout'
import EmotionPicker from './EmotionPicker'
import EmotionIntensityPanel from './EmotionIntensityPanel'
import type { Emotion } from '../types/rationalization'
import { emotionKey } from '../types/rationalization'

interface Props {
  title: string
  subtitle: string
  stepNumber: number
  selectedEmotions: Emotion[]
  onSelectedEmotionsChange: (leaves: Emotion[]) => void
  onPrevious?: () => void
  onNext: () => void
}

export default function EmotionSelectionStep({
  title,
  subtitle,
  stepNumber,
  selectedEmotions,
  onSelectedEmotionsChange,
  onPrevious,
  onNext,
}: Props) {
  function toggleLeaf(leaf: Omit<Emotion, 'intensity'>) {
    const key = emotionKey(leaf)
    const exists = selectedEmotions.some((l) => emotionKey(l) === key)
    if (exists) {
      onSelectedEmotionsChange(selectedEmotions.filter((l) => emotionKey(l) !== key))
    } else {
      onSelectedEmotionsChange([...selectedEmotions, { ...leaf, intensity: 50 }])
    }
  }

  function changeIntensity(key: string, intensity: number) {
    onSelectedEmotionsChange(
      selectedEmotions.map((l) => (emotionKey(l) === key ? { ...l, intensity } : l))
    )
  }

  return (
    <RationalizationLayout
      title={title}
      subtitle={subtitle}
      stepNumber={stepNumber}
      rightPanel={
        <EmotionIntensityPanel
          selectedLeaves={selectedEmotions}
          onIntensityChange={changeIntensity}
        />
      }
      onPrevious={onPrevious}
      onNext={onNext}
    >
      <EmotionPicker selectedLeaves={selectedEmotions} onToggleLeaf={toggleLeaf} />
    </RationalizationLayout>
  )
}
