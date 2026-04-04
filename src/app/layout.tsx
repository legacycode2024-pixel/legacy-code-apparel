import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Legacy Code Apparel | Integrity Tees with Meaning',
  description: 'Legacy Code Apparel — wear your values, leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose. Free shipping over $50.',
  keywords: 'integrity apparel, legacy tees, values based clothing, honor tshirts, moral principles apparel, legacy code apparel',
  openGraph: {
    title: 'Legacy Code Apparel | Integrity Tees with Meaning',
    description: 'Wear your values. Leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose.',
    url: 'https://legacycodeapparel.store',
    siteName: 'Legacy Code Apparel',
    images: [{ url: 'https://legacycodeapparel.store/images/og-image.jpg', width: 1200, height: 630, alt: 'Legacy Code Apparel — Stand On It Tee' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Code Apparel | Integrity Tees with Meaning',
    description: 'Wear your values. Leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose.',
    images: ['https://legacycodeapparel.store/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}