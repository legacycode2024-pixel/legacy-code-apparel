'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Product = {
  name: string;
  price: number;
  frontImage: string;
  backImage: string;
};

export default function RecentlyViewed({ currentProduct }: { currentProduct: Product }) {
  const [viewed, setViewed] = useState<Product[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    const filtered = stored.filter((p: Product) => p.name !== currentProduct.name);
    setViewed(filtered.slice(0, 3));
    const updated = [currentProduct, ...filtered].slice(0, 6);
    localStorage.setItem('recentlyViewed', JSON.stringify(updated));
  }, [currentProduct.name]);

  if (viewed.length === 0) return null;

  return (
    <div style={{ padding: '40px 20px', borderTop: '1px solid #e5e5e5' }}>
      <h3 style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '24px', color: '#c9a84c' }}>RECENTLY VIEWED</h3>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {viewed.map((product, index) => (
          <div key={index} style={{ width: '160px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e5e5', backgroundColor: '#fff' }}>
            <div style={{ position: 'relative', height: '180px', backgroundColor: '#f4f1eb' }}>
              <Image src={product.frontImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="160px" />
            </div>
            <div style={{ padding: '12px' }}>
              <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '600', color: '#0a1931' }}>{product.name}</p>
              <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
