interface Props {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  label?: string
}

export default function Select({ value, onChange, options, placeholder, label }: Props) {
  return (
    <div>
      {label && (
        <p className="text-xs tracking-widest uppercase font-medium mb-1.5" style={{ color: '#888' }}>
          {label}
        </p>
      )}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded bg-gray-50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-300 appearance-none cursor-pointer"
        style={{ color: value ? '#041627' : '#aaa' }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
