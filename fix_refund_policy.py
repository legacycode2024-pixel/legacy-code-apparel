with open('src/app/refunds/page.tsx', 'r') as f:
    content = f.read()

old_block = """        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>NON-RETURNABLE ITEMS</h2>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li>Items returned after 14 days of delivery</li>
            <li>Items that have been worn, washed or altered</li>
            <li>Sale items</li>
          </ul>
        </div>"""

new_block = """        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>NON-RETURNABLE ITEMS</h2>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li>Items returned after 14 days of delivery</li>
            <li>Items that have been worn, washed or altered</li>
            <li>Sale items</li>
            <li>Preorder pieces — each piece is one-of-one and final sale due to limited availability</li>
          </ul>
        </div>"""

content = content.replace(old_block, new_block)

with open('src/app/refunds/page.tsx', 'w') as f:
    f.write(content)

print("Success: refund policy updated")
