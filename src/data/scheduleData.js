export const initialScheduleData = {
  dailySchedule: [
    {
      id: 'act_1',
      time: '07:00',
      activity: 'Morning Meditation',
      type: 'wellness',
      duration: 15,
      completed: true
    },
    {
      id: 'act_2',
      time: '08:00',
      activity: 'Breakfast',
      type: 'meal',
      duration: 30,
      completed: true
    },
    {
      id: 'act_3',
      time: '09:00',
      activity: 'HIIT Workout',
      type: 'exercise',
      duration: 45,
      completed: false
    },
    {
      id: 'act_4',
      time: '12:00',
      activity: 'Lunch',
      type: 'meal',
      duration: 45,
      completed: false
    },
    {
      id: 'act_5',
      time: '15:00',
      activity: 'Afternoon Walk',
      type: 'exercise',
      duration: 30,
      completed: false
    },
    {
      id: 'act_6',
      time: '18:00',
      activity: 'Dinner',
      type: 'meal',
      duration: 60,
      completed: false
    },
    {
      id: 'act_7',
      time: '21:00',
      activity: 'Evening Journal',
      type: 'wellness',
      duration: 20,
      completed: false
    }
  ],
  weeklyGoals: [
    {
      id: 'goal_1',
      title: 'Exercise 5 times',
      progress: 3,
      target: 5,
      type: 'exercise'
    },
    {
      id: 'goal_2',
      title: 'Meditate daily',
      progress: 5,
      target: 7,
      type: 'wellness'
    },
    {
      id: 'goal_3',
      title: 'Drink 2L water daily',
      progress: 4,
      target: 7,
      type: 'health'
    }
  ],
  upcomingEvents: [
    {
      id: 'event_1',
      title: 'Doctor Appointment',
      date: '2024-03-25',
      time: '10:00',
      type: 'medical',
      location: 'City Medical Center'
    },
    {
      id: 'event_2',
      title: 'Yoga Class',
      date: '2024-03-23',
      time: '09:00',
      type: 'wellness',
      location: 'Community Center'
    }
  ]
}; 