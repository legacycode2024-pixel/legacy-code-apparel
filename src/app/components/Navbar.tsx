'use client';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const router = useRouter();

  return (
    <nav style={{ backgroundColor: '#0a1931', color: '#fff', padding: '0 40px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #c9a84c' }}>
      <div onClick={() => router.push('/')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Image src="/images/logo.png" alt="Legacy Code Apparel" width={50} height={50} style={{ objectFit: 'contain', filter: 'invert(1) sepia(1) saturate(2) hue-rotate(5deg) brightness(0.9)' }} />
        <span style={{ fontSize: '16px', fontWeight: '700', letterSpacing: '3px', color: '#c9a84c' }}>LEGACY CODE</span>
      </div>
      <div style={{ display: 'flex', gap: '24px', fontSize: '13px', letterSpacing: '1px', alignItems: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>SHOP</a>
        <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT</a>
        <a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>BLOG</a>
        <a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a>
        <a href="/contact" style={{ color: '#c9a84c', textDecoration: 'none', border: '1px solid #c9a84c', padding: '6px 14px', borderRadius: '20px' }}>CONTACT</a>
        <a href="/sizeguide" style={{ color: '#fff', textDecoration: 'none' }}>SIZE GUIDE</a>
        <span onClick={() => router.push('/cart')} style={{ color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          CART
          {cartCount > 0 && (
            <span style={{ backgroundColor: '#c9a84c', color: '#0a1931', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700' }}>{cartCount}</span>
          )}
        </span>
      </div>
    </nav>
  );
}
