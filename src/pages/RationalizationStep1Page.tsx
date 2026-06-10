import { useNavigate } from 'react-router-dom'
import RationalizationLayout from '../components/RationalizationLayout'
import SectionBlock from '../components/SectionBlock'
import DateTimePicker from '../components/ui/DateTimePicker'
import TextArea from '../components/ui/TextArea'
import { useRationalizationStore } from '../store/rationalizationStore'

export default function RationalizationStep1Page() {
  const navigate = useNavigate()
  const when = useRationalizationStore((s) => s.when)
  const situation = useRationalizationStore((s) => s.situation)
  const setWhen = useRationalizationStore((s) => s.setWhen)
  const setSituation = useRationalizationStore((s) => s.setSituation)

  return (
    <RationalizationLayout
      title="Establishing Context"
      stepNumber={1}
      rightPanel={null}
      onNext={() => navigate('/rationalization/2')}
    >
      <SectionBlock label="When" title="When did this happen?">
        <DateTimePicker value={when} onChange={setWhen} />
      </SectionBlock>

      <SectionBlock
        label="What, Where and Who"
        title="Describe the situation."
        description="Try to be objective. Identify the primary actors, environment, and the specific event that triggered this thought."
      >
        <TextArea value={situation} onChange={setSituation} placeholder='What happened? Who was involved?'/>
      </SectionBlock>
    </RationalizationLayout>
  )
}
