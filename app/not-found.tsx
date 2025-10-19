import Link from 'next/link';
import Container from '../components/atoms/Container';
import Button from '../components/atoms/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
      <Container>
        <div className="text-center space-y-8">
          {/* Animated 404 */}
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
              ¡Oops! Página no encontrada
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              La página que buscas no existe o ha sido movida. No te preocupes, 
              te ayudamos a encontrar lo que necesitas.
            </p>
          </div>

          {/* Navigation options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary"
              className="group"
              icon={<span className="group-hover:-translate-x-1 transition-transform">←</span>}
            >
              <Link href="/">Volver al Inicio</Link>
            </Button>
            
            <Button 
              variant="secondary"
              icon={<span>📞</span>}
            >
              <Link href="#contacto">Contactar Soporte</Link>
            </Button>
          </div>

          {/* Popular links */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-secondary-800 mb-4">
              Enlaces populares:
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#servicios" className="text-primary-600 hover:text-primary-700 transition-colors">
                Nuestros Servicios
              </Link>
              <Link href="/blog" className="text-primary-600 hover:text-primary-700 transition-colors">
                Blog
              </Link>
              <Link href="#contacto" className="text-primary-600 hover:text-primary-700 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}