interface Props {
  value: string
  onChange: (value: string) => void
}

export default function DateTimePicker({ value, onChange }: Props) {
  return (
    <input
      type="datetime-local"
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-indigo-300"
      style={{ color: '#041627', minWidth: '220px' }}
    />
  )
}
