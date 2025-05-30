// Penny's Mock Data
export const initialPennyUserData = {
  firstName: 'Penny',
  lastName: 'Lane',
  middleName: '',
  email: 'penny.lane@example.com',
  dob: '1985-07-15',
  personalizedCareIntroToday: "Penny, with your packed schedule, today's plan focuses on quick, nourishing meals and short, effective exercises and mindfulness moments. Let's make every minute count for your well-being.",
  journalPromptToday: "Even with a hectic day, what's one small way you can prioritize your well-being for a few minutes?",
  lessonOfTheDay: {
    text: "Taking just 5 minutes for deep breathing can significantly reduce stress, improve mood, and lower blood pressure. It's a small investment with big returns for your busy life.",
    affirmation: "I am capable, I am strong, and I make time for what matters.",
    image: "https://placehold.co/600x150/A0D2DB/FFFFFF?text=Calm+Forest+Path",
  },
  scheduleToday: { 
    meals: {
      title: 'Quick Meals', icon: 'Utensils', colorClass: 'bg-forelaPink', textColorClass: 'text-forelaPinkText', bgColorLightClass: 'bg-forelaPinkLight', colorHex: '#D99C8F', baseColorName: 'forelaPink',
      items: [ 
          { id: 'pm1', time: '7am', name: 'Overnight Oats with Berries & Nuts', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=Oats', completed: true, type: 'food' }, 
          {id: 'pm2', time: '12pm', name: 'Leftover Chicken Salad Lettuce Wraps', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=Salad', completed: false, type: 'food'},
          {id: 'pm3', time: '6pm', name: 'Sheet Pan Salmon & Asparagus', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=Salmon', completed: false, type: 'food'}
      ],
    },
    movement: {
      title: 'Quick Movement', icon: 'Bike', colorClass: 'bg-forelaOrange', textColorClass: 'text-forelaOrangeText', bgColorLightClass: 'bg-forelaOrangeLight', colorHex: '#A36456', baseColorName: 'forelaOrange',
      items: [ 
          { id: 'pmv1', time: '6:30am', name: '15min HIIT Workout Video', image: 'https://placehold.co/100x100/F0E2DF/6D443A?text=HIIT', completed: true, durationOptions: ['10m', '15m', '20m'] },
          { id: 'pmv2', time: '3pm', name: '5min Desk Stretches', image: 'https://placehold.co/100x100/F0E2DF/6D443A?text=Stretch', completed: false, durationOptions: ['3m', '5m', '7m'] } 
      ],
    },
    mentalHealth: {
      title: 'Mindful Moments', icon: 'Smile', colorClass: 'bg-forelaDarkBlue', textColorClass: 'text-forelaDarkBlueText', bgColorLightClass: 'bg-forelaDarkBlueLight', colorHex: '#082026', baseColorName: 'forelaDarkBlue',
      items: [ 
          { id: 'pmh1', time: 'Commute', name: '3min Guided Breathing (Audio)', image: 'https://placehold.co/100x100/E6E8E9/082026?text=Breath', completed: false, durationOptions: ['3m', '5m'], activityOptions: ['Breathing', 'Quick Scan'] },
          { id: 'pmh2', time: 'Evening', name: '5min Gratitude Reflection', image: 'https://placehold.co/100x100/E6E8E9/082026?text=Gratitude', completed: false, durationOptions: ['3m', '5m'], activityOptions: ['Gratitude', 'Reflection'] } 
      ],
    },
     sleep: { 
      title: 'Sleep Prep', icon: 'Moon', colorClass: 'bg-forelaLightBlue', textColorClass: 'text-forelaLightBlueText', bgColorLightClass: 'bg-forelaLightBlueLight', colorHex: '#1E6E8B', baseColorName: 'forelaLightBlue',
      items: [ 
          { id: 'ps1', time: '9:30pm', name: 'Set out clothes for tomorrow.', image: 'https://placehold.co/100x100/DAEBF0/104457?text=Prep', completed: false, type: 'recommendation' },
          { id: 'ps2', time: '10:00pm', name: 'Read a book for 15min (no screens).', image: 'https://placehold.co/100x100/DAEBF0/104457?text=Read', completed: false, type: 'recommendation' }
      ],
    },
  }
};

export const pennyTomorrowScheduleData = {
  meals: {
    title: 'Tomorrow\'s Meals', icon: 'Utensils', colorClass: 'bg-forelaPink', textColorClass: 'text-forelaPinkText', bgColorLightClass: 'bg-forelaPinkLight', colorHex: '#D99C8F', baseColorName: 'forelaPink',
    items: [
      { id: 'tm1', time: '7am', name: 'Smoothie Bowl', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=Smoothie', completed: false, type: 'food' },
      { id: 'tm2', time: '12pm', name: 'Quinoa Salad', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=Salad', completed: false, type: 'food' },
      { id: 'tm3', time: '6pm', name: 'Vegetable Stir Fry', image: 'https://placehold.co/100x100/F6EAE7/8C5A51?text=StirFry', completed: false, type: 'food' }
    ],
  },
  movement: {
    title: 'Tomorrow\'s Movement', icon: 'Bike', colorClass: 'bg-forelaOrange', textColorClass: 'text-forelaOrangeText', bgColorLightClass: 'bg-forelaOrangeLight', colorHex: '#A36456', baseColorName: 'forelaOrange',
    items: [
      { id: 'tmv1', time: '6:30am', name: '20min Yoga Flow', image: 'https://placehold.co/100x100/F0E2DF/6D443A?text=Yoga', completed: false, durationOptions: ['15m', '20m', '30m'] },
      { id: 'tmv2', time: '3pm', name: '10min Core Workout', image: 'https://placehold.co/100x100/F0E2DF/6D443A?text=Core', completed: false, durationOptions: ['5m', '10m', '15m'] }
    ],
  },
  mentalHealth: {
    title: 'Tomorrow\'s Mindful Moments', icon: 'Smile', colorClass: 'bg-forelaDarkBlue', textColorClass: 'text-forelaDarkBlueText', bgColorLightClass: 'bg-forelaDarkBlueLight', colorHex: '#082026', baseColorName: 'forelaDarkBlue',
    items: [
      { id: 'tmh1', time: 'Morning', name: '5min Morning Meditation', image: 'https://placehold.co/100x100/E6E8E9/082026?text=Meditate', completed: false, durationOptions: ['3m', '5m'], activityOptions: ['Meditation', 'Breathing'] },
      { id: 'tmh2', time: 'Evening', name: 'Gratitude Journaling', image: 'https://placehold.co/100x100/E6E8E9/082026?text=Journal', completed: false, durationOptions: ['5m', '10m'], activityOptions: ['Gratitude', 'Reflection'] }
    ],
  },
  sleep: {
    title: 'Tomorrow\'s Sleep Prep', icon: 'Moon', colorClass: 'bg-forelaLightBlue', textColorClass: 'text-forelaLightBlueText', bgColorLightClass: 'bg-forelaLightBlueLight', colorHex: '#1E6E8B', baseColorName: 'forelaLightBlue',
    items: [
      { id: 'ts1', time: '9:30pm', name: 'Prepare for bed', image: 'https://placehold.co/100x100/DAEBF0/104457?text=Bed', completed: false, type: 'recommendation' },
      { id: 'ts2', time: '10:00pm', name: 'Read a book for 15min', image: 'https://placehold.co/100x100/DAEBF0/104457?text=Read', completed: false, type: 'recommendation' }
    ],
  },
};

export const pennyPersonalizedCareIntroTomorrow = "Tomorrow's plan is designed to help you start your day with energy and end it with peace. Let's prepare for a balanced day ahead.";

export const pennyJournalPromptTomorrow = "What are you looking forward to tomorrow, and how can you prepare for it today?";

export const defaultBottomNavItems = [
  { viewId: 'today', label: 'Today', icon: 'Home' },
  { viewId: 'journal', label: 'Journal', icon: 'MessageSquare' },
  { viewId: 'companion', label: 'Companion', icon: 'MessageSquare' }
];

export const allSelectableNavItems = [
  { id: 'today', label: 'Today', navIcon: 'Home', viewId: 'today' },
  { id: 'journal', label: 'Journal', navIcon: 'MessageSquare', viewId: 'journal' },
  { id: 'companion', label: 'Companion', navIcon: 'MessageSquare', viewId: 'companion' },
  { id: 'analytics', label: 'Analytics', navIcon: 'BarChart2', viewId: 'analytics' },
  { id: 'settings', label: 'Settings', navIcon: 'Settings', viewId: 'settings' },
  { id: 'symptoms', label: 'Support', navIcon: 'Heart', viewId: 'symptoms' }
]; 