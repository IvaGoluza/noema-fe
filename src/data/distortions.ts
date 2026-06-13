export interface Distortion {
  key: string
  name: string
  description: string
  automaticThought: string
  healthyReframe: string
}

export const distortions: Distortion[] = [
  {
    key: 'allOrNothing',
    name: 'All-or-Nothing Thinking',
    description:
      'Viewing things in black-and-white categories. If your performance falls short of perfect, you see yourself as a total failure.',
    automaticThought: 'I ate a cookie, my diet is completely ruined.',
    healthyReframe:
      "I didn't stick to my diet today, but I can make a better choice for my next meal. One cookie doesn't erase my progress.",
  },
  {
    key: 'shouldStatements',
    name: 'Should statements',
    description:
      'Telling yourself that things should or must be a certain way, creating guilt, frustration, or resentment when reality doesn\'t match your expectations.',
    automaticThought: 'I should be able to handle everything on my own.',
    healthyReframe:
      "It's okay to need help sometimes. Everyone has limits, and asking for support doesn't mean I'm weak or incapable.",
  },
  {
    key: 'mindReading',
    name: 'Mind Reading',
    description:
      "Arbitrarily concluding that someone is reacting negatively to you, without bothering to check it out.",
    automaticThought: "She didn't wave back, she must be mad at me.",
    healthyReframe:
      "I don't actually know why she didn't wave. She might have been distracted or didn't see me. I shouldn't take it personally.",
  },
  {
    key: 'fortuneTelling',
    name: 'Fortune Telling',
    description: "Anticipating that things will turn out badly as if it's an established fact.",
    automaticThought: "I just know I'm going to freeze up during the interview.",
    healthyReframe:
      "I might feel nervous, but I've prepared well. I'll focus on doing my best rather than assuming the worst outcome.",
  },
  {
    key: 'catastrophizing',
    name: 'Catastrophizing',
    description:
      'Attributing extreme importance to a setback or error, imagining the worst possible outcome.',
    automaticThought: "If I fail this quiz, I'll fail the class and drop out.",
    healthyReframe:
      "Failing this quiz would be disappointing, but it's one grade in one class. I can talk to the professor about extra credit or study harder for the next one.",
  },
  {
    key: 'discountingPositive',
    name: 'Discounting the positive',
    description: 'Rejecting positive experiences by insisting they "don\'t count" for some reason.',
    automaticThought: "I got a good grade, but the test was easy, so it doesn't mean anything.",
    healthyReframe:
      "I still studied and performed well. My success counts, even if the test wasn't extremely difficult.",
  },
  {
    key: 'labelingMislabeling',
    name: 'Labeling and mislabeling',
    description:
      'Attaching a negative label to yourself or others based on a single event or behavior.',
    automaticThought: "I made a mistake during the presentation. I'm such an idiot.",
    healthyReframe:
      "I made a mistake, but everyone makes mistakes. One error doesn't define my intelligence or worth.",
  },
  {
    key: 'mentalFiltering',
    name: 'Mental filtering',
    description:
      'Focusing exclusively on the negative details of a situation while ignoring the positive aspects.',
    automaticThought:
      "Everyone liked my presentation except for one person. It was terrible.",
    healthyReframe:
      "Most people responded positively. While I can learn from criticism, it doesn't erase the positive feedback I received.",
  },
  {
    key: 'personalization',
    name: 'Personalization',
    description:
      "Assuming excessive responsibility for events that aren't entirely under your control.",
    automaticThought: "My friend seemed upset today. I must have done something wrong.",
    healthyReframe:
      "There could be many reasons why my friend seemed upset. I shouldn't automatically assume I'm the cause without evidence.",
  },
  {
    key: 'overgeneralization',
    name: 'Overgeneralization',
    description:
      'You see a single negative event as a never-ending pattern of defeat by using words like "always" or "never."',
    automaticThought: "I didn't get a call back. I'll never find a job.",
    healthyReframe:
      "This specific company didn't call back, but that doesn't mean no one will. I'll keep applying and improving my resume.",
  },
]
