import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center px-4 py-2 rounded-md font-medium shadow-sm';
  const color =
    variant === 'primary'
      ? 'bg-primary text-white hover:bg-primary/90'
      : 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  return (
    <button className={`${base} ${color} ${className}`} {...props}>
      {children}
    </button>
  );
}
