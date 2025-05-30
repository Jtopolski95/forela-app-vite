import React from 'react';
import { Menu as MenuIcon, BarChart2, TrendingUp, Activity, Heart } from 'lucide-react';

const AnalyticsScreen = ({ openDrawer }) => {
  const mockData = {
    activityCompletion: {
      meals: 75,
      movement: 60,
      mentalHealth: 85,
      sleep: 90
    },
    weeklyProgress: [
      { day: 'Mon', value: 80 },
      { day: 'Tue', value: 65 },
      { day: 'Wed', value: 90 },
      { day: 'Thu', value: 75 },
      { day: 'Fri', value: 85 },
      { day: 'Sat', value: 70 },
      { day: 'Sun', value: 95 }
    ],
    moodTrend: [
      { day: 'Mon', value: 4 },
      { day: 'Tue', value: 3 },
      { day: 'Wed', value: 5 },
      { day: 'Thu', value: 4 },
      { day: 'Fri', value: 5 },
      { day: 'Sat', value: 4 },
      { day: 'Sun', value: 5 }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MenuIcon size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Activity size={20} className="text-blue-500" />
              <h3 className="text-sm font-medium text-gray-900">
                Activity Completion
              </h3>
            </div>
            <div className="space-y-2">
              {Object.entries(mockData.activityCompletion).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-sm font-medium text-gray-900">
                    {value}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp size={20} className="text-green-500" />
              <h3 className="text-sm font-medium text-gray-900">
                Weekly Progress
              </h3>
            </div>
            <div className="h-32 flex items-end space-x-2">
              {mockData.weeklyProgress.map((item) => (
                <div
                  key={item.day}
                  className="flex-1 flex flex-col items-center"
                >
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${item.value}%` }}
                  />
                  <span className="text-xs text-gray-500 mt-1">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Heart size={20} className="text-red-500" />
            <h3 className="text-sm font-medium text-gray-900">Mood Trend</h3>
          </div>
          <div className="h-32 flex items-end space-x-2">
            {mockData.moodTrend.map((item) => (
              <div
                key={item.day}
                className="flex-1 flex flex-col items-center"
              >
                <div
                  className="w-full bg-red-500 rounded-t"
                  style={{ height: `${(item.value / 5) * 100}%` }}
                />
                <span className="text-xs text-gray-500 mt-1">
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen; 