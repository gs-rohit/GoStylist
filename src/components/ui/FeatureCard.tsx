import React from 'react';
import { Feature } from '../../types';

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div
      className="group bg-white dark:bg-gray-900 p-10 rounded-4xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 dark:border-gray-800 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  );
};