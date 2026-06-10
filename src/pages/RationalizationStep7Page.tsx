import { useNavigate } from 'react-router-dom'
import { PieChart, Pie } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '../components/ui/chart'
import Button from '../components/ui/Button'

const initialEmotionConfig: ChartConfig = {
  happiness: { label: 'Happiness', color: '#E8B62E' },
  surprise: { label: 'Surprise', color: '#8C72B0' },
}

const currentEmotionConfig: ChartConfig = {
  happiness: { label: 'Happiness', color: '#E8B62E' },
  surprise: { label: 'Surprise', color: '#8C72B0' },
}

const INITIAL_EMOTIONS = [
  { name: 'happiness', value: 60, fill: 'var(--color-happiness)' },
  { name: 'surprise', value: 40, fill: 'var(--color-surprise)' },
]

const CURRENT_EMOTIONS = [
  { name: 'happiness', value: 75, fill: 'var(--color-happiness)' },
  { name: 'surprise', value: 25, fill: 'var(--color-surprise)' },
]

const MOCK_REFRAMES = [
  "While this promotion is a significant goal, my career's value is defined by the skills I've built and the projects I've completed, regardless of a single title change. A setback is not a total failure.",
  "While this promotion is a significant goal, my career's value is defined by the skills I've built and the projects I've completed, regardless of a single title change. A setback is not a total failure.",
]

export default function RationalizationStep7Page() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col text-navy-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="flex-1 bg-white px-10 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs text-gray-500 tracking-widest uppercase font-medium mb-1">
                Rationalization Journey
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
                Rationalization Complete
              </h1>
            </div>
            <span className="text-sm text-purple-500 mt-4 shrink-0 ml-6">
              Step 7 of 7
            </span>
          </div>

          <div className="w-full h-1 mb-8 bg-purple-100">
            <div className="h-1 w-full bg-purple-800"/>
          </div>

          <div className="rounded-2xl p-6 mb-4 flex gap-6" style={{ backgroundColor: '#F4F4F6' }}>
            <EmotionChart
              title="Initial Emotions"
              subtitle="Emotions before rationalization process"
              config={initialEmotionConfig}
              data={INITIAL_EMOTIONS}
            />
            <div className="w-px shrink-0" style={{ backgroundColor: '#E0E0E8' }} />
            <EmotionChart
              title="Current Emotions"
              subtitle="Emotions after rationalization process"
              config={currentEmotionConfig}
              data={CURRENT_EMOTIONS}
            />
          </div>

          <div className="rounded-2xl p-6 mb-10" style={{ backgroundColor: '#F4F4F6' }}>
            <h2 className="font-semibold text-lg mb-3" style={{ fontFamily: 'Noto Serif, serif' }}>
              Summary
            </h2>
            {MOCK_REFRAMES.map((reframe, i) => (
              <p key={i} className="text-sm text-navy-950 leading-relaxed mb-2 last:mb-0">
                {reframe}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <Button variant="primary" className="px-8 py-3 rounded-2xl font-semibold">
              Export to PDF
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/')}
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
      <p className="text-xs text-gray-500 mb-2">
        {subtitle}
      </p>
      <ChartContainer config={config} className="w-full max-h-65 aspect-square">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} />
          <ChartLegend content={<ChartLegendContent nameKey="name" />} />
        </PieChart>
      </ChartContainer>
    </div>
  )
}
