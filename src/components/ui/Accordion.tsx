import { useState, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface Props {
  trigger: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  triggerClassName?: string
  bodyClassName?: string
  className?: string
}

export default function Accordion({
  trigger,
  children,
  defaultOpen = false,
  triggerClassName = '',
  bodyClassName = '',
  className = '',
}: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center justify-between text-left ${triggerClassName}`}
      >
        {trigger}
        <ChevronDown
          size={16}
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: '#6b6b8a' }}
        />
      </button>
      {open && <div className={bodyClassName}>{children}</div>}
    </div>
  )
}
