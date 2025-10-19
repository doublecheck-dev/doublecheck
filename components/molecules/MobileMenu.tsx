'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  navLinks: Array<{ id: string; label: string; url: string; open_in_new_tab?: boolean }>;
  headerSettings?: { show_cta: boolean; cta_text: string; cta_url: string };
}

export default function MobileMenu({ navLinks, headerSettings }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? 'rotate-45 top-2.5' : 'top-1'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'top-2.5'
            }`}
          />
          <span
            className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
              isOpen ? '-rotate-45 top-2.5' : 'top-4'
            }`}
          />
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="DoubleCheck Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-800 to-accent-800 bg-clip-text text-transparent">
                DoubleCheck
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Cerrar menú"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-4 space-y-2 overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.id}
                href={link.url || '#'}
                target={link.open_in_new_tab ? '_blank' : undefined}
                className="block px-4 py-3 text-secondary-800 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          {headerSettings?.show_cta && headerSettings?.cta_text && (
            <div className="p-6 border-t">
              <Link
                href={headerSettings.cta_url || '/signup'}
                className="block w-full text-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-700 to-accent-700 text-white font-semibold hover:shadow-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {headerSettings.cta_text}
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}