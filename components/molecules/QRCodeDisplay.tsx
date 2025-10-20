import { WHATSAPP_CONFIG } from '../atoms/WhatsAppConfig';

interface QRCodeDisplayProps {
  className?: string;
}

export default function QRCodeDisplay({ className = "" }: QRCodeDisplayProps) {
  const qrCodeUrl = WHATSAPP_CONFIG.getQRCodeUrl();

  return (
    <div className={`bg-white p-6 rounded-3xl border border-gray-200/50 shadow-lg inline-block relative hover:scale-105 transition-transform duration-500 animate-fadeInUp ${className}`} style={{animationDelay: '400ms'}}>
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
  );
}