'use client';
import { useState, useEffect } from 'react';

export default function DiscountPopup() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('popupSeen');
    if (!seen) {
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('popupSeen', 'true');
    setShow(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('LEGACY24');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!show) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ backgroundColor: '#0a1931', border: '2px solid #c9a84c', borderRadius: '16px', padding: '48px 40px', maxWidth: '480px', width: '100%', textAlign: 'center', position: 'relative' }}>
        <button onClick={handleClose} style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', color: '#aaa', fontSize: '24px', cursor: 'pointer', lineHeight: 1 }}>x</button>
        <p style={{ fontSize: '11px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px' }}>WELCOME TO LEGACY CODE</p>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#fff', margin: '0 0 16px', letterSpacing: '-1px', lineHeight: '1.2' }}>Get 10% Off Your First Order</h2>
        <p style={{ fontSize: '16px', color: '#aaa', margin: '0 0 32px', lineHeight: '1.7' }}>Use code at checkout and start wearing your values today.</p>
        <div style={{ backgroundColor: '#0d2240', border: '1px dashed #c9a84c', borderRadius: '8px', padding: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontSize: '24px', fontWeight: '700', color: '#c9a84c', letterSpacing: '3px' }}>LEGACY24</span>
          <button onClick={handleCopy} style={{ padding: '8px 16px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '700', letterSpacing: '1px' }}>{copied ? 'COPIED!' : 'COPY'}</button>
        </div>
        <a href='/#shop' onClick={handleClose} style={{ display: 'block', padding: '14px 36px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '13px', fontWeight: '700', letterSpacing: '2px', borderRadius: '8px', marginBottom: '16px' }}>SHOP NOW</a>
        <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#666', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline' }}>No thanks</button>
      </div>
    </div>
  );
}
