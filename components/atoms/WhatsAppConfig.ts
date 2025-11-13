// WhatsApp contact configuration
export const WHATSAPP_CONFIG = {
  number: "+573126853970", // Replace with actual number
  defaultMessage: "¡Hola! Me interesa conocer más sobre los servicios de DoubleCheck. ¿Podrían brindarme información?",
  
  // Generate WhatsApp URL with pre-filled message
  getWhatsAppUrl: () => {
    return `https://wa.me/${WHATSAPP_CONFIG.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`;
  },
  
  // Generate QR code URL
  getQRCodeUrl: () => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(WHATSAPP_CONFIG.getWhatsAppUrl())}`;
  }
};

export type WhatsAppConfig = typeof WHATSAPP_CONFIG;