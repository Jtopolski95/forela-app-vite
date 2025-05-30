import React from 'react';
import { X, Home, MessageSquare, BarChart2, Settings, User, ChevronRight } from 'lucide-react';

const DrawerMenu = ({ isOpen, onClose, navigateTo }) => {
  const menuItems = [
    { id: 'today', label: 'Today', icon: <Home size={24} />, viewId: 'today' },
    { id: 'journal', label: 'Journal', icon: <MessageSquare size={24} />, viewId: 'journal' },
    { id: 'analytics', label: 'Analytics', icon: <BarChart2 size={24} />, viewId: 'analytics' },
    { id: 'settings', label: 'Settings', icon: <Settings size={24} />, viewId: 'settings' },
    { id: 'profile', label: 'Profile', icon: <User size={24} />, viewId: 'profile' }
  ];

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} className="text-gray-600" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigateTo(item.viewId)}
                  className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-gray-700">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DrawerMenu; 