import Navbar from '../components/Navbar';

export default function SuccessPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <div style={{ fontSize: '48px', marginBottom: '24px' }}>✓</div>
        <h1 style={{ fontSize: '36px', fontWeight: '400', marginBottom: '16px' }}>Order Confirmed!</h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>Your preorder is confirmed! We will have your tee shipped by May 15, 2026. Standard shipping is 3-5 business days once we are fully stocked. Thank you for supporting Legacy Code Apparel!</p>
        <a href="/" style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#111', color: '#fff', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px' }}>CONTINUE SHOPPING</a>
      </div>
    </main>
  );
}
