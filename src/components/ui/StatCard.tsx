import React from 'react';
import { Stat } from '../../types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  const { icon: Icon, value, label } = stat;

  return (
    <div className="text-center group">
      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-1">
        {value}
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  );
};