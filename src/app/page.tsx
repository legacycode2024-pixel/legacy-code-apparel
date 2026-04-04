'use client';
import Navbar from './components/Navbar';
import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { useCart } from './context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


function ReviewForm() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [tee, setTee] = useState('');
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (name && review && tee) {
      await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, rating, tee, review }),
      });
      setSubmitted(true);
    }
  };

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <p style={{ fontSize: '24px', color: '#0a1931', marginBottom: '8px' }}>Thank you! 🖤</p>
      <p style={{ color: '#666' }}>Your review has been submitted and will appear soon.</p>
    </div>
  );

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>YOUR NAME</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', backgroundColor: '#fff' }} />
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>WHICH TEE DID YOU BUY?</label>
        <select value={tee} onChange={e => setTee(e.target.value)} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', backgroundColor: '#fff' }}>
          <option value="">Select a tee...</option>
          <option>Stand On It</option>
          <option>Actions Over Applause</option>
          <option>Principles Over Popularity</option>
          <option>Word Is Bond</option>
          <option>Right Over Easy</option>
          <option>I Could've But I Didn't</option>
          <option>Uncompromised</option>
        </select>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>RATING</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {[1,2,3,4,5].map(star => (
            <button key={star} onClick={() => setRating(star)} style={{ fontSize: '28px', background: 'none', border: 'none', cursor: 'pointer', color: star <= rating ? '#c9a84c' : '#ddd' }}>★</button>
          ))}
        </div>
      </div>
      <div>
        <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>YOUR REVIEW</label>
        <textarea value={review} onChange={e => setReview(e.target.value)} placeholder="Tell us about your experience..." rows={4} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', backgroundColor: '#fff', resize: 'vertical' }} />
      </div>
      <button onClick={handleSubmit} style={{ padding: '16px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>SUBMIT REVIEW</button>
    </div>
  );
}

function VideoHero() {
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vid1Ref.current) vid1Ref.current.play();
  }, []);

  const handleVid1End = () => {
    if (vid1Ref.current) vid1Ref.current.style.opacity = '0';
    if (vid2Ref.current) { vid2Ref.current.style.opacity = '1'; vid2Ref.current.play(); }
  };

  const handleVid2End = () => {
    if (vid2Ref.current) vid2Ref.current.style.opacity = '0';
    if (vid1Ref.current) { vid1Ref.current.style.opacity = '1'; vid1Ref.current.play(); }
  };

  return (
    <>
      <video ref={vid1Ref} muted playsInline onEnded={handleVid1End} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1, transition: 'opacity 1.5s' }}>
        <source src="/images/standonit-video.mov" type="video/mp4" />
      </video>
      <video ref={vid2Ref} muted playsInline onEnded={handleVid2End} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0, transition: 'opacity 1.5s' }}>
        <source src="/images/variety-tees.mov" type="video/mp4" />
      </video>
    </>
  );
}

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

