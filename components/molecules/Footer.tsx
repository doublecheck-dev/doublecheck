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
        <div className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
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
              {/* <p className="text-lg text-white/90 leading-relaxed max-w-md font-medium mb-8 transition-colors duration-300 hover:text-white">
                ¡Permítenos transformar tu visión en una identidad poderosa e inolvidable que impulse el crecimiento y te destaque del resto!
              </p> */}
              <div className="flex space-x-6">
                <a href="https://linkedin.com/" className="group relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#94CE10]/30 to-[#557215]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-white font-bold text-base relative z-10">Li</span>
                  </div>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571008481079" className="group relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#557215]/30 to-[#94CE10]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-white font-bold text-base relative z-10">Fb</span>
                  </div>
                </a>
                <a href="https://www.instagram.com/doble_verificacion/" className="group relative">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#94CE10]/30 to-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-white font-bold text-base relative z-10">Ig</span>
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
          <div className="pt-12 border-t border-white/20 relative">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-white/70 text-sm font-medium transition-colors duration-300 hover:text-white">
                  All rights reserved DoubleCheck Tech {new Date().getFullYear()}
                </p>
                <div className="hidden md:flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-gradient-to-r from-[#94CE10] to-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="group relative text-white/70 hover:text-white text-sm transition-all duration-300 font-medium">
                  <span className="relative z-10 hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-[#557215] hover:bg-clip-text hover:text-transparent">Términos</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#94CE10] to-[#557215] group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#" className="group relative text-white/70 hover:text-white text-sm transition-all duration-300 font-medium">
                  <span className="relative z-10 hover:bg-gradient-to-r hover:from-[#557215] hover:to-[#94CE10] hover:bg-clip-text hover:text-transparent">Privacidad</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#557215] to-[#94CE10] group-hover:w-full transition-all duration-300"></div>
                </a>
                <a href="#" className="group relative text-white/70 hover:text-white text-sm transition-all duration-300 font-medium">
                  <span className="relative z-10 hover:bg-gradient-to-r hover:from-[#94CE10] hover:to-green-400 hover:bg-clip-text hover:text-transparent">Cookies</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-[#94CE10] to-green-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
            </div>
            
            {/* Modern decorative elements with brand colors */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-1 bg-gradient-to-r from-[#94CE10] to-[#557215] rounded-full animate-pulse"></div>
                <div className="w-8 h-px bg-gradient-to-r from-[#557215] via-[#94CE10] to-green-400"></div>
                <div className="w-1 h-1 bg-gradient-to-r from-[#557215] to-[#94CE10] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
