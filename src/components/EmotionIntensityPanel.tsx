import { PieChart, Pie, Cell } from 'recharts'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from '@/components/ui/chart'
import type { SelectedLeaf } from '../types/rationalization'
import { leafKey } from '../types/rationalization'

interface Props {
  selectedLeaves: SelectedLeaf[]
  onIntensityChange: (key: string, intensity: number) => void
}

export default function EmotionIntensityPanel({ selectedLeaves, onIntensityChange }: Props) {
  // Group by core emotion
  const groups = selectedLeaves.reduce<Record<string, SelectedLeaf[]>>((acc, leaf) => {
    if (!acc[leaf.coreName]) acc[leaf.coreName] = []
    acc[leaf.coreName].push(leaf)
    return acc
  }, {})

  // Pie chart data: sum intensity per core
  const pieData = Object.entries(groups).map(([coreName, leaves]) => ({
    name: coreName,
    value: leaves.reduce((sum, l) => sum + l.intensity, 0),
    fill: leaves[0].coreColor,
  }))

  const chartConfig = pieData.reduce<ChartConfig>((acc, item) => {
    acc[item.name] = { label: item.name, color: item.fill }
    return acc
  }, {})

  return (
    <div className="flex h-full">
      {/* Left: Selected emotions + sliders */}
      <div className="flex-1 px-5 py-8 overflow-y-auto">
        <p className="text-sm font-semibold mb-0.5 text-navy-950">
          Selected emotions
        </p>
        <p className="text-xs mb-4 text-gray-500">
          Choose the intensity for emotions you selected
        </p>

        {selectedLeaves.length === 0 && (
          <p className="text-xs text-gray-400">No emotions selected yet.</p>
        )}

        {Object.entries(groups).map(([coreName, leaves]) => (
          <div key={coreName} className="mb-4">
            <p className="text-xs font-semibold mb-2" style={{ color: '#041627' }}>{coreName}</p>
            {leaves.map(leaf => (
              <div key={leafKey(leaf)} className="mb-3">
                <div className="flex justify-between items-center text-xs text-gray-600 mb-1">
                  <span>{leaf.tertiaryName || leaf.secondaryName}</span>
                  <span className="font-medium">{leaf.intensity}%</span>
                </div>
                {/* Custom visual slider */}
                <div className="relative h-3">
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-gray-200" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full"
                    style={{ width: `${leaf.intensity}%`, backgroundColor: leaf.coreColor }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={leaf.intensity}
                    onChange={e => onIntensityChange(leafKey(leaf), Number(e.target.value))}
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
          Main emotions
        </p>
        <p className="text-xs text-gray-500 mb-4">
          See which emotions prevail
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
          <p className="text-xs text-gray-400">Select emotions to see the chart.</p>
        )}
      </div>
    </div>
  )
}
