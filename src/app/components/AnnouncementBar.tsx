'use client';
import { useState } from 'react';

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div style={{ backgroundColor: '#c9a84c', color: '#0a1931', padding: '10px 20px', textAlign: 'center', fontSize: '13px', fontWeight: '700', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <span>FREE SHIPPING OVER $45 | USE CODE LEGACY24 FOR 10% OFF YOUR FIRST ORDER</span>
      <button onClick={() => setShow(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#0a1931', fontSize: '18px', lineHeight: 1, padding: 0 }}>×</button>
    </div>
  );
}