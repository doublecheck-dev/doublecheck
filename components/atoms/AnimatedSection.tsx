'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@lib/hooks';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  className = '' 
}: AnimatedSectionProps) {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  const animationClasses = {
    fadeInUp: hasIntersected 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8',
    fadeInLeft: hasIntersected 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-8',
    fadeInRight: hasIntersected 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-8',
    scaleIn: hasIntersected 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-95',
    slideInUp: hasIntersected 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-12'
  };

  return (
    <div
      ref={targetRef}
      className={`transition-all duration-700 ease-out ${animationClasses[animation]} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}