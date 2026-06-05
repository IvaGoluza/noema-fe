import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Globe, ChevronRight } from 'lucide-react'
import noemaLogo from '../assets/noema_logo.png'

const TOTAL_STEPS = 7

export default function RationalizationStep1Page() {
  const navigate = useNavigate()
  const [when, setWhen] = useState('')
  const [situation, setSituation] = useState('')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F4F4F6', fontFamily: 'Inter, sans-serif', color: '#1b1464' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <img src={noemaLogo} alt="Noema" className="h-10" />
        <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#1b1464' }}>
          <Globe size={15} />
          <span>EN</span>
        </button>
      </nav>

      {/* Main content */}
      <main className="flex-1 px-8 py-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>
              Rationalization Journey
            </p>
            <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}>
              Establishing Context
            </h1>
          </div>
          <span className="text-sm mt-3" style={{ color: '#6b6b8a' }}>Step 1 of {TOTAL_STEPS}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full rounded-full h-1.5 mb-10" style={{ backgroundColor: '#D8D8E8' }}>
          <div
            className="h-1.5 rounded-full"
            style={{ width: `${(1 / TOTAL_STEPS) * 100}%`, backgroundColor: '#3B3A8F' }}
          />
        </div>

        {/* WHEN section */}
        <div className="pl-6 mb-8" style={{ borderLeft: '3px solid #D8D8E8' }}>
          <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>When</p>
          <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}>
            When did this happen?
          </h2>
          <input
            type="datetime-local"
            value={when}
            onChange={e => setWhen(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-sm bg-white"
            style={{ color: '#041627', minWidth: '220px' }}
          />
        </div>

        {/* WHAT, WHERE AND WHO section */}
        <div className="pl-6" style={{ borderLeft: '3px solid #D8D8E8' }}>
          <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>What, Where and Who</p>
          <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}>
            Describe the situation.
          </h2>
          <p className="text-sm mb-4 leading-relaxed" style={{ color: '#555' }}>
            Try to be objective. Identify the primary actors, environment, and the specific event that triggered this thought.
          </p>
          <textarea
            value={situation}
            onChange={e => setSituation(e.target.value)}
            rows={5}
            className="w-full border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-indigo-300"
            style={{ color: '#041627' }}
          />
        </div>
      </main>

      {/* Footer nav */}
      <div className="flex justify-end px-8 pb-10">
        <button
          onClick={() => navigate('/rationalization/2')}
          className="flex items-center gap-2 px-6 py-3 rounded-2xl border text-sm font-medium"
          style={{ borderColor: '#1b1464', color: '#1b1464', backgroundColor: 'white' }}
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
