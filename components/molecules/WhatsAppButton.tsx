import WhatsAppIcon from '../atoms/WhatsAppIcon';
import { WHATSAPP_CONFIG } from '../atoms/WhatsAppConfig';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline' | 'compact';
  onClick?: () => void;
  className?: string;
  showTooltip?: boolean;
  isHovered?: boolean;
  isPulsing?: boolean;
  text?: string;
  showArrow?: boolean;
  customIcon?: string;
  hideIcon?: boolean;
}

export default function WhatsAppButton({ 
  variant = 'inline', 
  onClick, 
  className = "",
  showTooltip = false,
  isHovered = false,
  isPulsing = false,
  text,
  showArrow = false,
  customIcon,
  hideIcon = false
}: WhatsAppButtonProps) {
  const whatsappUrl = WHATSAPP_CONFIG.getWhatsAppUrl();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: open WhatsApp directly
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Floating variant (for the floating button)
  if (variant === 'floating') {
    return (
      <div className="relative group">
        {/* Enhanced glow effect with animations */}
        <div className={`absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 rounded-2xl blur-xl opacity-30 transition-all duration-700 animate-pulse ${
          isHovered ? 'scale-150 opacity-60' : isPulsing ? 'scale-125 opacity-50 animate-ping' : 'scale-100'
        }`}></div>
        
        {/* Floating animation wrapper */}
        <div className="animate-float">
          {/* Main button with enhanced animations */}
          <button
            onClick={handleClick}
            className={`relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center group border border-green-400/20 transform-gpu ${
              isHovered 
                ? 'scale-110 -translate-y-2 shadow-green-500/40 rotate-3' 
                : isPulsing 
                  ? 'scale-105 animate-bounce' 
                  : 'hover:scale-105'
            } ${className}`}
            aria-label="WhatsApp"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-80"></div>
            
            {/* Rotating border animation */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-green-300/50 transition-all duration-700 ${
              isHovered ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
            }`}></div>
            
            {/* WhatsApp Icon with rotation animation */}
            <WhatsAppIcon className={`w-8 h-8 text-white relative z-10 transition-all duration-500 transform-gpu ${
              isHovered 
                ? 'scale-125 rotate-12' 
                : isPulsing 
                  ? 'scale-110 animate-pulse' 
                  : 'scale-100'
            }`} />
            
            {/* Multiple pulse rings for enhanced effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-green-300 opacity-0 group-hover:opacity-75 animate-ping"></div>
            <div className="absolute inset-0 rounded-2xl border border-green-400 opacity-0 group-hover:opacity-50 animate-ping" style={{animationDelay: '200ms'}}></div>
            
            {/* Success particles effect on hover */}
            {isHovered && (
              <>
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-emerald-300 rounded-full animate-ping" style={{animationDelay: '300ms'}}></div>
                <div className="absolute -top-2 -left-2 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style={{animationDelay: '500ms'}}></div>
              </>
            )}
          </button>
        </div>
        
        {/* Enhanced tooltip with animation */}
        {showTooltip && (
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
        )}
      </div>
    );
  }

  // Compact variant (small button)
  if (variant === 'compact') {
    return (
      <button
        onClick={handleClick}
        className={className || `inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 group transform-gpu`}
        aria-label="Contactar por WhatsApp"
      >
        {!hideIcon && (customIcon ? (
          <span className="text-lg">{customIcon}</span>
        ) : (
          <WhatsAppIcon className={className ? "w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" : "w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"} />
        ))}
        <span className={className ? "group-hover:tracking-wide transition-all duration-300" : "text-sm"}>
          {text || 'WhatsApp'}
        </span>
        {showArrow && (
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        )}
      </button>
    );
  }

  // Default inline variant (full CTA button)
  return (
    <button
      onClick={handleClick}
      className={className || `w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 hover:scale-105 group transform-gpu`}
    >
      {!hideIcon && <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />}
      <span className="group-hover:tracking-wide transition-all duration-300">
        {text || 'Contactar por WhatsApp'}
      </span>
      {showArrow && (
        <span className="ml-3 transform transition-transform group-hover:translate-x-1">→</span>
      )}
    </button>
  );
}