'use client';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const router = useRouter();

  return (
    <nav style={{ backgroundColor: '#0a1931', color: '#fff', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #c9a84c' }}>
      <span onClick={() => router.push('/')} style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '3px', cursor: 'pointer', color: '#c9a84c' }}>LEGACY CODE</span>
      <div style={{ display: 'flex', gap: '24px', fontSize: '13px', letterSpacing: '1px', alignItems: 'center' }}>
        <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>SHOP</a>
        <a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>ABOUT</a>
        <a href="/blog" style={{ color: '#fff', textDecoration: 'none' }}>BLOG</a>
        <a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a>
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
