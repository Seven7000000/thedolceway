export interface App {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  subhead: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  category: 'health' | 'productivity' | 'fitness' | 'utility' | 'lifestyle' | 'mindfulness';
  color: string;
  colorSecondary: string;
  icon: string;
  keywords: string[];
  status: 'live' | 'coming-soon' | 'beta';
  appStoreUrl?: string;
}

export const apps: App[] = [
  {
    slug: 'waterdrop',
    name: 'WaterDrop',
    tagline: 'Hydration that fits your life.',
    headline: 'Stop dehydrating yourself.',
    subhead: 'Smart reminders that actually work. Track your intake without thinking about it.',
    description: 'Stop forgetting to drink water. WaterDrop sends smart reminders and tracks your daily intake so you can finally stay hydrated without thinking about it.',
    problem: "You know you should drink more water. But life gets busy, and suddenly it's 6pm and you've had two cups of coffee and nothing else.",
    solution: "WaterDrop sits quietly in your pocket, nudging you at the right moments. No annoying spam — just smart reminders that actually work. Track your intake, see your streaks, and watch your hydration habits transform.",
    features: [
      'Smart reminders that adapt to your schedule',
      'Beautiful daily and weekly progress tracking',
      'Customizable water intake goals',
      'Streak tracking to build lasting habits'
    ],
    category: 'health',
    color: '#0EA5E9',
    colorSecondary: '#0284C7',
    icon: '/icons/waterdrop.svg',
    keywords: ['water tracker', 'hydration app', 'water reminder', 'drink water app', 'daily water intake'],
    status: 'coming-soon'
  },
  {
    slug: 'fasttrack',
    name: 'FastTrack',
    tagline: 'Fasting made simple.',
    headline: 'Fasting without the PhD.',
    subhead: 'Pick your protocol. Hit start. We handle the rest.',
    description: 'Intermittent fasting without the complexity. FastTrack helps you stick to your fasting protocol with clean timers, streak tracking, and zero overwhelm.',
    problem: "You've heard fasting works. But most apps drown you in data, graphs, and features you don't need. You just want to know: when can I eat?",
    solution: "FastTrack strips it down to what matters. Pick your protocol (16:8, 18:6, OMAD), hit start, and we'll handle the rest. Clean timers. Satisfying streaks. No PhD required.",
    features: [
      'One-tap fasting timer',
      'Popular protocols built-in (16:8, 18:6, 20:4, OMAD)',
      'Streak tracking to keep you motivated',
      'Gentle notifications when your window opens'
    ],
    category: 'health',
    color: '#1E40AF',
    colorSecondary: '#1E3A8A',
    icon: '/icons/fasttrack.svg',
    keywords: ['intermittent fasting app', 'fasting tracker', '16:8 fasting', 'fasting timer', 'IF tracker'],
    status: 'coming-soon'
  },
  {
    slug: 'fasttrack2',
    name: 'FastTrack Pro',
    tagline: 'Advanced fasting for serious results.',
    headline: 'Fasting data that actually matters.',
    subhead: 'Metabolic zones. Long-term trends. Insights that move the needle.',
    description: 'Everything in FastTrack, plus detailed analytics, metabolic insights, and fasting history. For those who want to go deeper.',
    problem: "Basic fasting apps got you started, but now you want more. You want to understand your patterns, optimize your windows, and see long-term trends.",
    solution: "FastTrack Pro gives you the data without the overwhelm. Detailed fasting logs, metabolic zone tracking, and insights that help you fine-tune your protocol for maximum results.",
    features: [
      'Advanced metabolic zone tracking',
      'Detailed fasting history and analytics',
      'Custom protocol builder',
      'Export your data anytime'
    ],
    category: 'health',
    color: '#0EA5E9',
    colorSecondary: '#0284C7',
    icon: '/icons/fasttrack2.svg',
    keywords: ['advanced fasting app', 'fasting analytics', 'metabolic tracking', 'fasting zones', 'pro fasting tracker'],
    status: 'coming-soon'
  },
  {
    slug: 'focustimer',
    name: 'FocusTimer',
    tagline: 'Deep work. Zero distractions.',
    headline: 'Your distraction ends here.',
    subhead: '25 minutes of pure focus. Then rest. Repeat. This is how real work gets done.',
    description: 'Pomodoro-style focus sessions that actually help you get things done. Set your timer, lock in, and watch your productivity soar.',
    problem: "You sit down to work and three hours later you've checked email 47 times, scrolled Twitter, and accomplished nothing. Sound familiar?",
    solution: "FocusTimer uses the proven Pomodoro technique to break your work into focused sprints. 25 minutes of pure focus, 5 minutes rest. Repeat. Your best work happens here.",
    features: [
      'Customizable focus and break durations',
      'Session tracking and daily stats',
      'Minimal, distraction-free interface',
      "Gentle audio cues that don't interrupt flow"
    ],
    category: 'productivity',
    color: '#7C3AED',
    colorSecondary: '#6D28D9',
    icon: '/icons/focustimer.svg',
    keywords: ['pomodoro timer', 'focus app', 'productivity timer', 'deep work app', 'concentration app'],
    status: 'coming-soon'
  },
  {
    slug: 'simplestreaks',
    name: 'SimpleStreaks',
    tagline: 'Build habits that stick.',
    headline: 'Check the box. Build the life.',
    subhead: 'No gamification. No social features. Just you and your streak.',
    description: "The simplest habit tracker you'll ever use. No complicated features — just streaks that keep you accountable.",
    problem: "You've downloaded 10 habit trackers. They all have 50 features you don't need. You just want to check a box and see your streak grow.",
    solution: "SimpleStreaks is exactly what it sounds like. Add a habit. Check it off. Watch your streak build. That's it. No gamification, no social features, no BS.",
    features: [
      'One-tap daily check-ins',
      'Beautiful streak visualizations',
      'Unlimited habits',
      'Works offline, syncs when ready'
    ],
    category: 'productivity',
    color: '#F97316',
    colorSecondary: '#EA580C',
    icon: '/icons/simplestreaks.svg',
    keywords: ['habit tracker', 'streak app', 'daily habits', 'habit building', 'simple habit tracker'],
    status: 'coming-soon'
  },
  {
    slug: 'meditationapp',
    name: 'Meditation',
    tagline: 'Calm your mind. Anywhere.',
    headline: 'Two minutes to peace.',
    subhead: 'No 40-day programs. No commitment. Just calm when you need it.',
    description: 'Guided meditation sessions that fit your schedule. Whether you have 2 minutes or 20, find your peace.',
    problem: "You want to meditate but you don't have 30 minutes. Or you tried an app that wanted you to commit to a 40-day program before you could even start.",
    solution: "Meditation meets you where you are. Quick 2-minute breathing sessions when you're stressed. Longer guided practices when you have time. No judgment, no pressure, just peace.",
    features: [
      'Sessions from 2 to 30 minutes',
      'Guided and unguided options',
      'Streak calendar for daily practice',
      'Calming ambient sounds'
    ],
    category: 'mindfulness',
    color: '#8B5CF6',
    colorSecondary: '#7C3AED',
    icon: '/icons/meditationapp.svg',
    keywords: ['meditation app', 'guided meditation', 'mindfulness app', 'calm app', 'breathing exercises'],
    status: 'coming-soon'
  },
  {
    slug: 'breathingexercises',
    name: 'Breathing Exercises',
    tagline: 'Breathe better. Feel better.',
    headline: 'Control your nervous system.',
    subhead: 'Box breathing for calm. Wim Hof for energy. 4-7-8 for sleep. All in your pocket.',
    description: 'Science-backed breathing techniques for stress relief, focus, and sleep. Your breath is the remote control to your nervous system.',
    problem: "Stress hits and your mind races. You know breathing helps but you can't remember the technique. Was it 4 seconds in? 7 out? You give up.",
    solution: "Breathing Exercises guides you through proven techniques with visual cues you can follow eyes-closed. Box breathing for calm. Wim Hof for energy. 4-7-8 for sleep. All in your pocket.",
    features: [
      'Visual breathing guides you can feel',
      'Techniques for relaxation, focus, and sleep',
      'Session tracking and progress stats',
      'Works without headphones'
    ],
    category: 'mindfulness',
    color: '#0D9488',
    colorSecondary: '#0F766E',
    icon: '/icons/breathingexercises.svg',
    keywords: ['breathing app', 'breathwork', 'box breathing', 'stress relief app', 'anxiety breathing'],
    status: 'coming-soon'
  },
  {
    slug: 'affirmations',
    name: 'Affirmations',
    tagline: 'Rewire your mindset daily.',
    headline: 'Reprogram your brain.',
    subhead: 'Daily doses of positive programming. Read them. Say them. Believe them.',
    description: 'Start your day with powerful affirmations that shift your mindset. Your thoughts become your reality — make them count.',
    problem: "Negative self-talk is on autopilot. You wake up anxious, doubt yourself constantly, and your inner critic never shuts up.",
    solution: "Affirmations delivers daily doses of positive programming. Curated by category — confidence, wealth, health, relationships. Read them. Say them. Believe them. Watch your mindset shift.",
    features: [
      'Daily affirmation notifications',
      'Categories for every area of life',
      'Save your favorites',
      'Beautiful, minimal design'
    ],
    category: 'mindfulness',
    color: '#9333EA',
    colorSecondary: '#7C3AED',
    icon: '/icons/affirmations.svg',
    keywords: ['affirmations app', 'positive affirmations', 'daily motivation', 'mindset app', 'self improvement'],
    status: 'coming-soon'
  },
  {
    slug: 'quotes',
    name: 'Quotes',
    tagline: 'Wisdom on demand.',
    headline: 'Steal from the greats.',
    subhead: 'Timeless wisdom from people who actually did the thing.',
    description: 'The best quotes from the greatest minds. When you need inspiration, perspective, or a kick in the ass — Quotes delivers.',
    problem: "You're stuck. Unmotivated. Need a spark. You could scroll Instagram for hours hoping an algorithm shows you something meaningful. Or...",
    solution: "Quotes gives you instant access to timeless wisdom. Stoic philosophy. Entrepreneurship. Creativity. Love. Curated collections from people who've actually done the thing.",
    features: [
      'Thousands of curated quotes',
      'Browse by category or mood',
      'Save and share your favorites',
      'Daily quote notifications'
    ],
    category: 'lifestyle',
    color: '#6366F1',
    colorSecondary: '#4F46E5',
    icon: '/icons/quotes.svg',
    keywords: ['quotes app', 'inspirational quotes', 'motivational quotes', 'daily quotes', 'wisdom app'],
    status: 'coming-soon'
  },
  {
    slug: 'gymcoachai',
    name: 'GymCoach AI',
    tagline: 'Your AI-powered personal trainer.',
    headline: 'Stop winging your workouts.',
    subhead: 'AI that tracks recovery, builds routines, and tells you exactly what to do next.',
    description: 'Smart workout tracking meets AI coaching. GymCoach AI learns your patterns, tracks muscle recovery, and builds routines that actually work.',
    problem: "You go to the gym but you're just winging it. Same exercises. No progression. No idea if you're overtraining or undertraining.",
    solution: "GymCoach AI is like having a personal trainer in your pocket. Log workouts in seconds. Track muscle recovery so you never overtrain. Get AI-powered suggestions for your next session.",
    features: [
      'Visual muscle recovery tracking',
      'AI-generated workout suggestions',
      'Progress photo timeline',
      'Streak tracking for consistency'
    ],
    category: 'fitness',
    color: '#DC2626',
    colorSecondary: '#B91C1C',
    icon: '/icons/gymcoachai.svg',
    keywords: ['AI workout app', 'gym tracker', 'personal trainer app', 'muscle recovery', 'workout planner'],
    status: 'coming-soon'
  },
  {
    slug: 'workouttimer',
    name: 'WorkoutTimer',
    tagline: 'Interval training made easy.',
    headline: 'Focus on the work. Not the clock.',
    subhead: 'HIIT, Tabata, EMOM — whatever your protocol. Press play and go hard.',
    description: 'The perfect timer for HIIT, Tabata, circuits, and any interval-based workout. Set your intervals and let WorkoutTimer coach you through.',
    problem: "You're doing intervals but constantly checking the clock. It breaks your focus and kills your intensity.",
    solution: "WorkoutTimer handles the timing so you can focus on the work. Customizable work/rest intervals, audio cues, and visual countdowns. Just press play and go hard.",
    features: [
      'Custom work and rest intervals',
      'Preset workouts (Tabata, HIIT, EMOM)',
      'Audio and visual cues',
      'Workout history tracking'
    ],
    category: 'fitness',
    color: '#EF4444',
    colorSecondary: '#DC2626',
    icon: '/icons/workouttimer.svg',
    keywords: ['interval timer', 'HIIT timer', 'tabata timer', 'workout timer app', 'circuit training'],
    status: 'coming-soon'
  },
  {
    slug: 'flexflow',
    name: 'FlexFlow',
    tagline: 'Stretch smarter. Move better.',
    headline: 'Mobility is the foundation.',
    subhead: 'Guided stretches for recovery, flexibility, and not getting injured.',
    description: 'Guided stretching routines for flexibility, recovery, and injury prevention. Because mobility is the foundation of fitness.',
    problem: "You skip stretching because it's boring and you don't know what to do. Then you wonder why you're always tight and getting injured.",
    solution: "FlexFlow makes stretching as easy as following along. Routines organized by body part, difficulty, and duration. Morning mobility. Post-workout recovery. Desk break stretches. All covered.",
    features: [
      'Guided stretch routines with timers',
      'Routines for every body part',
      'Customizable difficulty levels',
      'HealthKit integration'
    ],
    category: 'fitness',
    color: '#F97316',
    colorSecondary: '#EA580C',
    icon: '/icons/flexflow.svg',
    keywords: ['stretching app', 'flexibility app', 'mobility exercises', 'stretch routine', 'recovery app'],
    status: 'coming-soon'
  },
  {
    slug: 'caloriecalculator',
    name: 'Calorie Calculator',
    tagline: 'Know your numbers.',
    headline: 'Math beats motivation.',
    subhead: 'Know your exact calorie target. Hit it. Watch your body change.',
    description: 'Calculate your daily calorie needs and track your intake. Simple math, big results.',
    problem: "You want to lose weight (or gain muscle) but you have no idea how many calories you should be eating. Every calculator gives different numbers.",
    solution: "Calorie Calculator uses proven formulas to give you accurate targets based on your stats and goals. Track your intake. Stay in your range. See results.",
    features: [
      'Accurate TDEE and BMR calculations',
      'Goals for cutting, bulking, or maintenance',
      'Simple daily calorie tracking',
      'Progress insights over time'
    ],
    category: 'health',
    color: '#16A34A',
    colorSecondary: '#15803D',
    icon: '/icons/caloriecalculator.svg',
    keywords: ['calorie calculator', 'TDEE calculator', 'calorie tracker', 'macro calculator', 'diet app'],
    status: 'coming-soon'
  },
  {
    slug: 'mealplanner',
    name: 'MealPlanner',
    tagline: 'Plan your meals. Simplify your life.',
    headline: 'Never ask "what\'s for dinner?" again.',
    subhead: 'Plan your week in minutes. Auto-generated shopping lists. Dinner: solved.',
    description: 'Weekly meal planning with auto-generated shopping lists. Stop asking "what\'s for dinner?" every single day.',
    problem: "Every day it's the same struggle. What do I eat? Do I have the ingredients? You end up ordering takeout again.",
    solution: "MealPlanner lets you plan your entire week in minutes. Browse recipes, drag them onto your calendar, and get an automatic shopping list. Dinner: solved.",
    features: [
      'Drag-and-drop meal calendar',
      'Recipe database with filters',
      'Auto-generated shopping lists',
      'Save your favorite meals'
    ],
    category: 'lifestyle',
    color: '#22C55E',
    colorSecondary: '#16A34A',
    icon: '/icons/mealplanner.svg',
    keywords: ['meal planning app', 'meal prep', 'weekly meal planner', 'recipe app', 'shopping list app'],
    status: 'coming-soon'
  },
  {
    slug: 'countdown',
    name: 'Countdown',
    tagline: 'Make every moment count.',
    headline: 'Make future events feel real.',
    subhead: 'That trip is 47 days away. That launch is in 12. Stay hungry.',
    description: 'Beautiful countdown timers for the events that matter. Vacations. Launches. Goals. Watch the days tick down.',
    problem: "You have big events coming up but they feel abstract. Someday. Eventually. You lose the excitement and urgency.",
    solution: "Countdown makes future events feel real. Add your big moments and watch time tick down day by day. That trip is 47 days away. That launch is in 12. Stay hungry.",
    features: [
      'Beautiful countdown widgets',
      'Multiple events at once',
      'Custom backgrounds and colors',
      'Notifications at milestones'
    ],
    category: 'lifestyle',
    color: '#DC2626',
    colorSecondary: '#B91C1C',
    icon: '/icons/countdown.svg',
    keywords: ['countdown app', 'event countdown', 'days until', 'countdown timer', 'countdown widget'],
    status: 'coming-soon'
  },
  {
    slug: 'convertly',
    name: 'Convertly',
    tagline: 'Convert anything. Instantly.',
    headline: 'Stop googling conversions.',
    subhead: '13 categories. Instant results. Works offline. Always accurate.',
    description: 'The only unit converter you\'ll ever need. Length, weight, temperature, volume, cooking measurements — all in one clean interface.',
    problem: "Quick, how many cups is 500ml? How many kilos is 180lbs? You're googling unit conversions multiple times a day.",
    solution: "Convertly puts every conversion at your fingertips. 13 categories, instant results, favorites for your common conversions. Fast, offline, and always accurate.",
    features: [
      '13 conversion categories',
      'Instant real-time results',
      'Save favorite conversions',
      'Works completely offline'
    ],
    category: 'utility',
    color: '#3B82F6',
    colorSecondary: '#2563EB',
    icon: '/icons/convertly.svg',
    keywords: ['unit converter', 'measurement converter', 'cooking converter', 'metric converter', 'conversion app'],
    status: 'coming-soon'
  },
  {
    slug: 'convertapps',
    name: 'ConvertApps',
    tagline: 'Files converted. Privacy kept.',
    headline: 'Your files never leave your phone.',
    subhead: 'Convert anything locally. HEIC to JPG. Images to PDF. Privacy by design.',
    description: 'Offline file conversion for images, PDFs, and documents. Everything happens on your device — nothing uploaded anywhere.',
    problem: "You need to convert a file but every website wants you to upload it to their servers. For all you know, they're keeping copies.",
    solution: "ConvertApps converts everything locally on your device. HEIC to JPG. PDF to PNG. Images to PDF. Your files never leave your phone. Privacy by design.",
    features: [
      '100% offline conversion',
      'Images: HEIC, JPG, PNG, WebP',
      'PDF creation and conversion',
      'Batch processing support'
    ],
    category: 'utility',
    color: '#EA580C',
    colorSecondary: '#DC2626',
    icon: '/icons/convertapps.svg',
    keywords: ['file converter', 'HEIC converter', 'image converter', 'PDF converter', 'offline converter'],
    status: 'coming-soon'
  },
  {
    slug: 'pdfast',
    name: 'PDFast',
    tagline: 'PDF power in your pocket.',
    headline: 'Desktop PDF power. In your pocket.',
    subhead: 'Scan. Sign. Merge. Split. No laptop required.',
    description: 'Scan, edit, merge, and sign PDFs right from your phone. Everything you need to handle documents on the go.',
    problem: "You need to sign a document but you're not at your computer. Or merge two PDFs. Or scan a receipt. Basic stuff that shouldn't require a laptop.",
    solution: "PDFast handles it all. Scan documents with your camera. Merge and split PDFs. Add signatures. Fill forms. Desktop-level PDF power in an app.",
    features: [
      'Document scanning with edge detection',
      'Merge and split PDFs',
      'Digital signatures',
      'Export to cloud storage'
    ],
    category: 'utility',
    color: '#0284C7',
    colorSecondary: '#0369A1',
    icon: '/icons/pdfast.svg',
    keywords: ['PDF editor', 'document scanner', 'PDF merger', 'sign PDF', 'PDF app'],
    status: 'coming-soon'
  },
  {
    slug: 'scansnap',
    name: 'ScanSnap',
    tagline: 'Scan smarter. Not harder.',
    headline: 'The scanner that thinks.',
    subhead: 'AI edge detection. Auto-removes your fingers. OCR that actually works.',
    description: 'The smartest document scanner for iPhone. Auto edge detection, OCR, and even AI-powered finger removal. Your documents, digitized perfectly.',
    problem: "You scan a document but it's crooked, your finger is in the shot, and good luck searching for text later.",
    solution: "ScanSnap uses AI to perfect your scans. Auto-detects edges. Removes fingers. Converts handwriting to searchable text. Export to any cloud. Scanning, evolved.",
    features: [
      'AI edge detection and perspective correction',
      'Handwriting OCR',
      'Automatic finger removal',
      'Export to iCloud, Dropbox, Google Drive'
    ],
    category: 'utility',
    color: '#2563EB',
    colorSecondary: '#1D4ED8',
    icon: '/icons/scansnap.svg',
    keywords: ['document scanner', 'OCR app', 'scan documents', 'receipt scanner', 'smart scanner'],
    status: 'coming-soon'
  },
  {
    slug: 'shotkeeper',
    name: 'Shotkeeper',
    tagline: 'Clean photos. More storage.',
    headline: 'Reclaim gigabytes in one tap.',
    subhead: 'AI finds duplicates, blurry shots, and screenshots clogging your library.',
    description: 'AI-powered photo cleanup that finds duplicates, blurry shots, and screenshots cluttering your library. Reclaim your storage.',
    problem: "Your photo library is a mess. 47 nearly-identical shots. Screenshots you forgot to delete. Blurry photos you'll never look at. And you're out of storage.",
    solution: "Shotkeeper scans your library and finds the junk. Duplicates grouped for easy cleanup. Blurry photos identified. Screenshots separated. One tap to free up gigabytes.",
    features: [
      'AI duplicate detection',
      'Blurry photo finder',
      'Screenshot organizer',
      'Storage savings calculator'
    ],
    category: 'utility',
    color: '#06B6D4',
    colorSecondary: '#0891B2',
    icon: '/icons/shotkeeper.svg',
    keywords: ['photo cleaner', 'duplicate photo finder', 'storage cleaner', 'photo organizer', 'iPhone storage'],
    status: 'coming-soon'
  },
  {
    slug: 'thinkflow',
    name: 'ThinkFlow',
    tagline: 'Think out loud. Capture everything.',
    headline: 'Your ideas never escape again.',
    subhead: 'Talk. It transcribes. Search through everything later.',
    description: 'Voice-to-text notes that let you think freely. Talk through ideas and ThinkFlow turns your words into searchable notes.',
    problem: "Your best ideas come when you can't type. In the shower. While driving. Walking. By the time you can write them down, they're gone.",
    solution: "ThinkFlow lets you capture thoughts instantly with your voice. Hit record, think out loud, and watch your words become organized notes. Search through everything later.",
    features: [
      'One-tap voice recording',
      'Accurate speech-to-text',
      'Searchable note library',
      'Organize with tags and folders'
    ],
    category: 'productivity',
    color: '#2563EB',
    colorSecondary: '#1D4ED8',
    icon: '/icons/thinkflow.svg',
    keywords: ['voice notes', 'speech to text', 'voice recorder', 'note taking app', 'transcription app'],
    status: 'coming-soon'
  },
  {
    slug: 'whitenoise',
    name: 'WhiteNoise',
    tagline: 'Sound that helps you focus and sleep.',
    headline: 'Block out the world.',
    subhead: 'Rain for focus. Ocean for sleep. Coffee shop for flow. Your soundscape.',
    description: 'Curated ambient sounds for concentration, relaxation, and sleep. Block distractions and create your perfect audio environment.',
    problem: "You can't focus with noise. You can't sleep in silence. You've tried music but lyrics distract you. You need something in between.",
    solution: "WhiteNoise gives you the perfect audio backdrop. Rain for focus. Ocean waves for sleep. Coffee shop ambiance for productivity. Mix and match to create your ideal soundscape.",
    features: [
      'Library of ambient sounds',
      'Create custom sound mixes',
      'Sleep timer with gentle fade',
      'Offline playback'
    ],
    category: 'mindfulness',
    color: '#475569',
    colorSecondary: '#334155',
    icon: '/icons/whitenoise.svg',
    keywords: ['white noise app', 'ambient sounds', 'sleep sounds', 'focus sounds', 'relaxation app'],
    status: 'coming-soon'
  },
  {
    slug: 'astroapp',
    name: 'AstroApp',
    tagline: 'Your cosmic blueprint.',
    headline: 'Know yourself through the stars.',
    subhead: 'Real natal charts. Personalized horoscopes. Not generic nonsense.',
    description: 'Natal charts, daily horoscopes, and zodiac insights powered by real astrology. Understand yourself through the stars.',
    problem: "You're curious about astrology but most apps are surface-level. Generic horoscopes. No real depth. No personalization.",
    solution: "AstroApp calculates your complete natal chart based on your exact birth data. Understand your sun, moon, rising, and planetary placements. Get daily insights tailored to your chart.",
    features: [
      'Accurate natal chart calculations',
      'Daily personalized horoscopes',
      'Moon phase tracking',
      'Zodiac compatibility insights'
    ],
    category: 'lifestyle',
    color: '#312E81',
    colorSecondary: '#1E1B4B',
    icon: '/icons/astroapp.svg',
    keywords: ['astrology app', 'natal chart', 'horoscope app', 'zodiac app', 'birth chart'],
    status: 'coming-soon'
  },
  {
    slug: 'dresscode',
    name: 'Dresscode',
    tagline: 'Dress for your colors.',
    headline: 'Stop buying clothes that look wrong.',
    subhead: 'Find your colors. Shop smarter. Always look good.',
    description: 'Discover your seasonal color palette and learn which colors make you look your best. Style smarter with color theory.',
    problem: "You buy clothes that looked great in the store but somehow look wrong on you. You don't know what colors actually suit you.",
    solution: "Dresscode analyzes your features and reveals your seasonal color palette. Warm, cool, deep, light — understand what works for you. Shop smarter. Look better. Always.",
    features: [
      'Seasonal color analysis',
      'Personalized color palette',
      'Style recommendations',
      'Save outfit inspirations'
    ],
    category: 'lifestyle',
    color: '#DB2777',
    colorSecondary: '#BE185D',
    icon: '/icons/dresscode.svg',
    keywords: ['color analysis', 'seasonal colors', 'style app', 'fashion app', 'color palette'],
    status: 'coming-soon'
  },
  {
    slug: 'firststep',
    name: 'FirstStep',
    tagline: 'Start here. Go anywhere.',
    headline: 'Become who you want to be.',
    subhead: 'Structured lessons. Daily reflections. One step at a time.',
    description: 'A guided personal development program with phased lessons, reflections, and exercises. Your first step to becoming who you want to be.',
    problem: "You want to improve yourself but don't know where to start. Self-help content is overwhelming. You need a structured path.",
    solution: "FirstStep gives you a clear roadmap. Phased lessons that build on each other. Daily reflections to process what you learn. Exercises to put it into practice. One step at a time.",
    features: [
      'Structured learning phases',
      'Daily reflection prompts',
      'Confidence-building exercises',
      'Track your growth journey'
    ],
    category: 'mindfulness',
    color: '#65A30D',
    colorSecondary: '#4D7C0F',
    icon: '/icons/firststep.svg',
    keywords: ['personal development', 'self improvement app', 'growth app', 'confidence app', 'life coaching'],
    status: 'coming-soon'
  },
  {
    slug: 'healthintelligence',
    name: 'Health Intelligence',
    tagline: 'Smart fasting. Smarter you.',
    headline: 'Fasting with intelligence.',
    subhead: 'Metabolic readiness scores. Smart recommendations. Know when to fast.',
    description: 'Advanced fasting tracker with metabolic readiness scoring and meal logging. Data-driven fasting for optimal results.',
    problem: "You're fasting but flying blind. Is your body ready for another fast? Are you eating the right things in your window? You have no idea.",
    solution: "Health Intelligence tracks more than just time. Metabolic readiness scores tell you when you're primed to fast. Meal logging shows what fuels you best. Fasting with intelligence.",
    features: [
      'Metabolic readiness scoring',
      'Fasting zone tracking',
      'Meal and nutrition logging',
      'Smart fasting recommendations'
    ],
    category: 'health',
    color: '#0891B2',
    colorSecondary: '#0E7490',
    icon: '/icons/healthintelligence.svg',
    keywords: ['metabolic health', 'fasting app', 'health tracker', 'nutrition app', 'smart fasting'],
    status: 'coming-soon'
  }
];

export const categories = {
  health: { name: 'Health', color: '#22C55E', icon: '❤️' },
  fitness: { name: 'Fitness', color: '#EF4444', icon: '💪' },
  productivity: { name: 'Productivity', color: '#8B5CF6', icon: '⚡' },
  mindfulness: { name: 'Mindfulness', color: '#06B6D4', icon: '🧘' },
  lifestyle: { name: 'Lifestyle', color: '#F59E0B', icon: '✨' },
  utility: { name: 'Utility', color: '#6366F1', icon: '🛠️' }
};

export function getAppBySlug(slug: string): App | undefined {
  return apps.find(app => app.slug === slug);
}

export function getAppsByCategory(category: App['category']): App[] {
  return apps.filter(app => app.category === category);
}
