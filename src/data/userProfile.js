export const initialUserProfile = {
  personalInfo: {
    name: 'Penny',
    age: 32,
    gender: 'female',
    height: 165, // cm
    weight: 58, // kg
    bloodType: 'O+',
    allergies: ['Peanuts', 'Shellfish'],
    medications: [
      {
        name: 'Vitamin D',
        dosage: '1000 IU',
        frequency: 'daily',
        time: 'morning'
      }
    ]
  },
  healthGoals: [
    {
      id: 'goal_1',
      title: 'Improve Sleep Quality',
      target: '7-8 hours per night',
      progress: 75
    },
    {
      id: 'goal_2',
      title: 'Increase Daily Steps',
      target: '10,000 steps',
      progress: 60
    },
    {
      id: 'goal_3',
      title: 'Reduce Stress',
      target: 'Daily meditation',
      progress: 80
    }
  ],
  preferences: {
    dietaryRestrictions: ['Vegetarian'],
    exercisePreferences: ['Yoga', 'HIIT', 'Walking'],
    sleepSchedule: {
      bedtime: '22:00',
      wakeupTime: '06:30'
    },
    notificationPreferences: {
      mealReminders: true,
      exerciseReminders: true,
      medicationReminders: true,
      waterReminders: true
    }
  },
  emergencyContacts: [
    {
      name: 'Dr. Sarah Johnson',
      relationship: 'Primary Care Physician',
      phone: '+1 (555) 123-4567'
    },
    {
      name: 'John Smith',
      relationship: 'Emergency Contact',
      phone: '+1 (555) 987-6543'
    }
  ]
}; 