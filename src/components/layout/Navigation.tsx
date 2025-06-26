import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MobileMenuToggle } from '../ui/MobileMenuToggle';
import { navigationItems } from '../../data/navigation';

interface NavigationProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  scrollY: number;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  darkMode, 
  onToggleDarkMode, 
  scrollY 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrollY > 50 
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-20 animate-slide-down" style={{ animationDelay: '0.1s' }}>
            {navigationItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />
            <MobileMenuToggle 
              isOpen={mobileMenuOpen} 
              onToggle={() => setMobileMenuOpen(!mobileMenuOpen)} 
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-gray-200/20 dark:border-gray-800/20">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 py-3 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};