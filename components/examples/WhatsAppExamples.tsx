// Example usage of the new WhatsApp components throughout the application

import { 
  PrimaryWhatsAppCTA, 
  SecondaryWhatsAppCTA, 
  CompactWhatsAppCTA 
} from '@components/organisms/WhatsAppCTA';
import WhatsAppButton from '@components/molecules/WhatsAppButton';
import { WHATSAPP_CONFIG } from '@components/atoms/WhatsAppConfig';

export default function WhatsAppExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Primary CTA - Use in main hero sections */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Primary CTA - Hero Sections</h3>
        <PrimaryWhatsAppCTA text="Obtén tu cotización gratis" />
      </section>

      {/* Secondary CTA - Use in content sections */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Secondary CTA - Content Sections</h3>
        <SecondaryWhatsAppCTA text="Habla con un experto" />
      </section>

      {/* Compact CTA - Use in navigation or tight spaces */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Compact CTA - Navigation</h3>
        <div className="flex gap-4">
          <CompactWhatsAppCTA />
          <CompactWhatsAppCTA text="Chat" />
        </div>
      </section>

      {/* Individual WhatsApp Buttons with custom behavior */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Custom WhatsApp Buttons</h3>
        <div className="space-y-4">
          <WhatsAppButton 
            variant="inline" 
            onClick={() => console.log('Custom action before opening WhatsApp')}
          />
          <WhatsAppButton variant="compact" />
        </div>
      </section>

      {/* Configuration display */}
      <section className="bg-slate-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Current Configuration</h3>
        <div className="space-y-2 text-sm">
          <p><strong>Number:</strong> {WHATSAPP_CONFIG.number}</p>
          <p><strong>Default Message:</strong> {WHATSAPP_CONFIG.defaultMessage}</p>
          <p><strong>WhatsApp URL:</strong> {WHATSAPP_CONFIG.getWhatsAppUrl()}</p>
        </div>
      </section>
    </div>
  );
}

/*
USAGE EXAMPLES THROUGHOUT THE APPLICATION:

1. Hero Section:
   <PrimaryWhatsAppCTA text="Obtén tu cotización gratuita" />

2. Service Cards:
   <SecondaryWhatsAppCTA text="Consultar este servicio" />

3. Footer:
   <CompactWhatsAppCTA />

4. Contact Forms:
   <WhatsAppButton variant="inline" onClick={handleContactSubmit} />

5. Navigation:
   <CompactWhatsAppCTA text="Chat" />

6. Blog Posts:
   <SecondaryWhatsAppCTA text="Pregúntanos sobre este tema" />

7. Pricing Cards:
   <PrimaryWhatsAppCTA text="Contratar plan" />

8. Team Member Cards:
   <CompactWhatsAppCTA text="Contactar" />
*/