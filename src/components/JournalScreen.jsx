import React, { useState } from 'react';
import { Menu as MenuIcon, Edit3, Mic, Type, Send } from 'lucide-react';

const JournalScreen = ({
  entries,
  openDrawer,
  addJournalEntry,
  getScheduleForDate,
  getChatsForDate
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Journal</h1>
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MenuIcon size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-4">
              <button
                type="button"
                onClick={() => setIsTyping(!isTyping)}
                className={`p-2 rounded-full ${
                  isTyping ? 'bg-gray-100' : 'hover:bg-gray-50'
                }`}
              >
                <Type size={20} className="text-gray-600" />
              </button>
              <button
                type="button"
                onClick={toggleRecording}
                className={`p-2 rounded-full ${
                  isRecording ? 'bg-red-100' : 'hover:bg-gray-50'
                }`}
              >
                <Mic
                  size={20}
                  className={isRecording ? 'text-red-500' : 'text-gray-600'}
                />
              </button>
            </div>
            {isTyping && (
              <div className="space-y-4">
                <textarea
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Save Entry</span>
                </button>
              </div>
            )}
          </div>
        </form>

        <div className="space-y-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-lg shadow-sm p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {entry.title}
                </h3>
                <span className="text-sm text-gray-500">
                  {formatDate(entry.date)}
                </span>
              </div>
              <p className="text-gray-600 whitespace-pre-wrap">
                {entry.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalScreen; 