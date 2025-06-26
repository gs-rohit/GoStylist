import React from 'react';
import { Sparkles } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 animate-slide-down">
      <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
        <Sparkles className="w-5 h-5 text-white" />
      </div>
      <span className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
        Gostylist
      </span>
    </div>
  );
};