import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  children: ReactNode
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'px-5 py-2.5 rounded-xl text-sm font-normal'
  const variants = {
    primary: 'bg-navy-950 text-white',
    outline: 'border border-gray-400 text-gray-600',
  }
  return (
    <button className={twMerge(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}
