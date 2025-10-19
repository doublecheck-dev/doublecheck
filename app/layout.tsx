import '../styles/globals.css';
import type { ReactNode } from 'react';
import Header from '../components/molecules/Header';
import Footer from '../components/molecules/Footer';

export const metadata = {
  title: 'DoubleCheck',
  description: 'Verify and monitor your data'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'es'}>
      <body className="min-h-screen flex flex-col">
        {/* Header is a server component that reads nav from Supabase */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
