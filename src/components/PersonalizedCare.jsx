import React from 'react';
import { CheckSquare, Square, ChevronDown, ChevronUp } from 'lucide-react';

const PersonalizedCare = ({
  schedule,
  pageTitle,
  personalizedCareIntro,
  view,
  handleViewToggle,
  onUpdateActivityCompletion
}) => {
  const [expandedSections, setExpandedSections] = React.useState(
    Object.keys(schedule).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const handleActivityToggle = (sectionKey, itemId) => {
    onUpdateActivityCompletion(view, sectionKey, itemId);
  };

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{pageTitle}</h2>
        <button
          onClick={handleViewToggle}
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          {view === 'today' ? 'View Tomorrow' : 'View Today'}
        </button>
      </div>

      {personalizedCareIntro && (
        <p className="text-gray-600 mb-6">{personalizedCareIntro}</p>
      )}

      <div className="space-y-4">
        {Object.entries(schedule).map(([sectionKey, section]) => (
          <div
            key={sectionKey}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleSection(sectionKey)}
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${section.colorClass}`}>
                  {section.icon}
                </div>
                <span className="font-medium text-gray-900">
                  {section.title}
                </span>
              </div>
              {expandedSections[sectionKey] ? (
                <ChevronUp size={20} className="text-gray-400" />
              ) : (
                <ChevronDown size={20} className="text-gray-400" />
              )}
            </button>

            {expandedSections[sectionKey] && (
              <div className="p-4 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-3"
                  >
                    <button
                      onClick={() => handleActivityToggle(sectionKey, item.id)}
                      className="mt-1"
                    >
                      {item.completed ? (
                        <CheckSquare
                          size={20}
                          className="text-green-500"
                        />
                      ) : (
                        <Square
                          size={20}
                          className="text-gray-400"
                        />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.time}
                          </p>
                        </div>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                        )}
                      </div>
                      {item.durationOptions && (
                        <div className="mt-2 flex space-x-2">
                          {item.durationOptions.map((duration) => (
                            <span
                              key={duration}
                              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                            >
                              {duration}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalizedCare; 