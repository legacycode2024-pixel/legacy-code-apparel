content = open('src/app/page.tsx').read()

# 1. Add lifestyle photos and trust block before the carousel
old = """        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2, backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>"""

new = """        {/* TRUST BLOCK */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '32px', padding: '16px 20px', backgroundColor: '#0a1931', borderRadius: '12px', maxWidth: '800px', margin: '0 auto 32px' }}>
          <span style={{ fontSize: '13px', color: '#fff' }}>🚚 <strong style={{ color: '#c9a84c' }}>Free shipping</strong> on orders over $50</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>📦 Ships in <strong style={{ color: '#c9a84c' }}>3-5 days</strong></span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>↩️ <strong style={{ color: '#c9a84c' }}>14-day</strong> returns</span>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
          <span style={{ fontSize: '13px', color: '#fff' }}>👕 Sizes <strong style={{ color: '#c9a84c' }}>S–3XL</strong></span>
        </div>

        {/* LIFESTYLE PHOTOS */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap', padding: '0 20px' }}>
          <div style={{ position: 'relative', width: '280px', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #c9a84c' }}>
            <img src="https://res.cloudinary.com/dozyoetnr/image/upload/v1777400967/IMG_6994_zl66yr.jpg" alt="Stand On It lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(10,25,49,0.9))' }}>
              <p style={{ color: '#c9a84c', fontSize: '12px', letterSpacing: '2px', margin: '0 0 4px' }}>STAND ON IT</p>
              <p style={{ color: '#fff', fontSize: '11px', margin: 0 }}>Black Tee — $20</p>
            </div>
          </div>
          <div style={{ position: 'relative', width: '280px', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #c9a84c' }}>
            <img src="https://res.cloudinary.com/dozyoetnr/image/upload/v1777401101/aimodel_7A881CB8-64D5-4D00-B647-F05DEBCDE77F_j2m466.jpg" alt="Word Is Bond lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(transparent, rgba(10,25,49,0.9))' }}>
              <p style={{ color: '#c9a84c', fontSize: '12px', letterSpacing: '2px', margin: '0 0 4px' }}>WORD IS BOND</p>
              <p style={{ color: '#fff', fontSize: '11px', margin: 0 }}>Black Tee — $20</p>
            </div>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <button onClick={() => scroll('left')} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', zIndex: 2, backgroundColor: '#0a1931', color: '#c9a84c', border: '2px solid #c9a84c', borderRadius: '50%', width: '44px', height: '44px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>"""

content = content.replace(old, new)

# 2. Upgrade shop section heading hierarchy
old2 = """        <h2 style={{ textAlign: 'center', fontSize: '13px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '24px', color: '#c9a84c' }}>FEATURED TEES</h2>"""
new2 = """        <p style={{ textAlign: 'center', fontSize: '12px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', marginBottom: '8px', color: '#c9a84c' }}>THE COLLECTION</p>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: '400', color: '#0a1931', marginBottom: '8px' }}>Shop Integrity Tees</h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '32px' }}>Premium statement tees for people who lead with character</p>"""

content = content.replace(old2, new2)

open('src/app/page.tsx', 'w').write(content)
print('Done!')
