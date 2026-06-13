import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PieChart, Pie } from 'recharts'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import {
  ChartContainer,
  type ChartConfig,
} from '../components/ui/chart'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT, useLanguage } from '../i18n/useLanguage'
import { distortions } from '../data/distortions'
import type { Emotion, SessionThought } from '../types/rationalization'

interface EmotionGroup {
  coreName: string
  coreColor: string
  emotions: Emotion[]
}

function groupByCore(emotions: Emotion[]): EmotionGroup[] {
  const map = new Map<string, EmotionGroup>()
  for (const e of emotions) {
    if (!map.has(e.coreName)) {
      map.set(e.coreName, { coreName: e.coreName, coreColor: e.coreColor, emotions: [] })
    }
    map.get(e.coreName)!.emotions.push(e)
  }
  return Array.from(map.values())
}

function emotionsToChart(emotions: Emotion[]): {
  config: ChartConfig
  data: { name: string; value: number; fill: string }[]
  groups: EmotionGroup[]
} {
  const groups = groupByCore(emotions)
  const config: ChartConfig = {}
  const data: { name: string; value: number; fill: string }[] = []
  groups.forEach((group) => {
    const key = `core_${group.coreName}`
    const total = group.emotions.reduce((sum, e) => sum + e.intensity, 0)
    config[key] = { label: group.coreName, color: group.coreColor }
    data.push({ name: key, value: total, fill: group.coreColor })
  })
  return { config, data, groups }
}

function loadImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = dataUrl
  })
}

function getDistortionKey(name: string): string {
  return distortions.find((d) => d.name === name)?.key ?? ''
}

