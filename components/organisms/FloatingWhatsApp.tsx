'use client';

import { useState, useEffect } from 'react';
import WhatsAppButton from '../molecules/WhatsAppButton';
import WhatsAppModal from '../organisms/WhatsAppModal';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

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
      <div className='flex justify-end px-4 sticky top-0 z-50' >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`fixed bottom-6  transition-all duration-1000 overflow-visible ${
        isVisible 
          ? 'translate-x-0 translate-y-0 opacity-100 scale-100' 
          : 'translate-x-full translate-y-full opacity-0 scale-50'
      }`}
        >
          <WhatsAppButton
            variant="floating"
            onClick={() => setIsOpen(!isOpen)}
            showTooltip={true}
            isHovered={isHovered}
            isPulsing={isPulsing}
          />
        </div>
      </div>

      {/* Enhanced QR Code Modal with Animations */}
      <WhatsAppModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}