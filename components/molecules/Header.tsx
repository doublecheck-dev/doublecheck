import Link from 'next/link';
import React from 'react';
import { fetchHeaderSettings, fetchNavLinks } from '../../lib/supabaseClient';
import Container from '../atoms/Container';

export default async function Header() {
  const navLinks = await fetchNavLinks();
  const headerSettings = await fetchHeaderSettings();

  return (
    <header className="bg-white border-b">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-primary">DoubleCheck</Link>
          <nav className="flex items-center space-x-4">
            {navLinks.map((link: any) => (
              <Link key={link.id} href={link.url || '#'} target={link.open_in_new_tab ? '_blank' : undefined} className="text-gray-600 hover:text-gray-900">
                {link.label}
              </Link>
            ))}
            {headerSettings?.show_cta && headerSettings?.cta_text && (
              <Link href={headerSettings.cta_url || '/signup'} className="ml-4 inline-flex items-center px-4 py-2 rounded-md bg-primary text-white">
                {headerSettings.cta_text}
              </Link>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}
