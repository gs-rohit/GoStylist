import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { StatCard } from '../ui/StatCard';
import { stats } from '../../data/stats';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 dark:opacity-20"></div>
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-950/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-purple rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-primary rounded-full opacity-25 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-8 mt-24 leading-tight">
            Your AI-powered
            <span className="block bg-gradient-primary bg-clip-text text-transparent mt-2">
              Fashion Companion
            </span>
          </h1>
        </div>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionize your wardrobe with personalized style recommendations that understand your unique taste, lifestyle, and fashion goals
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="flex items-center space-x-3">
            <span>Start Your Style Journey</span>
            <ArrowRight className="w-5 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <button className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 px-3 py-2">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Play className="w-5 h-5 ml-1" />
            </div>
            <span className="font-medium">Watch Demo</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};