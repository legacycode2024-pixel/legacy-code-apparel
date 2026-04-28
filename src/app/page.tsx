'use client';
import Navbar from './components/Navbar';
import { useState, useRef, useEffect } from 'react';
import { useCart } from './context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      <video ref={vid1Ref} muted playsInline loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1, transition: 'opacity 1.5s' }}>
        <source src="/images/signature.mp4" type="video/mp4" />
      </video>
    </>
  );
}

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

const allProducts = [
  { id: 1, name: 'Stand On It', color: 'Black', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774849264/stand_on_it-_front_oedg2v.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774846513/367BC533-7689-4E1A-B03D-AAF004F6FD69_eraib6.png' },
  { id: 2, name: 'Actions Over Applause', color: 'Black', price: 20, frontImage: '/images/actions-front.png', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776742613/39583CED-D0DA-456D-8B47-4F722E73D421_mfwhja.jpg' },
  { id: 3, name: 'Principles Over Popularity', color: 'Black', price: 20, frontImage: '/images/principles-front.png', backImage: '/images/principles-back.png' },
  { id: 5, name: 'Word Is Bond', color: 'Black', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775287137/wordfrontblack_jnjfig.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775286417/wordfont-black_pjuhdc.jpg' },
  { id: 6, name: "I Could've But I Didn't", color: 'Black', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776662619/5AD469BE-328F-467D-9F46-D3E506C18096_u3cfcf.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776813206/couldve-back_ybx935.png' },
  { id: 7, name: 'Stand On It', color: 'White', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316977/standonit-whitefront_h6z7v9.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774845265/07A6183E-6913-42BA-9BAD-887A1D00DDD2_zu09ug.png' },
  { id: 8, name: 'Actions Over Applause', color: 'White', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316611/actionsfront-white_jt4plp.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776743443/C32D1967-FDD7-48DC-B0B7-6D027B8077E9_mpixoh.jpg' },
  { id: 9, name: 'Principles Over Popularity', color: 'White', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316371/principlesfront-white_b1xan8.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316939/principlesback-white_dc97sb.jpg' },
  { id: 11, name: 'Word Is Bond', color: 'White', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774316977/wordfront-white_yucsqg.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775287515/wordbackwhite_av0a0u.png' },
  { id: 12, name: "I Could've But I Didn't", color: 'White', price: 20, frontImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776662741/5AD469BE-328F-467D-9F46-D3E506C18096_ntqaqd.jpg', backImage: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1776664243/ChatGPT_Image_Apr_20_2026_at_01_47_01_AM_tfjzta.png' },
];

const productDetails: Record<string, { why: string; bullets: string[] }> = {
  'Stand On It': {
    why: "For people who don't just talk about their values — they live them. This tee is a daily reminder to hold your ground.",
    bullets: ['Anvil by Gildan, 4.5 oz combed ring-spun cotton', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Actions Over Applause': {
    why: "For those who let their work speak. No need for validation — results are the only receipt that matters.",
    bullets: ['Anvil by Gildan, 4.5 oz combed ring-spun cotton', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Principles Over Popularity': {
    why: "For the ones who choose integrity over trends. When everyone zigs, you know why you zag.",
    bullets: ['Anvil by Gildan, 4.5 oz combed ring-spun cotton', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Word Is Bond': {
    why: "Your word is your brand. This tee is for people who mean what they say and say what they mean.",
    bullets: ['Anvil by Gildan, 4.5 oz combed ring-spun cotton', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  "I Could've But I Didn't": {
    why: "Discipline is the real flex. This tee celebrates the quiet power of choosing character over compromise.",
    bullets: ['Anvil by Gildan, 4.5 oz combed ring-spun cotton', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
};

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  const [showBack, setShowBack] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();
  const details = productDetails[product.name];

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
          <span style={{ fontSize: '11px', color: '#888' }}>⭐⭐⭐⭐⭐ Verified buyers</span>
        </div>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#27ae60', fontWeight: '600' }}>✓ Free shipping over $45 &nbsp;|&nbsp; ✓ 14-day returns</p>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#555' }}>👕 Relaxed unisex fit — true to size. Size up for oversized.</p>
        {details && <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#555', lineHeight: '1.6', fontStyle: 'italic' }}>{details.why}</p>}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {sizes.map(size => (
            <button key={size} onClick={e => { e.stopPropagation(); setSelectedSize(size); }} style={{ padding: '4px 8px', border: selectedSize === size ? '2px solid #c9a84c' : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedSize === size ? '#c9a84c' : '#fff', color: '#0a1931', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>{size}</button>
          ))}
        </div>
        <button onClick={handleAddToCart} style={{ width: '100%', padding: '10px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px' }}>ADD TO CART</button>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '8px', fontSize: '11px', color: '#888' }}>
          <span>🔒 Secure Checkout</span>
          <span>📦 Ships in 3-5 days</span>
        </div>
        <button onClick={() => setShowDetails(!showDetails)} style={{ width: '100%', padding: '6px', backgroundColor: 'transparent', color: '#0a1931', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontSize: '11px', letterSpacing: '1px' }}>{showDetails ? 'HIDE DETAILS ▲' : 'DETAILS & CARE ▼'}</button>
        {showDetails && details && (
          <ul style={{ margin: '10px 0 0', padding: '0 0 0 16px', fontSize: '11px', color: '#555', lineHeight: '2' }}>
            {details.bullets.map((b, i) => <li key={i}>{b}</li>)}
            <li>Free shipping on orders over $45</li>
            <li>Easy returns within 14 days</li>
          </ul>
        )}
      </div>
    </div>
  );
}

function EmailPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (!email) return;
    await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#0a1931', padding: '48px 40px', maxWidth: '440px', width: '90%', borderRadius: '16px', border: '2px solid #c9a84c', position: 'relative', textAlign: 'center' }}>
        <button onClick={() => setShow(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#c9a84c', fontSize: '20px', cursor: 'pointer' }}>✕</button>
        {submitted ? (
          <div>
            <p style={{ fontSize: '32px', marginBottom: '16px' }}>🖤</p>
            <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px' }}>Welcome to the Legacy!</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>Use code at checkout:</p>
            <p style={{ fontSize: '28px', fontWeight: '700', color: '#c9a84c', letterSpacing: '4px', marginBottom: '24px' }}>LEGACY24</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>10% off your first order</p>
            <button onClick={() => setShow(false)} style={{ padding: '12px 32px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer' }}>SHOP NOW</button>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>EXCLUSIVE OFFER</p>
            <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#fff', marginBottom: '8px' }}>Join the Legacy</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>Get <strong style={{ color: '#c9a84c' }}>10% off</strong> your first order</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>Plus early access to new drops</p>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #c9a84c', backgroundColor: '#0d2240', color: '#fff', fontSize: '14px', marginBottom: '12px', boxSizing: 'border-box' }}
            />
            <button onClick={handleSubmit} style={{ width: '100%', padding: '14px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', cursor: 'pointer' }}>GET 10% OFF</button>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '16px' }}>No spam, ever. Unsubscribe anytime.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const bestSellers = ['Word Is Bond', 'Stand On It'];
  const newDrops = ['Pressure Tested'];
  const filtered = filter === 'All' ? allProducts
    : filter === 'Best Sellers' ? allProducts.filter(p => bestSellers.includes(p.name))
    : filter === 'New Drops' ? allProducts.filter(p => newDrops.includes(p.name))
    : filter === 'Black' ? allProducts.filter(p => p.color === 'Black')
    : filter === 'White' ? allProducts.filter(p => p.color === 'White')
    : allProducts.filter(p => p.name === filter);

  const scroll = (dir: 'left' | 'right') => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <EmailPopup />
  
      <section style={{ position: 'relative', textAlign: 'center', padding: '80px 20px 60px', color: '#fff', overflow: 'hidden', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <VideoHero />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,49,0.65)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>EST. 2024</p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#fff' }}>Wear What You Stand For.</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.5px', margin: '0 0 12px', maxWidth: '500px' }}>Premium statement tees for people who lead with integrity.</p>
          <p style={{ fontSize: '13px', color: '#c9a84c', letterSpacing: '1px', margin: '0 0 32px' }}>Free shipping over $45 &nbsp;·&nbsp; Ships in 3-5 days &nbsp;·&nbsp; 14-day returns</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='#bestsellers' style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', fontWeight: '700' }}>SHOP BEST SELLERS</a>
            <a href='/about' style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>OUR STORY</a>
          </div>
        </div>
      </section>

      <section id='bestsellers' style={{ padding: '40px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>MOST LOVED</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff', marginBottom: '40px' }}>Best Sellers</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {allProducts.filter(p => ['Word Is Bond', 'Stand On It'].includes(p.name) && p.color === 'Black').map(product => (
            <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <a href='#shop' style={{ display: 'inline-block', marginTop: '32px', padding: '12px 32px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>VIEW FULL COLLECTION</a>
      </section>

      <section id='shop' style={{ padding: '60px 20px' }}>
        <p style={{ textAlign: 'center', fontSize: '12px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '8px', color: '#c9a84c' }}>THE COLLECTION</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '400', color: '#0a1931', marginBottom: '8px' }}>Shop Integrity Tees</h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '32px' }}>Premium statement tees for people who lead with character</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
          {['All', 'New Drops', 'Black', 'White', 'Stand On It', 'Actions Over Applause', 'Principles Over Popularity', 'Word Is Bond', "I Could've But I Didn't"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 16px', backgroundColor: filter === f ? '#0a1931' : '#fff', color: filter === f ? '#c9a84c' : '#0a1931', border: '2px solid #0a1931', borderRadius: '24px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px', whiteSpace: 'nowrap' }}>{f}</button>
          ))}
        </div>
        {/* TRUST BLOCK */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '32px', padding: '16px 20px', backgroundColor: '#0a1931', borderRadius: '12px', maxWidth: '800px', margin: '0 auto 32px' }}>
          <span style={{ fontSize: '13px', color: '#fff' }}>🚚 <strong style={{ color: '#c9a84c' }}>Free shipping</strong> on orders over $45</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>📦 Ships in <strong style={{ color: '#c9a84c' }}>3-5 days</strong></span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>↩️ <strong style={{ color: '#c9a84c' }}>14-day</strong> returns</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>👕 Sizes <strong style={{ color: '#c9a84c' }}>S–3XL</strong></span>
        </div>

        {/* LIFESTYLE PHOTOS */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap', padding: '0 20px' }}>
          <div style={{ position: 'relative', width: '280px', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #c9a84c' }}>
            <img src="https://res.cloudinary.com/dozyoetnr/image/upload/v1777400967/IMG_6994_zl66yr.jpg" alt="Stand On It lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(10,25,49,0.9))' }}>
              <p style={{ color: '#c9a84c', fontSize: '12px', letterSpacing: '2px', margin: '0 0 4px' }}>STAND ON IT</p>
              <p style={{ color: '#fff', fontSize: '11px', margin: 0 }}>Black Tee — $20</p>
            </div>
          </div>
          <div style={{ position: 'relative', width: '280px', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #c9a84c' }}>
            <img src="https://res.cloudinary.com/dozyoetnr/image/upload/v1777401101/aimodel_7A881CB8-64D5-4D00-B647-F05DEBCDE77F_j2m466.jpg" alt="Word Is Bond lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(10,25,49,0.9))' }}>
              <p style={{ color: '#c9a84c', fontSize: '12px', letterSpacing: '2px', margin: '0 0 4px' }}>WORD IS BOND</p>
              <p style={{ color: '#fff', fontSize: '11px', margin: 0 }}>Black Tee — $20</p>
            </div>
          </div>
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


      {/* CUSTOMER REVIEWS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>WHAT THEY SAY</p>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#fff', textAlign: 'center', marginBottom: '48px' }}>Customer Reviews</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"Loved the softness and the graphic on the front and back. The Stand On It tee is everything!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Braxton</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>STAND ON IT — VERIFIED BUYER</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"This tee is soft, nice quality and I love the wording on the front and back!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Chris</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>PRINCIPLES OVER POPULARITY — VERIFIED BUYER</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"What a great way to express yourself. Good quality!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Shel</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>I COULD&#39;VE BUT I DIDN&#39;T — VERIFIED BUYER</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Have a Legacy Code tee? Email us at support@legacycodeapparel.store</p>
      </section>

      {/* BRAND STORY */}
      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>WHO WE ARE</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff', maxWidth: '700px', margin: '0 auto 24px', lineHeight: '1.4' }}>Legacy Code is a reminder that your character is always being written.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.8' }}>These tees are for people who lead with integrity — not because it's easy, but because it's who they are. Every design carries a message worth wearing.</p>
        <a href='/about' style={{ display: 'inline-block', padding: '12px 32px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>OUR STORY</a>
      </section>

      {/* WHY WE MADE THIS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f1eb' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>WHY WE MADE THIS</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1931', textAlign: 'center', marginBottom: '48px' }}>Apparel with a purpose.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>✊</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>CHARACTER FIRST</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Every design starts with a value worth standing on. No empty slogans.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>🧵</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>QUALITY MATTERS</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Anvil by Gildan combed ring-spun cotton. Soft, durable, and made to last.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>🏙️</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>ATL MADE</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Rooted in Atlanta. Fulfilled locally. Every order is handled with care.</p>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ padding: '32px 20px', backgroundColor: '#fff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>🔒</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>SECURE CHECKOUT</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>📦</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>SHIPS IN 3-5 DAYS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>↩️</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>14-DAY RETURNS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>💬</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>REAL SUPPORT</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f1eb' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>GOT QUESTIONS</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1931', textAlign: 'center', marginBottom: '40px' }}>FAQs</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: 'How do the tees fit?', a: 'Unisex relaxed fit, true to size. Size up if you prefer an oversized look.' },
            { q: 'What are the tees made of?', a: 'Anvil by Gildan combed ring-spun cotton, 4.5 oz. Soft, lightweight, and breathable.' },
            { q: 'How long does shipping take?', a: 'Orders ship within 3-5 business days. You will receive a tracking number once your order ships.' },
            { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery. Items must be unworn and unwashed.' },
            { q: 'Do you offer free shipping?', a: 'Yes! Free shipping on all orders over $45.' },
          ].map((faq, i) => (
            <div key={i} style={{ backgroundColor: '#fff', padding: '20px 24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '8px' }}>{faq.q}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href='/faq' style={{ fontSize: '13px', color: '#c9a84c', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>VIEW ALL FAQS →</a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}