import React from 'react';
import { Button } from '../ui/Button';
import { NewsletterForm } from '../ui/NewsletterForm';
import { useNewsletter } from '../../hooks/useNewsletter';

export const CTASection: React.FC = () => {
  const { email, setEmail, handleSubmit } = useNewsletter();

  return (
    <section className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
  <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>

  <div className="relative z-10 max-w-5xl mx-auto text-center px-6 lg:px-8">
    <div className="animate-slide-up">
      <h2 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-8">
        Join Gostylist Today
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
        Transform your fashion experience with AI-powered styling. Join thousands of users who've already discovered their perfect style.
      </p>
    </div>

    <div
      className="animate-slide-up flex justify-center mb-16"
      style={{ animationDelay: '0.2s' }}
    >
      <Button size="lg">
        Get Started Free
      </Button>
    </div>

    <NewsletterForm 
      email={email}
      onEmailChange={setEmail}
      onSubmit={handleSubmit}
    />
  </div>
</section>

  );
};