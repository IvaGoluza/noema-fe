import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'
import { useRationalizationStore } from '../store/rationalizationStore'

export default function RationalizationStep2Page() {
  const navigate = useNavigate()
  const initialEmotions = useRationalizationStore((s) => s.initialEmotions)
  const setInitialEmotions = useRationalizationStore((s) => s.setInitialEmotions)

  return (
    <EmotionSelectionStep
      title="Initial emotions"
      subtitle="Choose the emotions you felt"
      stepNumber={2}
      selectedEmotions={initialEmotions}
      onSelectedEmotionsChange={setInitialEmotions}
      onPrevious={() => navigate('/rationalization/1')}
      onNext={() => navigate('/rationalization/3')}
    />
  )
}