const allProducts = [
  { id: 1, name: 'Stand On It', color: 'Black', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774849264/stand_on_it-_front_oedg2v.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774846513/367BC533-7689-4E1A-B03D-AAF004F6FD69_eraib6.png' },
  { id: 2, name: 'Actions Over Applause', color: 'Black', price: 30, frontImage: '/images/actions-front.png', backImage: '/images/actions-back.png' },
  { id: 3, name: 'Principles Over Popularity', color: 'Black', price: 30, frontImage: '/images/principles-front.png', backImage: '/images/principles-back.png' },
  { id: 4, name: 'Right Over Easy', color: 'Black', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775328983/right-front_mjq0yp.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775328406/rightovereasy-back-black_pk8wbu.jpg' },
  { id: 5, name: 'Word Is Bond', color: 'Black', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775287137/wordfrontblack_jnjfig.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775285019/wordback-black_cm2jl0.jpg' },
  { id: 6, name: "I Could've But I Didn't", color: 'Black', price: 30, frontImage: '/images/couldve-front.png', backImage: '/images/couldve-back.png' },
  { id: 7, name: 'Stand On It', color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316977/standonit-whitefront_h6z7v9.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774845265/07A6183E-6913-42BA-9BAD-887A1D00DDD2_zu09ug.png' },
  { id: 8, name: 'Actions Over Applause', color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316611/actionsfront-white_jt4plp.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316939/actionsback-white_wrnfly.jpg' },
  { id: 9, name: 'Principles Over Popularity', color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316371/principlesfront-white_b1xan8.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316939/principlesback-white_dc97sb.jpg' },
  { id: 10, name: 'Right Over Easy', color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316976/rightfront-white_tblkun.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316977/rightovereasy-back-white_gvutt5.jpg' },
  { id: 11, name: 'Word Is Bond', color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316977/wordfront-white_yucsqg.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775287515/wordbackwhite_av0a0u.png' },
  { id: 12, name: "I Could've But I Didn't", color: 'White', price: 30, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316939/couldvefront-white_mo8e22.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316939/couldveback-white_g2e3g9.jpg' },
];

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const [showBack, setShowBack] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedSize) { alert('Please select a size'); return; }
    addToCart({ name: `${product.name} (${product.color})`, price: product.price, size: selectedSize, quantity: 1, image: product.frontImage });
    router.push('/cart');
  };

  return (
    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #c9a84c' }}>
      <div style={{ position: 'relative', height: '300px', backgroundColor: '#f4f1eb' }}>
        <Image src={showBack ? product.backImage : product.frontImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 1 }}>
          <button onClick={() => setShowBack(false)} style={{ padding: '6px 14px', backgroundColor: !showBack ? '#0a1931' : '#fff', color: !showBack ? '#c9a84c' : '#0a1931', border: '1px solid #c9a84c', borderRadius: '20px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>FRONT</button>
          <button onClick={() => setShowBack(true)} style={{ padding: '6px 14px', backgroundColor: showBack ? '#0a1931' : '#fff', color: showBack ? '#c9a84c' : '#0a1931', border: '1px solid #c9a84c', borderRadius: '20px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px' }}>BACK</button>
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: product.color === 'White' ? '#fff' : '#c9a84c', color: '#0a1931', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px', border: '1px solid #c9a84c' }}>{product.color}</div>
      </div>
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0a1931' }}>{product.name}</h3>
        <p style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <button key={size} onClick={e => { e.stopPropagation(); setSelectedSize(size); }} style={{ padding: '4px 8px', border: selectedSize === size ? '2px solid #c9a84c' : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedSize === size ? '#c9a84c' : '#fff', color: '#0a1931', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>{size}</button>
          ))}
        </div>
        <button onClick={handleAddToCart} style={{ width: '100%', padding: '10px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'All' ? allProducts : allProducts.filter(p => p.color === filter);

  const scroll = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"VideoObject","name":"Legacy Code Apparel","description":"Your values. Your legacy. Your tee.","thumbnailUrl":"https://legacycodeapparel.store/images/standonit-front.png","uploadDate":"2024-03-01T00:00:00+00:00","contentUrl":"https://legacycodeapparel.store/images/boogie-word.mov"})}} />
      <Navbar />
      <section style={{ position: 'relative', textAlign: 'center', padding: '80px 20px 60px', color: '#fff', overflow: 'hidden', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <VideoHero />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,49,0.65)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>EST. 2025</p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#fff' }}>Legacy Code Apparel</h1>
          <p style={{ fontSize: '16px', color: '#c9a84c', letterSpacing: '1px', margin: '0 0 32px' }}>Your values. Your legacy. Your tee.</p>
          <a href='#shop' style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>SHOP NOW</a>
        </div>
      </section>

      <section id='shop' style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '13px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '24px', color: '#c9a84c' }}>FEATURED TEES</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          {['All', 'Black', 'White'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 24px', backgroundColor: filter === f ? '#0a1931' : '#fff', color: filter === f ? '#c9a84c' : '#0a1931', border: '2px solid #0a1931', borderRadius: '24px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px' }}>{f}</button>
          ))}
        </div>
        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2, backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <div ref={carouselRef} style={{ display: 'flex', gap: '20px', overflowX: 'auto', scrollSnapType: 'x mandatory', padding: '20px 60px', scrollbarWidth: 'none' }}>
            {filtered.map(product => (
              <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <button onClick={() => scroll('right')} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2, backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>
      </section>

      
      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931' }}>
        <h2 style={{ textAlign: 'center', fontSize: '13px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '8px', color: '#c9a84c' }}>WHAT THEY SAY</h2>
        <p style={{ textAlign: 'center', fontSize: '28px', color: '#fff', marginBottom: '40px', fontWeight: '400' }}>Customer Reviews</p>
        <div style={{ maxWidth: '800px', margin: '0 auto', justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '360px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"Loved the softness and the graphic on the front and back. The Stand On It tee is everything!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Braxton</p>
              <p style={{ fontSize: '12px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>STAND ON IT — VERIFIED BUYER</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '360px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"This tee is soft, nice quality and I love the wording on the front and back!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Chris</p>
              <p style={{ fontSize: '12px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>PRINCIPLES OVER POPULARITY — VERIFIED BUYER</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Have a Legacy Code tee? Email us at support@legacycodeapparel.store</p>
      </section>
      
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f1eb' }}>
        <h2 style={{ textAlign: 'center', fontSize: '13px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '8px', color: '#c9a84c' }}>SHARE YOUR EXPERIENCE</h2>
        <p style={{ textAlign: 'center', fontSize: '28px', color: '#0a1931', marginBottom: '40px', fontWeight: '400' }}>Leave a Review</p>
        <ReviewForm />
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>(404) 620-0261 | support@legacycodeapparel.store | © 2025 LEGACY CODE APPAREL</footer>
    </main>
  );
}