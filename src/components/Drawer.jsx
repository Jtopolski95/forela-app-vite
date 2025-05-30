import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon, Cog6ToothIcon, BeakerIcon, QuestionMarkCircleIcon, GiftIcon, HeartIcon, PencilSquareIcon, HandThumbUpIcon, ChartBarIcon, DocumentTextIcon, BriefcaseIcon, LinkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Using outline icons for now
import { Link } from 'react-router-dom';

const navItemsTop = [
  { name: 'My profile', href: '/profile', icon: UserCircleIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  { name: 'Labs', href: '/labs', icon: BeakerIcon },
  { name: 'Help', href: '/help', icon: QuestionMarkCircleIcon },
  { name: 'Refer a Friend', href: '/refer-a-friend', icon: GiftIcon },
];

const navItemsBottom = [
  { name: 'Care Plan', href: '/care-plan', icon: HeartIcon },
  { name: 'Journal', href: '/journal', icon: PencilSquareIcon },
  { name: 'Companion', href: '/companion', icon: HandThumbUpIcon }, // Using HandThumbUpIcon as a placeholder
  { name: 'Symptoms', href: '/symptoms', icon: ChartBarIcon }, // Using ChartBarIcon as a placeholder
  { name: 'Trends', href: '/trends', icon: ChartBarIcon }, // Will need a specific trends icon
  { name: 'Reports', href: '/reports', icon: DocumentTextIcon },
  { name: 'Medical History', href: '/medical-history', icon: BriefcaseIcon },
  { name: 'Integrations', href: '/integrations', icon: LinkIcon },
  { name: 'Menu Scan', href: '/menu-scan', icon: MagnifyingGlassIcon },
];

export function Drawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 transform ease-in-out transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black opacity-50 ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-64 bg-primary-900 text-white h-full shadow-xl flex flex-col justify-between">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-display font-semibold">Forela</h2>
            <button onClick={onClose} className="p-1 rounded-full hover:bg-primary-800">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="space-y-2">
            {navItemsTop.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-primary-800 transition-colors"
                onClick={onClose}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <hr className="my-4 border-primary-700" />

          <nav className="space-y-2">
             {navItemsBottom.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-primary-800 transition-colors"
                onClick={onClose}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

        </div>
        {/* Footer or additional items can go here */}
      </div>
    </div>
  );
} 