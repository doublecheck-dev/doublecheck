'use client';

import { Suspense, useState } from 'react';
import Container from "../atoms/Container";
import AnimatedSection from "../atoms/AnimatedSection";
import ServiceCard from "../molecules/ServiceCard";
import { SkeletonServices } from "../atoms/SkeletonCard";

// Enhanced service data with features
const enhancedServices = [
  {
    id: '1',
    title: 'Diseño Web',
    description: 'Creamos sitios web visualmente impresionantes y fáciles de usar, utilizando diseño y tecnología moderna.',
    features: [
      'Diseño responsivo y mobile-first',
      'Optimización SEO avanzada',
      'Velocidad de carga superior',
      'Integración con analytics',
      'Soporte técnico continuo'
    ]
  },
  {
    id: '2', 
    title: 'Diseño de Branding',
    description: 'El diseño de branding establece una identidad única y memorable para tu negocio a través de logotipos, colores y elementos visuales.',
    features: [
      'Investigación de marca completa',
      'Logo y identidad visual',
      'Guía de marca detallada',
      'Aplicaciones multimedia',
      'Estrategia de posicionamiento'
    ]
  },
  {
    id: '3',
    title: 'Fábrica de Software',
    description: 'Convertimos tus ideas en realidad creando soluciones de software personalizadas, fáciles de usar y escalables.',
    features: [
      'Desarrollo a medida',
      'Arquitectura escalable',
      'Metodologías ágiles',
      'Testing automatizado',
      'Mantenimiento continuo'
    ]
  },
  {
    id: '4',
    title: 'Marketing Digital',
    description: 'Impulsa tu negocio con estrategias innovadoras de marketing digital, incluyendo SEO, redes sociales y soluciones personalizadas.',
    features: [
      'Estrategias SEO/SEM',
      'Gestión de redes sociales',
      'Email marketing efectivo',
      'Analytics y reporting',
      'Publicidad digital ROI+'
    ]
  }
];

export default function Services({ items }: { items: Array<any> }) {
  // Use enhanced services if available, fallback to provided items
  const servicesToShow = enhancedServices.length > 0 ? enhancedServices : items;
  
  // Global expanded state - when one card expands, all expand
  const [areAllExpanded, setAreAllExpanded] = useState(false);

  const handleToggleExpanded = () => {
    setAreAllExpanded(!areAllExpanded);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-purple-50 relative overflow-hidden" id="servicios">
      {/* Modern background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-cosmic rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-ocean rounded-full opacity-8 blur-3xl animate-float-delayed"></div>
      </div>
      
      <Container className="relative z-10">
        <AnimatedSection animation="fadeInUp" className="text-center mb-20">
          <h2 className="text-heading-1 font-bold text-slate-900 mb-6">
            Lo Que <span className="text-gradient-cosmic">Ofrecemos</span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Establece una presencia online impactante, mejora tu identidad visual o eleva tu marca a través del marketing en redes sociales.
          </p>
          
          {/* Modern decorative line */}
          <div className="w-32 h-1 bg-gradient-cosmic mx-auto mt-8 rounded-full shadow-glow" />
        </AnimatedSection>
        
        <Suspense fallback={<SkeletonServices />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesToShow.map((service: any, index: number) => (
              <AnimatedSection
                key={service.id}
                animation="slideInUp"
                delay={index * 150}
              >
                <ServiceCard 
                  service={service} 
                  index={index}
                  isExpanded={areAllExpanded}
                  onToggleExpanded={handleToggleExpanded}
                />
              </AnimatedSection>
            ))}
          </div>
        </Suspense>
        
        {/* Modern call to action section */}
        <AnimatedSection animation="fadeInUp" delay={600} className="text-center mt-20">
          <p className="text-lg text-slate-600 mb-8 font-medium">
            ¿No encuentras exactamente lo que buscas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-10 py-5 bg-gradient-cosmic text-white font-semibold rounded-2xl hover:shadow-glow-hover hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-strong"
          >
            Solicitar Consulta Personalizada
            <span className="ml-3 transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
