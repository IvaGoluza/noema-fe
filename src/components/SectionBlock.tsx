import type { ReactNode } from 'react'

interface Props {
  label: string
  title: string
  description?: string
  children: ReactNode
}

export default function SectionBlock({ label, title, description, children }: Props) {
  return (
    <div className="pl-5 mb-8" style={{ borderLeft: '3px solid #E2E2EE' }}>
      <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>
        {label}
      </p>
      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}>
        {title}
      </h2>
      {description && (
        <p className="text-sm mb-4 leading-relaxed" style={{ color: '#555' }}>
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
