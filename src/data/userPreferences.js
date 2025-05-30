export const initialUserPreferences = {
  notifications: {
    enabled: true,
    mealReminders: true,
    exerciseReminders: true,
    medicationReminders: true,
    journalReminders: true,
    reminderTime: '09:00'
  },
  theme: {
    mode: 'light',
    primaryColor: '#4F46E5',
    fontSize: 'medium'
  },
  privacy: {
    shareData: false,
    shareLocation: false,
    shareActivity: false
  },
  accessibility: {
    highContrast: false,
    screenReader: false,
    reducedMotion: false
  },
  language: 'en',
  timezone: 'America/New_York'
}; 