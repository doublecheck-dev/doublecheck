import CloseButton from '../atoms/CloseButton';
import WhatsAppIcon from '../atoms/WhatsAppIcon';
import QRCodeDisplay from '../molecules/QRCodeDisplay';
import WhatsAppButton from '../molecules/WhatsAppButton';
import ContactInfo from '../molecules/ContactInfo';
import { WHATSAPP_CONFIG } from '../atoms/WhatsAppConfig';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop with animation */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-indigo-900/80 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
      />
      
      {/* Modern Modal Content with entrance animation */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4 transform transition-all duration-700 scale-100 border border-white/20 animate-slideInUp">
        {/* Decorative gradient overlay with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/30 rounded-3xl animate-pulse-soft-custom"></div>
        
        {/* Enhanced Close Button with animations */}
        <CloseButton onClick={onClose} className="absolute top-4 right-4" />

        {/* Content with staggered animations */}
        <div className="text-center relative z-10">
          {/* Enhanced Header with animations */}
          <div className="relative mb-6 animate-fadeInUp">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-500 animate-bounce-gentle">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-pulse-soft-custom"></div>
              <WhatsAppIcon className="w-10 h-10 text-white relative z-10 animate-wiggle" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2 animate-fadeInUp" style={{animationDelay: '200ms'}}>
              ¡Contáctanos por WhatsApp!
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed animate-fadeInUp" style={{animationDelay: '300ms'}}>
              Escanea el código QR con la cámara de tu teléfono para iniciar una conversación
            </p>
            
            {/* Default message preview */}
            <ContactInfo showMessage={true} />
          </div>

          {/* Enhanced QR Code with animations */}
          <QRCodeDisplay className="mb-6" />

          {/* Modern Action Buttons with staggered animations */}
          <div className="space-y-4 animate-fadeInUp" style={{animationDelay: '500ms'}}>
            <WhatsAppButton variant="inline" />
            
            {/* Phone number display */}
            <ContactInfo showMessage={false} />
          </div>
        </div>
      </div>
    </div>
  );
}