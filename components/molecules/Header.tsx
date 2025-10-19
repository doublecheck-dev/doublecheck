import Link from 'next/link';
import React from 'react';
import { fetchHeaderSettings, fetchNavLinks } from '../../lib/supabaseClient';
import Container from '../atoms/Container';
import MobileMenu from './MobileMenu';

export default async function Header() {
  const navLinks = await fetchNavLinks();
  const headerSettings = await fetchHeaderSettings();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm" role="banner">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link 
            href="/" 
            className="flex items-center space-x-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1"
            aria-label="DoubleCheck - Inicio"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <span className="text-white font-bold text-lg" aria-hidden="true">DC</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              DoubleCheck
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            {navLinks.map((link: any) => (
              <Link 
                key={link.id} 
                href={link.url || '#'} 
                target={link.open_in_new_tab ? '_blank' : undefined}
                rel={link.open_in_new_tab ? 'noopener noreferrer' : undefined}
                className="text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {headerSettings?.show_cta && headerSettings?.cta_text && (
              <Link 
                href={headerSettings.cta_url || '/signup'} 
                className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
              >
                {headerSettings.cta_text}
              </Link>
            )}
            
            <MobileMenu navLinks={navLinks} headerSettings={headerSettings} />
          </div>
        </div>
      </Container>
    </header>
  );
}
