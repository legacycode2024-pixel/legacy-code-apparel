content = open('src/app/page.tsx').read()

old = """        <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0a1931' }}>{product.name}</h3>
        <p style={{ margin: '0 0 10px', fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
        {details && <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#555', lineHeight: '1.6', fontStyle: 'italic' }}>{details.why}</p>}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', flexWrap: 'wrap' }}>"""

new = """        <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0a1931' }}>{product.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>
          <span style={{ fontSize: '11px', color: '#888' }}>⭐⭐⭐⭐⭐ Verified buyers</span>
        </div>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#27ae60', fontWeight: '600' }}>✓ Free shipping over $50 &nbsp;|&nbsp; ✓ 14-day returns</p>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#555' }}>👕 Relaxed unisex fit — true to size. Size up for oversized.</p>
        {details && <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#555', lineHeight: '1.6', fontStyle: 'italic' }}>{details.why}</p>}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '12px', flexWrap: 'wrap' }}>"""

content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
