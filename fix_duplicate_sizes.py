with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_line = """  const sizesForColor = (color: string) =>
    productRows.filter(r => r.color === color && !r.sold).map(r => r.size);"""

new_line = """  const sizesForColor = (color: string) =>
    Array.from(new Set(productRows.filter(r => r.color === color && !r.sold).map(r => r.size)));"""

if old_line in content:
    content = content.replace(old_line, new_line)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: duplicate sizes fixed")
else:
    print("Could not find match — check current file content")
