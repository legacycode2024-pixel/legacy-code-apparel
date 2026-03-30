'use client';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>GET IN TOUCH</p>
        <h1 style={{ fontSize: '42px', fontWeight: '400', margin: '0 auto', letterSpacing: '-1px', maxWidth: '700px' }}>Contact Us</h1>
      </section>
      <section style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px' }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h2 style={{ fontSize: '28px', color: '#0a1931', marginBottom: '16px' }}>Message Sent! 🖤</h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '32px' }}>Thank you for reaching out. We will get back to you within 24 hours at support@legacycodeapparel.store</p>
            <a href="/" style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#0a1931', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', border: '2px solid #c9a84c', borderRadius: '8px' }}>BACK TO SHOP</a>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>YOUR NAME</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Georgia, serif', backgroundColor: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>EMAIL ADDRESS</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="john@email.com" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Georgia, serif', backgroundColor: '#fff' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '12px', letterSpacing: '2px', color: '#0a1931', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>MESSAGE</label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="How can we help you?" rows={6} style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '15px', fontFamily: 'Georgia, serif', backgroundColor: '#fff', resize: 'vertical' }} />
            </div>
            <button onClick={handleSubmit} style={{ padding: '16px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', fontSize: '13px', letterSpacing: '2px', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>SEND MESSAGE</button>
            <p style={{ textAlign: 'center', fontSize: '13px', color: '#666' }}>Or email us directly at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931', fontWeight: '600' }}>support@legacycodeapparel.store</a></p>
          </div>
        )}
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}
