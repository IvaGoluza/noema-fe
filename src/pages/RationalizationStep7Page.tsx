import { useNavigate } from 'react-router-dom'
import { PieChart, Pie } from 'recharts'
import {
  ChartContainer,
  type ChartConfig,
} from '../components/ui/chart'
import Button from '../components/ui/Button'
import { useRationalizationStore } from '../store/rationalizationStore'
import type { Emotion } from '../types/rationalization'

function emotionsToChart(emotions: Emotion[]): {
  config: ChartConfig
  data: { name: string; value: number; fill: string }[]
} {
  const config: ChartConfig = {}
  const data: { name: string; value: number; fill: string }[] = []
  emotions.forEach((leaf, i) => {
    const label = leaf.tertiaryName || leaf.secondaryName
    const key = `emotion_${i}`
    config[key] = { label, color: leaf.coreColor }
    data.push({ name: key, value: leaf.intensity, fill: leaf.coreColor })
  })
  return { config, data }
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
}: {
  title: string
  subtitle: string
  config: ChartConfig
  data: { name: string; value: number; fill: string }[]
}) {
  return (
    <div className="flex-1 flex flex-col items-center text-center">
      <h2 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
      <ChartContainer config={config} className="w-full h-52">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} />
        </PieChart>
      </ChartContainer>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 pt-2">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-1.5">
            <div className="h-2 w-2 shrink-0 rounded-xs" style={{ backgroundColor: entry.fill }} />
            <span className="text-xs text-muted-foreground">{config[entry.name]?.label}</span>
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
