import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Loader2, X } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import Accordion from '../components/ui/Accordion'
import Select from '../components/ui/Select'
import TextArea from '../components/ui/TextArea'
import { distortions, type Distortion } from '../data/distortions'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT, useLanguage } from '../i18n/useLanguage'
import type { SessionThought } from '../types/rationalization'
import { predictDistortion } from '../api/predict'

interface ProsConsState {
  thought: SessionThought
  pros: string
  cons: string
  reframe: string
}

type ThoughtStatus = { type: 'noDistortion' } | { type: 'error' }

function matchDistortion(apiCategory: string): string {
  const lower = apiCategory.toLowerCase()
  const match = distortions.find((d) => lower.includes(d.name.toLowerCase()))
  return match ? match.name : apiCategory
}

export default function RationalizationStep4Page() {
  const navigate = useNavigate()
  const t = useT()
  const { lang } = useLanguage()
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const situation = useRationalizationStore((s) => s.situation)
  const updateThought = useRationalizationStore((s) => s.updateThought)
  const [modal, setModal] = useState<ProsConsState | null>(null)
  const [generating, setGenerating] = useState(false)
  const [thoughtStatus, setThoughtStatus] = useState<Record<number, ThoughtStatus>>({})

  function openModal(thought: SessionThought) {
    setModal({ thought, pros: thought.evidenceFor, cons: thought.evidenceAgainst, reframe: thought.reframe })
  }

  function saveModal() {
    if (!modal) return
    updateThought(modal.thought.id, { evidenceFor: modal.pros, evidenceAgainst: modal.cons, reframe: modal.reframe })
    setModal(null)
  }

  const distortionOptions = distortions.map((d) => ({
    value: d.name,
    label: t(`distortions.${d.key}.name`),
  }))

  async function generateSuggestions() {
    if (generating) return
    setGenerating(true)
    setThoughtStatus({})

    const results: Record<number, ThoughtStatus> = {}

    await Promise.all(
      thoughts.filter((t) => !t.distortion && !t.reframe).map(async (thought) => {
        try {
          const data = await predictDistortion({ language: lang, situation, thought: thought.content })

          if (data.binary?.label === 'Distorted' && data.classification && data.reframe) {
            updateThought(thought.id, {
              distortion: matchDistortion(data.classification.category),
              reframe: data.reframe,
            })
          } else {
            results[thought.id] = { type: 'noDistortion' }
          }
        } catch {
          results[thought.id] = { type: 'error' }
        }
      })
    )

    setThoughtStatus(results)
    setGenerating(false)
  }

  return (
    <>
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
            <Button onClick={generateSuggestions} disabled={generating} className="flex items-center gap-2 px-4">
              {generating && <Loader2 size={14} className="animate-spin" />}
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
                  {thoughtStatus[thought.id]?.type === 'noDistortion' && (
                    <p className="text-xs text-blue-600 bg-blue-50 rounded px-3 py-2">
                      {t('step4.api.noDistortion')}
                    </p>
                  )}
                  {thoughtStatus[thought.id]?.type === 'error' && (
                    <p className="text-xs text-red-600 bg-red-50 rounded px-3 py-2">
                      {t('step4.api.error')}
                    </p>
                  )}
                  <div className="flex items-end justify-between gap-4">
                    <Select
                      label={t('step4.distortion.label')}
                      value={thought.distortion}
                      onChange={(v) => updateThought(thought.id, { distortion: v })}
                      options={distortionOptions}
                      placeholder={t('step4.distortion.placeholder')}
                      className="w-1/2"
                    />
                    <Button
                      variant="outline"
                      className="text-xs px-3 py-2 shrink-0"
                      onClick={() => openModal(thought)}
                    >
                      {t('step4.reframeWithEvidence')}
                    </Button>
                  </div>
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

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-4 flex flex-col h-[90vh]">
            <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <div className="flex flex-col gap-1.5 pr-4">
                <p className="text-xs tracking-widest uppercase font-medium text-gray-500">
                  {t('step4.evidence.thought')}
                </p>
                <p className="text-sm font-medium text-navy-950 leading-relaxed">
                  {modal.thought.content}
                </p>
              </div>
              <button
                onClick={() => setModal(null)}
                className="shrink-0 text-gray-400 hover:text-gray-600 mt-0.5"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex gap-4 px-6 pt-5 pb-4 flex-1 overflow-auto">
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-xs tracking-widest uppercase font-medium text-gray-500">
                  {t('step4.evidence.for')}
                </p>
                <textarea
                  value={modal.pros}
                  onChange={(e) => setModal({ ...modal, pros: e.target.value })}
                  rows={8}
                  className="w-full flex-1 border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-xs tracking-widest uppercase font-medium text-gray-500">
                  {t('step4.evidence.against')}
                </p>
                <textarea
                  value={modal.cons}
                  onChange={(e) => setModal({ ...modal, cons: e.target.value })}
                  rows={8}
                  className="w-full flex-1 border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none"
                />
              </div>
            </div>

            <div className="px-6 pb-4 flex flex-col gap-1.5">
              <p className="text-xs tracking-widest uppercase font-medium text-gray-500">
                {t('step4.evidence.reframe')}
              </p>
              <textarea
                value={modal.reframe}
                onChange={(e) => setModal({ ...modal, reframe: e.target.value })}
                rows={3}
                className="w-full border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none"
              />
            </div>

            <div className="flex justify-end gap-3 px-6 pb-6">
              <Button variant="outline" onClick={() => setModal(null)}>
                {t('step4.evidence.cancel')}
              </Button>
              <Button onClick={saveModal}>
                {t('step4.evidence.save')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
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
