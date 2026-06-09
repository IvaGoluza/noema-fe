import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import TextArea from '../components/ui/TextArea'
import Button from '../components/ui/Button'
import Slider from '../components/ui/Slider'

interface Thought {
  id: number
  content: string
  belief: number
}

export default function RationalizationStep3Page() {
  const navigate = useNavigate()
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [content, setContent] = useState('')
  const [belief, setBelief] = useState(60)
  const [editingId, setEditingId] = useState<number | null>(null)

  function saveThought() {
    if (!content.trim()) return
    if (editingId !== null) {
      setThoughts(prev => prev.map(t => t.id === editingId ? { ...t, content, belief } : t))
      setEditingId(null)
    } else {
      setThoughts(prev => [...prev, { id: Date.now(), content, belief }])
    }
    setContent('')
    setBelief(60)
  }

  function cancel() {
    setContent('')
    setBelief(60)
    setEditingId(null)
  }

  function startEdit(t: Thought) {
    setEditingId(t.id)
    setContent(t.content)
    setBelief(t.belief)
  }

  function deleteThought(id: number) {
    setThoughts(prev => prev.filter(t => t.id !== id))
    if (editingId === id) cancel()
  }

  return (
    <RationalizationLayout
      title="Automatic thoughts"
      subtitle="Identify the immediate, unfiltered thoughts that occurred during the event"
      stepNumber={3}
      rightPanel={
        <ThoughtsPanel thoughts={thoughts} onEdit={startEdit} onDelete={deleteThought} />
      }
      onPrevious={() => navigate('/rationalization/2')}
      onNext={() => navigate('/rationalization/4')}
    >
      <div className="pl-5 border-l-3 border-l-purple-100">
        {/* Thought content */}
        <div className="mb-3 max-w-3xl">
          <p className="text-xs text-navy-950 tracking-widest uppercase font-medium mb-1">
            Thought content
          </p>
          <p className="text-sm text-purple-500 mb-3">
           These often appear as lightning-fast judgments and thoughts
          </p>
          <TextArea
            value={content}
            placeholder='What went through your mind?'
            onChange={setContent}
            rows={5}
          />
        </div>

        {/* Degree of belief */}
        <div className="mb-7 max-w-md">
          <p className="text-xs text-navy-950 tracking-widest uppercase font-medium mb-1">
            Degree of belief
          </p>
          <p className="text-sm text-purple-500 mb-3">
            Choose how much you believe in the truthfulness of this thought
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button onClick={saveThought}>
            {editingId !== null ? 'Update thought' : 'Save the thought'}
          </Button>
          <Button variant="outline" onClick={cancel}>
            Cancel
          </Button>
        </div>
      </div>
    </RationalizationLayout>
  )
}

function ThoughtsPanel({ thoughts, onEdit, onDelete }: {
  thoughts: Thought[]
  onEdit: (t: Thought) => void
  onDelete: (id: number) => void
}) {
  return (
    <div className="px-6 pt-10 h-full flex flex-col">
      <p className="text-sm tracking-widest uppercase text-navy-950 mb-1">
        Thoughts
      </p>
      <p className="text-sm text-purple-500 mb-6">
        Review and manage your unfiltered thoughts
      </p>

      <div className="flex flex-col gap-1.5 overflow-y-auto">
        {thoughts.length === 0 && (
          <p className="text-sm text-gray-400">No thoughts saved yet.</p>
        )}
        {thoughts.map(t => (
          <div
            key={t.id}
            className="bg-white rounded-lg px-4 py-3 flex items-start justify-between gap-3"
          >
            <div>
              <p className="text-xs text-sky-600 font-semibold uppercase tracking-wide">
                Belief: {t.belief}%
              </p>
              <p className="text-sm text-navy-950 mb-1">{t.content}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0 mt-0.5">
              <button onClick={() => onEdit(t)} className="text-gray-400 hover:text-gray-600">
                <Pencil size={15} />
              </button>
              <button onClick={() => onDelete(t.id)} className="text-gray-400 hover:text-gray-600">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
