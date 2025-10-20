'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppQR() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  
  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = "+573122394136"; // Replace with actual number
  
  // Default message to send
  const defaultMessage = "¡Hola! Me interesa conocer más sobre los servicios de DoubleCheck. ¿Podrían brindarme información?";
  
  // WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(defaultMessage)}`;
  
  // Generate QR code URL using a public QR service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappUrl)}`;

  // Entrance animation and periodic pulse
  useEffect(() => {
    // Entrance animation delay
    const entranceTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Periodic pulse animation to grab attention
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 8000);

    return () => {
      clearTimeout(entranceTimer);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <>
      {/* Modern Floating WhatsApp Button with Animations */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-1000 ${
        isVisible 
          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
          : 'translate-x-full translate-y-full opacity-0 scale-50'
      }`}>
        <div className="relative group">
          {/* Enhanced glow effect with animations */}
          <div className={`absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-2xl blur-xl opacity-30 transition-all duration-700 animate-pulse ${
            isHovered ? 'scale-150 opacity-60' : isPulsing ? 'scale-125 opacity-50 animate-ping' : 'scale-100'
          }`}></div>
          
          {/* Floating animation wrapper */}
          <div className="animate-float">
            {/* Main button with enhanced animations */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group border border-green-400/20 transform-gpu ${
                isHovered 
                  ? 'scale-110 -translate-y-2 shadow-green-500/40 rotate-3' 
                  : isPulsing 
                    ? 'scale-105 animate-bounce' 
                    : 'hover:scale-105'
              }`}
              aria-label="WhatsApp QR Code"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-80"></div>
              
              {/* Rotating border animation */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-green-300/50 transition-all duration-700 ${
                isHovered ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
              }`}></div>
              
              {/* WhatsApp Icon with rotation animation */}
              <svg 
                className={`w-8 h-8 text-white relative z-10 transition-all duration-500 transform-gpu ${
                  isHovered 
                    ? 'scale-125 rotate-12' 
                    : isPulsing 
                      ? 'scale-110 animate-pulse' 
                      : 'scale-100'
                }`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              
              {/* Multiple pulse rings for enhanced effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-green-300 opacity-0 group-hover:opacity-75 animate-ping"></div>
              <div className="absolute inset-0 rounded-2xl border border-green-400 opacity-0 group-hover:opacity-50 animate-ping animation-delay-200"></div>
              
              {/* Success particles effect on hover */}
              {isHovered && (
                <>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-emerald-300 rounded-full animate-ping animation-delay-300"></div>
                  <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping animation-delay-500"></div>
                </>
              )}
            </button>
          </div>
          
          {/* Enhanced tooltip with animation */}
          <div className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-slate-800/90 backdrop-blur-sm text-white text-sm rounded-xl transition-all duration-500 whitespace-nowrap transform ${
            isHovered 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 translate-y-2'
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Contáctanos por WhatsApp
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800/90"></div>
          </div>
        </div>
      </div>

      {/* Enhanced QR Code Modal with Animations */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Enhanced Backdrop with animation */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modern Modal Content with entrance animation */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4 transform transition-all duration-700 scale-100 border border-white/20 animate-slideInUp">
            {/* Decorative gradient overlay with animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 rounded-3xl animate-pulse-soft-custom"></div>
            
            {/* Enhanced Close Button with animations */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-90 border border-gray-200/50 group z-20"
              aria-label="Cerrar"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content with staggered animations */}
            <div className="text-center relative z-10">
              {/* Enhanced Header with animations */}
              <div className="relative mb-6 animate-fadeInUp">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-500 animate-bounce-gentle">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-pulse-soft-custom"></div>
                  <svg className="w-10 h-10 text-white relative z-10 animate-wiggle" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 animate-fadeInUp" style={{animationDelay: '200ms'}}>
                  ¡Contáctanos por WhatsApp!
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed animate-fadeInUp" style={{animationDelay: '300ms'}}>
                  Escanea el código QR con la cámara de tu teléfono para iniciar una conversación
                </p>
                
                {/* Default message preview */}
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl animate-fadeInUp" style={{animationDelay: '350ms'}}>
                  <p className="text-green-800 text-xs font-medium mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
                    </svg>
                    Mensaje predeterminado:
                  </p>
                  <p className="text-green-700 text-xs italic leading-relaxed">
                    "{defaultMessage}"
                  </p>
                </div>
              </div>              {/* Enhanced QR Code with animations */}
              <div className="bg-white p-6 rounded-3xl border border-gray-200/50 shadow-lg mb-6 inline-block relative hover:scale-105 transition-transform duration-500 animate-fadeInUp" style={{animationDelay: '400ms'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-blue-50/20 rounded-3xl animate-pulse-soft-custom"></div>
                <img 
                  src={qrCodeUrl}
                  alt="WhatsApp QR Code"
                  className="w-56 h-56 mx-auto relative z-10 rounded-2xl hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* Animated QR Code decorative corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-green-500 rounded-tl-lg animate-pulse"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-500 rounded-tr-lg animate-pulse" style={{animationDelay: '200ms'}}></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-500 rounded-bl-lg animate-pulse" style={{animationDelay: '400ms'}}></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-500 rounded-br-lg animate-pulse" style={{animationDelay: '600ms'}}></div>
                
                {/* Scanning line animation */}
                <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60 animate-scan"></div>
              </div>

              {/* Modern Action Buttons with staggered animations */}
              <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '500ms'}}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 group transform-gpu"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                  <span className="group-hover:tracking-wide transition-all duration-300">Abrir WhatsApp Directamente</span>
                </a>
                
                {/* Phone number display with animation */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 hover:border-green-300 transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '600ms'}}>
                  <p className="text-slate-600 text-sm font-medium flex items-center justify-center gap-2">
                    <span className="animate-bounce">📞</span> 
                    Número de contacto:
                  </p>
                  <p className="text-slate-900 font-semibold text-lg hover:text-green-600 transition-colors duration-300 cursor-pointer">
                    {whatsappNumber}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}