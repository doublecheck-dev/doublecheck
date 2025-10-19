import Container from "../atoms/Container";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-secondary-900 to-secondary-800 text-white">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DC</span>
                </div>
                <span className="text-2xl font-bold">DoubleCheck</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                ¡Permítenos transformar tu visión en una identidad poderosa e inolvidable que impulse el crecimiento y te destaque del resto!
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://linkedin.com/" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">Li</span>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571008481079" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">Fb</span>
                </a>
                <a href="https://www.instagram.com/doble_verificacion/" className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors">
                  <span className="text-white font-bold">Ig</span>
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Diseño Web</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Diseño de Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fábrica de Software</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketing Digital</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planes</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-secondary-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                All rights reserved DoubleCheck Tech {new Date().getFullYear()}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
