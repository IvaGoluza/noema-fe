import type { ReactNode } from 'react'
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import noemaLogo from '../assets/noema_logo.png'

const TOTAL_STEPS = 7

interface Props {
  title: string
  subtitle?: string
  stepNumber: number
  // undefined = full-width; null or JSX = show right gray panel (null = empty)
  rightPanel?: ReactNode
  onNext: () => void
  onPrevious?: () => void
  children: ReactNode
}

export default function RationalizationLayout({
  title,
  subtitle,
  stepNumber,
  rightPanel,
  onNext,
  onPrevious,
  children,
}: Props) {
  const hasRightPanel = rightPanel !== undefined

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif', color: '#041627' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 flex-shrink-0">
        <img src={noemaLogo} alt="Noema" className="h-10" />
        <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#1b1464' }}>
          <Globe size={15} />
          <span>EN</span>
        </button>
      </nav>

      {/* Body */}
      <div className="flex flex-1">
        {/* Left panel — white */}
        <div className="flex-1 bg-white flex flex-col px-10 py-10 min-w-0">
          {/* Step header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>
                Rationalization Journey
              </p>
              <h1 className="text-3xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
                {title}
              </h1>
            </div>
            <span className="text-sm mt-4 flex-shrink-0 ml-6" style={{ color: '#6b6b8a' }}>
              Step {stepNumber} of {TOTAL_STEPS}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 mb-6" style={{ backgroundColor: '#D8D8E8' }}>
            <div
              className="h-1"
              style={{
                width: `${(stepNumber / TOTAL_STEPS) * 100}%`,
                backgroundColor: '#3B3A8F',
              }}
            />
          </div>

          {subtitle && (
            <p className="text-sm mb-6" style={{ color: '#555' }}>{subtitle}</p>
          )}

          {/* Page-specific content */}
          <div className="flex-1">{children}</div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-10">
            <div>
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-medium"
                  style={{ borderColor: '#1b1464', color: '#1b1464' }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>
              )}
            </div>
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl border text-sm font-medium"
              style={{ borderColor: '#1b1464', color: '#1b1464' }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right panel — light gray; each page's rightPanel controls its own padding */}
        {hasRightPanel && (
          <div className="w-[500px] flex-shrink-0" style={{ backgroundColor: '#F4F4F6' }}>
            {rightPanel}
          </div>
        )}
      </div>
    </div>
  )
}
