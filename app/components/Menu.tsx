'use client';

import { useState, useEffect, useCallback } from 'react';
import { useNavigation } from './NavigationContext';

const menuItems = [
  'Messages',
  'Contacts',
  'Games',
  'Settings',
  'Exit'
];

export default function Menu() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { highlightUp, highlightDown, highlightCenter } = useNavigation();

  const handleUp = useCallback(() => {
    highlightUp();
    setSelectedIndex(prev => prev > 0 ? prev - 1 : menuItems.length - 1);
  }, [highlightUp]);

  const handleDown = useCallback(() => {
    highlightDown();
    setSelectedIndex(prev => prev < menuItems.length - 1 ? prev + 1 : 0);
  }, [highlightDown]);

  const handleSelect = useCallback(() => {
    highlightCenter();
    // For demo, just alert
    alert(`Selected: ${menuItems[selectedIndex]}`);
  }, [highlightCenter, selectedIndex]);

  // Expose handlers to parent or use effect
  // For simplicity, we'll add keyboard listeners here too
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleUp();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleDown();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelect();
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [handleUp, handleDown, handleSelect]);

  return (
    <div className="text-center">
      <h2 className="text-md font-bold mb-4">Menu</h2>
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className={`px-2 py-1 rounded text-sm ${
              index === selectedIndex
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Use ↑↓ to navigate, Enter to select
      </p>
    </div>
  );
}