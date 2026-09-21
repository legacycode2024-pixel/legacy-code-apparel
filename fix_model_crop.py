with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_line = """        <Image src={activeImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />"""
new_line = """        <Image src={activeImage} alt={product.name} fill style={{ objectFit: view === 'model' ? 'contain' : 'cover' }} sizes="280px" />"""

if old_line in content:
    content = content.replace(old_line, new_line)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: model photo crop fixed")
else:
    print("Could not find match — check current file content")
