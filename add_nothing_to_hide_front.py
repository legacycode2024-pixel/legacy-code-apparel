with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',
  },"""
new_block = """    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789396046/Image_5_vapxz7.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',
  },"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: front photo added for Nothing to Hide")
else:
    print("Could not find match — check current file content")
