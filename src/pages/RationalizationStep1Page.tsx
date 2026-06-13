import { useNavigate } from 'react-router-dom'
import RationalizationLayout from '../components/RationalizationLayout'
import SectionBlock from '../components/SectionBlock'
import DateTimePicker from '../components/ui/DateTimePicker'
import TextArea from '../components/ui/TextArea'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'

export default function RationalizationStep1Page() {
  const navigate = useNavigate()
  const t = useT()
  const when = useRationalizationStore((s) => s.when)
  const situation = useRationalizationStore((s) => s.situation)
  const setWhen = useRationalizationStore((s) => s.setWhen)
  const setSituation = useRationalizationStore((s) => s.setSituation)

  return (
    <RationalizationLayout
      title={t('step1.title')}
      stepNumber={1}
      rightPanel={null}
      onNext={() => navigate('/rationalization/2')}
    >
      <SectionBlock label={t('step1.when.label')} title={t('step1.when.title')}>
        <DateTimePicker value={when} onChange={setWhen} />
      </SectionBlock>

      <SectionBlock
        label={t('step1.situation.label')}
        title={t('step1.situation.title')}
        description={t('step1.situation.desc')}
      >
        <TextArea value={situation} onChange={setSituation} placeholder={t('step1.situation.placeholder')} />
      </SectionBlock>
    </RationalizationLayout>
  )
}
