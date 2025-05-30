import React, { useState } from 'react';
import { Menu as MenuIcon, Edit3, Mic, Type, Send } from 'lucide-react';
import { PlusIcon } from '@heroicons/react/24/outline';

const JournalScreen = ({
  entries,
  openDrawer,
  addJournalEntry
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [newEntry, setNewEntry] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.trim()) {
      addJournalEntry({
        id: `entry_${Date.now()}`,
        date: new Date().toISOString(),
        title: newEntry.split('\n')[0],
        content: newEntry,
        mood: 'neutral'
      });
      setNewEntry('');
      setIsTyping(false);
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Add voice recording logic here
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      addJournalEntry({
        id: Date.now(),
        date: new Date().toISOString(),
        title: newEntry.split('\n')[0],
        content: newEntry,
        mood: 'neutral'
      });
      setNewEntry('');
      setIsTyping(false);
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-semibold text-text-primary">Journal</h1>
        <button 
          onClick={handleAddEntry}
          className="btn btn-primary flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          New Entry
        </button>
      </div>

      <div className="card">
        <textarea
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="How are you feeling today?"
          className="input min-h-[100px] resize-none"
        />
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="card">
            <p className="text-text-primary whitespace-pre-wrap">{entry.content}</p>
            <p className="text-sm text-text-secondary mt-2">
              {formatDate(entry.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalScreen; 