interface Props {
  value: number
  onChange: (v: number) => void
  fillClassName: string
  dotClassName: string
  className?: string
}

export default function Slider({ value, onChange, fillClassName, dotClassName, className = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-gray-200" />
      <div
        className={`absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full ${fillClassName}`}
        style={{ width: `${value}%` }}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full shadow-sm pointer-events-none ${dotClassName}`}
        style={{ left: `calc(${value}% - 6px)` }}
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
  )
}
