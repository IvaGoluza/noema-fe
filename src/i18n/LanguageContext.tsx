import { useState, type ReactNode } from 'react'
import { LanguageContext } from './useLanguage'
import type { Lang } from './translations'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('noema-lang')
    return stored === 'hr' ? 'hr' : 'en'
  })

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('noema-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}
