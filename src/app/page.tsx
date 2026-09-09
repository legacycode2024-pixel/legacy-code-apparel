'use client';
import Navbar from './components/Navbar';
import { useState, useRef, useEffect } from 'react';
import { useCart } from './context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { supabase } from './lib/supabase';

function VideoHero() {
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (vid1Ref.current) vid1Ref.current.play();
  }, []);

  return (
    <>
      <video ref={vid1Ref} muted playsInline loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1 }}>
        <source src="/images/signature.mp4" type="video/mp4" />
      </video>
    </>
  );
}

type InventoryRow = {
  id: number;
  product: string;
  size: string;
  color: string;
  price: number;
  sold: boolean;
  design: string;
};

type PreorderProduct = {
  name: string;
  price: number;
  tagline: string;
  why: string;
  accent: string;
  image: string;
  imageBack?: string;
  imageSleeve?: string;
};

const preorderProducts: PreorderProduct[] = [
  {
    name: 'No Cap',
    price: 71,
    tagline: 'Hood up, truth out.',
    why: "What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric, built for the ones who keep it that way.",
    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788988611/5143FC13-BAED-4DC1-A872-AC4CF9304A98_iykbed.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    imageSleeve: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
  },
  {
    name: 'Consistent by Choice',
    price: 61,
    tagline: 'Heavyweight fleece for the days you show up anyway.',
    why: "Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. This sweatshirt is for the ones who don't need a reason to keep going — discipline over motivation, every time. Heavyweight fleece. Built to be worn as often as the message needs saying.",
    accent: '#1a3a6b',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788992443/763B4F06-4A7B-4B2A-9A0E-1E7078DCA893_npp8bu.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638967/ChatGPT_Image_Sep_5_2026_at_04_09_02_PM_adky9z.png',
  },
  {
    name: 'Nothing to Hide',
    price: 53,
    tagline: 'Comfortable in your own skin, on purpose.',
    why: "This crop is for showing up as you actually are — no performance, no apology, no part of you dimmed down to fit somewhere else. Being seen isn't a risk when you already like who you are. Wear it easy, wear it true.",
    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',
  },
];

