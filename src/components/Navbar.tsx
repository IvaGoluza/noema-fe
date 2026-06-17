import { Globe } from 'lucide-react'
import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage, useT } from '../i18n/useLanguage'
import { useRationalizationStore } from '../store/rationalizationStore'
import type { SessionSnapshot } from '../store/rationalizationStore'
import NoemaLogo from './NoemaLogo'

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { lang, setLang } = useLanguage()
  const t = useT()
  const loadSession = useRationalizationStore((s) => s.loadSession)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const isHome = pathname === '/'

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string) as SessionSnapshot
        if (data.version !== '1') return
        loadSession(data)
        navigate('/rationalization/1')
      } catch {
        // invalid file, ignore
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
      <NoemaLogo />
      <div className="flex items-center gap-8">
        {isHome && (
          <>
            <button
              onClick={() => navigate('/rationalization/1')}
              className="text-sm font-medium text-navy-950"
            >
              {t('nav.startSession')}
            </button>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="text-sm font-medium text-navy-950"
            >
              {t('home.hero.loadSession')}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".noema"
              className="hidden"
              onChange={handleFileChange}
            />
          </>
        )}
        <button
          onClick={() => setLang(lang === 'en' ? 'hr' : 'en')}
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: '#041627' }}
        >
          <Globe size={15} />
          <span>{lang.toUpperCase()}</span>
        </button>
      </div>
    </nav>
  )
}
