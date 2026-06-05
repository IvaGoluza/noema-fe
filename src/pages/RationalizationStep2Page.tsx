import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'

export default function RationalizationStep2Page() {
  const navigate = useNavigate()

  return (
    <EmotionSelectionStep
      title="Initial emotions"
      subtitle="Choose the emotions you felt"
      stepNumber={2}
      onPrevious={() => navigate('/rationalization/1')}
      onNext={() => navigate('/rationalization/3')}
    />
  )
}
