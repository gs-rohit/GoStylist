import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useScroll } from './hooks/useScroll';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/sections/Footer';

function App() {
  const { darkMode, toggleDarkMode } = useTheme();
  const scrollY = useScroll();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-all duration-500">
      <Navigation 
        darkMode={darkMode} 
        onToggleDarkMode={toggleDarkMode} 
        scrollY={scrollY} 
      />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;