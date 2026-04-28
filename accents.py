content = open('src/app/page.tsx').read()

old = """const productDetails: Record<string, { why: string; bullets: string[] }> = {"""

new = """const productAccents: Record<string, string> = {
  'Stand On It': '#c9a84c',
  'Actions Over Applause': '#c0392b',
  'Principles Over Popularity': '#1a7a7a',
  'Word Is Bond': '#1a3a6b',
  "I Could've But I Didn't": '#722f37',
};

const productDetails: Record<string, { why: string; bullets: string[] }> = {"""

content = content.replace(old, new)

# Update product card to use accent color
old_card = """    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.2s', borderTop: '4px solid #c9a84c' }}>"""
new_card = """    <div style={{ width: '280px', flexShrink: 0, borderRadius: '16px', overflow: 'hidden', backgroundColor: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.2s', borderTop: `4px solid ${productAccents[product.name] || '#c9a84c'}` }}>"""
content = content.replace(old_card, new_card)

# Update price color to use accent
old_price = """          <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#c9a84c' }}>${product.price.toFixed(2)}</p>"""
new_price = """          <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: productAccents[product.name] || '#c9a84c' }}>${product.price.toFixed(2)}</p>"""
content = content.replace(old_price, new_price)

# Update ADD TO CART button to use accent
old_btn = """        <button onClick={handleAddToCart} style={{ width: '100%', padding: '14px', backgroundColor: '#c9a84c', color: '#0a1931', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '8px', boxShadow: '0 4px 12px rgba(201,168,76,0.3)' }}>ADD TO CART — ${product.price.toFixed(2)}</button>"""
new_btn = """        <button onClick={handleAddToCart} style={{ width: '100%', padding: '14px', backgroundColor: productAccents[product.name] || '#c9a84c', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '700', letterSpacing: '1px', marginBottom: '8px', boxShadow: `0 4px 12px ${productAccents[product.name] || '#c9a84c'}40` }}>ADD TO CART — ${product.price.toFixed(2)}</button>"""
content = content.replace(old_btn, new_btn)

open('src/app/page.tsx', 'w').write(content)
print('Done!')
