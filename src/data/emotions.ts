export interface CoreEmotion {
  name: string
  color: string
  children: SecondaryEmotion[]
}

export interface SecondaryEmotion {
  name: string
  children: TertiaryEmotion[]
}

export interface TertiaryEmotion {
  name: string
}

export const EMOTIONS: CoreEmotion[] = [
  {
    name: 'Happy',
    color: '#E8B62E',
    children: [
      { name: 'Playful', children: [{ name: 'Excited' }, { name: 'Cheerful' }] },
      { name: 'Content', children: [{ name: 'Joyful' }, { name: 'Free' }] },
      { name: 'Interested', children: [{ name: 'Curious' }, { name: 'Intrigued' }] },
      { name: 'Proud', children: [{ name: 'Confident' }, { name: 'Successful' }] },
      { name: 'Accepted', children: [{ name: 'Respected' }, { name: 'Valued' }] },
      { name: 'Powerful', children: [{ name: 'Courageous' }, { name: 'Daring' }] },
      { name: 'Peaceful', children: [{ name: 'Thankful' }, { name: 'Serene' }] },
      { name: 'Trusting', children: [{ name: 'Intimate' }, { name: 'Loved' }] },
      { name: 'Optimistic', children: [{ name: 'Hopeful' }, { name: 'Inspired' }] },
    ],
  },
  {
    name: 'Angry',
    color: '#A8403D',
    children: [
      { name: 'Critical', children: [{ name: 'Brusque' }, { name: 'Skeptical' }] },
      { name: 'Distant', children: [{ name: 'Withdrawn' }, { name: 'Quiet' }] },
      { name: 'Frustrated', children: [{ name: 'Irritated' }, { name: 'Annoyed' }] },
      { name: 'Aggressive', children: [{ name: 'Hostile' }, { name: 'Enraged' }] },
      { name: 'Mad', children: [{ name: 'Irate' }, { name: 'Furious' }] },
      { name: 'Bitter', children: [{ name: 'Revolted' }, { name: 'Indignant' }] },
      { name: 'Humiliated', children: [{ name: 'Ridiculed' }, { name: 'Disrespected' }] },
      { name: 'Let down', children: [{ name: 'Resentful' }, { name: 'Betrayed' }] },
    ],
  },
  {
    name: 'Fear',
    color: '#8AA83F',
    children: [
      { name: 'Threatened', children: [{ name: 'Exposed' }, { name: 'Nervous' }] },
      { name: 'Rejected', children: [{ name: 'Persecuted' }, { name: 'Excluded' }] },
      { name: 'Weak', children: [{ name: 'Insignificant' }, { name: 'Worthless' }] },
      { name: 'Insecure', children: [{ name: 'Inferior' }, { name: 'Inadequate' }] },
      { name: 'Anxious', children: [{ name: 'Worried' }, { name: 'Apprehensive' }] },
      { name: 'Scared', children: [{ name: 'Frightened' }, { name: 'Helpless' }] },
    ],
  },
  {
    name: 'Sad',
    color: '#4E89A6',
    children: [
      { name: 'Lonely', children: [{ name: 'Abandoned' }, { name: 'Isolated' }] },
      { name: 'Vulnerable', children: [{ name: 'Victimized' }, { name: 'Fragile' }] },
      { name: 'Despair', children: [{ name: 'Grief' }, { name: 'Powerless' }] },
      { name: 'Guilty', children: [{ name: 'Ashamed' }, { name: 'Pitiful' }] },
      { name: 'Depressed', children: [{ name: 'Subordinate' }, { name: 'Empty' }] },
      { name: 'Hurt', children: [{ name: 'Disappointed' }, { name: 'Embarrassed' }] },
    ],
  },
  {
    name: 'Bad',
    color: '#7E7E7E',
    children: [
      { name: 'Tired', children: [{ name: 'Unfocused' }, { name: 'Sleepy' }] },
      { name: 'Stressed', children: [{ name: 'Restless' }, { name: 'Overwhelmed' }] },
      { name: 'Busy', children: [{ name: 'Pressured' }, { name: 'Rushed' }] },
      { name: 'Bored', children: [{ name: 'Apathetic' }, { name: 'Indifferent' }] },
    ],
  },
  {
    name: 'Surprise',
    color: '#D9885A',
    children: [
      { name: 'Startled', children: [{ name: 'Shaken' }, { name: 'Shocked' }] },
      { name: 'Confused', children: [{ name: 'Astonished' }, { name: 'Unclear' }] },
      { name: 'Amazed', children: [{ name: 'Inspired' }, { name: 'In awe' }] },
      { name: 'Excited', children: [{ name: 'Eager' }, { name: 'Energetic' }] },
    ],
  },
  {
    name: 'Disgust',
    color: '#8C72B0',
    children: [
      { name: 'Repelled', children: [{ name: 'Hesitant' }, { name: 'Horrified' }] },
      { name: 'Awful', children: [{ name: 'Painful' }, { name: 'Gloomy' }] },
      { name: 'Disappointed', children: [{ name: 'Betrayed' }, { name: 'Appalled' }] },
      { name: 'Disapproving', children: [{ name: 'Criticized' }, { name: 'Judged' }] },
    ],
  },
]

export function lighten(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  const mix = (c: number) => Math.round(c + (255 - c) * amount)
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`
}
