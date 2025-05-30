export const initialAnalyticsData = {
  weeklyStats: {
    exerciseMinutes: 180,
    meditationMinutes: 120,
    waterIntake: 2800, // ml
    sleepHours: 49, // total for the week
    moodAverage: 4.2 // out of 5
  },
  monthlyProgress: {
    goalsCompleted: 12,
    streakDays: 15,
    journalEntries: 20,
    chatSessions: 8
  },
  trends: {
    exercise: [
      { date: '2024-03-14', minutes: 25 },
      { date: '2024-03-15', minutes: 30 },
      { date: '2024-03-16', minutes: 20 },
      { date: '2024-03-17', minutes: 35 },
      { date: '2024-03-18', minutes: 25 },
      { date: '2024-03-19', minutes: 30 },
      { date: '2024-03-20', minutes: 15 }
    ],
    mood: [
      { date: '2024-03-14', score: 4 },
      { date: '2024-03-15', score: 5 },
      { date: '2024-03-16', score: 3 },
      { date: '2024-03-17', score: 4 },
      { date: '2024-03-18', score: 5 },
      { date: '2024-03-19', score: 4 },
      { date: '2024-03-20', score: 4 }
    ],
    sleep: [
      { date: '2024-03-14', hours: 7.5 },
      { date: '2024-03-15', hours: 8 },
      { date: '2024-03-16', hours: 6.5 },
      { date: '2024-03-17', hours: 7 },
      { date: '2024-03-18', hours: 8 },
      { date: '2024-03-19', hours: 7.5 },
      { date: '2024-03-20', hours: 7 }
    ]
  },
  achievements: [
    {
      id: 'ach_1',
      title: 'Exercise Streak',
      description: 'Completed 5 days of exercise in a row',
      date: '2024-03-19',
      icon: '🏃‍♀️'
    },
    {
      id: 'ach_2',
      title: 'Hydration Master',
      description: 'Met daily water intake goal for 7 days',
      date: '2024-03-18',
      icon: '💧'
    },
    {
      id: 'ach_3',
      title: 'Mindfulness Pro',
      description: 'Completed 10 meditation sessions',
      date: '2024-03-17',
      icon: '��‍♀️'
    }
  ]
}; 