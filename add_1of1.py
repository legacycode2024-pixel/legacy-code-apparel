with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """            <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: '700', color: '#888', letterSpacing: '1px' }}>COLOR</p>"""

new_block = """            <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: '700', color: '#888', letterSpacing: '1px' }}>COLOR <span style={{ fontWeight: 400, color: '#aaa' }}>(each 1 of 1)</span></p>"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: badge added")
else:
    print("Could not find exact match — no changes made")
