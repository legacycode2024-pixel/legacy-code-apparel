'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
const product = products.find(p => p.slug === slug);
  const [selectedSize, setSelectedSize] = useState('');
  const [showBack, setShowBack] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();
  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) { alert('Please select a size'); return; }
    addToCart({ name: product.name, price: product.price, size: selectedSize, quantity: 1, image: product.frontImage });
    router.push('/cart');
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ position: 'relative', height: '500px', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #c9a84c' }}>
            <Image src={showBack ? product.backImage : product.frontImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="500px" />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div onClick={() => setShowBack(false)} style={{ flex: 1, position: 'relative', height: '100px', borderRadius: '8px', overflow: 'hidden', border: showBack ? '1px solid #ddd' : '2px solid #c9a84c', cursor: 'pointer' }}>
              <Image src={product.frontImage} alt="Front" fill style={{ objectFit: 'cover' }} sizes="150px" />
            </div>
            <div onClick={() => setShowBack(true)} style={{ flex: 1, position: 'relative', height: '100px', borderRadius: '8px', overflow: 'hidden', border: showBack ? '2px solid #c9a84c' : '1px solid #ddd', cursor: 'pointer' }}>
              <Image src={product.backImage} alt="Back" fill style={{ objectFit: 'cover' }} sizes="150px" />
            </div>
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '300px', paddingTop: '20px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c9a84c', margin: '0 0 8px' }}>LEGACY CODE APPAREL</p>
          <h1 style={{ fontSize: '36px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#0a1931' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontWeight: '700', color: '#c9a84c', margin: '0 0 24px' }}>${product.price}.00</p>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', margin: '0 0 32px' }}>{product.description}</p>
          <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#0a1931', margin: '0 0 12px' }}>SELECT SIZE</p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {sizes.map(size => (
              <button key={size} onClick={() => setSelectedSize(size)} style={{ padding: '10px 16px', border: selectedSize === size ? '2px solid #c9a84c' : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedSize === size ? '#c9a84c' : '#fff', color: '#0a1931', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{size}</button>
            ))}
          </div>
          <button onClick={handleAddToCart} style={{ width: '100%', padding: '16px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', cursor: 'pointer', fontSize: '15px', fontWeight: '600', letterSpacing: '1px', marginBottom: '12px' }}>ADD TO CART</button>
          <a href="/sizeguide" style={{ display: 'block', textAlign: 'center', fontSize: '13px', color: '#666', textDecoration: 'none', letterSpacing: '1px' }}>SIZE GUIDE</a>
        </div>
      </div>
    </main>
  );
}