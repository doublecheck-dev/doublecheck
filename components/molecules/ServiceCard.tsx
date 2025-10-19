'use client';

import { useState } from 'react';
import Button from '@components/atoms/Button';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    features?: string[];
    icon?: string;
  };
  index: number;
}

const serviceIcons: { [key: string]: string } = {
  'diseño web': '🌐',
  'branding': '🎨',
  'software': '💻',
  'marketing': '📱',
  'default': '⚡'
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getServiceIcon = (title: string) => {
    const key = title.toLowerCase();
    return serviceIcons[key] || serviceIcons.default;
  };

  return (
    <article 
      className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-gray-100 overflow-hidden ${
        isHovered ? 'scale-105 -translate-y-2' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 100}ms`,
        willChange: 'transform'
      }}
    >
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-400/20 rounded-full transition-all duration-1000 ${
              isHovered ? 'animate-bounce' : ''
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 200}ms`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Service icon */}
        <div className={`w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
          isHovered ? 'scale-110 rotate-6' : ''
        }`}>
          <span className="text-2xl" role="img" aria-hidden="true">
            {getServiceIcon(service.title)}
          </span>
        </div>
        
        {/* Service title */}
        <h3 className={`text-xl font-bold text-secondary-900 mb-4 transition-colors duration-300 ${
          isHovered ? 'text-primary-600' : ''
        }`}>
          {service.title}
        </h3>
        
        {/* Service description */}
        <p className="text-secondary-600 leading-relaxed mb-6">
          {service.description}
        </p>
        
        {/* Expandable features */}
        {service.features && (
          <div className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-gray-100 pt-4 mb-4">
              <h4 className="font-semibold text-secondary-800 mb-3">Características:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-secondary-600">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="primary"
            className="flex-1 text-sm"
            icon={<span>→</span>}
            iconPosition="right"
          >
            Conocer Más
          </Button>
          
          {service.features && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Ocultar características' : 'Ver características'}
            >
              {isExpanded ? 'Menos detalles' : 'Ver detalles'}
            </button>
          )}
        </div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-8 left-8 right-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500 ${
          isHovered ? 'scale-x-100' : 'scale-x-0'
        }`} />
      </div>
      
      {/* Corner decoration */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-100 to-transparent rounded-bl-full transition-all duration-500 ${
        isHovered ? 'scale-150' : 'scale-100'
      }`} />
    </article>
  );
}