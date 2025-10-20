'use client';

import { useState } from 'react';
import Container from "@components/atoms/Container";
import Button from "@components/atoms/Button";
import WhatsAppCTA from "@components/organisms/WhatsAppCTA";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Modern gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10"></div>
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transition-all duration-1000 ${
        isHovered ? 'from-cyan-500/25 to-purple-500/25' : ''
      }`}></div>
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl transition-all duration-1000 ${
          isHovered ? 'scale-125 opacity-30' : 'opacity-20'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-purple-400/25 to-indigo-500/25 rounded-full blur-3xl transition-all duration-1000 ${
          isHovered ? 'scale-110 opacity-35' : 'opacity-25'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-300/15 to-cyan-400/15 rounded-full blur-2xl transition-all duration-700 ${
          isHovered ? 'scale-150 opacity-25' : 'opacity-15'
        }`}></div>
      </div>
      
      {/* Floating accent particles */}
      <div className="absolute inset-0">
        <div className={`absolute top-32 right-1/4 w-4 h-4 bg-cyan-400 rounded-full opacity-60 blur-sm transition-all duration-500 ${
          isHovered ? 'scale-150 opacity-80 animate-pulse-soft' : ''
        }`}></div>
        <div className={`absolute bottom-32 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 blur-sm transition-all duration-700 ${
          isHovered ? 'scale-125 opacity-70' : ''
        }`}></div>
        <div className={`absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-40 transition-all duration-300 ${
          isHovered ? 'scale-200 opacity-60' : ''
        }`}></div>
      </div>
      
      <Container className="relative z-10">
        {/* Modern glassmorphic content card */}
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center max-w-5xl mx-auto transition-all duration-500 ${
          isHovered ? 'bg-white/15 border-white/30 scale-105 shadow-2xl shadow-blue-500/20' : 'shadow-xl'
        }`}>
          <div className="text-center">
            {/* Enhanced heading with gradient text */}
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                ¿Listo para revolucionar
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                tu marca y el mundo?
              </span>
            </h2>
            
            {/* Enhanced description */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              ¡Permítenos transformar tu <span className="text-cyan-300 font-semibold">visión</span> en una 
              <span className="text-purple-300 font-semibold"> identidad poderosa</span> e inolvidable que impulse 
              el crecimiento y te destaque del resto!
            </p>
            
            {/* Modern button group */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="primary" 
                className={`bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 font-semibold px-10 py-5 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 ${
                  isHovered ? 'scale-105 shadow-cyan-500/40' : ''
                }`}
              >
                Sobre Nosotros
              </Button>
              <div className="w-full sm:w-auto">
                <WhatsAppCTA 
                  variant="secondary" 
                  text="Contáctanos por WhatsApp"
                  className={`transition-all duration-300 hover:scale-105 ${
                    isHovered ? 'scale-105' : ''
                  }`}
                />
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-blue-200 text-sm font-medium mb-4">Confiado por más de 100+ empresas</p>
              <div className="flex justify-center items-center gap-6 opacity-60">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-soft"></div>
                <span className="text-blue-200 text-xs">Resultados garantizados</span>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse-soft"></div>
                <span className="text-blue-200 text-xs">Soporte 24/7</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}