content = open('src/app/page.tsx').read()

old = """export default function Home() {
  const [filter, setFilter] = useState('All');
  const carouselRef = useRef<HTMLDivElement>(null);"""

new = """function EmailPopup() {
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
  const carouselRef = useRef<HTMLDivElement>(null);"""

content = content.replace(old, new)

# Add EmailPopup to the page
old2 = """      <Navbar />
  
      <section style={{ position: 'relative'"""
new2 = """      <Navbar />
      <EmailPopup />
  
      <section style={{ position: 'relative'"""
content = content.replace(old2, new2)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
