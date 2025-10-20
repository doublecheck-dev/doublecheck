import { WHATSAPP_CONFIG } from '../atoms/WhatsAppConfig';

interface ContactInfoProps {
  className?: string;
  showMessage?: boolean;
}

export default function ContactInfo({ className = "", showMessage = true }: ContactInfoProps) {
  return (
    <div className={className}>
      {/* Phone number display with animation */}
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 hover:border-green-300 transition-colors duration-300 animate-fadeInUp" style={{animationDelay: '600ms'}}>
        <p className="text-slate-600 text-sm font-medium flex items-center justify-center gap-2">
          <span className="animate-bounce">📞</span> 
          Número de contacto:
        </p>
        <p className="text-slate-900 font-semibold text-lg hover:text-green-600 transition-colors duration-300 cursor-pointer">
          {WHATSAPP_CONFIG.number}
        </p>
      </div>
      
      {/* Default message preview */}
      {showMessage && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl animate-fadeInUp" style={{animationDelay: '350ms'}}>
          <p className="text-green-800 text-xs font-medium mb-1 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
            </svg>
            Mensaje predeterminado:
          </p>
          <p className="text-green-700 text-xs italic leading-relaxed">
            "{WHATSAPP_CONFIG.defaultMessage}"
          </p>
        </div>
      )}
    </div>
  );
}