export default function RationalizationStep7Page() {
  const navigate = useNavigate()
  const t = useT()
  const chartsRef = useRef<HTMLDivElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const initialEmotions = useRationalizationStore((s) => s.initialEmotions)
  const finalEmotions = useRationalizationStore((s) => s.finalEmotions)
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const reset = useRationalizationStore((s) => s.reset)

  const when = useRationalizationStore((s) => s.when)
  const situation = useRationalizationStore((s) => s.situation)

  const initial = emotionsToChart(initialEmotions)
  const current = emotionsToChart(finalEmotions)

  async function exportToPDF() {
    if (!chartsRef.current || !summaryRef.current) return
    const [chartsUrl, summaryUrl] = await Promise.all([
      toPng(chartsRef.current, { pixelRatio: 2, skipFonts: true }),
      toPng(summaryRef.current, { pixelRatio: 2, skipFonts: true }),
    ])
    const [chartsImg, summaryImg] = await Promise.all([loadImage(chartsUrl), loadImage(summaryUrl)])

    const margin = 24
    const headerHeight = 36
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' })
    const pageWidth = pdf.internal.pageSize.getWidth()
    const usableWidth = pageWidth - margin * 2

    // Page 1: header + charts
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(16)
    pdf.text(t('step7.pdf.title'), margin, margin + 14)
    const chartsH = (chartsImg.height * usableWidth) / chartsImg.width
    pdf.addImage(chartsUrl, 'PNG', margin, margin + headerHeight, usableWidth, chartsH)

    // Page 2: summary
    pdf.addPage()
    const summaryH = (summaryImg.height * usableWidth) / summaryImg.width
    pdf.addImage(summaryUrl, 'PNG', margin, margin, usableWidth, summaryH)

    pdf.save('rationalization-summary.pdf')
  }

  function exportToNoema() {
    const state = useRationalizationStore.getState()
    const snapshot = {
      version: '1' as const,
      when: state.when,
      situation: state.situation,
      initialEmotions: state.initialEmotions,
      thoughts: state.thoughts,
      finalEmotions: state.finalEmotions,
    }
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rationalization.noema'
    a.click()
    URL.revokeObjectURL(url)
  }

  function completeSession() {
    reset()
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col text-navy-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex-1 bg-white px-10 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs text-gray-500 tracking-widest uppercase font-medium mb-1">
                {t('step7.journey')}
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
                {t('step7.complete')}
              </h1>
            </div>
            <span className="text-sm text-purple-500 mt-4 shrink-0 ml-6">{t('step7.stepLabel')}</span>
          </div>

          <div className="w-full h-1 mb-8 bg-purple-100">
            <div className="h-1 w-full bg-purple-800" />
          </div>

          <div ref={chartsRef} className="rounded-2xl p-6 mb-4 flex items-start gap-6 bg-gray-50">
            {initial.data.length > 0 ? (
              <EmotionChart
                title={t('step7.initial.title')}
                subtitle={t('step7.initial.subtitle')}
                config={initial.config}
                data={initial.data}
                groups={initial.groups}
              />
            ) : (
              <EmptyChart title={t('step7.initial.title')} subtitle={t('step7.initial.subtitle')} />
            )}
            <div className="w-px self-stretch shrink-0" style={{ backgroundColor: '#E0E0E8' }} />
            {current.data.length > 0 ? (
              <EmotionChart
                title={t('step7.current.title')}
                subtitle={t('step7.current.subtitle')}
                config={current.config}
                data={current.data}
                groups={current.groups}
              />
            ) : (
              <EmptyChart title={t('step7.current.title')} subtitle={t('step7.current.subtitle')} />
            )}
          </div>

          <div ref={summaryRef}>
            <Summary when={when} situation={situation} thoughts={thoughts} getDistortionKey={getDistortionKey} />
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <Button variant="primary" onClick={exportToPDF} className="px-8 py-3 rounded-2xl font-semibold">
              {t('step7.export')}
            </Button>
            <Button variant="primary" onClick={exportToNoema} className="px-8 py-3 rounded-2xl font-semibold">
              {t('step7.exportNoema')}
            </Button>
            <Button
              variant="outline"
              onClick={completeSession}
              className="px-8 py-3 rounded-2xl border-navy-950 text-navy-950 font-medium"
            >
              {t('step7.completeSession')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function EmotionChart({
  title,
  subtitle,
  config,
  data,
  groups,
}: {
  title: string
  subtitle: string
  config: ChartConfig
  data: { name: string; value: number; fill: string }[]
  groups: EmotionGroup[]
}) {
  const t = useT()
  return (
    <div className="flex-1 flex flex-col items-center text-center py-4">
      <h2 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      <ChartContainer config={config} className="w-full h-52">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-2 mb-6">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: entry.fill }} />
            <span className="text-sm text-muted-foreground">
              {t(`emotions.${config[entry.name]?.label}`)}
            </span>
          </div>
        ))}
      </div>
      <div className="w-[60%] text-left space-y-3 mt-4">
        <div className="flex items-center justify-between mb-1 border-b border-gray-200 pb-1">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('step7.table.emotion')}</span>
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('step7.table.intensity')}</span>
        </div>
        {groups.map((group) => (
          <div key={group.coreName}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: group.coreColor }} />
              <span className="text-sm font-semibold text-gray-700">{t(`emotions.${group.coreName}`)}</span>
            </div>
            <div className="pl-3.5 space-y-0.5">
              {group.emotions.map((e) => (
                <div key={`${e.secondaryName}-${e.tertiaryName}`} className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {t(`emotions.${e.tertiaryName || e.secondaryName}`)}
                  </span>
                  <span className="text-sm text-gray-500">{e.intensity}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EmptyChart({ title, subtitle }: { title: string; subtitle: string }) {
  const t = useT()
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
      <h2 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <p className="text-sm text-gray-400 italic">{t('step7.noEmotions')}</p>
    </div>
  )
}

function formatWhen(value: string, locale: string): string {
  const date = new Date(value)
  if (isNaN(date.getTime())) return value
  return date.toLocaleString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function Summary({
  when,
  situation,
  thoughts,
  getDistortionKey,
}: {
  when: string
  situation: string
  thoughts: SessionThought[]
  getDistortionKey: (name: string) => string
}) {
  const t = useT()
  const { lang } = useLanguage()
  const locale = lang === 'hr' ? 'hr-HR' : 'en-GB'
  const isEmpty = !when && !situation && thoughts.length === 0
  return (
    <div className="rounded-2xl p-10 mb-10 space-y-8 bg-gray-50">
      <div className="flex justify-between align-bottom">
        <h2 className="font-semibold text-xl" style={{ fontFamily: 'Noto Serif, serif' }}>
          {t('step7.summary.title')}
        </h2>
        {when && <span className="text-sm text-gray-500">{formatWhen(when, locale)}</span>}
      </div>
      {situation && (
        <div className="text-navy-950">
          <h3 className="font-semibold text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>
            {t('step7.summary.situation')}
          </h3>
          <p className="pt-2">{situation}</p>
        </div>
      )}
      {thoughts.length > 0 && (
        <div>
          <p className="text-navy-950 font-semibold text-lg" style={{ fontFamily: 'Noto Serif, serif' }}>
            {t('step7.summary.thoughts')}
          </p>
          {thoughts.map((thought) => (
            <ThoughtCard key={thought.id} thought={thought} getDistortionKey={getDistortionKey} />
          ))}
        </div>
      )}
      {isEmpty && <p className="text-sm text-gray-400 italic">{t('step7.summary.empty')}</p>}
    </div>
  )
}

function ThoughtCard({
  thought,
  getDistortionKey,
}: {
  thought: SessionThought
  getDistortionKey: (name: string) => string
}) {
  const t = useT()
  return (
    <div className="flex flex-col gap-2 text-normal py-4 border-b border-b-purple-100">
      <SummaryField label={t('step7.thought.thought')} value={thought.content} />
      <SummaryField label={t('step7.thought.belief')} value={`${thought.beliefBefore}%`} />
      {thought.distortion && (
        <SummaryField
          label={t('step7.thought.distortion')}
          value={t(`distortions.${getDistortionKey(thought.distortion)}.name`)}
        />
      )}
      {thought.evidenceFor && (
        <SummaryField label={t('step7.thought.evidenceFor')} value={thought.evidenceFor} />
      )}
      {thought.evidenceAgainst && (
        <SummaryField label={t('step7.thought.evidenceAgainst')} value={thought.evidenceAgainst} />
      )}
      {thought.reframe && (
        <>
          <SummaryField label={t('step7.thought.reframe')} value={thought.reframe} />
          <SummaryField label={t('step7.thought.reframeBelief')} value={`${thought.beliefAfter}%`} />
        </>
      )}
    </div>
  )
}

function SummaryField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-start">
      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide whitespace-nowrap">{label}</p>
      <p className="text-navy-950">{value}</p>
    </div>
  )
}
