export type Lang = 'en' | 'hr'

const en = {
  // Navbar
  'nav.startSession': 'Start new session',

  // HomePage
  'home.disclaimer': 'Intended for support and guidance, not a substitute for professional mental health care.',
  'home.hero.title': 'Understand Your Thoughts',
  'home.hero.body': 'Examine the thoughts that run through your mind, spot thinking patterns that may be making you feel worse, and practice more balanced ways of looking at situations.',
  'home.hero.cta': 'Start new session',
  'home.hero.loadSession': 'Load saved session',
  'home.process.title': 'A three-step process for understanding and challenging unhelpful thoughts',
  'home.process.01.title': 'Notice',
  'home.process.01.desc': "Write down what's on your mind and how it makes you feel.",
  'home.process.02.title': 'Understand',
  'home.process.02.desc': 'Learn which thinking patterns may be influencing your reaction.',
  'home.process.03.title': 'Reconsider',
  'home.process.03.desc': 'Practice creating a more balanced and realistic perspective.',
  'home.ai.title': 'Intelligent Support',
  'home.ai.body': 'Noema uses AI models specifically trained to identify unhelpful thinking patterns and suggest more balanced perspectives.',
  'home.ai.note': 'Every AI-generated suggestion is fully editable, and you can override or insert your own insights at any stage of the process.',
  'home.privacy.title': 'Privacy',
  'home.privacy.body': 'Your thoughts stay private. Noema does not store your entries after your session ends.',
  'home.privacy.note': "If you'd like to keep them, you can export your session as a PDF or save it as a .noema file which you can reload in the app later.",
  'home.footer.tagline': 'A cognitive rationalization platform.',
  'home.footer.copyright': '© 2026 Noema. All rights reserved.',

  // RationalizationLayout
  'layout.step': 'Step {{step}} of {{total}}',
  'layout.previous': 'Previous',
  'layout.next': 'Next',

  // Step 1
  'step1.title': 'Establishing Context',
  'step1.when.label': 'When',
  'step1.when.title': 'When did this happen?',
  'step1.situation.label': 'What, Where and Who',
  'step1.situation.title': 'Describe the situation.',
  'step1.situation.desc': 'Try to be objective. Identify the primary actors, environment, and the specific event that triggered this thought.',
  'step1.situation.placeholder': 'What happened? Who was involved?',

  // Step 2
  'step2.title': 'Initial emotions',
  'step2.subtitle': 'Choose the emotions you felt',

  // Step 3
  'step3.title': 'Automatic thoughts',
  'step3.subtitle': 'Identify the immediate, unfiltered thoughts that occurred during the event',
  'step3.thought.label': 'Thought content',
  'step3.thought.hint': 'These often appear as lightning-fast judgments and thoughts',
  'step3.thought.placeholder': 'What went through your mind?',
  'step3.belief.label': 'Degree of belief',
  'step3.belief.hint': 'Choose how much you believe in the truthfulness of this thought',
  'step3.save': 'Save the thought',
  'step3.update': 'Update thought',
  'step3.cancel': 'Cancel',
  'step3.panel.title': 'Thoughts',
  'step3.panel.subtitle': 'Review and manage your unfiltered thoughts',
  'step3.panel.empty': 'No thoughts saved yet.',
  'step3.belief.value': 'Belief: {{value}}%',

  // Step 4
  'step4.title': 'Rationalization & Reframing',
  'step4.subtitle': 'Use Noema models as a starting point or refer to the glossary for manual work.',
  'step4.generate': 'Generate suggestions',
  'step4.thoughts.label': 'Thoughts to reframe',
  'step4.thoughts.empty': 'No thoughts added yet. Go back to step 3 to add your automatic thoughts.',
  'step4.distortion.label': 'Distortion Category',
  'step4.distortion.placeholder': 'Select a distortion...',
  'step4.reframe.label': 'Proposed Reframe',
  'step4.reframe.placeholder': 'Write or edit the reframed thought...',
  'step4.glossary.title': 'Guide to Thinking Traps',
  'step4.footer': 'AI suggestions may not always be accurate',
  'step4.automaticThought': 'Automatic Thought',
  'step4.healthyReframe': 'Healthy Reframe',
  'step4.reframeWithEvidence': 'Reframe with evidence',
  'step4.evidence.thought': 'Thought',
  'step4.evidence.for': 'Evidence For',
  'step4.evidence.against': 'Evidence Against',
  'step4.evidence.reframe': 'Reframe',
  'step4.evidence.cancel': 'Cancel',
  'step4.evidence.save': 'Save Reframe',

  // Step 5
  'step5.title': 'Integration & Belief',
  'step5.subtitle': 'Think about how much you believe in your reframed thoughts.',
  'step5.col.original': 'Original Thought',
  'step5.col.reframed': 'Reframed Perspective',
  'step5.col.belief': 'Belief Strength',
  'step5.empty': 'No thoughts to review yet. Go back to step 3 to add your automatic thoughts.',
  'step5.noReframe': 'No reframe yet',
  'step5.beliefQuestion': 'How much do you believe this version?',

  // Step 6
  'step6.title': 'Emotions after rationalization',
  'step6.subtitle': 'Choose emotions you feel now, after rationalization process',

  // Step 7
  'step7.journey': 'Rationalization Journey',
  'step7.complete': 'Rationalization Complete',
  'step7.stepLabel': 'Step 7 of 7',
  'step7.initial.title': 'Initial Emotions',
  'step7.initial.subtitle': 'Emotions before rationalization process',
  'step7.current.title': 'Current Emotions',
  'step7.current.subtitle': 'Emotions after rationalization process',
  'step7.noEmotions': 'No emotions selected',
  'step7.summary.title': 'Summary',
  'step7.summary.situation': 'Situation',
  'step7.summary.thoughts': 'Thoughts',
  'step7.summary.empty': 'No data recorded.',
  'step7.thought.thought': 'Thought',
  'step7.thought.belief': 'Belief',
  'step7.thought.distortion': 'Cognitive distortion',
  'step7.thought.evidenceFor': 'Evidence For',
  'step7.thought.evidenceAgainst': 'Evidence Against',
  'step7.thought.reframe': 'Reframe',
  'step7.thought.reframeBelief': 'Reframe belief',
  'step7.table.emotion': 'Emotion',
  'step7.table.intensity': 'Intensity',
  'step7.export': 'Export to PDF',
  'step7.exportNoema': 'Save as .noema',
  'step7.completeSession': 'Complete session',
  'step7.pdf.title': 'Rationalization with Noema',
  'step7.exportNote': '* The PDF is for viewing the summary only. Save as .noema to reload your session in the app.',

  // EmotionPicker
  'emotionPicker.hint': 'Select a main emotion to see its sub-emotions and detailed emotions',
  'emotionPicker.selectedPath': 'Selected path:',

  // EmotionIntensityPanel
  'emotionPanel.selected': 'Selected emotions',
  'emotionPanel.intensity': 'Choose the intensity for emotions you selected',
  'emotionPanel.main': 'Main emotions',
  'emotionPanel.prevail': 'See which emotions prevail',
  'emotionPanel.none': 'No emotions selected yet.',
  'emotionPanel.chart': 'Select emotions to see the chart.',

  // Core emotions
  'emotions.Happy': 'Happy',
  'emotions.Angry': 'Angry',
  'emotions.Fear': 'Fear',
  'emotions.Sad': 'Sad',
  'emotions.Bad': 'Bad',
  'emotions.Surprise': 'Surprise',
  'emotions.Disgust': 'Disgust',

  // Secondary (Happy)
  'emotions.Playful': 'Playful',
  'emotions.Content': 'Content',
  'emotions.Interested': 'Interested',
  'emotions.Proud': 'Proud',
  'emotions.Accepted': 'Accepted',
  'emotions.Powerful': 'Powerful',
  'emotions.Peaceful': 'Peaceful',
  'emotions.Trusting': 'Trusting',
  'emotions.Optimistic': 'Optimistic',

  // Secondary (Angry)
  'emotions.Critical': 'Critical',
  'emotions.Distant': 'Distant',
  'emotions.Frustrated': 'Frustrated',
  'emotions.Aggressive': 'Aggressive',
  'emotions.Mad': 'Mad',
  'emotions.Bitter': 'Bitter',
  'emotions.Humiliated': 'Humiliated',
  'emotions.Let down': 'Let down',

  // Secondary (Fear)
  'emotions.Threatened': 'Threatened',
  'emotions.Rejected': 'Rejected',
  'emotions.Weak': 'Weak',
  'emotions.Insecure': 'Insecure',
  'emotions.Anxious': 'Anxious',
  'emotions.Scared': 'Scared',

  // Secondary (Sad)
  'emotions.Lonely': 'Lonely',
  'emotions.Vulnerable': 'Vulnerable',
  'emotions.Despair': 'Despair',
  'emotions.Guilty': 'Guilty',
  'emotions.Depressed': 'Depressed',
  'emotions.Hurt': 'Hurt',

  // Secondary (Bad)
  'emotions.Tired': 'Tired',
  'emotions.Stressed': 'Stressed',
  'emotions.Busy': 'Busy',
  'emotions.Bored': 'Bored',

  // Secondary (Surprise)
  'emotions.Startled': 'Startled',
  'emotions.Confused': 'Confused',
  'emotions.Amazed': 'Amazed',
  'emotions.Excited': 'Excited',

  // Secondary (Disgust)
  'emotions.Repelled': 'Repelled',
  'emotions.Awful': 'Awful',
  'emotions.Disappointed': 'Disappointed',
  'emotions.Disapproving': 'Disapproving',

  // Tertiary (Happy)
  'emotions.Cheerful': 'Cheerful',
  'emotions.Joyful': 'Joyful',
  'emotions.Free': 'Free',
  'emotions.Curious': 'Curious',
  'emotions.Intrigued': 'Intrigued',
  'emotions.Confident': 'Confident',
  'emotions.Successful': 'Successful',
  'emotions.Respected': 'Respected',
  'emotions.Valued': 'Valued',
  'emotions.Courageous': 'Courageous',
  'emotions.Daring': 'Daring',
  'emotions.Thankful': 'Thankful',
  'emotions.Serene': 'Serene',
  'emotions.Intimate': 'Intimate',
  'emotions.Loved': 'Loved',
  'emotions.Hopeful': 'Hopeful',
  'emotions.Inspired': 'Inspired',

  // Tertiary (Angry)
  'emotions.Brusque': 'Brusque',
  'emotions.Skeptical': 'Skeptical',
  'emotions.Withdrawn': 'Withdrawn',
  'emotions.Quiet': 'Quiet',
  'emotions.Irritated': 'Irritated',
  'emotions.Annoyed': 'Annoyed',
  'emotions.Hostile': 'Hostile',
  'emotions.Enraged': 'Enraged',
  'emotions.Irate': 'Irate',
  'emotions.Furious': 'Furious',
  'emotions.Indignant': 'Indignant',
  'emotions.Ridiculed': 'Ridiculed',
  'emotions.Disrespected': 'Disrespected',
  'emotions.Resentful': 'Resentful',
  'emotions.Betrayed': 'Betrayed',

  // Tertiary (Fear)
  'emotions.Exposed': 'Exposed',
  'emotions.Nervous': 'Nervous',
  'emotions.Persecuted': 'Persecuted',
  'emotions.Excluded': 'Excluded',
  'emotions.Insignificant': 'Insignificant',
  'emotions.Worthless': 'Worthless',
  'emotions.Inferior': 'Inferior',
  'emotions.Inadequate': 'Inadequate',
  'emotions.Worried': 'Worried',
  'emotions.Apprehensive': 'Apprehensive',
  'emotions.Frightened': 'Frightened',
  'emotions.Helpless': 'Helpless',

  // Tertiary (Sad)
  'emotions.Abandoned': 'Abandoned',
  'emotions.Isolated': 'Isolated',
  'emotions.Victimized': 'Victimized',
  'emotions.Fragile': 'Fragile',
  'emotions.Grief': 'Grief',
  'emotions.Powerless': 'Powerless',
  'emotions.Ashamed': 'Ashamed',
  'emotions.Pitiful': 'Pitiful',
  'emotions.Subordinate': 'Subordinate',
  'emotions.Empty': 'Empty',
  'emotions.Embarrassed': 'Embarrassed',

  // Tertiary (Bad)
  'emotions.Unfocused': 'Unfocused',
  'emotions.Sleepy': 'Sleepy',
  'emotions.Restless': 'Restless',
  'emotions.Overwhelmed': 'Overwhelmed',
  'emotions.Out of control': 'Out of control',
  'emotions.Pressured': 'Pressured',
  'emotions.Rushed': 'Rushed',
  'emotions.Apathetic': 'Apathetic',
  'emotions.Indifferent': 'Indifferent',

  // Tertiary (Surprise)
  'emotions.Shaken': 'Shaken',
  'emotions.Shocked': 'Shocked',
  'emotions.Astonished': 'Astonished',
  'emotions.Unclear': 'Unclear',
  'emotions.In awe': 'In awe',
  'emotions.Eager': 'Eager',
  'emotions.Energetic': 'Energetic',

  // Tertiary (Disgust)
  'emotions.Hesitant': 'Hesitant',
  'emotions.Horrified': 'Horrified',
  'emotions.Nauseated': 'Nauseated',
  'emotions.Revolted': 'Revolted',
  'emotions.Appalled': 'Appalled',
  'emotions.Painful': 'Painful',
  'emotions.Gloomy': 'Gloomy',
  'emotions.Criticized': 'Criticized',
  'emotions.Judged': 'Judged',

  // Distortions
  'distortions.allOrNothing.name': 'All-or-Nothing Thinking',
  'distortions.allOrNothing.desc': 'Viewing things in black-and-white categories. If your performance falls short of perfect, you see yourself as a total failure.',
  'distortions.allOrNothing.automaticThought': 'I ate a cookie, my diet is completely ruined.',
  'distortions.allOrNothing.healthyReframe': "I didn't stick to my diet today, but I can make a better choice for my next meal. One cookie doesn't erase my progress.",

  'distortions.shouldStatements.name': 'Should statements',
  'distortions.shouldStatements.desc': "Telling yourself that things should or must be a certain way, creating guilt, frustration, or resentment when reality doesn't match your expectations.",
  'distortions.shouldStatements.automaticThought': 'I should be able to handle everything on my own.',
  'distortions.shouldStatements.healthyReframe': "It's okay to need help sometimes. Everyone has limits, and asking for support doesn't mean I'm weak or incapable.",

  'distortions.mindReading.name': 'Mind Reading',
  'distortions.mindReading.desc': 'Arbitrarily concluding that someone is reacting negatively to you, without bothering to check it out.',
  'distortions.mindReading.automaticThought': "She didn't wave back, she must be mad at me.",
  'distortions.mindReading.healthyReframe': "I don't actually know why she didn't wave. She might have been distracted or didn't see me. I shouldn't take it personally.",

  'distortions.fortuneTelling.name': 'Fortune Telling',
  'distortions.fortuneTelling.desc': "Anticipating that things will turn out badly as if it's an established fact.",
  'distortions.fortuneTelling.automaticThought': "I just know I'm going to freeze up during the interview.",
  'distortions.fortuneTelling.healthyReframe': "I might feel nervous, but I've prepared well. I'll focus on doing my best rather than assuming the worst outcome.",

  'distortions.catastrophizing.name': 'Catastrophizing',
  'distortions.catastrophizing.desc': 'Attributing extreme importance to a setback or error, imagining the worst possible outcome.',
  'distortions.catastrophizing.automaticThought': "If I fail this quiz, I'll fail the class and drop out.",
  'distortions.catastrophizing.healthyReframe': "Failing this quiz would be disappointing, but it's one grade in one class. I can talk to the professor about extra credit or study harder for the next one.",

  'distortions.discountingPositive.name': 'Discounting the positive',
  'distortions.discountingPositive.desc': 'Rejecting positive experiences by insisting they "don\'t count" for some reason.',
  'distortions.discountingPositive.automaticThought': "I got a good grade, but the test was easy, so it doesn't mean anything.",
  'distortions.discountingPositive.healthyReframe': "I still studied and performed well. My success counts, even if the test wasn't extremely difficult.",

  'distortions.labelingMislabeling.name': 'Labeling and mislabeling',
  'distortions.labelingMislabeling.desc': 'Attaching a negative label to yourself or others based on a single event or behavior.',
  'distortions.labelingMislabeling.automaticThought': "I made a mistake during the presentation. I'm such an idiot.",
  'distortions.labelingMislabeling.healthyReframe': "I made a mistake, but everyone makes mistakes. One error doesn't define my intelligence or worth.",

  'distortions.mentalFiltering.name': 'Mental filtering',
  'distortions.mentalFiltering.desc': 'Focusing exclusively on the negative details of a situation while ignoring the positive aspects.',
  'distortions.mentalFiltering.automaticThought': 'Everyone liked my presentation except for one person. It was terrible.',
  'distortions.mentalFiltering.healthyReframe': "Most people responded positively. While I can learn from criticism, it doesn't erase the positive feedback I received.",

  'distortions.personalization.name': 'Personalization',
  'distortions.personalization.desc': "Assuming excessive responsibility for events that aren't entirely under your control.",
  'distortions.personalization.automaticThought': 'My friend seemed upset today. I must have done something wrong.',
  'distortions.personalization.healthyReframe': "There could be many reasons why my friend seemed upset. I shouldn't automatically assume I'm the cause without evidence.",

  'distortions.overgeneralization.name': 'Overgeneralization',
  'distortions.overgeneralization.desc': 'You see a single negative event as a never-ending pattern of defeat by using words like "always" or "never."',
  'distortions.overgeneralization.automaticThought': "I didn't get a call back. I'll never find a job.",
  'distortions.overgeneralization.healthyReframe': "This specific company didn't call back, but that doesn't mean no one will. I'll keep applying and improving my resume.",
}

