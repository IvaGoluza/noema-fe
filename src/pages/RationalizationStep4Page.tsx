import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import Accordion from '../components/ui/Accordion'
import Select from '../components/ui/Select'
import TextArea from '../components/ui/TextArea'
import { distortions, type Distortion } from '../data/distortions'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'

const DISTORTION_OPTIONS = distortions.map((d) => ({ value: d.name, label: d.name }))

export default function RationalizationStep4Page() {
  const navigate = useNavigate()
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const updateThought = useRationalizationStore((s) => s.updateThought)

  function generateSuggestions() {
    thoughts.forEach((t) => {
      if (!t.distortion && !t.reframe) {
        updateThought(t.id, {
          distortion: 'All-or-Nothing Thinking',
          reframe:
            "One setback doesn't define the whole situation. I can acknowledge the difficulty while recognising what I've done well.",
        })
      }
    })
  }

  return (
    <RationalizationLayout
      title="Rationalization & Reframing"
      subtitle="Use Noema models as a starting point or refer to the glossary for manual work."
      stepNumber={4}
      rightPanel={<GlossaryPanel />}
      onPrevious={() => navigate('/rationalization/3')}
      onNext={() => navigate('/rationalization/5')}
      footerNote="AI suggestions may not always be accurate"
    >
      <div>
        <div className="flex justify-between align-bottom items-end mb-4">
          <span className="text-xs h-fit tracking-widest uppercase font-medium text-gray-500">
            Thoughts to reframe
          </span>
          <Button onClick={generateSuggestions} className="flex items-center gap-2 px-4">
            Generate suggestions
          </Button>
        </div>

        {thoughts.length === 0 && (
          <p className="text-sm text-gray-400 py-4">
            No thoughts added yet. Go back to step 3 to add your automatic thoughts.
          </p>
        )}

        <div className="border-t border-t-gray-200">
          {thoughts.map((t, i) => (
            <Accordion
              key={t.id}
              defaultOpen={i === 0}
              className="border border-gray-200 border-t-0 overflow-hidden"
              triggerClassName="px-4 py-3 bg-white hover:bg-gray-50"
              bodyClassName="px-4 pb-4 bg-white border-t border-gray-100"
              trigger={
                <span className="text-sm text-navy-950 pr-3">
                  {t.content}
                </span>
              }
            >
              <div className="pt-4 flex flex-col gap-4">
                <Select
                  label="Distortion Category"
                  value={t.distortion}
                  onChange={(v) => updateThought(t.id, { distortion: v })}
                  options={DISTORTION_OPTIONS}
                  placeholder="Select a distortion..."
                  className="max-w-sm"
                />
                <div>
                  <p className="text-xs text-gray-500 tracking-widest uppercase font-medium mb-1.5">
                    Proposed Reframe
                  </p>
                  <TextArea
                    value={t.reframe}
                    onChange={(v) => updateThought(t.id, { reframe: v })}
                    placeholder="Write or edit the reframed thought..."
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
  return (
    <div className="px-6 py-8 h-full overflow-y-auto">
      <div className="flex items-center gap-2 mb-5">
        <BookOpen size={15} className="text-purple-500" />
        <p className="text-xs text-purple-500 tracking-widest uppercase font-semibold">
          Glossary of Distortions
        </p>
      </div>
      {distortions.map((d) => (
        <DistortionAccordion key={d.name} distortion={d} />
      ))}
    </div>
  )
}

function DistortionAccordion({ distortion }: { distortion: Distortion }) {
  return (
    <Accordion
      className="border-b border-gray-200 last:border-b-0"
      triggerClassName="py-3 px-0 hover:opacity-80"
      bodyClassName="pb-4"
      trigger={
        <span className="text-sm font-medium" style={{ color: '#041627' }}>
          {distortion.name}
        </span>
      }
    >
      <p className="text-xs text-gray-600 leading-relaxed mb-3">{distortion.description}</p>
      <div className="rounded-lg px-3 py-2 mb-2" style={{ backgroundColor: '#FEF0EC' }}>
        <p className="text-xs font-semibold mb-0.5" style={{ color: '#c45a2a' }}>
          Automatic Thought
        </p>
        <p className="text-xs" style={{ color: '#7a3515' }}>
          {distortion.automaticThought}
        </p>
      </div>
      <div className="rounded-lg px-3 py-2" style={{ backgroundColor: '#EEF7EE' }}>
        <p className="text-xs font-semibold mb-0.5" style={{ color: '#2e7d32' }}>
          Healthy Reframe
        </p>
        <p className="text-xs" style={{ color: '#1b5e20' }}>
          {distortion.healthyReframe}
        </p>
      </div>
    </Accordion>
  )
}
