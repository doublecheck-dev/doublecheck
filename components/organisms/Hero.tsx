'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Container from '@components/atoms/Container';
import Button from '@components/atoms/Button';
import AnimatedSection from '@components/atoms/AnimatedSection';

const heroTexts = [
  "Branding increíbles",
  "Diseño excepcional", 
  "Marketing efectivo",
  "Software innovador"
];

export default function Hero({ heading, subheading, image }: { heading?: string; subheading?: string; image?: string | null }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!heading) {
      const interval = setInterval(() => {
        setIsTyping(false);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
          setIsTyping(true);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [heading]);

  const currentHeading = heading || heroTexts[currentTextIndex];

  return (
    <section className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-primary-800 via-primary-900 to-accent-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/95 to-accent-800/95"></div>
      
      {/* Subtle logo watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <div className="relative w-[28rem] h-[28rem]">
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="448px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft">
              <div className="space-y-6">
                {/* Dynamic heading with typing effect */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className={`inline-block transition-all duration-500 ${isTyping ? 'opacity-100' : 'opacity-50'}`}>
                    {currentHeading}
                  </span>
                  {!heading && (
                    <span className="animate-pulse text-accent-100">|</span>
                  )}
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-2xl font-medium">
                  {subheading || "En un mundo saturado de imágenes, creamos un espacio único para tu marca, asegurándonos de que no solo sea reconocida, sino que también deje una huella imborrable."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  className="bg-gradient-to-r from-accent-700 to-accent-800 text-white hover:from-accent-800 hover:to-accent-900 font-semibold px-8 py-4 text-lg hover:shadow-2xl hover:scale-105 border border-accent-800"
                  icon={<span>🚀</span>}
                >
                  Crear Branding
                </Button>
                <Button 
                  variant="secondary" 
                  className="border-2 border-white text-white hover:bg-accent-800 hover:border-accent-800 font-semibold px-8 py-4 text-lg"
                  icon={<span>→</span>}
                  iconPosition="right"
                >
                  Conocer Más
                </Button>
              </div>
            </AnimatedSection>

            {/* Trust indicators */}
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <div className="text-sm font-semibold">5.0 Rating</div>
                    <div className="text-xs text-blue-200">+100 Clientes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <div className="text-sm font-semibold">Certificados</div>
                    <div className="text-xs text-blue-200">Google & Meta</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <div className="text-sm font-semibold">Entrega Rápida</div>
                    <div className="text-xs text-blue-200">7-14 días</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Hero image with enhanced effects */}
          {image && (
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="flex justify-center relative">
                <div className="relative w-full max-w-lg h-[500px] group">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent-600 to-primary-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  <Image
                    src={image}
                    alt={heading ?? 'DoubleCheck Hero'}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="rounded-2xl shadow-2xl object-cover ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-500 relative z-10"
                    priority
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce z-20">
                    ¡Nuevo!
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </Container>
      
      {/* Enhanced bottom wave with animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 text-white"
          style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.1))' }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
