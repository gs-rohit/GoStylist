import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 animate-slide-down"
      style={{ animationDelay: '0.2s' }}
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <Sun className={`w-6 h-6 text-gray-700 dark:text-gray-300 absolute transition-all duration-500 ${
          darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} />
        <Moon className={`w-6 h-6 text-gray-700 dark:text-gray-300 absolute transition-all duration-500 ${
          darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`} />
      </div>
    </button>
  );
};