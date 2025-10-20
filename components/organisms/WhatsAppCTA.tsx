import WhatsAppButton from '../molecules/WhatsAppButton';

interface WhatsAppCTAProps {
  variant?: 'primary' | 'secondary' | 'compact';
  text?: string;
  className?: string;
  showIcon?: boolean;
}

export default function WhatsAppCTA({ 
  variant = 'primary', 
  text,
  className = "",
  showIcon = true 
}: WhatsAppCTAProps) {
  
  // Text variations based on context
  const getButtonText = () => {
    if (text) return text;
    
    switch (variant) {
      case 'primary':
        return 'Contactar por WhatsApp';
      case 'secondary':
        return 'Escribir por WhatsApp';
      case 'compact':
        return 'WhatsApp';
      default:
        return 'Contactar por WhatsApp';
    }
  };

  // Variant mappings to WhatsAppButton variants
  const getButtonVariant = () => {
    switch (variant) {
      case 'compact':
        return 'compact';
      default:
        return 'inline';
    }
  };

  return (
    <div className={`flex ${variant === 'compact' ? 'inline-flex' : 'w-full'} ${className}`}>
      <WhatsAppButton 
        variant={getButtonVariant()}
        className={variant === 'secondary' ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600' : ''}
      />
    </div>
  );
}

// Export individual CTA components for specific use cases
export function PrimaryWhatsAppCTA({ className = "", text }: { className?: string; text?: string }) {
  return <WhatsAppCTA variant="primary" className={className} text={text} />;
}

export function SecondaryWhatsAppCTA({ className = "", text }: { className?: string; text?: string }) {
  return <WhatsAppCTA variant="secondary" className={className} text={text} />;
}

export function CompactWhatsAppCTA({ className = "", text }: { className?: string; text?: string }) {
  return <WhatsAppCTA variant="compact" className={className} text={text} />;
}