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
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

const serviceIcons: { [key: string]: string } = {
  'diseño web': '🌐',
  'branding': '🎨',
  'software': '💻',
  'marketing': '📱',
  'seo': '🔍',
  'desarrollo': '⚡',
  'consultoría': '🎯',
  'default': '✨'
};

const serviceGradients: { [key: string]: string } = {
  'diseño web': 'from-cyan-400 to-blue-500',
  'branding': 'from-purple-400 to-pink-500',
  'software': 'from-emerald-400 to-teal-500',
  'marketing': 'from-orange-400 to-red-500',
  'seo': 'from-yellow-400 to-orange-500',
  'desarrollo': 'from-indigo-400 to-purple-500',
  'consultoría': 'from-teal-400 to-cyan-500',
  'default': 'from-blue-400 to-indigo-500'
};

export default function ServiceCard({ service, index, isExpanded, onToggleExpanded }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getServiceIcon = (title: string) => {
    const key = title.toLowerCase();
    return serviceIcons[key] || serviceIcons.default;
  };

  const getServiceGradient = (title: string) => {
    const key = title.toLowerCase();
    return serviceGradients[key] || serviceGradients.default;
  };

  return (
    <article 
      className={`group relative rounded-3xl transition-all duration-500 cursor-pointer transform-gpu overflow-hidden h-full flex flex-col bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-purple-900/95 backdrop-blur-xl border border-blue-500/30 shadow-xl ${
        isHovered 
          ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20 scale-105 -translate-y-1' 
          : 'hover:border-blue-400/40 hover:shadow-xl hover:scale-102'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 150}ms`,
        willChange: 'transform'
      }}
    >
      {/* Enhanced background pattern */}
      <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl transition-all duration-700 ${
        isHovered ? 'from-cyan-400/15 via-blue-400/10 to-purple-400/15' : ''
      }`} />
      
      {/* Glowing accent orbs */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className={`absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full opacity-70 blur-sm transition-all duration-500 ${
          isHovered ? 'opacity-90 scale-150 animate-pulse-soft' : ''
        }`} />
        <div className={`absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full opacity-60 blur-sm transition-all duration-700 ${
          isHovered ? 'opacity-80 scale-125' : ''
        }`} />
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50 transition-all duration-300 ${
          isHovered ? 'opacity-70 scale-200' : ''
        }`} />
      </div>
      
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Service icon with modern styling */}
        <div className="flex items-center justify-center mb-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${getServiceGradient(service.title)} rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500 ${
            isHovered ? 'scale-110 rotate-3 shadow-xl' : ''
          }`}>
            <span className="text-3xl filter drop-shadow-lg" role="img" aria-hidden="true">
              {getServiceIcon(service.title)}
            </span>
          </div>
        </div>
        
        {/* Service title */}
        <h3 className={`text-xl font-bold text-white mb-4 text-center transition-all duration-300 group-hover:text-cyan-300 leading-tight ${
          isHovered ? 'transform scale-105 text-cyan-200' : ''
        }`}>
          {service.title}
        </h3>
        
        {/* Service description */}
        <p className="text-blue-100 leading-relaxed mb-6 text-center font-medium flex-grow">
          {service.description}
        </p>
        
        {/* Expandable features with modern styling */}
        {service.features && (
          <div className={`overflow-hidden transition-all duration-500 mb-4 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-blue-500/30 pt-4">
              <h4 className="font-semibold text-white mb-3 text-sm">Características:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-blue-100 font-medium">
                    <span className="text-cyan-400 mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Action buttons with vibrant colors */}
        <div className="flex flex-col gap-3 mt-auto">
          <Button
            variant="primary"
            className={`w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 font-semibold ${
              isHovered ? 'from-cyan-400 to-blue-500 scale-105 shadow-cyan-500/40' : ''
            }`}
          >
            Conocer Más
          </Button>
          
          {service.features && (
            <button
              onClick={onToggleExpanded}
              className="px-4 py-2 text-sm text-blue-200 hover:text-white font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-blue-900 rounded-lg hover:bg-blue-800/50"
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Ocultar características' : 'Ver características'}
            >
              {isExpanded ? '↑ Menos detalles' : '↓ Ver detalles'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}