import type { ReactNode } from 'react'

interface Props {
  label: string
  title: string
  description?: string
  children: ReactNode
}

export default function SectionBlock({ label, title, description, children }: Props) {
  return (
    <div className="max-w-3xl pl-5 my-8 border-l-3 border-l-purple-100">
      <p className="text-xs tracking-widest uppercase font-medium text-gray-400">
        {label}
      </p>
      <h2 className="text-md font-semibold mb-2 text-navy-950" style={{ fontFamily: 'Noto Serif, serif' }}>
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
