import { useNavigate } from 'react-router-dom'
import EmotionSelectionStep from '../components/EmotionSelectionStep'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'

export default function RationalizationStep6Page() {
  const navigate = useNavigate()
  const t = useT()
  const finalEmotions = useRationalizationStore((s) => s.finalEmotions)
  const setFinalEmotions = useRationalizationStore((s) => s.setFinalEmotions)

  return (
    <EmotionSelectionStep
      title={t('step6.title')}
      subtitle={t('step6.subtitle')}
      stepNumber={6}
      selectedEmotions={finalEmotions}
      onSelectedEmotionsChange={setFinalEmotions}
      onPrevious={() => navigate('/rationalization/5')}
      onNext={() => navigate('/rationalization/7')}
    />
  )
}
