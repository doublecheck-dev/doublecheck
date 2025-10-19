'use client';

import { useScrollProgress } from '@lib/hooks';

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200">
      <div 
        className="h-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}