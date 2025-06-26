import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ Import this
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
  scrollY,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation(); // ✅ Get current route
  const isHomePage = location.pathname === '/'; // ✅ Check if on home page

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrollY > 50
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-md border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12 animate-slide-down">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right-side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} onToggle={onToggleDarkMode} />

            {/* ✅ Show hamburger only if not on home page */}
            {!isHomePage && (
              <MobileMenuToggle
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            )}
          </div>
        </div>

        {/* ✅ Mobile Menu - show only if not on home page */}
        {!isHomePage && (
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
