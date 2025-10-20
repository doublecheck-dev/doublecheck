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
  const heroImage = '/illustrations/chatbot-hero.svg';

  return (
    <section className="relative min-h-screen flex items-center py-24 bg-gradient-mesh-brand overflow-hidden">
  {/* Animated background elements - brand palette with lower opacity */}
  <div className="absolute inset-0 bg-gradient-animated-brand opacity-40"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-cosmic rounded-3xl opacity-20 animate-float blur-sm"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-sunset rounded-full opacity-30 animate-float-delayed blur-sm"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-ocean rounded-2xl opacity-25 animate-bounce blur-sm"></div>
      </div>
      
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
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse shadow-glow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft">
              <div className="space-y-8">
                {/* Dynamic heading with modern typography */}
                <h1 className="text-display-1 font-bold leading-tight text-white">
                  <span className={`inline-block transition-all duration-700 ${isTyping ? 'opacity-100 transform-none' : 'opacity-70 transform scale-95'}`}>
                    {currentHeading}
                  </span>
                  {!heading && (
                    <span className="animate-pulse text-white/80 ml-2">|</span>
                  )}
                </h1>
                
                <p className="text-body-large text-white/90 leading-relaxed max-w-2xl font-medium">
                  {subheading || "En un mundo saturado de imágenes, creamos un espacio único para tu marca, asegurándonos de que no solo sea reconocida, sino que también deje una huella imborrable."}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button 
                  variant="primary" 
                  className="bg-gradient-brand text-white hover:shadow-brand-glow-hover font-semibold px-10 py-5 text-lg rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-brand-glow"
                  icon={<span>🚀</span>}
                >
                  Crear Branding
                </Button>
                <Button 
                  variant="secondary" 
                  className="glass border-2 border-[#94CE10]/40 text-white hover:bg-[#94CE10]/10 font-semibold px-10 py-5 text-lg rounded-2xl transform hover:scale-105 transition-all duration-300"
                  icon={<span>→</span>}
                  iconPosition="right"
                >
                  Conocer Más
                </Button>
              </div>
            </AnimatedSection>

            {/* Trust indicators with modern design */}
            <AnimatedSection animation="fadeInUp" delay={600}>
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-3 glass-card px-4 py-3 rounded-2xl">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <div className="text-sm font-semibold text-white">5.0 Rating</div>
                    <div className="text-xs text-white/70">+100 Clientes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 glass-card px-4 py-3 rounded-2xl">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Certificados</div>
                    <div className="text-xs text-white/70">Google & Meta</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 glass-card px-4 py-3 rounded-2xl">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="text-sm font-semibold text-white">Entrega Rápida</div>
                    <div className="text-xs text-white/70">7-14 días</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Hero image with enhanced glassmorphic effects */}
          {heroImage && (
            <AnimatedSection animation="fadeInRight" delay={400}>
              <div className="flex justify-center relative">
                <div className="relative w-full max-w-lg h-[500px] group">
                  {/* Enhanced decorative elements (brand) */}
                  <div className="absolute -inset-6 bg-gradient-brand rounded-3xl blur-2xl opacity-25 group-hover:opacity-45 transition-all duration-700 animate-glow-pulse"></div>
                  <div className="absolute -inset-4 bg-gradient-brand-soft rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition-all duration-500"></div>
                  
                  {/* Consistent picture element for both cases */}
                  <picture className="absolute inset-0 rounded-3xl overflow-hidden z-10">
                    
                    <img
                      src={heroImage}
                      alt={heading ?? 'DoubleCheck Hero'}
                      className="w-full h-full object-cover rounded-3xl glass group-hover:scale-105 transition-all duration-700"
                      loading="eager"
                    />
                  </picture>
                  
                  {/* Modern floating badge */}
                  <div className="absolute -top-6 -right-6 bg-gradient-brand text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-brand-glow animate-bounce-in z-20 glass">
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
