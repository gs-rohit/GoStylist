import React from 'react';
import { Button } from './Button';

interface NewsletterFormProps {
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  email, 
  onEmailChange, 
  onSubmit 
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-4xl p-12 shadow-xl max-w-2xl mx-auto animate-scale-in" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white mb-4">
        Stay Updated
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        Get the latest fashion trends and styling tips delivered to your inbox.
      </p>
      <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-6 py-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-lg"
          required
        />
        <Button type="submit" size="md">
          Subscribe
        </Button>
      </form>
    </div>
  );
};