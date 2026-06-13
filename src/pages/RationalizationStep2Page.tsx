import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'

export default function RationalizationStep2Page() {
  const navigate = useNavigate()
  const t = useT()
  const initialEmotions = useRationalizationStore((s) => s.initialEmotions)
  const setInitialEmotions = useRationalizationStore((s) => s.setInitialEmotions)

  return (
    <EmotionSelectionStep
      title={t('step2.title')}
      subtitle={t('step2.subtitle')}
      stepNumber={2}
      selectedEmotions={initialEmotions}
      onSelectedEmotionsChange={setInitialEmotions}
      onPrevious={() => navigate('/rationalization/1')}
      onNext={() => navigate('/rationalization/3')}
    />
  )
}
