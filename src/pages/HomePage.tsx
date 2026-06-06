import type { ReactNode } from 'react'
import { Eye, Crosshair, RefreshCw, Send, Lock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import homepageIllustration from '../assets/homepage_illustration.png'
import NoemaLogo from '../components/NoemaLogo'
import FerBadge from '../components/FerBadge'

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-12 pb-0">
        <p className="text-xs tracking-[0.18em] uppercase font-medium mb-6" style={{ color: '#999' }}>
          Train your mind to think more clearly
        </p>
        <h1
          className="text-5xl font-semibold leading-tight mb-6 max-w-2/3"
          style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}
        >
          Noema: The Art of Rational Thought
        </h1>
        <p className="leading-relaxed mb-4 max-w-xl" style={{ color: '#555' }}>
          Explore your automatic thoughts, identify cognitive distortions, and learn reframing techniques.
        </p>
        <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: '#888' }}>
          Built to promote self-awareness and learning.<br />
          Intended for support and guidance, not a substitute for professional mental health care.
        </p>
        <button
          onClick={() => navigate('/rationalization/1')}
          className="px-10 py-4 rounded-2xl text-sm font-medium text-white mb-10"
          style={{ backgroundColor: '#041627' }}
        >
          Start Session
        </button>
        <HeroIllustration />
      </section>

      {/* Three-stage journey */}
      <section className="px-8 py-24" style={{ backgroundColor: '#FAF9FA' }}>
        <div className="max-w-4xl mx-auto">
        <h2
          className="text-2xl font-semibold mb-10"
          style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}
        >
          A three-stage journey toward cognitive clarity
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <FeatureCard
            number="01"
            icon={<Eye size={22} />}
            title="Observe & detect"
            description="Identify hidden cognitive distortions in your thoughts. Track your emotions."
          />
          <FeatureCard
            number="02"
            icon={<Crosshair size={22} />}
            title="Analyze"
            description="Classify and understand the exact category of detected distortions."
          />
          <FeatureCard
            number="03"
            icon={<RefreshCw size={22} />}
            title="Reframe"
            description="Construct a balanced, healthier and more rational interpretations of your thoughts."
          />
        </div>
        </div>
      </section>
      <div className='flex flex-col w-full py-10 bg-[#F5F3F4]'>
        <InfoSection
          icon={<Send size={32} strokeWidth={2} />}
          title="Intelligent Support"
          body="Noema utilizes trained linguistic models to assist in identifying potential cognitive distortions and suggesting rational reframes."
          note={<>Every AI-generated suggestion is fully editable, and<br />you can override or insert your own insights at any stage of the process.</>}
        />
        <InfoSection
          icon={<Lock size={32} strokeWidth={2} />}
          title="Privacy"
          body="Your thoughts are yours alone. Noema is designed with a strict privacy-first architecture: data is never persisted to our databases."
          note="At the conclusion of your session, you have the option to export your full logic thread to a PDF for your personal records."
        />
      </div>

      {/* Footer */}
      <footer className="px-24 pt-40 pb-16" style={{ backgroundColor: '#f7f7f9' }}>
        <div className="mb-12">
          <NoemaLogo />
          <p className="text-xs mt-2" style={{ color: '#888' }}>A cognitive rationalization platform.</p>
        </div>
        <div className="mb-12">
          <FerBadge />
        </div>
        <hr style={{ borderColor: '#e5e5e8' }} />
        <p className="text-xs text-center mt-6" style={{ color: '#aaa' }}>© 2026 Noema. All rights reserved.</p>
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
        <div style={{ color: '#3C6752' }}>{icon}</div>
        <span className="text-lg font-light" style={{ fontFamily: 'Noto Serif', color: '#ccc' }}>{number}</span>
      </div>
      <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'Noto Serif', color: '#041627' }}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{ color: '#44474C' }}>{description}</p>
    </div>
  )
}

function InfoSection({ icon, title, body, note }: { icon: ReactNode; title: string; body: string; note: ReactNode }) {
  return (
    <section className="flex flex-col items-center text-center px-6 py-10">
      <div className="mb-5" style={{ color: '#C5C7CB' }}>{icon}</div>
      <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'Noto Serif, serif', color: '#041627' }}>
        {title}
      </h2>
      <p className="leading-relaxed mb-4 max-w-xl" style={{ color: '#555' }}>{body}</p>
      <p className="leading-relaxed max-w-xl" style={{ color: '#888' }}>{note}</p>
    </section>
  )
}

