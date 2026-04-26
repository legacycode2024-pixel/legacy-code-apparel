content = open('src/app/page.tsx').read()

old_card = """function ProductCard({ product }: { product: typeof allProducts[0] }) {
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
}"""

new_card = """const productDetails: Record<string, { why: string; bullets: string[] }> = {
  'Stand On It': {
    why: "For people who don't just talk about their values — they live them. This tee is a daily reminder to hold your ground.",
    bullets: ['100% cotton, 5.3 oz midweight', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Actions Over Applause': {
    why: "For those who let their work speak. No need for validation — results are the only receipt that matters.",
    bullets: ['100% cotton, 5.3 oz midweight', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Principles Over Popularity': {
    why: "For the ones who choose integrity over trends. When everyone zigs, you know why you zag.",
    bullets: ['100% cotton, 5.3 oz midweight', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  'Word Is Bond': {
    why: "Your word is your brand. This tee is for people who mean what they say and say what they mean.",
    bullets: ['100% cotton, 5.3 oz midweight', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
  },
  "I Could've But I Didn't": {
    why: "Discipline is the real flex. This tee celebrates the quiet power of choosing character over compromise.",
    bullets: ['100% cotton, 5.3 oz midweight', 'Unisex relaxed fit, true to size', 'Size up for an oversized look', 'Machine wash cold, tumble dry low'],
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
        <p style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
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
            <li>Free shipping on orders over $50</li>
            <li>Easy returns within 30 days</li>
          </ul>
        )}
      </div>
    </div>
  );
}"""

content = content.replace(old_card, new_card)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
