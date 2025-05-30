import React from 'react'
import { HomeIcon as HomeOutline, PencilSquareIcon as JournalOutline, Cog6ToothIcon as SettingsOutline } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export function Navigation({ currentScreen, onScreenChange }) {
  const navItems = [
    {
      name: 'Journal',
      icon: JournalOutline,
      screen: 'journal',
      href: '/journal'
    },
    {
      name: 'Profile',
      icon: HomeOutline, // Placeholder for Profile icon
      screen: 'profile',
      href: '/profile'
    },
    {
      name: 'Settings',
      icon: SettingsOutline,
      screen: 'settings',
      href: '/settings'
    },
  ]

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-primary-900 shadow-lg border-t border-gray-200 z-10">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.screen}
            to={item.href}
            onClick={() => onScreenChange(item.screen)}
            className="flex flex-col items-center justify-center p-2 rounded-md transition-colors text-white"
          >
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
    </nav>
  )
} 