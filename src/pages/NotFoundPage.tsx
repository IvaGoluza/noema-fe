import { useNavigate } from 'react-router-dom'
import NoemaLogo from '../components/NoemaLogo'
import Button from '../components/ui/Button'
import { useT } from '../i18n/useLanguage'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const t = useT()

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-10">
        <NoemaLogo />
      </div>
      <p className="text-8xl font-semibold font-serif text-navy-950 mb-4">404</p>
      <h1 className="text-2xl font-semibold font-serif text-navy-950 mb-3">{t('notFound.title')}</h1>
      <p className="text-gray-500 mb-10 max-w-sm leading-relaxed">{t('notFound.body')}</p>
      <Button onClick={() => navigate('/')}>{t('notFound.cta')}</Button>
    </div>
  )
}
