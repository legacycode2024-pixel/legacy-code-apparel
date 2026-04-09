'use client';
import { useState } from 'react';
import Image from 'next/image';
import RecentlyViewed from './RecentlyViewed';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }: { product: { name: string; price: number; frontImage: string; backImage: string; } }) {
  const [flipped, setFlipped] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();
  const router = useRouter();
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

  const handleAddToCart = () => {
    if (!selectedSize) { alert('Please select a size'); return; }
    addToCart({ name: product.name, price: product.price, size: selectedSize, quantity: 1, image: product.frontImage });
    router.push('/cart');
  };

  return (
    <>
    <div onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)} style={{ width: '300px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', cursor: 'pointer', border: '1px solid #c9a84c' }}>
      <div style={{ position: 'relative', height: '320px', backgroundColor: '#f4f1eb' }}>
        <Image src={flipped ? product.backImage : product.frontImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="300px" priority={false} />
        <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#c9a84c', color: '#0a1931', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px', zIndex: 1 }}>NEW</div>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: '600', color: '#0a1931' }}>{product.name}</h3>
        <p style={{ margin: '0 0 12px', fontSize: '18px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <button key={size} onClick={e => { e.stopPropagation(); setSelectedSize(size); }} style={{ padding: '6px 10px', border: selectedSize === size ? '2px solid #c9a84c' : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedSize === size ? '#c9a84c' : '#fff', color: '#0a1931', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>{size}</button>
          ))}
        </div>
        <button onClick={e => { e.stopPropagation(); handleAddToCart(); }} style={{ width: '100%', padding: '12px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>ADD TO CART</button>
      </div>
    </div>
    <RecentlyViewed currentProduct={product} />
    </>
  );
}
