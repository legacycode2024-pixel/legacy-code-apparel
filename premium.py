content = open('src/app/page.tsx').read()

# Upgrade product card layout
old_card_inner = """      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: '600', color: '#0a1931' }}>{product.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: productAccents[product.name] || '#c9a84c' }}>${product.price.toFixed(2)}</p>
          <span style={{ fontSize: '11px', color: '#888' }}>⭐⭐⭐⭐⭐ Verified buyers</span>
        </div>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#27ae60', fontWeight: '600' }}>✓ Free shipping over $45 &nbsp;|&nbsp; ✓ 14-day returns</p>
        <p style={{ margin: '0 0 8px', fontSize: '11px', color: '#555' }}>👕 Relaxed unisex fit — true to size. Size up for oversized.</p>
        {details && <p style={{ margin: '0 0 12px', fontSize: '12px', color: '#555', lineHeight: '1.6', fontStyle: 'italic' }}>{details.why}</p>}"""

new_card_inner = """      <div style={{ padding: '24px' }}>
        <div style={{ marginBottom: '12px' }}>
          <p style={{ margin: '0 0 2px', fontSize: '11px', letterSpacing: '3px', color: productAccents[product.name] || '#c9a84c', fontFamily: 'Arial, sans-serif' }}>{product.color.toUpperCase()} TEE</p>
          <h3 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: '600', color: '#0a1931', lineHeight: '1.2' }}>{product.name}</h3>
          {details && <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#666', lineHeight: '1.7', fontStyle: 'italic' }}>{details.why}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', padding: '12px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
          <div>
            <p style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: productAccents[product.name] || '#c9a84c' }}>${product.price.toFixed(2)}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#27ae60', fontWeight: '600' }}>✓ Free shipping over $45</p>
          </div>
          <span style={{ fontSize: '12px', color: '#888' }}>⭐⭐⭐⭐⭐</span>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: '12px', color: '#555' }}>👕 Relaxed unisex fit · True to size · S–3XL</p>"""

content = content.replace(old_card_inner, new_card_inner)

# Upgrade image height
old_img = """      <div style={{ position: 'relative', height: '300px', backgroundColor: '#f4f1eb' }}>"""
new_img = """      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>"""
content = content.replace(old_img, new_img)

# Upgrade card width
old_width = """    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.2s', borderTop: `4px solid ${productAccents[product.name] || '#c9a84c'}` }}>"""
new_width = """    <div style={{ width: '300px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 8px 32px rgba(0,0,0,0.10)', transition: 'box-shadow 0.2s', borderTop: `4px solid ${productAccents[product.name] || '#c9a84c'}` }}>"""
content = content.replace(old_width, new_width)

open('src/app/page.tsx', 'w').write(content)
print('Done!')
