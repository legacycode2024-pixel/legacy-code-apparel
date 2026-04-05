content = open('src/app/page.tsx').read()
old = '''        </div>
        
          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '360px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"What a great way to express yourself. Good quality!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Shel</p>
              <p style={{ fontSize: '12px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>I COULD&#39;VE BUT I DIDN&#39;T — VERIFIED BUYER</p>
            </div>
          </div>
        </div>'''
new = '''          <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', maxWidth: '360px', width: '100%', border: '1px solid #c9a84c' }}>
            <p style={{ color: '#c9a84c', fontSize: '20px', marginBottom: '16px' }}>★★★★★</p>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '20px', fontStyle: 'italic' }}>"What a great way to express yourself. Good quality!"</p>
            <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '16px' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#0a1931', marginBottom: '4px' }}>Shel</p>
              <p style={{ fontSize: '12px', color: '#c9a84c', letterSpacing: '2px', fontFamily: 'Arial, sans-serif' }}>I COULD&#39;VE BUT I DIDN&#39;T — VERIFIED BUYER</p>
            </div>
          </div>
        </div>'''
content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
