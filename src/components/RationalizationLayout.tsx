import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <div className="h-full flex flex-col overflow-hidden text-navy-950" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel — white */}
        <div className="flex-1 bg-white flex flex-col px-10 py-10 min-w-0 overflow-hidden">
          {/* Step header */}
          <div className="flex items-start justify-between mb-1">
            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Noto Serif, serif' }}>
              {title}
            </h1>
            <span className="text-sm mt-4 shrink-0 ml-6 text-purple-500">
              Step {stepNumber} of {TOTAL_STEPS}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1 mb-3 rounded-full bg-purple-100">
            <div
              className="h-1 rounded-full bg-purple-800"
              style={{ width: `${(stepNumber / TOTAL_STEPS) * 100}%` }}
            />
          </div>

          {subtitle && (
            <p className="text-sm mb-6 text-gray-600">{subtitle}</p>
          )}

          {/* Page-specific content */}
          <div className="flex-1 overflow-y-auto">{children}</div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <div>
              {onPrevious && (
                <button
                  onClick={onPrevious}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-medium text-navy-950 border-navy-950"
                >
                  <ChevronLeft size={16} /> Previous
                </button>
              )}
            </div>
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl border text-sm font-medium text-navy-950 border-navy-950"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Right panel — light gray; each page's rightPanel controls its own padding */}
        {hasRightPanel && (
          <div className="w-125 shrink-0 bg-gray-50">
            {rightPanel}
          </div>
        )}
      </div>
    </div>
  )
}
