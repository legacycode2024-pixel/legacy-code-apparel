with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789417910/402dcb02-f3cd-422a-ba44-ea701311375c_2_kvx9nr.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',
  },"""
new_block = """    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789417910/402dcb02-f3cd-422a-ba44-ea701311375c_2_kvx9nr.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',
    imageModel: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789964263/C98A6C3B-2E76-46C4-8365-42C618727593_nun4on.jpg',
  },"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: model photo added for Nothing to Hide")
else:
    print("Could not find match — check current file content")
