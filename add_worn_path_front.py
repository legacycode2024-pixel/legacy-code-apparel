with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    accent: '#1a3a6b',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638967/ChatGPT_Image_Sep_5_2026_at_04_09_02_PM_adky9z.png',
  },"""
new_block = """    accent: '#1a3a6b',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788992443/763B4F06-4A7B-4B2A-9A0E-1E7078DCA893_npp8bu.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638967/ChatGPT_Image_Sep_5_2026_at_04_09_02_PM_adky9z.png',
  },"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: front photo added for Consistent by Choice")
else:
    print("Could not find match — check current file content")