export type TranslationKey = keyof typeof en

const hr: Record<TranslationKey, string> = {
  // Navbar
  'nav.startSession': 'Pokreni novu sesiju',

  // HomePage
  'home.disclaimer': 'Namijenjeno za podršku i smjernice, ne kao zamjena za profesionalnu skrb o mentalnom zdravlju.',
  'home.hero.title': 'Razumijte Svoje Misli',
  'home.hero.body': 'Ispitajte misli koje vam prolaze kroz glavu, prepoznajte obrasce razmišljanja i vježbajte uravnoteženije poglede na situacije.',
  'home.hero.cta': 'Pokreni novu sesiju',
  'home.hero.loadSession': 'Učitaj spremljenu sesiju',
  'home.process.title': 'Proces razumijevanja i propitivanja misli u tri koraka',
  'home.process.01.title': 'Primijeti',
  'home.process.01.desc': 'Zapišite što vam je na umu i kako se zbog toga osjećate.',
  'home.process.02.title': 'Razumij',
  'home.process.02.desc': 'Saznajte koji obrasci razmišljanja mogu utjecati na vašu reakciju.',
  'home.process.03.title': 'Preispitaj',
  'home.process.03.desc': 'Vježbajte stvaranje uravnoteženije i realističnije perspektive na situaciju.',
  'home.ai.title': 'Inteligentna podrška',
  'home.ai.body': 'Noema koristi AI modele posebno obučene za prepoznavanje nekorisnih obrazaca razmišljanja i predlaganje uravnoteženijih perspektiva.',
  'home.ai.note': 'Svaki prijedlog generiran AI-jem možete urediti ili unijeti vlastite uvide u bilo kojoj fazi procesa.',
  'home.privacy.title': 'Privatnost',
  'home.privacy.body': 'Vaše misli ostaju privatne. Noema ne pohranjuje vaše unose nakon završetka sesije.',
  'home.privacy.note': 'Ako ih želite zadržati, možete preuzeti sesiju kao PDF ili je spremiti kao .noema datoteku koju možete ponovno učitati u aplikaciji.',
  'home.footer.tagline': 'Platforma za kognitivnu racionalizaciju.',
  'home.footer.copyright': '© 2026 Noema. Sva prava pridržana.',

  // RationalizationLayout
  'layout.step': 'Korak {{step}} od {{total}}',
  'layout.previous': 'Prethodno',
  'layout.next': 'Sljedeće',

  // Step 1
  'step1.title': 'Upoznavanje konteksta',
  'step1.when.label': 'Kada',
  'step1.when.title': 'Kada se ovo dogodilo?',
  'step1.situation.label': 'Što, Gdje i Tko',
  'step1.situation.title': 'Opišite situaciju.',
  'step1.situation.desc': 'Pokušajte biti objektivni. Identificirajte glavne sudionike, okruženje i specifični događaj koji je potaknuo ovu misao.',
  'step1.situation.placeholder': 'Što se dogodilo? Tko je bio uključen?',

  // Step 2
  'step2.title': 'Početne emocije',
  'step2.subtitle': 'Odaberite emocije koje ste osjećali',

  // Step 3
  'step3.title': 'Automatske misli',
  'step3.subtitle': 'Identificirajte neposredne, nefiltrirane misli koje su se pojavile tijekom događaja',
  'step3.thought.label': 'Sadržaj misli',
  'step3.thought.hint': 'One se često pojavljuju kao munjevito brze prosudbe i misli',
  'step3.thought.placeholder': 'Što vam je prošlo kroz glavu?',
  'step3.belief.label': 'Stupanj uvjerenja',
  'step3.belief.hint': 'Odaberite koliko vjerujete u istinitost ove misli',
  'step3.save': 'Spremi misao',
  'step3.update': 'Ažuriraj misao',
  'step3.cancel': 'Odustani',
  'step3.panel.title': 'Misli',
  'step3.panel.subtitle': 'Pregledajte i upravljajte vašim nefiltriranim mislima',
  'step3.panel.empty': 'Nema još spremljenih misli.',
  'step3.belief.value': 'Uvjerenje: {{value}}%',

  // Step 4
  'step4.title': 'Racionalizacija i preoblikovanje',
  'step4.subtitle': 'Koristite Noema modele kao polaznu točku ili vodič za ručni rad.',
  'step4.generate': 'Generiraj prijedloge',
  'step4.thoughts.label': 'Misli za preoblikovanje',
  'step4.thoughts.empty': 'Nema još dodanih misli. Vratite se na korak 3 kako biste dodali automatske misli.',
  'step4.distortion.label': 'Kategorija kognitivne distorzije',
  'step4.distortion.placeholder': 'Odaberite distorziju...',
  'step4.reframe.label': 'Predloženo preoblikovanje',
  'step4.reframe.placeholder': 'Napišite ili uredite preoblikovanu misao...',
  'step4.glossary.title': 'Vodič kroz obrasce razmišljanja',
  'step4.footer': 'AI prijedlozi možda nisu uvijek točni',
  'step4.automaticThought': 'Automatska misao',
  'step4.healthyReframe': 'Zdravo preoblikovanje',
  'step4.reframeWithEvidence': 'Preoblikuj s dokazima',
  'step4.evidence.thought': 'Misao',
  'step4.evidence.for': 'Dokazi za',
  'step4.evidence.against': 'Dokazi protiv',
  'step4.evidence.reframe': 'Preoblikovana misao',
  'step4.evidence.cancel': 'Odustani',
  'step4.evidence.save': 'Spremi preoblikovanje',

  // Step 5
  'step5.title': 'Integracija i uvjerenje',
  'step5.subtitle': 'Razmislite koliko vjerujete u vaše preoblikovane misli.',
  'step5.col.original': 'Izvorna misao',
  'step5.col.reframed': 'Preoblikovana perspektiva',
  'step5.col.belief': 'Snaga uvjerenja',
  'step5.empty': 'Nema još misli za pregled. Vratite se na korak 3 kako biste dodali automatske misli.',
  'step5.noReframe': 'Nema preoblikovanja',
  'step5.beliefQuestion': 'Koliko vjerujete u ovu verziju?',

  // Step 6
  'step6.title': 'Emocije nakon racionalizacije',
  'step6.subtitle': 'Odaberite emocije koje osjećate sada, nakon procesa racionalizacije',

  // Step 7
  'step7.journey': 'Put racionalizacije',
  'step7.complete': 'Racionalizacija završena',
  'step7.stepLabel': 'Korak 7 od 7',
  'step7.initial.title': 'Početne emocije',
  'step7.initial.subtitle': 'Emocije prije procesa racionalizacije',
  'step7.current.title': 'Trenutne emocije',
  'step7.current.subtitle': 'Emocije nakon procesa racionalizacije',
  'step7.noEmotions': 'Nema odabranih emocija',
  'step7.summary.title': 'Sažetak',
  'step7.summary.situation': 'Situacija',
  'step7.summary.thoughts': 'Misli',
  'step7.summary.empty': 'Nema zabilježenih podataka.',
  'step7.thought.thought': 'Misao',
  'step7.thought.belief': 'Uvjerenje',
  'step7.thought.distortion': 'Kognitivna distorzija',
  'step7.thought.evidenceFor': 'Dokazi za',
  'step7.thought.evidenceAgainst': 'Dokazi protiv',
  'step7.thought.reframe': 'Preoblikovanje',
  'step7.thought.reframeBelief': 'Uvjerenje u preoblikovanje',
  'step7.table.emotion': 'Emocija',
  'step7.table.intensity': 'Intenzitet',
  'step7.export': 'Izvezi kao PDF',
  'step7.exportNoema': 'Spremi kao .noema',
  'step7.completeSession': 'Završi sesiju',
  'step7.pdf.title': 'Noema Racionalizacija',
  'step7.exportNote': '* PDF je samo za pregled sažetka. Spremi kao .noema kako biste mogli nastaviti sesiju u aplikaciji.',

  // EmotionPicker
  'emotionPicker.hint': 'Odaberite glavnu emociju kako biste vidjeli podskupine i detaljne emocije',
  'emotionPicker.selectedPath': 'Odabrana putanja:',

  // EmotionIntensityPanel
  'emotionPanel.selected': 'Odabrane emocije',
  'emotionPanel.intensity': 'Odaberite intenzitet za odabrane emocije',
  'emotionPanel.main': 'Glavne emocije',
  'emotionPanel.prevail': 'Vidite koje emocije prevladavaju',
  'emotionPanel.none': 'Nema još odabranih emocija.',
  'emotionPanel.chart': 'Odaberite emocije za prikaz dijagrama.',

  // Core emotions
  'emotions.Happy': 'Sreća',
  'emotions.Angry': 'Ljutnja',
  'emotions.Fear': 'Strah',
  'emotions.Sad': 'Tuga',
  'emotions.Bad': 'Loše raspoloženje',
  'emotions.Surprise': 'Iznenađenje',
  'emotions.Disgust': 'Gađenje',

  // Secondary (Happy)
  'emotions.Playful': 'Razigrano',
  'emotions.Content': 'Ispunjeno',
  'emotions.Interested': 'Zainteresirano',
  'emotions.Proud': 'Ponosno',
  'emotions.Accepted': 'Prihvaćeno',
  'emotions.Powerful': 'Snažno',
  'emotions.Peaceful': 'Mirno',
  'emotions.Trusting': 'Povjerljivo',
  'emotions.Optimistic': 'Optimistično',

  // Secondary (Angry)
  'emotions.Critical': 'Neprijatno',
  'emotions.Distant': 'Distancirano',
  'emotions.Frustrated': 'Frustrirano',
  'emotions.Aggressive': 'Agresivno',
  'emotions.Mad': 'Bijesno',
  'emotions.Bitter': 'Ogorčeno',
  'emotions.Humiliated': 'Poniženo',
  'emotions.Let down': 'Razočarano',

  // Secondary (Fear)
  'emotions.Threatened': 'Zastrašeno',
  'emotions.Rejected': 'Odbačeno',
  'emotions.Weak': 'Slabo',
  'emotions.Insecure': 'Nesigurno',
  'emotions.Anxious': 'Anksiozno',
  'emotions.Scared': 'Uplašeno',

  // Secondary (Sad)
  'emotions.Lonely': 'Usamljeno',
  'emotions.Vulnerable': 'Ranjivo',
  'emotions.Despair': 'Očajno',
  'emotions.Guilty': 'Krivo',
  'emotions.Depressed': 'Depresivno',
  'emotions.Hurt': 'Uvrijeđeno',

  // Secondary (Bad)
  'emotions.Tired': 'Umorno',
  'emotions.Stressed': 'Uznemireno',
  'emotions.Busy': 'Preopterećeno',
  'emotions.Bored': 'Dosadno',

  // Secondary (Surprise)
  'emotions.Startled': 'Uzdrmano',
  'emotions.Confused': 'Zbunjeno',
  'emotions.Amazed': 'Zadivljeno',
  'emotions.Excited': 'Uzbuđeno',

  // Secondary (Disgust)
  'emotions.Repelled': 'Odbojno',
  'emotions.Awful': 'Užasno',
  'emotions.Disappointed': 'Razočarano',
  'emotions.Disapproving': 'Neodobravano',

  // Tertiary (Happy)
  'emotions.Cheerful': 'Veselo',
  'emotions.Joyful': 'Sretno',
  'emotions.Free': 'Slobodno',
  'emotions.Curious': 'Znatiželjno',
  'emotions.Intrigued': 'Zaintrigirano',
  'emotions.Confident': 'Pouzdano',
  'emotions.Successful': 'Uspješno',
  'emotions.Respected': 'Uvaženo',
  'emotions.Valued': 'Cijenjeno',
  'emotions.Courageous': 'Hrabro',
  'emotions.Daring': 'Odvažno',
  'emotions.Thankful': 'Zahvalno',
  'emotions.Serene': 'Spokojno',
  'emotions.Intimate': 'Intimno',
  'emotions.Loved': 'Voljeno',
  'emotions.Hopeful': 'Puni nade',
  'emotions.Inspired': 'Inspirirano',

  // Tertiary (Angry)
  'emotions.Brusque': 'Osorno',
  'emotions.Skeptical': 'Skeptično',
  'emotions.Withdrawn': 'Povučeno',
  'emotions.Quiet': 'Tiho',
  'emotions.Irritated': 'Iziritirano',
  'emotions.Annoyed': 'Iznervirano',
  'emotions.Hostile': 'Hostilno',
  'emotions.Enraged': 'Razjareno',
  'emotions.Irate': 'Srdito',
  'emotions.Furious': 'Gnjevno',
  'emotions.Indignant': 'Povrijeđeno',
  'emotions.Revolted': 'Revoltirano',
  'emotions.Ridiculed': 'Ismijano',
  'emotions.Disrespected': 'Neuvaženo',
  'emotions.Resentful': 'Ozlojađeno',
  'emotions.Betrayed': 'Izdano',

  // Tertiary (Fear)
  'emotions.Exposed': 'Izloženo',
  'emotions.Nervous': 'Nervozno',
  'emotions.Persecuted': 'Osuđivano',
  'emotions.Excluded': 'Isključeno',
  'emotions.Insignificant': 'Beznačajno',
  'emotions.Worthless': 'Bezvrijedno',
  'emotions.Inferior': 'Inferiorno',
  'emotions.Inadequate': 'Nedostojno',
  'emotions.Worried': 'Zabrinuto',
  'emotions.Apprehensive': 'Tjeskobno',
  'emotions.Frightened': 'Preplašeno',
  'emotions.Helpless': 'Bespomoćno',

  // Tertiary (Sad)
  'emotions.Abandoned': 'Napušteno',
  'emotions.Isolated': 'Izolirano',
  'emotions.Victimized': 'Napadnuto',
  'emotions.Fragile': 'Krhko',
  'emotions.Grief': 'Žalosno',
  'emotions.Powerless': 'Nemoćno',
  'emotions.Ashamed': 'Posramljeno',
  'emotions.Pitiful': 'Sažaljivo',
  'emotions.Subordinate': 'Potčinjeno',
  'emotions.Empty': 'Isprazno',
  'emotions.Embarrassed': 'Osramoćeno',

  // Tertiary (Bad)
  'emotions.Unfocused': 'Nekoncentrirano',
  'emotions.Sleepy': 'Pospano',
  'emotions.Restless': 'Nemirno',
  'emotions.Overwhelmed': 'Preplavljeno',
  'emotions.Out of control': 'Izvan kontrole',
  'emotions.Pressured': 'Pod pritiskom',
  'emotions.Rushed': 'Užurbano',
  'emotions.Apathetic': 'Apatično',
  'emotions.Indifferent': 'Indiferentno',

  // Tertiary (Surprise)
  'emotions.Shaken': 'Potreseno',
  'emotions.Shocked': 'Šokirano',
  'emotions.Astonished': 'Zaprepašteno',
  'emotions.Unclear': 'Nejasno',
  'emotions.In awe': 'Zapanjeno',
  'emotions.Eager': 'Nestrpljivo',
  'emotions.Energetic': 'Energično',

  // Tertiary (Disgust)
  'emotions.Hesitant': 'Suzdržano',
  'emotions.Horrified': 'Užasnuto',
  'emotions.Painful': 'Mučno',
  'emotions.Gloomy': 'Turobno',
  'emotions.Nauseated': 'Ogađen',
  'emotions.Appalled': 'Zaprepašteno',
  'emotions.Criticized': 'Kritizirano',
  'emotions.Judged': 'Osuđivano',

  // Distortions
  'distortions.allOrNothing.name': 'Crno-bijelo razmišljanje',
  'distortions.allOrNothing.desc': 'Gledanje na stvari isključivo kao crno ili bijelo. Ako vaše postignuće nije savršeno, smatrate se potpunim neuspjehom.',
  'distortions.allOrNothing.automaticThought': 'Pojeo/la sam kolač, dijeta mi je potpuno upropaštena.',
  'distortions.allOrNothing.healthyReframe': 'Nisam se danas pridržavao/la dijete, ali mogu napraviti bolji izbor za sljedeći obrok. Jedan kolač ne briše moj napredak.',

  'distortions.shouldStatements.name': 'Trebao/la bi...',
  'distortions.shouldStatements.desc': 'Govoriti sebi da stvari moraju ili trebaju biti na određen način, što stvara krivnju, frustraciju ili ogorčenost kada stvarnost ne odgovara vašim očekivanjima.',
  'distortions.shouldStatements.automaticThought': 'Trebao/la bih sve moći sam/sama riješiti.',
  'distortions.shouldStatements.healthyReframe': 'U redu je ponekad trebati pomoć. Svi imamo granice, a traženje podrške ne znači da sam slab/slaba ili nesposoban/nesposobna.',

  'distortions.mindReading.name': 'Čitanje misli',
  'distortions.mindReading.desc': 'Samovoljno zaključujete da netko negativno reagira na vas, bez provjere je li to istina.',
  'distortions.mindReading.automaticThought': 'Nije mi uzvratila pozdrav, mora da se ljuti na mene.',
  'distortions.mindReading.healthyReframe': 'Zapravo ne znam zašto nije uzvratila pozdrav. Možda je bila ometena ili me nije vidjela. Ne bih trebao/la to uzimati osobno.',

  'distortions.fortuneTelling.name': 'Proricanje budućnosti',
  'distortions.fortuneTelling.desc': 'Anticipiranje da će se stvari loše odviti, kao da je to utvrđena činjenica.',
  'distortions.fortuneTelling.automaticThought': 'Znam da ću se smrznuti na intervjuu.',
  'distortions.fortuneTelling.healthyReframe': 'Možda ću biti nervozan/nervozna, ali dobro sam se pripremio/la. Usredotočit ću se na davanje svog najboljeg, umjesto da pretpostavljam najgori ishod.',

  'distortions.catastrophizing.name': 'Katastrofiziranje',
  'distortions.catastrophizing.desc': 'Pripisivanje krajnje važnosti neuspjehu ili pogreški, zamišljajući najgori mogući ishod.',
  'distortions.catastrophizing.automaticThought': 'Ako padnem ovaj test, past ću predmet i ispisati se s faksa.',
  'distortions.catastrophizing.healthyReframe': 'Pad testa bio bi razočaravajući, ali to je samo jedna ocjena. Mogu razgovarati s profesorom o dodatnim bodovima ili više učiti za sljedeći put.',

  'distortions.discountingPositive.name': 'Umanjivanje pozitivnog',
  'distortions.discountingPositive.desc': 'Odbacivanje pozitivnih iskustava inzistiranjem da ona "ne vrijede" iz nekog razloga.',
  'distortions.discountingPositive.automaticThought': 'Dobio/la sam dobru ocjenu, ali ispit je bio lak, tako da to ne znači ništa.',
  'distortions.discountingPositive.healthyReframe': 'Ipak sam se učio/la i dobro se snašao/la. Moj uspjeh se računa, čak i ako ispit nije bio izuzetno težak.',

  'distortions.labelingMislabeling.name': 'Etiketiranje',
  'distortions.labelingMislabeling.desc': 'Pripisivanje negativne etikete sebi ili drugima na temelju jednog događaja ili ponašanja.',
  'distortions.labelingMislabeling.automaticThought': 'Napravio/la sam pogrešku u prezentaciji. Ja sam nesposoban/na',
  'distortions.labelingMislabeling.healthyReframe': 'Napravio/la sam pogrešku, ali svi griješe. Jedna pogreška ne definira moju inteligenciju ni vrijednost.',

  'distortions.mentalFiltering.name': 'Mentalni filter',
  'distortions.mentalFiltering.desc': 'Usredotočavanje isključivo na negativne detalje situacije, zanemarujući pozitivne aspekte.',
  'distortions.mentalFiltering.automaticThought': 'Svima se svidjela moja prezentacija osim jednoj osobi. Bila je strašna.',
  'distortions.mentalFiltering.healthyReframe': 'Većina je reagirala pozitivno. Dok mogu nešto naučiti iz kritike, ona ne briše pozitivne povratne informacije koje sam dobio/la.',

  'distortions.personalization.name': 'Personalizacija',
  'distortions.personalization.desc': 'Preuzimanje pretjerane odgovornosti za događaje koji nisu u potpunosti pod vašom kontrolom.',
  'distortions.personalization.automaticThought': 'Moj prijatelj danas djeluje uznemireno. Sigurno sam nešto učinio/la pogrešno.',
  'distortions.personalization.healthyReframe': 'Može biti mnogo razloga zašto je moj prijatelj bio uznemiren. Ne bih trebao/la automatski pretpostaviti da sam ja uzrok bez dokaza.',

  'distortions.overgeneralization.name': 'Pretjerano generaliziranje',
  'distortions.overgeneralization.desc': 'Jedan negativan događaj vidite kao neprekidni obrazac poraza koristeći riječi poput "uvijek" ili "nikad."',
  'distortions.overgeneralization.automaticThought': 'Nisu me nazvali. Nikad neću naći posao.',
  'distortions.overgeneralization.healthyReframe': 'Ova konkretna tvrtka me nije nazvala, ali to ne znači da nitko neće. Nastavit ću se prijavljivati i poboljšavati životopis.',
}

export const translations: Record<Lang, Record<TranslationKey, string>> = { en, hr }
