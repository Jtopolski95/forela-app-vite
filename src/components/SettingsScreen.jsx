import React, { useState } from 'react';
import { Menu as MenuIcon, User, Bell, MessageSquare, Smartphone } from 'lucide-react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export function SettingsScreen({
  openDrawer,
  appSettings,
  updateAppSetting,
  userProfile,
  updateUserProfile
}) {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState(userProfile);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: 'en'
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(editedProfile);
    setIsEditingProfile(false);
  };

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const settingsSections = [
    {
      title: 'Preferences',
      items: [
        {
          id: 'notifications',
          label: 'Push Notifications',
          type: 'toggle',
          value: settings.notifications
        },
        {
          id: 'darkMode',
          label: 'Dark Mode',
          type: 'toggle',
          value: settings.darkMode
        }
      ]
    },
    {
      title: 'Account',
      items: [
        {
          id: 'language',
          label: 'Language',
          type: 'select',
          value: settings.language,
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' }
          ]
        },
        {
          id: 'privacy',
          label: 'Privacy Settings',
          type: 'link'
        },
        {
          id: 'help',
          label: 'Help & Support',
          type: 'link'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <button
            onClick={openDrawer}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <MenuIcon size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-4">
              <User size={20} className="text-gray-600" />
              <h2 className="text-lg font-medium text-gray-900">Profile</h2>
            </div>

            {isEditingProfile ? (
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={editedProfile.firstName}
                    onChange={(e) =>
                      setEditedProfile({ ...editedProfile, firstName: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={editedProfile.lastName}
                    onChange={(e) =>
                      setEditedProfile({ ...editedProfile, lastName: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) =>
                      setEditedProfile({ ...editedProfile, email: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-gray-500">Name</span>
                  <p className="text-gray-900">
                    {userProfile.firstName} {userProfile.lastName}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Email</span>
                  <p className="text-gray-900">{userProfile.email}</p>
                </div>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* Notifications Section */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Bell size={20} className="text-gray-600" />
              <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Activity Reminders
                  </h3>
                  <p className="text-sm text-gray-500">
                    Get reminded about your daily activities
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appSettings.activityReminders}
                    onChange={(e) =>
                      updateAppSetting('activityReminders', e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Journal Reminders
                  </h3>
                  <p className="text-sm text-gray-500">
                    Get reminded to write in your journal
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appSettings.journalReminders}
                    onChange={(e) =>
                      updateAppSetting('journalReminders', e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Companion Settings */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-4">
              <MessageSquare size={20} className="text-gray-600" />
              <h2 className="text-lg font-medium text-gray-900">
                Companion Settings
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Daily Check-ins
                  </h3>
                  <p className="text-sm text-gray-500">
                    Receive daily check-in messages from your companion
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appSettings.dailyCheckIns}
                    onChange={(e) =>
                      updateAppSetting('dailyCheckIns', e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* App Settings */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone size={20} className="text-gray-600" />
              <h2 className="text-lg font-medium text-gray-900">App Settings</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Dark Mode</h3>
                  <p className="text-sm text-gray-500">
                    Switch between light and dark theme
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={appSettings.darkMode}
                    onChange={(e) =>
                      updateAppSetting('darkMode', e.target.checked)
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Settings Sections */}
          {settingsSections.map((section) => (
            <div key={section.title} className="card">
              <h2 className="text-lg font-semibold text-text-primary mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2">
                    <span className="text-text-primary">{item.label}</span>
                    {item.type === 'toggle' && (
                      <button
                        onClick={() => handleToggle(item.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          item.value ? 'bg-primary-500' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            item.value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}
                    {item.type === 'select' && (
                      <select
                        value={item.value}
                        onChange={(e) => setSettings(prev => ({ ...prev, [item.id]: e.target.value }))}
                        className="input py-1"
                      >
                        {item.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    {item.type === 'link' && (
                      <ChevronRightIcon className="w-5 h-5 text-text-secondary" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button className="btn btn-danger w-full">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
} 