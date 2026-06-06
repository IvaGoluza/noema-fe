import type { ReactNode } from 'react'

interface Props {
  label: string
  title: string
  description?: string
  children: ReactNode
}

export default function SectionBlock({ label, title, description, children }: Props) {
  return (
    <div className="pl-5 mb-8 border-l-3 border-l-purple-100">
      <p className="text-xs tracking-widest uppercase font-medium mb-1 text-gray-400">
        {label}
      </p>
      <h2 className="text-xl font-semibold mb-3 text-navy-950" style={{ fontFamily: 'Noto Serif, serif' }}>
        {title}
      </h2>
      {description && (
        <p className="text-sm mb-4 leading-relaxed text-gray-600">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
