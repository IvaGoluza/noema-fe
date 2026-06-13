import type { ReactNode } from 'react'
import { Eye, Crosshair, RefreshCw, Send, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import homepageIllustration from '../assets/homepage_illustration.png'
import NoemaLogo from '../components/NoemaLogo'
import FerBadge from '../components/FerBadge'
import Button from '../components/ui/Button'
import { useT } from '../i18n/useLanguage'

export default function HomePage() {
  const navigate = useNavigate()
  const t = useT()

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center">
      {/* Hero */}
      <section className="w-full flex flex-col items-center text-center px-6 pt-12 pb-0">
        <p className="text-xs tracking-[0.18em] uppercase font-medium mb-6 text-gray-400">
          {t('home.disclaimer')}
        </p>
        <h1 className="text-5xl font-semibold leading-tight mb-6 max-w-2/3 font-serif text-navy-950">
          {t('home.hero.title').split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </h1>
        <p className="max-w-3xl leading-relaxed mb-4 text-gray-600">
          {t('home.hero.body')}
        </p>
        <Button
          onClick={() => navigate('/rationalization/1')}
          className="px-10 py-4 rounded-2xl text-md mb-10"
        >
          {t('home.hero.cta')}
        </Button>
        <HeroIllustration />
      </section>

      {/* Three-stage journey */}
      <section className="w-full px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-10 font-serif text-navy-950">
            {t('home.process.title')}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <FeatureCard
              number="01"
              icon={<Eye size={22} />}
              title={t('home.process.01.title')}
              description={t('home.process.01.desc')}
            />
            <FeatureCard
              number="02"
              icon={<Crosshair size={22} />}
              title={t('home.process.02.title')}
              description={t('home.process.02.desc')}
            />
            <FeatureCard
              number="03"
              icon={<RefreshCw size={22} />}
              title={t('home.process.03.title')}
              description={t('home.process.03.desc')}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full py-10 bg-gray-100">
        <InfoSection
          icon={<Send size={32} strokeWidth={2} />}
          title={t('home.ai.title')}
          body={t('home.ai.body')}
          note={t('home.ai.note')}
        />
        <InfoSection
          icon={<Lock size={32} strokeWidth={2} />}
          title={t('home.privacy.title')}
          body={t('home.privacy.body')}
          note={t('home.privacy.note')}
        />
      </div>

      {/* Footer */}
      <footer className="w-full px-24 pt-40 pb-16 bg-gray-50">
        <div className="mb-12">
          <NoemaLogo />
          <p className="text-xs mt-2 text-gray-500">{t('home.footer.tagline')}</p>
        </div>
        <div className="mb-12">
          <FerBadge />
        </div>
        <hr className="border-gray-200" />
        <p className="text-xs text-center mt-6 text-gray-500">{t('home.footer.copyright')}</p>
      </footer>
    </div>
  )
}

function HeroIllustration() {
  return (
    <img src={homepageIllustration} alt="Noema illustration" className="w-[40vw] mb-16" />
  )
}

function FeatureCard({ number, icon, title, description }: { number: string; icon: ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white px-6 py-8 text-left">
      <div className="flex items-start justify-between mb-4">
        <div className="text-green-700">{icon}</div>
        <span className="text-lg font-light font-serif text-gray-400">{number}</span>
      </div>
      <h3 className="text-base font-semibold mb-2 font-serif text-navy-950">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-600">{description}</p>
    </div>
  )
}

function InfoSection({ icon, title, body, note }: { icon: ReactNode; title: string; body: string; note: string }) {
  return (
    <section className="flex flex-col items-center text-center px-6 py-10">
      <div className="mb-5 text-gray-300">{icon}</div>
      <h2 className="text-3xl font-semibold mb-4 font-serif text-navy-950">
        {title}
      </h2>
      <p className="leading-relaxed mb-4 max-w-xl text-gray-600">{body}</p>
      <p className="leading-relaxed max-w-xl text-gray-500">{note}</p>
    </section>
  )
}
