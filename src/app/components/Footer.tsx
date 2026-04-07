'use client';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
        if (res.ok) { setSubmitted(true); setEmail(''); }
        else { alert('Something went wrong. Please try again.'); }
      } catch { alert('Something went wrong. Please try again.'); }
    }
  };

  return (
    <footer style={{ backgroundColor: '#0a1931', borderTop: '2px solid #c9a84c' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <p style={{ color: '#c9a84c', fontSize: '18px', fontWeight: '700', letterSpacing: '3px', margin: '0 0 12px' }}>LEGACY CODE</p>
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>Wear your values. Leave a legacy.</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
            <a href="https://instagram.com/legacycodeapparel" target="_blank" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>IG</a>
            <a href="https://tiktok.com/@legacycodeapparel" target="_blank" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>TT</a>
            <a href="https://facebook.com/legacycodeapparel" target="_blank" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>FB</a>
            <a href="https://pinterest.com/legacycodellc" target="_blank" style={{ color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '1px' }}>PIN</a>
          </div>
          </div>
          <div style={{ flex: '1', minWidth: '200px' }}>
            <p style={{ color: '#c9a84c', fontSize: '11px', letterSpacing: '3px', margin: '0 0 16px' }}>NAVIGATE</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href='/' style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Shop</a>
              <a href='/about' style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>About</a>
              <a href='/blog' style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Blog</a>
              <a href='/faq' style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>FAQ & Returns</a>
              <a href='/sizeguide' style={{ color: '#aaa', textDecoration: 'none', fontSize: '14px' }}>Size Guide</a>
            </div>
          </div>
          <div style={{ flex: '2', minWidth: '280px' }}>
            <p style={{ color: '#c9a84c', fontSize: '11px', letterSpacing: '3px', margin: '0 0 8px' }}>JOIN THE LEGACY</p>
            <p style={{ color: '#aaa', fontSize: '14px', margin: '0 0 16px', lineHeight: '1.6' }}>Get updates on new drops, exclusive offers and content about integrity and character. No spam, ever.</p>
            {submitted ? (
              <p style={{ color: '#c9a84c', fontSize: '15px', fontWeight: '600' }}>Thank you for joining the Legacy.</p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Your email address' required style={{ flex: 1, padding: '12px 16px', backgroundColor: '#0d2240', border: '1px solid #c9a84c', borderRadius: '8px', color: '#fff', fontSize: '14px', outline: 'none' }} />
                <button type='submit' style={{ padding: '12px 20px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>JOIN</button>
              </form>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}><a href="https://tiktok.com/@legacycodeapparel.store" target="_blank" rel="noopener noreferrer" style={{ color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', textDecoration: 'none' }}>TIKTOK</a></div><div style={{ borderTop: '1px solid #1e3a5f', paddingTop: '24px', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '13px', margin: 0, letterSpacing: '1px' }}>© 2025 LEGACY CODE APPAREL — ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}