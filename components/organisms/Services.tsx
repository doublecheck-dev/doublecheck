import { Suspense } from 'react';
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100" id="servicios">
      <Container>
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Lo Que Ofrecemos
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Establece una presencia online impactante, mejora tu identidad visual o eleva tu marca a través del marketing en redes sociales.
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-8 rounded-full" />
        </AnimatedSection>
        
        <Suspense fallback={<SkeletonServices />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesToShow.map((service: any, index: number) => (
              <AnimatedSection
                key={service.id}
                animation="slideInUp"
                delay={index * 150}
              >
                <ServiceCard service={service} index={index} />
              </AnimatedSection>
            ))}
          </div>
        </Suspense>
        
        {/* Call to action section */}
        <AnimatedSection animation="fadeInUp" delay={600} className="text-center mt-16">
          <p className="text-lg text-secondary-600 mb-8">
            ¿No encuentras exactamente lo que buscas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-700 to-green-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-300"
          >
            Solicitar Consulta Personalizada
            <span className="ml-2">→</span>
          </a>
        </AnimatedSection>
      </Container>
    </section>
  );
}
