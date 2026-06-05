import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'

export default function RationalizationStep6Page() {
  const navigate = useNavigate()

  return (
    <EmotionSelectionStep
      title="Emotions after rationalization"
      subtitle="Choose emotions you feel now, after rationalization process"
      stepNumber={6}
      onPrevious={() => navigate('/rationalization/5')}
      onNext={() => navigate('/rationalization/7')}
    />
  )
}
