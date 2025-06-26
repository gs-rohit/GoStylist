import React from 'react';
import { FeatureCard } from '../ui/FeatureCard';
import { features } from '../../data/features';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover how our cutting-edge technology transforms your fashion experience with intelligent recommendations
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};