interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
}

export default function TextArea({ value, onChange, placeholder, rows = 5 }: Props) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-gray-200 rounded bg-gray-50 px-4 py-3 text-sm resize-none focus:outline-none"
    />
  )
}
