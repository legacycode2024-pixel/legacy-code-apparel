'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function ProductPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '120px 20px' }}>
        <p style={{ fontSize: '18px', color: '#666' }}>This item is no longer available. Redirecting you to the shop...</p>
      </div>
    </main>
  );
}
