import Container from "../atoms/Container";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-[#557215] to-black relative overflow-hidden min-h-[400px]">
      {/* Enhanced floating orbs with brand colors */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#94CE10] to-[#557215] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#557215] to-[#94CE10] opacity-15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-[#94CE10] to-green-400 opacity-12 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-[#557215] to-[#94CE10] opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-white to-[#94CE10] opacity-8 rounded-full blur-lg animate-pulse"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section with Enhanced Design */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8 group">
                <div className="relative w-20 h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#94CE10] to-[#557215] rounded-2xl blur-sm opacity-50 animate-pulse"></div>
                  <Image
                    src="/LogoName.svg"
                    alt="DoubleCheck Logo"
                    fill
                    sizes="80px"
                    className="object-contain relative z-10"
                  />
                </div>
                <span className="text-4xl font-bold transition-all duration-500 group-hover:scale-105">
                  <span className="text-white">Double</span><span className="text-[#94CE10]">Check</span>
                </span>
              </div>
              <div className="flex space-x-6">
                <a href="https://linkedin.com/" className="group relative" aria-label="LinkedIn">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#94CE10]/30 to-[#557215]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571008481079" className="group relative" aria-label="Facebook">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#557215]/30 to-[#94CE10]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </a>
                <a href="https://www.instagram.com/doble_verificacion/" className="group relative" aria-label="Instagram">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#94CE10]/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg className="w-6 h-6 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.388a6.678 6.678 0 0 0-2.414 1.57A6.678 6.678 0 0 0 1.028 4.37c-.184.508-.306 1.082-.34 2.029C.653 7.347.64 7.754.64 11.375c0 3.622.013 4.03.048 4.976.034.947.156 1.521.34 2.029a6.678 6.678 0 0 0 1.57 2.414 6.678 6.678 0 0 0 2.414 1.57c.508.184 1.082.306 2.029.34.946.035 1.354.048 4.975.048s4.029-.013 4.976-.048c.947-.034 1.521-.156 2.029-.34a6.678 6.678 0 0 0 2.414-1.57 6.678 6.678 0 0 0 1.57-2.414c.184-.508.306-1.082.34-2.029.035-.946.048-1.354.048-4.975s-.013-4.029-.048-4.976c-.034-.947-.156-1.521-.34-2.029a6.678 6.678 0 0 0-1.57-2.414A6.678 6.678 0 0 0 19.029.388c-.508-.184-1.082-.306-2.029-.34C16.054.013 15.647 0 12.017 0zm-.017 2.172c3.556 0 3.975.015 5.38.078.946.043 1.46.2 1.802.333.453.176.777.387 1.117.727.34.34.551.664.727 1.117.133.342.29.856.333 1.802.063 1.405.078 1.824.078 5.38s-.015 3.975-.078 5.38c-.043.946-.2 1.46-.333 1.802a3.004 3.004 0 0 1-.727 1.117 3.004 3.004 0 0 1-1.117.727c-.342.133-.856.29-1.802.333-1.405.063-1.824.078-5.38.078s-3.975-.015-5.38-.078c-.946-.043-1.46-.2-1.802-.333a3.004 3.004 0 0 1-1.117-.727 3.004 3.004 0 0 1-.727-1.117c-.133-.342-.29-.856-.333-1.802-.063-1.405-.078-1.824-.078-5.38s.015-3.975.078-5.38c.043-.946.2-1.46.333-1.802.176-.453.387-.777.727-1.117a3.004 3.004 0 0 1 1.117-.727c.342-.133.856-.29 1.802-.333 1.405-.063 1.824-.078 5.38-.078zm0 1.5a7.503 7.503 0 1 0 0 15.006 7.503 7.503 0 0 0 0-15.006zm0 12.375a4.872 4.872 0 1 1 0-9.744 4.872 4.872 0 0 1 0 9.744zm9.548-12.594a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Services Section with Enhanced Styling */}
            <div className="group">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                <span className="relative z-10">Servicios</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#94CE10] to-[#557215] group-hover:w-full transition-all duration-500"></div>
              </h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-[#557215] hover:bg-clip-text hover:text-transparent">Diseño Web</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#557215] hover:to-[#94CE10] hover:bg-clip-text hover:text-transparent">Diseño de Branding</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-green-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-green-400 hover:bg-clip-text hover:text-transparent">Fábrica de Software</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-green-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#557215] hover:to-green-500 hover:bg-clip-text hover:text-transparent">Marketing Digital</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company Section with Enhanced Styling */}
            <div className="group">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                <span className="relative z-10">Empresa</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#557215] to-[#94CE10] group-hover:w-full transition-all duration-500"></div>
              </h3>
              <ul className="space-y-4 text-white/80">
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-[#557215] hover:bg-clip-text hover:text-transparent">Sobre Nosotros</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#557215] hover:to-[#94CE10] hover:bg-clip-text hover:text-transparent">Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-green-400 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-green-400 hover:bg-clip-text hover:text-transparent">Contacto</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group/link flex items-center space-x-3 font-medium text-base transition-all duration-300 hover:text-white hover:translate-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-green-500 rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                    <span className="hover:bg-gradient-to-r hover:from-[#557215] hover:to-green-500 hover:bg-clip-text hover:text-transparent">Planes</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Enhanced Bottom bar with modern styling */}
          <div className="pt-8 border-t border-white/20 relative">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
            
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Copyright section with better visibility */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center lg:text-left">
                <p className="text-white text-sm md:text-base font-medium transition-colors duration-300 hover:text-[#94CE10]">
                  © {new Date().getFullYear()} DoubleCheck Tech - Todos los derechos reservados
                </p>
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Legal links with enhanced visibility and better responsive design */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
                <a href="#" className="group relative text-white hover:text-[#94CE10] text-sm md:text-base transition-all duration-300 font-medium whitespace-nowrap">
                  <span className="relative z-10">Términos de Servicio</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#94CE10] to-[#557215] group-hover:w-full transition-all duration-300"></div>
                </a>
                <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
                <a href="#" className="group relative text-white hover:text-[#94CE10] text-sm md:text-base transition-all duration-300 font-medium whitespace-nowrap">
                  <span className="relative z-10">Política de Privacidad</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#557215] to-[#94CE10] group-hover:w-full transition-all duration-300"></div>
                </a>
                <div className="w-px h-4 bg-white/30 hidden sm:block"></div>
                <a href="#" className="group relative text-white hover:text-[#94CE10] text-sm md:text-base transition-all duration-300 font-medium whitespace-nowrap">
                  <span className="relative z-10">Política de Cookies</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#94CE10] to-green-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="flex justify-center mt-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#94CE10] to-transparent"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#557215] to-transparent"></div>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#94CE10] to-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
