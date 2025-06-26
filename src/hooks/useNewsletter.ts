import { useState } from 'react';

export const useNewsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Integrate with actual newsletter service
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return { email, setEmail, handleSubmit };
};