import Container from "../atoms/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-black text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src="/logo.png"
                    alt="DoubleCheck Logo"
                    fill
                    sizes="64px"
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <span className="text-2xl font-bold text-white">DoubleCheck</span>
              </div>
              <p className="text-gray-200 leading-relaxed max-w-md font-medium">
                ¡Permítenos transformar tu visión en una identidad poderosa e inolvidable que impulse el crecimiento y te destaque del resto!
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://linkedin.com/" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors border border-primary-700">
                  <span className="text-white font-bold">Li</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571008481079" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors border border-primary-700">
                  <span className="text-white font-bold">Fb</span>
                </a>
                <a href="https://www.instagram.com/doble_verificacion/" className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors border border-primary-700">
                  <span className="text-white font-bold">Ig</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:text-white transition-colors font-medium">Diseño Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Diseño de Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Fábrica de Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Marketing Digital</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3 text-gray-200">
                <li><a href="#" className="hover:text-white transition-colors font-medium">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Planes</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-secondary-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm font-medium">
                All rights reserved DoubleCheck Tech {new Date().getFullYear()}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors font-medium">Términos</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors font-medium">Privacidad</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors font-medium">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
