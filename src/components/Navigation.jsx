import React from 'react'
import { HomeIcon as HomeOutline, PencilSquareIcon as JournalOutline, Cog6ToothIcon as SettingsOutline } from '@heroicons/react/24/outline'

export function Navigation({ currentScreen, onScreenChange }) {
  const navItems = [
    {
      name: 'Journal',
      icon: JournalOutline,
      screen: 'journal',
    },
    {
      name: 'Profile',
      icon: HomeOutline, // Placeholder for Profile icon
      screen: 'profile',
    },
    {
      name: 'Settings',
      icon: SettingsOutline,
      screen: 'settings',
    },
  ]

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white shadow-lg border-t border-gray-200 z-10">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.screen}
            onClick={() => onScreenChange(item.screen)}
            className={`flex flex-col items-center justify-center p-2 rounded-md transition-colors ${
              currentScreen === item.screen ? 'text-primary-500' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  )
} 