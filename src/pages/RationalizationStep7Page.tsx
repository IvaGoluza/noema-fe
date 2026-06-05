import { useNavigate } from 'react-router-dom'
import { PieChart, Pie } from 'recharts'
import { Globe } from 'lucide-react'
import noemaLogo from '../assets/noema_logo.png'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '../components/ui/chart'

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
      <p className="text-xs mb-2" style={{ color: '#888' }}>
        {subtitle}
      </p>
      <ChartContainer config={config} className="w-full max-h-[260px] aspect-square">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} />
          <ChartLegend content={<ChartLegendContent nameKey="name" />} />
        </PieChart>
      </ChartContainer>
    </div>
  )
}

export default function RationalizationStep7Page() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif', color: '#041627' }}>
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 flex-shrink-0">
        <img src={noemaLogo} alt="Noema" className="h-10" />
        <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#1b1464' }}>
          <Globe size={15} />
          <span>EN</span>
        </button>
      </nav>

      <div className="flex-1 bg-white px-10 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>
                Rationalization Journey
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
                Rationalization Complete
              </h1>
            </div>
            <span className="text-sm mt-4 shrink-0 ml-6" style={{ color: '#6b6b8a' }}>
              Step 7 of 7
            </span>
          </div>

          <div className="w-full h-1 mb-8" style={{ backgroundColor: '#D8D8E8' }}>
            <div className="h-1 w-full" style={{ backgroundColor: '#3B3A8F' }} />
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
              <p key={i} className="text-sm leading-relaxed mb-2 last:mb-0" style={{ color: '#333' }}>
                {reframe}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              className="px-8 py-3 rounded-2xl text-sm font-medium text-white"
              style={{ backgroundColor: '#1b1464' }}
            >
              Export to PDF
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded-2xl border text-sm font-medium"
              style={{ borderColor: '#1b1464', color: '#1b1464' }}
            >
              Complete session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
