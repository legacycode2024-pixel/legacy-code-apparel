import type { Metadata } from 'next';
import Script from 'next/script';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
  description: 'Shop premium heavyweight hoodies, sweatshirts, and crops from Legacy Code Apparel. One-of-one preorder pieces for people who lead with character. Value-driven apparel made in Atlanta. Free shipping over $50.',
  keywords: 'integrity apparel, legacy code apparel, values based clothing, statement hoodies, heavyweight sweatshirts, premium streetwear, value driven apparel, atlanta apparel, character apparel, one of one preorder',
  openGraph: {
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium heavyweight hoodies, sweatshirts, and crops for people who lead with character. One-of-one preorder pieces rooted in integrity. Free shipping over $50.',
    url: 'https://legacycodeapparel.store',
    siteName: 'Legacy Code Apparel',
    images: [{ url: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775277592/IMG_7062_pz5yll.jpg', width: 1200, height: 630, alt: 'Legacy Code Apparel — Wear Your Values' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium heavyweight hoodies, sweatshirts, and crops for people who lead with character. One-of-one preorder pieces rooted in integrity.',
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
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/Usb2bS/klaviyo.js?company_id=Usb2bS"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `!function(){if(!window.klaviyo){window._klOnsite=window._klOnsite||[];try{window.klaviyo=new Proxy({},{get:function(n,i){return"push"===i?function(){var n;(n=window._klOnsite).push.apply(n,arguments)}:function(){for(var n=arguments.length,o=new Array(n),w=0;w<n;w++)o[w]=arguments[w];var t="function"==typeof o[o.length-1]?o.pop():void 0,e=new Promise((function(n){window._klOnsite.push([i].concat(o,[function(i){t&&t(i),n(i)}]))}));return e}}})}catch(n){window.klaviyo=window.klaviyo||[],window.klaviyo.push=function(){var n;(n=window._klOnsite).push.apply(n,arguments)}}}}();` }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <Script id="opinly-pixel" strategy="afterInteractive" src="https://static.opinly.ai/p.js" data-key="pk-oHN002lAsfur_zTeYjrnj_4ZvKe4z9h5BaUDHkF" />
        <CartProvider>
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
