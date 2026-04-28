content = open('src/app/page.tsx').read()

old = """      {/* BRAND STORY */}"""

new = """      {/* CUSTOMER REVIEWS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '8px', fontFamily: 'Arial, sans-serif' }}>WHAT THEY SAY</p>
        <h2 style={{ fontSize: '36px', fontWeight: '400', color: '#fff', textAlign: 'center', marginBottom: '48px' }}>Customer Reviews</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"Loved the softness and the graphic on the front and back. The Stand On It tee is everything!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Braxton</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>STAND ON IT — VERIFIED BUYER</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"This tee is soft, nice quality and I love the wording on the front and back!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Chris</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>PRINCIPLES OVER POPULARITY — VERIFIED BUYER</p>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '300px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"What a great way to express yourself. Good quality!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Shel</p>
              <p style={{ fontSize: '11px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>I COULD&#39;VE BUT I DIDN&#39;T — VERIFIED BUYER</p>
            </div>
          </div>
        </div>
        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Have a Legacy Code tee? Email us at support@legacycodeapparel.store</p>
      </section>

      {/* BRAND STORY */}"""

content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
