import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  const baseClasses = "font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-gradient-primary text-white hover:shadow-2xl hover:scale-105 animate-glow",
    secondary: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:shadow-lg hover:scale-105"
  };

  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-12 py-6 text-xl"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};