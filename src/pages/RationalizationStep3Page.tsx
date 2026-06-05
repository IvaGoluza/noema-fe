import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pencil, Trash2 } from 'lucide-react'
import RationalizationLayout from '../components/RationalizationLayout'
import TextArea from '../components/ui/TextArea'

interface Thought {
  id: number
  content: string
  belief: number
}

function ThoughtsPanel({ thoughts, onEdit, onDelete }: {
  thoughts: Thought[]
  onEdit: (t: Thought) => void
  onDelete: (id: number) => void
}) {
  return (
    <div className="px-6 py-8 h-full flex flex-col">
      <p className="text-xs tracking-widest uppercase font-semibold mb-1" style={{ color: '#888' }}>
        Rationalization Journey
      </p>
      <p className="text-xs mb-6" style={{ color: '#888' }}>
        Review and manage your unfiltered thoughts
      </p>

      <div className="flex flex-col gap-3 overflow-y-auto">
        {thoughts.length === 0 && (
          <p className="text-xs" style={{ color: '#aaa' }}>No thoughts saved yet.</p>
        )}
        {thoughts.map(t => (
          <div
            key={t.id}
            className="bg-white rounded-xl px-4 py-3 flex items-start justify-between gap-3"
          >
            <div>
              <p className="text-sm mb-1" style={{ color: '#041627' }}>{t.content}</p>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#1b1464' }}>
                Belief: {t.belief}%
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
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
      <div className="max-w-md">
        {/* Thought content */}
        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase font-medium mb-2" style={{ color: '#888' }}>
            Thought content
          </p>
          <TextArea
            value={content}
            onChange={setContent}
            placeholder="These often appear as lightning-fast judgments or mental images"
            rows={5}
          />
        </div>

        {/* Degree of belief */}
        <div className="mb-7">
          <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#888' }}>
            Degree of belief
          </p>
          <p className="text-xs mb-3" style={{ color: '#aaa' }}>
            Choose how much you believe in the truthfulness of this thought
          </p>
          <div className="relative h-3 mb-2">
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-1.5 rounded-full bg-gray-200" />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full"
              style={{
                width: `${belief}%`,
                background: 'linear-gradient(to right, #f97316, #ef4444)',
              }}
            />
            <input
              type="range"
              min={0}
              max={100}
              value={belief}
              onChange={e => setBelief(Number(e.target.value))}
              className="absolute inset-0 w-full opacity-0 cursor-pointer"
            />
          </div>
          <p className="text-sm text-right" style={{ color: '#555' }}>{belief}%</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={saveThought}
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white"
            style={{ backgroundColor: '#1b1464' }}
          >
            {editingId !== null ? 'Update thought' : 'Save the thought'}
          </button>
          <button
            onClick={cancel}
            className="px-5 py-2.5 rounded-xl text-sm font-medium border"
            style={{ borderColor: '#ccc', color: '#555' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </RationalizationLayout>
  )
}
