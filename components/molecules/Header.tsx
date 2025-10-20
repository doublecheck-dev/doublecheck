'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { fetchHeaderSettings, fetchNavLinks } from '../../lib/supabaseClient';
import Container from '../atoms/Container';
import MobileMenu from './MobileMenu';
import WhatsAppButton from './WhatsAppButton';

export default function Header() {
  const [navLinks, setNavLinks] = useState<any[]>([]);
  const [headerSettings, setHeaderSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHeaderData() {
      try {
        const [linksData, settingsData] = await Promise.all([
          fetchNavLinks(),
          fetchHeaderSettings()
        ]);
        setNavLinks(linksData);
        setHeaderSettings(settingsData);
      } catch (error) {
        console.error('Error loading header data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadHeaderData();
  }, []);

  if (loading) {
    return (
      <header className="glass backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-soft" role="banner">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-white/10 rounded-2xl animate-pulse"></div>
              <div className="w-32 h-8 bg-white/10 rounded animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-24 h-10 bg-white/10 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </Container>
      </header>
    );
  }

  return (
    <header className="glass backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-soft" role="banner">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link 
            href="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-[#94CE10] focus:ring-offset-2 rounded-lg p-1"
            aria-label="DoubleCheck - Inicio"
          >
            <div className="relative w-16 h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/LogoName.svg"
                alt="DoubleCheck Logo"
                fill
                sizes="64px"
                className="object-contain relative z-10"
                priority
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-slate-800">Double</span><span className="text-[#94CE10]">Check</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            {navLinks.map((link: any) => (
              <Link 
                key={link.id} 
                href={link.url || '#'} 
                target={link.open_in_new_tab ? '_blank' : undefined}
                rel={link.open_in_new_tab ? 'noopener noreferrer' : undefined}
                className="text-slate-700 hover:text-[#557215] font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-[#94CE10] focus:ring-offset-2 rounded-lg px-3 py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#94CE10] to-[#557215] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {headerSettings?.show_cta && headerSettings?.cta_text && (
              <WhatsAppButton 
                variant="compact"
                className="hidden sm:inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#94CE10]/80 via-[#94CE10]/90 to-[#557215]/80 backdrop-blur-xl border border-[#94CE10]/70 text-white font-semibold hover:bg-gradient-to-r hover:from-[#94CE10] hover:via-[#94CE10] hover:to-[#557215] hover:shadow-xl hover:shadow-[#94CE10]/50 hover:scale-105 hover:border-[#94CE10] focus:outline-none focus:ring-2 focus:ring-[#94CE10] focus:ring-offset-2 transition-all duration-300 group relative overflow-hidden"
                text={headerSettings.cta_text}
              />
            )}
            
            <MobileMenu navLinks={navLinks} headerSettings={headerSettings} />
          </div>
        </div>
      </Container>
    </header>
  );
}
