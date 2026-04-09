'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

type Product = {
  name: string;
  price: number;
  frontImage: string;
  backImage: string;
};

export default function RecentlyViewed({ products }: { products: Product[] }) {
  const [viewed, setViewed] = useState<Product[]>([]);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5).slice(0, 3);
    setViewed(shuffled);
  }, []);

  if (viewed.length === 0) return null;

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#fff', borderTop: '1px solid #e5e5e5' }}>
      <h2 style={{ textAlign: 'center', fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '40px', color: '#c9a84c' }}>YOU MAY ALSO LIKE</h2>
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {viewed.map((product, index) => (
          <div key={index} style={{ width: '200px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #c9a84c', backgroundColor: '#fff', cursor: 'pointer' }}>
            <div style={{ position: 'relative', height: '220px', backgroundColor: '#f4f1eb' }}>
              <Image src={product.frontImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="200px" />
            </div>
            <div style={{ padding: '16px' }}>
              <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: '600', color: '#0a1931' }}>{product.name}</p>
              <p style={{ margin: '0', fontSize: '14px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
