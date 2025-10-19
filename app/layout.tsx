import '../styles/globals.css';
import type { ReactNode } from 'react';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';
import ScrollProgress from '../components/atoms/ScrollProgress';

export const metadata = {
  metadataBase: new URL('https://doublecheck.com.co'),
  title: {
    default: 'DoubleCheck - Branding y Marketing Digital',
    template: '%s | DoubleCheck'
  },
  description: 'Creamos brandings increíbles, diseño web profesional y estrategias de marketing digital que impulsan tu negocio. Transformamos tu visión en una identidad poderosa.',
  keywords: ['branding', 'diseño web', 'marketing digital', 'software', 'Colombia'],
  authors: [{ name: 'DoubleCheck Tech' }],
  creator: 'DoubleCheck',
  publisher: 'DoubleCheck',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://doublecheck.com.co',
    siteName: 'DoubleCheck',
    title: 'DoubleCheck - Branding y Marketing Digital',
    description: 'Creamos brandings increíbles y estrategias digitales que transforman negocios',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
      alt: 'DoubleCheck - Branding y Marketing Digital'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@doublecheck',
    creator: '@doublecheck'
  },
  verification: {
    google: 'your-google-verification-code'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'es'} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-secondary-900 antialiased">
        <ScrollProgress />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
        >
          Saltar al contenido principal
        </a>
        
        <Header />
        
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        
        <Footer />
        
        {/* Performance and UX enhancements */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent FOUC (Flash of Unstyled Content)
              document.documentElement.classList.add('js-enabled');
              
              // Preload critical resources
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  const link = document.createElement('link');
                  link.rel = 'prefetch';
                  link.href = '/api/services';
                  document.head.appendChild(link);
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}
