import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-3 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 animate-slide-down"
      style={{ animationDelay: '0.3s' }}
      aria-label="Toggle mobile menu"
    >
      <div className="relative w-6 h-6">
        <Menu className={`w-6 h-6 text-gray-700 dark:text-gray-300 absolute transition-all duration-300 ${
          isOpen ? 'opacity-0 rotate-45 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`} />
        <X className={`w-6 h-6 text-gray-700 dark:text-gray-300 absolute transition-all duration-300 ${
          isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-0'
        }`} />
      </div>
    </button>
  );
};