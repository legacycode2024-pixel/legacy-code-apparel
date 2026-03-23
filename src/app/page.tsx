'use client';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import { useState, useEffect, useRef } from 'react';

const products = [
  { name: 'Stand On It', price: 30, frontImage: '/images/standonit-back.png', backImage: '/images/standonit-front.png' },
  { name: 'Actions Over Applause', price: 30, frontImage: '/images/actions-front.png', backImage: '/images/actions-back.png' },
  { name: 'Principles Over Popularity', price: 30, frontImage: '/images/principles-front.png', backImage: '/images/principles-back.png' },
  { name: 'Right Over Easy', price: 30, frontImage: '/images/right-front.png', backImage: '/images/right-back.png' },
  { name: 'Word Is Bond', price: 30, frontImage: '/images/word-front.png', backImage: '/images/word-back.png' },
  { name: "I Could've But I Didn't", price: 30, frontImage: '/images/couldve-front.png', backImage: '/images/couldve-back.png' },
];

const videos = ['/images/boogie-word.mov', '/images/variety-tees.mov'];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(0);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const refs = [video1Ref, video2Ref];
    const current = refs[activeVideo].current;
    if (current) {
      current.play();
      const handleEnded = () => {
        setActiveVideo(prev => (prev + 1) % 2);
      };
      current.addEventListener('ended', handleEnded);
      return () => current.removeEventListener('ended', handleEnded);
    }
  }, [activeVideo]);

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <section style={{ position: 'relative', textAlign: 'center', padding: '80px 20px 60px', color: '#fff', overflow: 'hidden', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <video ref={video1Ref} muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: activeVideo === 0 ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
          <source src={videos[0]} type="video/mp4" />
        </video>
        <video ref={video2Ref} muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: activeVideo === 1 ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
          <source src={videos[1]} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,49,0.65)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>EST. 2024</p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#fff' }}>Legacy Code Apparel</h1>
          <p style={{ fontSize: '16px', color: '#c9a84c', letterSpacing: '1px', margin: '0 0 32px' }}>Your values. Your legacy. Your tee.</p>
          <a href='#shop' style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>SHOP NOW</a>
        </div>
      </section>
      <section id='shop' style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '13px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '40px', color: '#c9a84c' }}>FEATURED TEES</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          {products.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}
