'use client';

import Button from '@components/atoms/Button';
import AnimatedSection from '@components/atoms/AnimatedSection';

export default function PricingFooter() {
  return (
    <>
      {/* Custom Plan Section */}
      <AnimatedSection animation="fadeInUp" delay={800}>
        <div className="bg-gradient-mesh rounded-3xl p-12 text-center text-white relative overflow-hidden mb-16 shadow-glow">
          {/* Modernized floating elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/15 rounded-full animate-float blur-sm"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-cosmic rounded-full animate-float-delayed blur-sm opacity-60"></div>
            <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-ocean rounded-full animate-pulse-soft blur-sm opacity-70"></div>
          </div>
          
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">🎯</span>
              <h3 className="text-heading-1 font-bold mb-4">¿Necesitas algo diferente?</h3>
            </div>
            
            <p className="text-body-large text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Cada negocio es único. Creamos estrategias personalizadas que se adaptan perfectamente 
              a tus objetivos, presupuesto y necesidades específicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                variant="primary"
                className="glass-bright text-white font-bold px-10 py-4 text-body-large hover:shadow-glow-hover hover:scale-105 transition-all duration-300 shadow-glow border border-white/30"
              >
                <span className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>Solicitar Cotización</span>
                </span>
              </Button>
              
              <Button 
                variant="secondary"
                className="glass border-2 border-white/30 text-white font-bold px-10 py-4 text-body-large hover:bg-gradient-cosmic hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Hablar con un Experto</span>
                </span>
              </Button>
            </div>

            {/* Modern benefits grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-body-small text-white/90 font-medium">
              <div className="flex items-center justify-center space-x-2 glass rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-gradient-cosmic rounded-full animate-pulse-soft"></div>
                <span>Consulta gratuita de 30 min</span>
              </div>
              <div className="flex items-center justify-center space-x-2 glass rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-gradient-ocean rounded-full animate-pulse-soft"></div>
                <span>Análisis completo incluido</span>
              </div>
              <div className="flex items-center justify-center space-x-2 glass rounded-full px-4 py-2 border border-white/20">
                <div className="w-2 h-2 bg-gradient-sunset rounded-full animate-pulse-soft"></div>
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
            <h4 className="text-heading-2 font-bold text-white mb-4">
              Más de 100+ empresas confían en nosotros
            </h4>
            <p className="text-body-base text-white/80">
              Desde startups hasta grandes corporaciones, ayudamos a crecer digitalmente
            </p>
          </div>
          
          {/* Company logos with modern styling */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            {[1, 2, 3, 4, 5].map((index) => (
              <div 
                key={index}
                className="w-28 h-16 glass rounded-xl flex items-center justify-center shadow-glow hover:shadow-glow-hover transition-all duration-300 hover:scale-105 border border-white/20"
              >
                <span className="text-white/70 text-caption font-semibold">LOGO {index}</span>
              </div>
            ))}
          </div>

          {/* Modern stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 glass rounded-2xl border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-heading-1 font-bold text-gradient-cosmic bg-gradient-cosmic bg-clip-text mb-2">100+</div>
              <div className="text-body-small text-white/80 font-medium">Clientes satisfechos</div>
            </div>
            <div className="text-center p-6 glass rounded-2xl border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-heading-1 font-bold text-gradient-ocean bg-gradient-ocean bg-clip-text mb-2">95%</div>
              <div className="text-body-small text-white/80 font-medium">Tasa de éxito</div>
            </div>
            <div className="text-center p-6 glass rounded-2xl border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-heading-1 font-bold text-gradient-sunset bg-gradient-sunset bg-clip-text mb-2">24/7</div>
              <div className="text-body-small text-white/80 font-medium">Soporte técnico</div>
            </div>
            <div className="text-center p-6 glass rounded-2xl border border-white/20 hover:shadow-glow transition-all duration-300">
              <div className="text-heading-1 font-bold text-gradient-forest bg-gradient-forest bg-clip-text mb-2">5★</div>
              <div className="text-body-small text-white/80 font-medium">Calificación promedio</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}