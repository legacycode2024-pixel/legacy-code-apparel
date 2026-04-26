content = open('src/app/page.tsx').read()

old_footer = """      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}"""

new_sections = """
      {/* BRAND STORY */}
      <section style={{ padding: '60px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>WHO WE ARE</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff', maxWidth: '700px', margin: '0 auto 24px', lineHeight: '1.4' }}>Legacy Code is a reminder that your character is always being written.</h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.8' }}>These tees are for people who lead with integrity — not because it's easy, but because it's who they are. Every design carries a message worth wearing.</p>
        <a href='/about' style={{ display: 'inline-block', padding: '12px 32px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>OUR STORY</a>
      </section>

      {/* WHY WE MADE THIS */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f1eb' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>WHY WE MADE THIS</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1931', textAlign: 'center', marginBottom: '48px' }}>Apparel with a purpose.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>✊</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>CHARACTER FIRST</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Every design starts with a value worth standing on. No empty slogans.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>🧵</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>QUALITY MATTERS</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Anvil by Gildan combed ring-spun cotton. Soft, durable, and made to last.</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '240px' }}>
            <p style={{ fontSize: '32px', marginBottom: '12px' }}>🏙️</p>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', letterSpacing: '2px', marginBottom: '8px' }}>ATL MADE</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>Rooted in Atlanta. Fulfilled locally. Every order is handled with care.</p>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ padding: '32px 20px', backgroundColor: '#fff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>🔒</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>SECURE CHECKOUT</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>📦</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>SHIPS IN 3-5 DAYS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>↩️</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>14-DAY RETURNS</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '20px', marginBottom: '4px' }}>💬</p>
            <p style={{ fontSize: '12px', letterSpacing: '1px', color: '#0a1931', fontWeight: '700' }}>REAL SUPPORT</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f1eb' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', textAlign: 'center', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>GOT QUESTIONS</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#0a1931', textAlign: 'center', marginBottom: '40px' }}>FAQs</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: 'How do the tees fit?', a: 'Unisex relaxed fit, true to size. Size up if you prefer an oversized look.' },
            { q: 'What are the tees made of?', a: 'Anvil by Gildan combed ring-spun cotton, 4.5 oz. Soft, lightweight, and breathable.' },
            { q: 'How long does shipping take?', a: 'Orders ship within 3-5 business days. You will receive a tracking number once your order ships.' },
            { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery. Items must be unworn and unwashed.' },
            { q: 'Do you offer free shipping?', a: 'Yes! Free shipping on all orders over $50.' },
          ].map((faq, i) => (
            <div key={i} style={{ backgroundColor: '#fff', padding: '20px 24px', borderRadius: '12px', border: '1px solid #e5e5e5' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '8px' }}>{faq.q}</p>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href='/faq' style={{ fontSize: '13px', color: '#c9a84c', letterSpacing: '2px', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>VIEW ALL FAQS →</a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}"""

content = content.replace(old_footer, new_sections)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
