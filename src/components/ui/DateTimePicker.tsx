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
      className="min-w-2xs border text-navy-950 border-gray-200 rounded px-3 py-2 text-sm bg-white focus:outline-none"
    />
  )
}
