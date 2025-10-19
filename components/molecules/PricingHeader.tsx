'use client';

import AnimatedSection from '@components/atoms/AnimatedSection';

export default function PricingHeader() {
  return (
    <AnimatedSection animation="fadeInUp">
      <div className="text-center mb-20">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 glass rounded-full px-8 py-3 mb-8 shadow-glow border border-white/30">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gradient-cosmic rounded-full animate-pulse-soft"></span>
            <span className="w-2 h-2 bg-gradient-ocean rounded-full animate-pulse-soft" style={{ animationDelay: '0.5s' }}></span>
            <span className="w-2 h-2 bg-gradient-sunset rounded-full animate-pulse-soft" style={{ animationDelay: '1s' }}></span>
          </div>
          <span className="text-white font-bold text-caption tracking-wider">PLANES DE MARKETING DIGITAL</span>
        </div>
        
        {/* Main Title */}
        <h2 className="text-display-1 font-bold text-gradient-cosmic bg-gradient-cosmic bg-clip-text mb-8 leading-tight">
          Nuestros Planes
        </h2>
        
        {/* Subtitle */}
        <p className="text-heading-3 text-white/90 max-w-4xl mx-auto leading-relaxed mb-6">
          El precio de una estrategia de Marketing Digital puede variar en función de los 
          servicios, herramientas y el alcance.
        </p>
        
        {/* Additional info */}
        <p className="text-body-large text-white/80 max-w-3xl mx-auto">
          Estos son algunos de nuestros planes estándar diseñados para diferentes tipos de negocio.
        </p>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-8 mt-8 text-body-small text-white/80 font-medium">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-cosmic rounded-full animate-pulse-soft"></div>
            <span>Sin compromisos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-ocean rounded-full animate-pulse-soft"></div>
            <span>Cancelación flexible</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-sunset rounded-full animate-pulse-soft"></div>
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}