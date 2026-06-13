import { PieChart, Pie, Cell } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import type { Emotion } from '../types/rationalization'
import { emotionKey } from '../types/rationalization'
import { useT } from '../i18n/useLanguage'

interface Props {
  selectedLeaves: Emotion[]
  onIntensityChange: (key: string, intensity: number) => void
}

export default function EmotionIntensityPanel({ selectedLeaves, onIntensityChange }: Props) {
  const t = useT()

  const groups = selectedLeaves.reduce<Record<string, Emotion[]>>((acc, leaf) => {
    if (!acc[leaf.coreName]) acc[leaf.coreName] = []
    acc[leaf.coreName].push(leaf)
    return acc
  }, {})

  const pieData = Object.entries(groups).map(([coreName, leaves]) => ({
    name: coreName,
    value: leaves.reduce((sum, l) => sum + l.intensity, 0),
    fill: leaves[0].coreColor,
  }))

  const chartConfig = pieData.reduce<ChartConfig>((acc, item) => {
    acc[item.name] = { label: t(`emotions.${item.name}`), color: item.fill }
    return acc
  }, {})

  return (
    <div className="flex h-full">
      {/* Left: Selected emotions + sliders */}
      <div className="flex-1 px-5 py-8 overflow-y-auto">
        <p className="text-sm font-semibold mb-0.5 text-navy-950">
          {t('emotionPanel.selected')}
        </p>
        <p className="text-xs mb-4 text-gray-500">
          {t('emotionPanel.intensity')}
        </p>

        {selectedLeaves.length === 0 && (
          <p className="text-xs text-gray-400">{t('emotionPanel.none')}</p>
        )}

        {Object.entries(groups).map(([coreName, leaves]) => (
          <div key={coreName} className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: '#041627' }}>
              {t(`emotions.${coreName}`)}
            </p>
            {leaves.map(leaf => (
              <div key={emotionKey(leaf)} className="mb-3">
                <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                  <span>{t(`emotions.${leaf.tertiaryName || leaf.secondaryName}`)}</span>
                  <span className="font-medium">{leaf.intensity}%</span>
                </div>
                <div className="relative h-4">
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-gray-200" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full"
                    style={{ width: `${leaf.intensity}%`, backgroundColor: leaf.coreColor }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-sm"
                    style={{
                      left: `calc(${leaf.intensity}% - 8px)`,
                      backgroundColor: leaf.coreColor,
                    }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={leaf.intensity}
                    onChange={e => onIntensityChange(emotionKey(leaf), Number(e.target.value))}
                    className="absolute inset-0 w-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Right: Main emotions pie chart */}
      <div className="w-56 shrink-0 px-5 py-8">
        <p className="text-sm text-navy-950 font-semibold mb-0.5">
          {t('emotionPanel.main')}
        </p>
        <p className="text-xs text-gray-500 mb-4">
          {t('emotionPanel.prevail')}
        </p>

        {pieData.length > 0 ? (
          <ChartContainer config={chartConfig} className="w-full h-65">
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={65}>
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
              <ChartLegend content={<ChartLegendContent nameKey="name" className="flex-wrap justify-center" />} />
            </PieChart>
          </ChartContainer>
        ) : (
          <p className="text-xs text-gray-400">{t('emotionPanel.chart')}</p>
        )}
      </div>
    </div>
  )
}
