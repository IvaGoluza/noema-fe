import React, { useState } from 'react'
import { EMOTIONS, lighten } from '../data/emotions'
import type { SelectedLeaf } from '../types/rationalization'
import { leafKey } from '../types/rationalization'

interface Props {
  selectedLeaves: SelectedLeaf[]
  onToggleLeaf: (leaf: Omit<SelectedLeaf, 'intensity'>) => void
}

export default function EmotionPicker({ selectedLeaves, onToggleLeaf }: Props) {
  const [activeCore, setActiveCore] = useState(EMOTIONS[0].name)
  const [lastPath, setLastPath] = useState<string | null>(null)

  const core = EMOTIONS.find(e => e.name === activeCore)!
  const selectedKeys = new Set(selectedLeaves.map(leafKey))

  function isSecondaryHighlighted(secondaryName: string) {
    return selectedLeaves.some(l => l.coreName === activeCore && l.secondaryName === secondaryName && l.tertiaryName === '')
  }

  function handleSecondaryClick(secondaryName: string) {
    onToggleLeaf({ coreName: core.name, coreColor: core.color, secondaryName, tertiaryName: '' })
    setLastPath(`${core.name} > ${secondaryName}`)
  }

  function handleTertiaryClick(secondaryName: string, tertiaryName: string) {
    onToggleLeaf({ coreName: core.name, coreColor: core.color, secondaryName, tertiaryName })
    setLastPath(`${core.name} > ${secondaryName} > ${tertiaryName}`)
  }

  return (
    <div>
      <p className="text-xs text-gray-500 mb-2">
        Select a main emotion to see its sub-emotions and detailed emotions
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {EMOTIONS.map(emotion => {
          const isActive = emotion.name === activeCore
          return (
            <button
              key={emotion.name}
              onClick={() => setActiveCore(emotion.name)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={
                isActive
                  ? { backgroundColor: emotion.color, color: '#fff', border: `2px solid ${emotion.color}` }
                  : { backgroundColor: '#fff', color: '#374151', border: '1px solid #E5E7EB' }
              }
            >
              {!isActive && (
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: emotion.color }}
                />
              )}
              {emotion.name}
            </button>
          )
        })}
      </div>

      {/* Emotion grid */}
      <div className="grid grid-cols-3 gap-0.5">
        {core.children.map(secondary => {
          const secHighlighted = isSecondaryHighlighted(secondary.name)
          return (
            <React.Fragment key={secondary.name}>
              {/* Col 1: secondary (bold) */}
              <button
                onClick={() => handleSecondaryClick(secondary.name)}
                className="py-2.5 px-3 text-xs font-semibold text-center transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: secHighlighted
                    ? lighten(core.color, 0.25)
                    : lighten(core.color, 0.55),
                  outline: secHighlighted ? `2px solid ${core.color}` : 'none',
                  outlineOffset: -2,
                  color: '#1f2937',
                }}
              >
                {secondary.name}
              </button>

              {/* Cols 2–3: tertiary (leaf) */}
              {secondary.children.map(tertiary => {
                const key = leafKey({ coreName: core.name, secondaryName: secondary.name, tertiaryName: tertiary.name })
                const isSelected = selectedKeys.has(key)
                return (
                  <button
                    key={tertiary.name}
                    onClick={() => handleTertiaryClick(secondary.name, tertiary.name)}
                    className="py-2.5 px-3 text-xs text-center transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: isSelected
                        ? lighten(core.color, 0.25)
                        : lighten(core.color, 0.72),
                      outline: isSelected ? `2px solid ${core.color}` : 'none',
                      outlineOffset: -2,
                      color: '#1f2937',
                    }}
                  >
                    {tertiary.name}
                  </button>
                )
              })}
            </React.Fragment>
          )
        })}
      </div>

      {/* Selected path */}
      {lastPath && (
        <p className="text-xs mt-3 text-gray-500">
          Selected path:{' '}
          <span className="text-navy-950">{lastPath}</span>
        </p>
      )}
    </div>
  )
}
