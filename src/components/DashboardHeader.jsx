import React from 'react';
import { Menu as MenuIcon, Edit3 } from 'lucide-react';

const DashboardHeader = ({
  userName,
  journalPrompt,
  showJournalButton,
  greeting,
  navigateToJournal,
  openDrawer,
  lessonOfTheDay
}) => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          {greeting}, {userName}
        </h1>
        <button
          onClick={openDrawer}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <MenuIcon size={24} className="text-gray-600" />
        </button>
      </div>

      {lessonOfTheDay && (
        <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-start space-x-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Today's Lesson
              </h3>
              <p className="text-gray-600 mb-3">{lessonOfTheDay.text}</p>
              <p className="text-sm font-medium text-gray-900">
                {lessonOfTheDay.affirmation}
              </p>
            </div>
            {lessonOfTheDay.image && (
              <img
                src={lessonOfTheDay.image}
                alt="Lesson illustration"
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      )}

      {showJournalButton && journalPrompt && (
        <button
          onClick={navigateToJournal}
          className="w-full bg-white rounded-lg shadow-sm p-4 text-left hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-start space-x-3">
            <Edit3 size={20} className="text-gray-400 mt-1" />
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                Journal Prompt
              </h3>
              <p className="text-sm text-gray-600">{journalPrompt}</p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default DashboardHeader; 