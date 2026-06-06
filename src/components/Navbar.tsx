import { Globe } from 'lucide-react'
import NoemaLogo from './NoemaLogo'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <NoemaLogo />
      <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#1b1464' }}>
        <Globe size={15} />
        <span>EN</span>
      </button>
    </nav>
  )
}
