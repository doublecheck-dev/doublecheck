'use client';

import React, { useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'accent';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export default function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  loading = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props 
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = 'group relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-800 focus:ring-primary-300 shadow-lg hover:shadow-xl active:scale-95 border border-primary-700',
    secondary: 'bg-transparent border-2 border-secondary-700 text-secondary-800 hover:bg-secondary-800 hover:text-white focus:ring-secondary-300 active:scale-95',
    accent: 'bg-green-600 text-white hover:bg-accent-800 focus:ring-accent-300 shadow-lg hover:shadow-xl active:scale-95 border border-accent-800'
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${isPressed ? 'scale-95' : 'hover:scale-105'}`}
      disabled={disabled || loading}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      aria-label={loading ? 'Cargando...' : undefined}
      {...props}
    >
      {loading && (
        <LoadingSpinner size="sm" className="mr-2" />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2 group-hover:translate-x-0.5 transition-transform duration-200">
          {icon}
        </span>
      )}
      
      <span className={loading ? 'opacity-75' : ''}>
        {children}
      </span>
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-200">
          {icon}
        </span>
      )}
      
      {/* Ripple effect overlay */}
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
      </span>
    </button>
  );
}
