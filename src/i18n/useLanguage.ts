import { createContext, useContext } from 'react'
import { translations, type Lang, type TranslationKey } from './translations'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useT() {
  const { lang } = useLanguage()
  return (key: TranslationKey | string, vars?: Record<string, string | number>): string => {
    const map = translations[lang] as Record<string, string>
    const fallback = translations.en as Record<string, string>
    const str = map[key] ?? fallback[key] ?? key
    if (!vars) return str
    return str.replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k] ?? k))
  }
}
