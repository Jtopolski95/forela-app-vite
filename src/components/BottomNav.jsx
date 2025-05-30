import React from 'react';
import { Home, MessageSquare, BarChart2, Settings, ChevronUp, ChevronDown } from 'lucide-react';

const BottomNav = ({ currentView, navigate, bottomNavItems, setBottomNavItemsOrder, isEditingNav, setIsEditingNav }) => {
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('text/plain');
    const newItems = [...bottomNavItems];
    const [removed] = newItems.splice(sourceIndex, 1);
    newItems.splice(targetIndex, 0, removed);
    setBottomNavItemsOrder(newItems);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <button
            onClick={() => setIsEditingNav(!isEditingNav)}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            {isEditingNav ? 'Done' : 'Edit'}
          </button>
          {isEditingNav && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Drag to reorder</span>
              <ChevronUp size={16} className="text-gray-400" />
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          )}
        </div>
        <div className="flex justify-around items-center py-2">
          {bottomNavItems.map((item, index) => (
            <div
              key={item.id}
              draggable={isEditingNav}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              className={`flex flex-col items-center ${isEditingNav ? 'cursor-move' : ''}`}
            >
              <button
                onClick={() => !isEditingNav && navigate(item.viewId)}
                className={`p-2 rounded-full ${
                  currentView === item.viewId
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.icon}
              </button>
              <span className="text-xs mt-1 text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNav; 