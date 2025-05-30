export const initialChatSessionsData = [
  {
    id: 'chat_1',
    title: 'Morning Check-in',
    startTime: '2024-03-20T08:00:00Z',
    durationMinutes: 15,
    messages: [
      {
        id: 'msg_1',
        sender: 'companion',
        text: 'Good morning Penny! How are you feeling today?',
        timestamp: '2024-03-20T08:00:00Z'
      },
      {
        id: 'msg_2',
        sender: 'user',
        text: 'Good morning! I\'m feeling pretty good today. Ready to tackle my workout.',
        timestamp: '2024-03-20T08:01:00Z'
      },
      {
        id: 'msg_3',
        sender: 'companion',
        text: 'That\'s great to hear! I see you have a HIIT workout scheduled. Would you like some tips for getting the most out of it?',
        timestamp: '2024-03-20T08:02:00Z'
      }
    ]
  },
  {
    id: 'chat_2',
    title: 'Stress Management',
    startTime: '2024-03-19T14:30:00Z',
    durationMinutes: 20,
    messages: [
      {
        id: 'msg_4',
        sender: 'companion',
        text: 'Hi Penny, I noticed you had a busy morning. How are you holding up?',
        timestamp: '2024-03-19T14:30:00Z'
      },
      {
        id: 'msg_5',
        sender: 'user',
        text: 'Feeling a bit overwhelmed with work deadlines.',
        timestamp: '2024-03-19T14:31:00Z'
      },
      {
        id: 'msg_6',
        sender: 'companion',
        text: 'I understand. Would you like to try a quick breathing exercise to help manage the stress?',
        timestamp: '2024-03-19T14:32:00Z'
      }
    ]
  }
]; 