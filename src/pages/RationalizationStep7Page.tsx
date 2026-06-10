import { useNavigate } from 'react-router-dom'
import { PieChart, Pie } from 'recharts'
import {
  ChartContainer,
  type ChartConfig,
} from '../components/ui/chart'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'
import type { Emotion } from '../types/rationalization'

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

export default function RationalizationStep7Page() {
  const navigate = useNavigate()
  const initialEmotions = useRationalizationStore((s) => s.initialEmotions)
  const finalEmotions = useRationalizationStore((s) => s.finalEmotions)
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const reset = useRationalizationStore((s) => s.reset)

  const initial = emotionsToChart(initialEmotions)
  const current = emotionsToChart(finalEmotions)
  const reframes = thoughts.filter((t) => t.reframe).map((t) => t.reframe)

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
                Rationalization Journey
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
                Rationalization Complete
              </h1>
            </div>
            <span className="text-sm text-purple-500 mt-4 shrink-0 ml-6">Step 7 of 7</span>
          </div>

          <div className="w-full h-1 mb-8 bg-purple-100">
            <div className="h-1 w-full bg-purple-800" />
          </div>

          <div className="rounded-2xl p-6 mb-4 flex items-start gap-6" style={{ backgroundColor: '#F4F4F6' }}>
            {initial.data.length > 0 ? (
              <EmotionChart
                title="Initial Emotions"
                subtitle="Emotions before rationalization process"
                config={initial.config}
                data={initial.data}
                groups={initial.groups}
              />
            ) : (
              <EmptyChart title="Initial Emotions" subtitle="Emotions before rationalization process" />
            )}
            <div className="w-px self-stretch shrink-0" style={{ backgroundColor: '#E0E0E8' }} />
            {current.data.length > 0 ? (
              <EmotionChart
                title="Current Emotions"
                subtitle="Emotions after rationalization process"
                config={current.config}
                data={current.data}
                groups={current.groups}
              />
            ) : (
              <EmptyChart title="Current Emotions" subtitle="Emotions after rationalization process" />
            )}
          </div>

          <div className="rounded-2xl p-6 mb-10" style={{ backgroundColor: '#F4F4F6' }}>
            <h2 className="font-semibold text-lg mb-3" style={{ fontFamily: 'Noto Serif, serif' }}>
              Summary
            </h2>
            {reframes.length === 0 ? (
              <p className="text-sm text-gray-400 italic">No reframes recorded yet.</p>
            ) : (
              reframes.map((reframe, i) => (
                <p key={i} className="text-sm text-navy-950 leading-relaxed mb-2 last:mb-0">
                  {reframe}
                </p>
              ))
            )}
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <Button variant="primary" className="px-8 py-3 rounded-2xl font-semibold">
              Export to PDF
            </Button>
            <Button
              variant="outline"
              onClick={completeSession}
              className="px-8 py-3 rounded-2xl border-navy-950 text-navy-950 font-medium"
            >
              Complete session
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
  return (
    <div className="flex-1 flex flex-col items-center text-center py-4">
      <h2 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
      <ChartContainer config={config} className="w-full h-52">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-2 mb-6">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: entry.fill }} />
            <span className="text-xs text-muted-foreground">{config[entry.name]?.label}</span>
          </div>
        ))}
      </div>
      <div className="w-[50%] text-left space-y-3 mt-4">
        <div className="flex items-center justify-between mb-1 border-b border-gray-200 pb-1">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Emotion</span>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Intensity</span>
        </div>
        {groups.map((group) => (
          <div key={group.coreName}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: group.coreColor }} />
              <span className="text-xs font-semibold text-gray-700">{group.coreName}</span>
            </div>
            <div className="pl-3.5 space-y-0.5">
              {group.emotions.map((e) => (
                <div key={`${e.secondaryName}-${e.tertiaryName}`} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{e.tertiaryName || e.secondaryName}</span>
                  <span className="text-xs text-gray-500">{e.intensity}%</span>
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
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
      <h2 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
      <p className="text-sm text-gray-400 italic">No emotions selected</p>
    </div>
  )
}
