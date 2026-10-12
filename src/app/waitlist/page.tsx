'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>NEW DROP</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px' }}>Be First to Know</h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>Legacy Code is dropping three new one of one pieces. Only one exists in each size. Join the list and get notified the moment the drop goes live.</p>
      </section>
      <section style={{ maxWidth: '520px', margin: '0 auto', padding: '60px 20px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '48px 24px', backgroundColor: '#f4f1eb', borderRadius: '16px' }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>🖤</p>
            <h2 style={{ fontSize: '28px', fontWeight: '400', color: '#0a1931', marginBottom: '16px' }}>You are on the list.</h2>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>We will notify you the moment the drop goes live. Only one piece exists in each size — move fast when the time comes.</p>
            <p style={{ fontSize: '14px', color: '#c9a84c', fontWeight: '700', letterSpacing: '2px' }}>WEAR YOUR VALUES. LEAVE A LEGACY.</p>
          </div>
        ) : (
          <div>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', marginBottom: '40px', textAlign: 'center' }}>Three pieces. One of each size. Never restocked. Enter your details below and we will reach out the moment the drop opens.</p>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '16px' }}>
                <input type="text" placeholder="Your first name" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '16px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Georgia, serif', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '16px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', fontSize: '14px', fontWeight: '700', letterSpacing: '2px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'JOINING...' : 'NOTIFY ME WHEN IT DROPS'}
              </button>
            </form>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#999', marginTop: '16px' }}>No spam. Just the drop notification. That is it.</p>
          </div>
        )}
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}
