content = open('src/app/page.tsx').read()
old = """          <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>EST. 2024</p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#fff' }}>Legacy Code Apparel</h1>
          <p style={{ fontSize: '16px', color: '#c9a84c', letterSpacing: '1px', margin: '0 0 32px' }}>Your values. Your legacy. Your tee.</p>
          <a href='#shop' style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>SHOP NOW</a>"""
new = """          <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>EST. 2024</p>
          <h1 style={{ fontSize: '56px', fontWeight: '400', margin: '0 0 16px', letterSpacing: '-1px', color: '#fff' }}>Wear What You Stand For.</h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.5px', margin: '0 0 12px', maxWidth: '500px' }}>Premium statement tees for people who lead with integrity.</p>
          <p style={{ fontSize: '13px', color: '#c9a84c', letterSpacing: '1px', margin: '0 0 32px' }}>Free shipping over $50 &nbsp;·&nbsp; Ships in 3-5 days &nbsp;·&nbsp; 14-day returns</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='#shop' style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', fontWeight: '700' }}>SHOP BEST SELLERS</a>
            <a href='/about' style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>OUR STORY</a>
          </div>"""
content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
