'use client';

import Button from '@components/atoms/Button';
import AnimatedSection from '@components/atoms/AnimatedSection';

export default function PricingFooter() {
  return (
    <>
      {/* Custom Plan Section */}
      <AnimatedSection animation="fadeInUp" delay={800}>
        <div className="bg-gradient-to-r from-secondary-900 via-accent-900 to-secondary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden mb-16">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-700/30 to-green-600/30 animate-pulse"></div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-white/15 rounded-full animate-float"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-accent-600/30 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 right-8 w-12 h-12 bg-green-600/30 rounded-full animate-bounce"></div>
          
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">🎯</span>
              <h3 className="text-4xl font-bold mb-4">¿Necesitas algo diferente?</h3>
            </div>
            
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Cada negocio es único. Creamos estrategias personalizadas que se adaptan perfectamente 
              a tus objetivos, presupuesto y necesidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                variant="primary"
                className="bg-white text-accent-800 font-bold px-10 py-4 text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl border-2 border-white"
              >
                <span className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>Solicitar Cotización</span>
                </span>
              </Button>
              
              <Button 
                variant="secondary"
                className="border-2 border-white text-white font-bold px-10 py-4 text-lg hover:bg-white hover:text-accent-800 hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Hablar con un Experto</span>
                </span>
              </Button>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-sm text-gray-100 font-medium">
              <div className="flex items-center justify-center space-x-2 bg-white/15 rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span>Consulta gratuita de 30 min</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/15 rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <span>Análisis completo incluido</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/15 rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
                <span>Respuesta en 24 horas</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Trust Indicators */}
      <AnimatedSection animation="fadeInUp" delay={1000}>
        <div className="text-center">
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-secondary-900 mb-4">
              Más de 100+ empresas confían en nosotros
            </h4>
            <p className="text-secondary-700">
              Desde startups hasta grandes corporaciones, ayudamos a crecer digitalmente
            </p>
          </div>
          
          {/* Company logos with better styling */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className="w-28 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-gray-600 text-sm font-semibold">LOGO {index}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-accent-100 to-green-100 rounded-2xl border border-accent-200">
              <div className="text-3xl font-bold text-accent-800 mb-2">100+</div>
              <div className="text-sm text-secondary-800 font-medium">Clientes satisfechos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl border border-green-200">
              <div className="text-3xl font-bold text-green-800 mb-2">95%</div>
              <div className="text-sm text-secondary-800 font-medium">Tasa de éxito</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-800 mb-2">24/7</div>
              <div className="text-sm text-secondary-800 font-medium">Soporte técnico</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-800 mb-2">5★</div>
              <div className="text-sm text-secondary-800 font-medium">Calificación promedio</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}