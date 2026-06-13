import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import TextArea from '../components/ui/TextArea'
import Button from '../components/ui/Button'
import Slider from '../components/ui/Slider'
import { useRationalizationStore } from '../store/rationalizationStore'
import { useT } from '../i18n/useLanguage'
import type { SessionThought } from '@/types/rationalization'

export default function RationalizationStep3Page() {
  const DEFAULT_SLIDER_VALUE = 50
  const navigate = useNavigate()
  const t = useT()
  const thoughts = useRationalizationStore((s) => s.thoughts)
  const addThought = useRationalizationStore((s) => s.addThought)
  const updateThought = useRationalizationStore((s) => s.updateThought)
  const deleteThought = useRationalizationStore((s) => s.deleteThought)

  const [content, setContent] = useState('')
  const [belief, setBelief] = useState(DEFAULT_SLIDER_VALUE)
  const [editingId, setEditingId] = useState<number | null>(null)

  function saveThought() {
    if (!content.trim()) return
    if (editingId !== null) {
      updateThought(editingId, { content, beliefBefore: belief })
      setEditingId(null)
    } else {
      addThought(content, belief)
    }
    setContent('')
    setBelief(DEFAULT_SLIDER_VALUE)
  }

  function cancel() {
    setContent('')
    setBelief(DEFAULT_SLIDER_VALUE)
    setEditingId(null)
  }

  function startEdit(t: SessionThought) {
    setEditingId(t.id)
    setContent(t.content)
    setBelief(t.beliefBefore)
  }

  function handleDelete(id: number) {
    deleteThought(id)
    if (editingId === id) cancel()
  }

  return (
    <RationalizationLayout
      title={t('step3.title')}
      subtitle={t('step3.subtitle')}
      stepNumber={3}
      rightPanel={
        <ThoughtsPanel thoughts={thoughts} onEdit={startEdit} onDelete={handleDelete} />
      }
      onPrevious={() => navigate('/rationalization/2')}
      onNext={() => navigate('/rationalization/4')}
    >
      <div className="pl-5 border-l-3 border-l-purple-100">
        <div className="mb-3 max-w-3xl">
          <p className="text-xs text-navy-950 tracking-widest uppercase font-medium mb-1">
            {t('step3.thought.label')}
          </p>
          <p className="text-sm text-purple-500 mb-3">
            {t('step3.thought.hint')}
          </p>
          <TextArea
            value={content}
            placeholder={t('step3.thought.placeholder')}
            onChange={setContent}
            rows={5}
          />
        </div>

        <div className="mb-7 max-w-md">
          <p className="text-xs text-navy-950 tracking-widest uppercase font-medium mb-1">
            {t('step3.belief.label')}
          </p>
          <p className="text-sm text-purple-500 mb-3">
            {t('step3.belief.hint')}
          </p>
          <Slider
            value={belief}
            onChange={setBelief}
            fillClassName="bg-linear-to-r from-cyan-400 to-blue-400"
            dotClassName="bg-blue-500"
            className="h-3 mb-1"
          />
          <p className="text-sm font-bold text-blue-600 text-right">{belief}%</p>
        </div>

        <div className="flex items-center gap-3">
          <Button onClick={saveThought}>
            {editingId !== null ? t('step3.update') : t('step3.save')}
          </Button>
          <Button variant="outline" onClick={cancel}>
            {t('step3.cancel')}
          </Button>
        </div>
      </div>
    </RationalizationLayout>
  )
}

function ThoughtsPanel({
  thoughts,
  onEdit,
  onDelete,
}: {
  thoughts: SessionThought[]
  onEdit: (t: SessionThought) => void
  onDelete: (id: number) => void
}) {
  const t = useT()
  return (
    <div className="px-6 pt-10 h-full flex flex-col">
      <p className="text-sm tracking-widest uppercase text-navy-950 mb-1">
        {t('step3.panel.title')}
      </p>
      <p className="text-sm text-purple-500 mb-6">
        {t('step3.panel.subtitle')}
      </p>

      <div className="flex flex-col gap-1.5 overflow-y-auto">
        {thoughts.length === 0 && (
          <p className="text-sm text-gray-400">{t('step3.panel.empty')}</p>
        )}
        {thoughts.map((thought) => (
          <div
            key={thought.id}
            className="bg-white rounded-lg px-4 py-3 flex items-start justify-between gap-3"
          >
            <div>
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-wide">
                {t('step3.belief.value', { value: thought.beliefBefore })}
              </p>
              <p className="text-sm text-navy-950 mb-1">{thought.content}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <button onClick={() => onEdit(thought)} className="text-gray-400 hover:text-gray-600">
                <Pencil size={15} />
              </button>
              <button onClick={() => onDelete(thought.id)} className="text-gray-400 hover:text-gray-600">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
