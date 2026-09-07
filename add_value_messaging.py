with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_intro = """        <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '32px' }}>Each piece is one-of-one. Once a size/color sells, it's gone for good.</p>"""

new_intro = """        <p style={{ textAlign: 'center', fontSize: '14px', color: '#888', marginBottom: '8px' }}>Each piece is one-of-one. Once a size/color sells, it's gone for good.</p>
        <p style={{ textAlign: 'center', fontSize: '13px', color: '#aaa', marginBottom: '32px' }}>Heavyweight fleece. Never restocked. Never mass produced.</p>"""

content = content.replace(old_intro, new_intro)

old_price_row = """        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', padding: '12px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
          <p style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: product.accent }}>${product.price.toFixed(2)}</p>
        </div>"""

new_price_row = """        <div style={{ marginBottom: '16px', padding: '12px 0', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
          <p style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: '700', color: product.accent }}>${product.price.toFixed(2)}</p>
          <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>One-of-one · Heavyweight fleece · Never restocked</p>
        </div>"""

content = content.replace(old_price_row, new_price_row)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Success: value messaging added")
