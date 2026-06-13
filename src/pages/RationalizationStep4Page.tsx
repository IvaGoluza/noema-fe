import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import Accordion from '../components/ui/Accordion'
import Select from '../components/ui/Select'
import TextArea from '../components/ui/TextArea'
import { distortions, type Distortion } from '../data/distortions'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'

export default function RationalizationStep4Page() {
  const navigate = useNavigate()
  const t = useT()
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const updateThought = useRationalizationStore((s) => s.updateThought)

  const distortionOptions = distortions.map((d) => ({
    value: d.name,
    label: t(`distortions.${d.key}.name`),
  }))

  function generateSuggestions() {
    thoughts.forEach((thought) => {
      if (!thought.distortion && !thought.reframe) {
        updateThought(thought.id, {
          distortion: 'All-or-Nothing Thinking',
          reframe:
            "One setback doesn't define the whole situation. I can acknowledge the difficulty while recognising what I've done well.",
        })
      }
    })
  }

  return (
    <RationalizationLayout
      title={t('step4.title')}
      subtitle={t('step4.subtitle')}
      stepNumber={4}
      rightPanel={<GlossaryPanel />}
      onPrevious={() => navigate('/rationalization/3')}
      onNext={() => navigate('/rationalization/5')}
      footerNote={t('step4.footer')}
    >
      <div>
        <div className="flex justify-between align-bottom items-end mb-4">
          <span className="text-xs h-fit tracking-widest uppercase font-medium text-gray-500">
            {t('step4.thoughts.label')}
          </span>
          <Button onClick={generateSuggestions} className="flex items-center gap-2 px-4">
            {t('step4.generate')}
          </Button>
        </div>

        {thoughts.length === 0 && (
          <p className="text-sm text-gray-400 py-4">
            {t('step4.thoughts.empty')}
          </p>
        )}

        <div className="border-t border-t-gray-200">
          {thoughts.map((thought, i) => (
            <Accordion
              key={thought.id}
              defaultOpen={i === 0}
              className="border border-gray-200 border-t-0 overflow-hidden"
              triggerClassName="px-4 py-3 bg-white hover:bg-gray-50"
              bodyClassName="px-4 pb-4 bg-white border-t border-gray-100"
              trigger={
                <span className="text-sm text-navy-950 pr-3">
                  {thought.content}
                </span>
              }
            >
              <div className="pt-4 flex flex-col gap-4">
                <Select
                  label={t('step4.distortion.label')}
                  value={thought.distortion}
                  onChange={(v) => updateThought(thought.id, { distortion: v })}
                  options={distortionOptions}
                  placeholder={t('step4.distortion.placeholder')}
                  className="max-w-sm"
                />
                <div>
                  <p className="text-xs text-gray-500 tracking-widest uppercase font-medium mb-1.5">
                    {t('step4.reframe.label')}
                  </p>
                  <TextArea
                    value={thought.reframe}
                    onChange={(v) => updateThought(thought.id, { reframe: v })}
                    placeholder={t('step4.reframe.placeholder')}
                    rows={4}
                  />
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </RationalizationLayout>
  )
}

function GlossaryPanel() {
  const t = useT()
  return (
    <div className="px-6 py-8 h-full overflow-y-auto">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen size={15} className="text-purple-500" />
        <p className="text-xs text-purple-500 tracking-widest uppercase font-semibold">
          {t('step4.glossary.title')}
        </p>
      </div>
      {distortions.map((d) => (
        <DistortionAccordion key={d.key} distortion={d} />
      ))}
    </div>
  )
}

function DistortionAccordion({ distortion }: { distortion: Distortion }) {
  const t = useT()
  return (
    <Accordion
      className="border-b border-gray-200 last:border-b-0"
      triggerClassName="py-3 px-0 hover:opacity-80"
      bodyClassName="pb-4"
      trigger={
        <span className="text-sm font-medium" style={{ color: '#041627' }}>
          {t(`distortions.${distortion.key}.name`)}
        </span>
      }
    >
      <p className="text-xs text-gray-600 leading-relaxed mb-3">
        {t(`distortions.${distortion.key}.desc`)}
      </p>
      <div className="rounded-lg px-3 py-2 mb-2" style={{ backgroundColor: '#FEF0EC' }}>
        <p className="text-xs font-semibold mb-0.5" style={{ color: '#c45a2a' }}>
          {t('step4.automaticThought')}
        </p>
        <p className="text-xs" style={{ color: '#7a3515' }}>
          {t(`distortions.${distortion.key}.automaticThought`)}
        </p>
      </div>
      <div className="rounded-lg px-3 py-2" style={{ backgroundColor: '#EEF7EE' }}>
        <p className="text-xs font-semibold mb-0.5" style={{ color: '#2e7d32' }}>
          {t('step4.healthyReframe')}
        </p>
        <p className="text-xs" style={{ color: '#1b5e20' }}>
          {t(`distortions.${distortion.key}.healthyReframe`)}
        </p>
      </div>
    </Accordion>
  )
}