function PreorderCard({ product, inventory }: { product: PreorderProduct; inventory: InventoryRow[] }) {
  const [view, setView] = useState<'front' | 'back' | 'sleeve'>('front');
  const activeImage = view === 'back' && product.imageBack ? product.imageBack : view === 'sleeve' && product.imageSleeve ? product.imageSleeve : product.image;
  const productRows = inventory.filter(r => r.product === product.name);
  const currentDesign = productRows.find(r => !r.sold)?.design || '';
  const availableColors = Array.from(new Set(productRows.filter(r => !r.sold).map(r => r.color)));
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();
  const router = useRouter();

  const sizesForColor = (color: string) =>
    Array.from(new Set(productRows.filter(r => r.color === color && !r.sold).map(r => r.size)));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedColor) { alert('Please select a color'); return; }
    if (!selectedSize) { alert('Please select a size'); return; }
    addToCart({ name: `${product.name} (${selectedColor})`, price: product.price, size: selectedSize, quantity: 1, image: product.image });
    router.push('/cart');
  };

  const isSoldOut = availableColors.length === 0;

  return (
    <div style={{ width: '300px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', borderTop: `4px solid ${product.accent}` }}>
      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>
        <Image src={activeImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px' }}>PREORDER</div>
        {(product.imageBack || product.imageSleeve) && (
          <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '6px' }}>
            <button onClick={(e) => { e.stopPropagation(); setView('front'); }} style={{ backgroundColor: view === 'front' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'front' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>FRONT</button>
            {product.imageBack && (
              <button onClick={(e) => { e.stopPropagation(); setView('back'); }} style={{ backgroundColor: view === 'back' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'back' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>BACK</button>
            )}
            {product.imageSleeve && (
              <button onClick={(e) => { e.stopPropagation(); setView('sleeve'); }} style={{ backgroundColor: view === 'sleeve' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'sleeve' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>SLEEVE</button>
            )}
          </div>
        )}
      </div>
      <div style={{ padding: '24px' }}>
        <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '600', color: '#0a1931', lineHeight: '1.2' }}>{product.name}</h3>
        <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666', lineHeight: '1.7', fontStyle: 'italic' }}>{product.tagline}</p>
        {currentDesign && (
          <p style={{ margin: '0 0 12px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: product.accent }}>DESIGN: {currentDesign.toUpperCase()}</p>
        )}
        <div style={{ marginBottom: '16px', padding: '12px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
          <p style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: '700', color: product.accent }}>${product.price.toFixed(2)}</p>
          <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>One-of-one · Heavyweight fleece · Never restocked</p>
        </div>

        {isSoldOut ? (
          <div style={{ padding: '14px', textAlign: 'center', backgroundColor: '#f4f1eb', borderRadius: '8px', fontWeight: '700', color: '#888' }}>SOLD OUT</div>
        ) : (
          <>
            <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: '700', color: '#888', letterSpacing: '1px' }}>COLOR <span style={{ fontWeight: 400, color: '#aaa' }}>(each 1 of 1)</span></p>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
              {availableColors.map(color => (
                <button key={color} onClick={e => { e.stopPropagation(); setSelectedColor(color); setSelectedSize(''); }} style={{ padding: '6px 12px', border: selectedColor === color ? `2px solid ${product.accent}` : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedColor === color ? product.accent : '#fff', color: selectedColor === color ? '#fff' : '#0a1931', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>{color}</button>
              ))}
            </div>

            {selectedColor && (
              <>
                <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: '700', color: '#888', letterSpacing: '1px' }}>SIZE</p>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  {sizesForColor(selectedColor).map(size => (
                    <button key={size} onClick={e => { e.stopPropagation(); setSelectedSize(size); }} style={{ padding: '6px 12px', border: selectedSize === size ? `2px solid ${product.accent}` : '1px solid #ddd', borderRadius: '6px', backgroundColor: selectedSize === size ? product.accent : '#fff', color: selectedSize === size ? '#fff' : '#0a1931', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>{size}</button>
                  ))}
                </div>
              </>
            )}

            <button onClick={handleAddToCart} style={{ width: '100%', padding: '14px', backgroundColor: product.accent, color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '12px' }}>ADD TO CART — ${product.price.toFixed(2)}</button>
          </>
        )}

        <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#555', lineHeight: '1.7' }}>{product.why}</p>
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
  const [inventory, setInventory] = useState<InventoryRow[]>([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then(res => res.json())
      .then(data => setInventory(data.inventory || []));
  }, []);

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <EmailPopup />

      <div style={{ backgroundColor: '#c9a84c', padding: '10px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0a1931', letterSpacing: '1px' }}>🚨 PREORDER LIVE — 2 WEEK WINDOW &nbsp;·&nbsp; ONE-OF-ONE PIECES, ONCE THEY'RE GONE THEY'RE GONE</p>
      </div>

      <section style={{ position: 'relative', textAlign: 'center', padding: '100px 20px 80px', color: '#fff', overflow: 'hidden', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <VideoHero />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,49,0.7)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '5px', marginBottom: '20px', color: '#c9a84c', fontFamily: 'Arial, sans-serif' }}>LEGACY CODE APPAREL — EST. 2024</p>
          <h1 style={{ fontSize: '64px', fontWeight: '400', margin: '0 0 20px', letterSpacing: '-2px', color: '#fff', lineHeight: '1.1' }}>Wear What You<br/>Stand For.</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: '0 0 40px', lineHeight: '1.6' }}>Premium hoodies, sweatshirts &amp; crops for people who lead with integrity.<br/>One-of-one pieces. Preorder now.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='#shop' style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', fontWeight: '700', borderRadius: '4px' }}>SHOP THE PREORDER</a>
          </div>
        </div>
      </section>

      <section id='shop' style={{ padding: '60px 20px' }}>
        <p style={{ textAlign: 'center', fontSize: '12px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '8px', color: '#c9a84c' }}>THE COLLECTION</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '400', color: '#0a1931', marginBottom: '8px' }}>Preorder Now</h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Each piece is one-of-one. Once a size/color sells, it's gone for good.</p>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#aaa', marginBottom: '32px' }}>Heavyweight fleece. Never restocked. Never mass produced.</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {preorderProducts.map(product => (
            <PreorderCard key={product.name} product={product} inventory={inventory} />
          ))}
        </div>
      </section>

      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>WHO WE ARE</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff', maxWidth: '700px', margin: '0 auto 24px', lineHeight: '1.4' }}>Legacy Code is a reminder that your character is always being written.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.8' }}>These pieces are for people who lead with integrity — not because it's easy, but because it's who they are. Every design carries a message worth wearing.</p>
        <a href='/about' style={{ display: 'inline-block', padding: '12px 32px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>OUR STORY</a>
      </section>

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
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Premium heavyweight blanks, printed with care. Soft, durable, and made to last.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>🏙️</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>ATL MADE</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Rooted in Atlanta. Fulfilled locally. Every order is handled with care.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: '32px 20px', backgroundColor: '#fff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>🔒</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>SECURE CHECKOUT</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>📦</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>PREORDER — 2 WEEK WINDOW</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>1️⃣</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>ONE-OF-ONE PIECES</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>💬</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>REAL SUPPORT</p>
          </div>
        </div>
      </section>

    </main>
  );
}
