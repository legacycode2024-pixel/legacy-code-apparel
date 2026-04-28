content = open('src/app/page.tsx').read()

# 1. Upgrade hero to feel more like a storefront
old_hero = """      <section style={{ position: 'relative', textAlign: 'center', padding: '80px 20px 60px', color: '#fff', overflow: 'hidden', minHeight: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
      </section>"""

new_hero = """      {/* FREE SHIPPING BAR */}
      <div style={{ backgroundColor: '#c9a84c', padding: '10px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#0a1931', letterSpacing: '1px' }}>🚚 FREE SHIPPING ON ORDERS $45+ &nbsp;·&nbsp; USE CODE <span style={{ textDecoration: 'underline' }}>LEGACY24</span> FOR 10% OFF</p>
      </div>

      <section style={{ position: 'relative', textAlign: 'center', padding: '100px 20px 80px', color: '#fff', overflow: 'hidden', minHeight: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <VideoHero />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(10,25,49,0.7)', zIndex: 1 }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '5px', marginBottom: '20px', color: '#c9a84c', fontFamily: 'Arial, sans-serif' }}>LEGACY CODE APPAREL — EST. 2024</p>
          <h1 style={{ fontSize: '64px', fontWeight: '400', margin: '0 0 20px', letterSpacing: '-2px', color: '#fff', lineHeight: '1.1' }}>Wear What You<br/>Stand For.</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: '0 0 40px', lineHeight: '1.6' }}>Statement tees for people who lead with integrity.<br/>Soft. Bold. Made to last.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='#bestsellers' style={{ display: 'inline-block', padding: '16px 40px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', fontWeight: '700', borderRadius: '4px' }}>SHOP BEST SELLERS</a>
            <a href='#shop' style={{ display: 'inline-block', padding: '16px 40px', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', textDecoration: 'none', fontSize: '14px', letterSpacing: '2px', borderRadius: '4px' }}>VIEW ALL TEES</a>
          </div>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>⭐⭐⭐⭐⭐ 5-Star Reviews</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>🔒 Secure Checkout</span>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>📦 Ships in 3-5 Days</span>
          </div>
        </div>
      </section>"""

content = content.replace(old_hero, new_hero)

# 2. Upgrade ADD TO CART button to feel more like a purchase decision
old_btn = """        <button onClick={handleAddToCart} style={{ width: '100%', padding: '10px', backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px', marginBottom: '8px' }}>ADD TO CART</button>"""
new_btn = """        <button onClick={handleAddToCart} style={{ width: '100%', padding: '14px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '8px', boxShadow: '0 4px 12px rgba(201,168,76,0.3)' }}>ADD TO CART — ${product.price.toFixed(2)}</button>"""
content = content.replace(old_btn, new_btn)

# 3. Make product cards more distinct with a colored top border per product
old_card_div = """    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #c9a84c' }}>"""
new_card_div = """    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.2s', borderTop: '4px solid #c9a84c' }}>"""
content = content.replace(old_card_div, new_card_div)

open('src/app/page.tsx', 'w').write(content)
print('Done!')
