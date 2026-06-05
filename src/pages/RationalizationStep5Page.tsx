import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RationalizationLayout from '../components/RationalizationLayout'

interface BeliefEntry {
  id: number
  originalThought: string
  reframedPerspective: string
  beliefStrength: number
}

const MOCK_ENTRIES: BeliefEntry[] = [
  {
    id: 1,
    originalThought: "I am completely unprepared for this presentation and everyone will realize I'm a fraud.",
    reframedPerspective:
      "I have prepared the core data. While I don't know everything, I have enough expertise to provide value and answer questions honestly.",
    beliefStrength: 75,
  },
  {
    id: 2,
    originalThought: "I am completely unprepared for this presentation and everyone will realize I'm a fraud.",
    reframedPerspective:
      "I have prepared the core data. While I don't know everything, I have enough expertise to provide value and answer questions honestly.",
    beliefStrength: 75,
  },
]

function BeliefSlider({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2" style={{ color: '#041627' }}>
        {value}%
      </p>
      <div className="relative h-3 mb-1.5">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-gray-200" />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full"
          style={{
            width: `${value}%`,
            background: 'linear-gradient(to right, #f97316, #ef4444)',
          }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
      </div>
      <p className="text-xs" style={{ color: '#888' }}>
        How much do you believe this version?
      </p>
    </div>
  )
}

export default function RationalizationStep5Page() {
  const navigate = useNavigate()
  const [entries, setEntries] = useState<BeliefEntry[]>(MOCK_ENTRIES)

  function updateBelief(id: number, value: number) {
    setEntries(prev => prev.map(e => (e.id === id ? { ...e, beliefStrength: value } : e)))
  }

  return (
    <RationalizationLayout
      title="Integration & Belief"
      subtitle="Think about how much you believe in your reframed thoughts."
      stepNumber={5}
      rightPanel={null}
      onPrevious={() => navigate('/rationalization/4')}
      onNext={() => navigate('/rationalization/6')}
    >
      <div className="w-full">
        {/* Table header */}
        <div
          className="grid grid-cols-[1fr_1.6fr_1.2fr] gap-0 border border-gray-200 rounded-t-xl overflow-hidden"
          style={{ backgroundColor: '#F4F4F6' }}
        >
          {(['Original Thought', 'Reframed Perspective', 'Belief Strength'] as const).map(col => (
            <div key={col} className="px-5 py-3 border-r border-gray-200 last:border-r-0">
              <p className="text-xs font-semibold" style={{ color: '#555' }}>
                {col}
              </p>
            </div>
          ))}
        </div>

        {/* Rows */}
        <div className="border-l border-r border-b border-gray-200 rounded-b-xl overflow-hidden divide-y divide-gray-200">
          {entries.map(entry => (
            <div key={entry.id} className="grid grid-cols-[1fr_1.6fr_1.2fr]">
              <div className="px-5 py-4 border-r border-gray-200">
                <p className="text-sm italic leading-relaxed" style={{ color: '#041627' }}>
                  {entry.originalThought}
                </p>
              </div>
              <div className="px-5 py-4 border-r border-gray-200">
                <p className="text-sm leading-relaxed" style={{ color: '#041627' }}>
                  {entry.reframedPerspective}
                </p>
              </div>
              <div className="px-5 py-4">
                <BeliefSlider
                  value={entry.beliefStrength}
                  onChange={v => updateBelief(entry.id, v)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </RationalizationLayout>
  )
}
