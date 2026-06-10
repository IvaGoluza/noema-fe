import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'
import { useRationalizationStore } from '../store/rationalizationStore'

export default function RationalizationStep6Page() {
  const navigate = useNavigate()
  const finalEmotions = useRationalizationStore((s) => s.finalEmotions)
  const setFinalEmotions = useRationalizationStore((s) => s.setFinalEmotions)

  return (
    <EmotionSelectionStep
      title="Emotions after rationalization"
      subtitle="Choose emotions you feel now, after rationalization process"
      stepNumber={6}
      selectedEmotions={finalEmotions}
      onSelectedEmotionsChange={setFinalEmotions}
      onPrevious={() => navigate('/rationalization/5')}
      onNext={() => navigate('/rationalization/7')}
    />
  )
}
