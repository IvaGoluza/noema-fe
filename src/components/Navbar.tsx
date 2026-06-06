import { Globe } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import NoemaLogo from './NoemaLogo'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isHome = pathname === '/'

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <NoemaLogo />
      <div className="flex items-center gap-8">
        {isHome && (
          <button
            onClick={() => navigate('/rationalization/1')}
            className="px-6 py-2 rounded-2xl text-sm font-medium text-[#041627] border-2 border-[#041627]"
          >
            Start Session
          </button>
        )}
        <button className="flex items-center gap-1.5 text-sm font-medium" style={{ color: '#041627' }}>
          <Globe size={15} />
          <span>EN</span>
        </button>
      </div>
    </nav>
  )
}
