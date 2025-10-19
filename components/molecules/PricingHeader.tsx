'use client';

import AnimatedSection from '@components/atoms/AnimatedSection';

export default function PricingHeader() {
  return (
    <AnimatedSection animation="fadeInUp">
      <div className="text-center mb-20">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-green-100 rounded-full px-8 py-3 mb-8 shadow-lg border border-accent-300">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="w-2 h-2 bg-accent-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
          <span className="text-accent-800 font-bold text-sm tracking-wider">PLANES DE MARKETING DIGITAL</span>
        </div>
        
        {/* Main Title */}
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-secondary-900 via-accent-800 to-green-700 bg-clip-text text-transparent mb-8 leading-tight">
          Nuestros Planes
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-secondary-700 max-w-4xl mx-auto leading-relaxed mb-6">
          El precio de una estrategia de Marketing Digital puede variar en función de los 
          servicios, herramientas y el alcance.
        </p>
        
        {/* Additional info */}
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Estos son algunos de nuestros planes estándar diseñados para diferentes tipos de negocio.
        </p>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-8 mt-8 text-sm text-secondary-700 font-medium">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
            <span>Sin compromisos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span>Cancelación flexible</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}