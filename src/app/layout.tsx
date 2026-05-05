import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
  description: 'Shop premium statement tees from Legacy Code Apparel. Minimalist graphic tees for people who lead with character. Value-driven apparel made in Atlanta. Free shipping over $45.',
  keywords: 'integrity apparel, legacy tees, values based clothing, statement tees, minimalist graphic tees, premium tshirts, value driven apparel, atlanta apparel, character tees, legacy code apparel',
  openGraph: {
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity. Free shipping over $45.',
    url: 'https://legacycodeapparel.store',
    siteName: 'Legacy Code Apparel',
    images: [{ url: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775277592/IMG_7062_pz5yll.jpg', width: 1200, height: 630, alt: 'Legacy Code Apparel — Wear Your Values' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity.',
    images: ['https://res.cloudinary.com/dozyoetnr/image/upload/v1775277592/IMG_7062_pz5yll.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wmigaeqvyf");
        ` }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
