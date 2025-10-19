'use client';

import { useState } from 'react';
import Button from '@components/atoms/Button';

interface Plan {
  id: string;
  title: string;
  slug: string;
  price: number;
  currency: string;
  billing_interval: string;
  features: string[];
  cta_text: string;
  cta_url: string;
  rank: number;
  metadata: {
    description: string;
    subtitle: string;
    popular: boolean;
  };
}

interface PlanCardProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: (planId: string) => void;
  displayPrice: number;
  billingPeriod: 'monthly' | 'annually';
  index: number;
}

export default function PlanCard({ 
  plan, 
  isSelected, 
  onSelect, 
  displayPrice, 
  billingPeriod,
  index 
}: PlanCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isPopular = plan.metadata?.popular;
  
  const formatPrice = (price: number, currency: string) => {
    if (currency === 'COP') {
      return `$${(price / 1000000).toFixed(1)}M`;
    }
    return `$${price}`;
  };

  const getPlanIcon = (title: string) => {
    const icons = {
      'PREMIUM': '🚀',
      'MOST POPULAR': '⭐',
      'DIGITAL': '💎',
      'DIGITAL PRO': '🎯',
      'DIGITAL PRO MAX': '👑'
    };
    return icons[title as keyof typeof icons] || '📋';
  };

  const getPlanColor = (title: string, isPopular: boolean) => {
    if (isPopular) return 'from-accent-700 to-green-700';
    
    const colors = {
      'PREMIUM': 'from-blue-700 to-blue-900',
      'DIGITAL': 'from-purple-700 to-purple-900',
      'DIGITAL PRO': 'from-orange-700 to-orange-900',
      'DIGITAL PRO MAX': 'from-yellow-700 to-yellow-900'
    };
    return colors[title as keyof typeof colors] || 'from-gray-700 to-gray-900';
  };

  return (
    <div 
      className={`relative glass rounded-3xl transition-all duration-500 cursor-pointer group transform-gpu backdrop-blur-lg ${
        isPopular 
          ? 'border-2 border-white/30 shadow-glow bg-gradient-mesh/10 scale-105' 
          : isSelected
          ? 'border-2 border-white/25 shadow-strong scale-102'
          : 'border border-white/20 hover:border-white/30 hover:shadow-glow hover:scale-102'
      }`}
      onClick={() => onSelect(plan.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 150}ms`,
        willChange: 'transform'
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-cosmic text-white px-8 py-3 rounded-full text-sm font-bold shadow-glow animate-pulse-soft border border-white/30">
            ⭐ MÁS POPULAR
          </div>
        </div>
      )}

      {/* Modern floating orb */}
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-mesh rounded-3xl opacity-15 blur-xl -z-10 animate-pulse-soft"></div>
      )}

      {/* Hover glow effect */}
      {isHovered && !isPopular && (
        <div className="absolute inset-0 bg-gradient-ocean rounded-3xl opacity-10 blur-xl -z-10 transition-opacity duration-300"></div>
      )}

      <div className="p-8 relative">
        {/* Plan Header */}
        <div className="text-center mb-8">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-4 transition-all duration-300 ${
            isHovered || isPopular
              ? `bg-gradient-to-br ${getPlanColor(plan.title, isPopular)} shadow-lg`
              : 'bg-gradient-to-br from-gray-100 to-gray-200'
          }`}>
            <span className={`text-3xl transition-all duration-300 ${
              isHovered || isPopular ? 'text-white scale-110' : 'text-gray-600'
            }`}>
              {getPlanIcon(plan.title)}
            </span>
          </div>

          {/* Plan Title */}
          <h3 className="text-heading-2 font-bold text-white mb-2 transition-colors duration-300 group-hover:text-accent-200">
            {plan.title}
          </h3>

          {/* Price Display */}
          <div className="mb-6">
            <div className="flex items-baseline justify-center mb-2">
              <span className={`text-display-2 font-bold transition-colors duration-300 ${
                isPopular ? 'text-gradient-cosmic bg-gradient-cosmic bg-clip-text' : 'text-white group-hover:text-gradient-cosmic group-hover:bg-gradient-cosmic group-hover:bg-clip-text'
              }`}>
                {formatPrice(displayPrice, plan.currency)}
              </span>
              <span className="text-white/80 ml-2 text-body-large">/mes</span>
            </div>
            
            {billingPeriod === 'annually' && (
              <div className="text-body-small text-green-300 font-semibold animate-pulse-soft">
                🎉 Ahorras {formatPrice(plan.price * 0.2, plan.currency)} por mes
              </div>
            )}
            
            <span className="text-body-small text-white/70 font-medium">
              {plan.currency} • Facturación {billingPeriod === 'monthly' ? 'mensual' : 'anual'}
            </span>
          </div>

          {/* Descriptions */}
          <div className="space-y-3">
            <p className="text-body-large font-semibold text-white leading-tight">
              {plan.metadata?.description}
            </p>
            <p className="text-body-small text-white/80 leading-relaxed">
              {plan.metadata?.subtitle}
            </p>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-start space-x-3 group/feature opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${(index * 150) + (idx * 50)}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                isPopular || isHovered
                  ? 'bg-gradient-to-r from-accent-600 to-green-600 scale-110' 
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 group-hover/feature:from-accent-600 group-hover/feature:to-green-600 group-hover/feature:scale-110'
              }`}>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90 font-medium leading-relaxed group-hover/feature:text-white transition-colors duration-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant={isPopular ? "primary" : "secondary"}
          className={`w-full font-bold py-4 text-body-large transition-all duration-300 relative overflow-hidden ${
            isPopular 
              ? 'bg-gradient-cosmic hover:shadow-glow-hover text-white shadow-glow hover:scale-105' 
              : 'glass border-2 border-white/30 text-white hover:bg-gradient-cosmic hover:border-transparent hover:shadow-glow hover:scale-105'
          }`}
        >
          <span className="relative z-10 flex items-center justify-center space-x-2">
            <span>{plan.cta_text}</span>
            {isHovered && (
              <svg className="w-5 h-5 transition-transform duration-300 transform translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </span>
          
          {/* Shimmer effect */}
          {(isPopular || isHovered) && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          )}
        </Button>

        {/* Value indicator */}
        {billingPeriod === 'annually' && (
          <div className="mt-4 text-center">
            <span className="inline-flex items-center space-x-1 text-caption text-green-300 glass px-3 py-1 rounded-full font-semibold border border-green-300/30">
              <span>💰</span>
              <span>Mejor valor anual</span>
            </span>
          </div>
        )}
      </div>

      {/* Decorative floating elements */}
      <div className={`absolute top-4 right-4 w-12 h-12 rounded-full opacity-15 transition-all duration-300 blur-lg ${
        isHovered || isPopular 
          ? 'bg-gradient-cosmic opacity-25 scale-110 animate-float' 
          : 'bg-white/20'
      }`}></div>
      <div className={`absolute bottom-4 left-4 w-8 h-8 rounded-full opacity-15 transition-all duration-300 blur-sm ${
        isHovered || isPopular 
          ? 'bg-gradient-ocean opacity-25 scale-110 animate-float-delayed' 
          : 'bg-white/20'
      }`}></div>

      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-cosmic rounded-full flex items-center justify-center shadow-glow animate-pulse-soft">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
}