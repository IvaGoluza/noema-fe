import { useNavigate } from 'react-router-dom'
import RationalizationLayout from '../components/RationalizationLayout'
import Slider from '../components/ui/Slider'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'

export default function RationalizationStep5Page() {
  const navigate = useNavigate()
  const t = useT()
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const updateThought = useRationalizationStore((s) => s.updateThought)

  return (
    <RationalizationLayout
      title={t('step5.title')}
      subtitle={t('step5.subtitle')}
      stepNumber={5}
      rightPanel={null}
      onPrevious={() => navigate('/rationalization/4')}
      onNext={() => navigate('/rationalization/6')}
    >
      <div className="w-full">
        <div
          className="grid grid-cols-[1fr_1.6fr_1.2fr] gap-0 border border-gray-200 rounded-t-xl overflow-hidden"
          style={{ backgroundColor: '#F4F4F6' }}
        >
          {([t('step5.col.original'), t('step5.col.reframed'), t('step5.col.belief')] as const).map((col) => (
            <div key={col} className="px-5 py-3 border-r border-gray-200 last:border-r-0">
              <p className="text-xs font-semibold text-gray-600">{col}</p>
            </div>
          ))}
        </div>

        <div className="border-l border-r border-b border-gray-200 rounded-b-xl overflow-hidden divide-y divide-gray-200">
          {thoughts.length === 0 && (
            <p className="text-sm text-gray-400 px-5 py-4">
              {t('step5.empty')}
            </p>
          )}
          {thoughts.map((thought) => (
            <div key={thought.id} className="grid grid-cols-[1fr_1.6fr_1.2fr]">
              <div className="px-5 py-4 border-r border-gray-200">
                <p className="text-sm text-navy-950 leading-relaxed">{thought.content}</p>
              </div>
              <div className="px-5 py-4 border-r border-gray-200">
                <p className="text-sm text-navy-950 leading-relaxed">
                  {thought.reframe || <span className="text-gray-400 italic">{t('step5.noReframe')}</span>}
                </p>
              </div>
              <div className="px-5 py-4">
                <BeliefSlider
                  value={thought.beliefAfter}
                  onChange={(v) => updateThought(thought.id, { beliefAfter: v })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </RationalizationLayout>
  )
}

function BeliefSlider({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const t = useT()
  return (
    <div>
      <p className="text-xs text-gray-500 mb-2">{t('step5.beliefQuestion')}</p>
      <Slider
        value={value}
        onChange={onChange}
        fillClassName="bg-linear-to-r from-blue-400 to-cyan-400"
        dotClassName="bg-cyan-500"
        className="h-4 mb-1.5"
      />
      <p className="text-sm text-blue-500 font-semibold mb-2">{value}%</p>
    </div>
  )
}
