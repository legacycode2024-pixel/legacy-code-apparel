with open('src/app/sizeguide/page.tsx', 'r') as f:
    content = f.read()

old_block = """              { size: 'S', chest: '34-36', length: '27', sleeve: '8' },
              { size: 'M', chest: '38-40', length: '28', sleeve: '8.5' },
              { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
              { size: 'XL', chest: '46-48', length: '30', sleeve: '9.5' },
              { size: '2XL', chest: '50-52', length: '31', sleeve: '10' },
              { size: '3XL', chest: '54-56', length: '32', sleeve: '10.5' },"""

new_block = """              { size: 'M', chest: '38-40', length: '28', sleeve: '8.5' },
              { size: 'L', chest: '42-44', length: '29', sleeve: '9' },
              { size: 'XL', chest: '46-48', length: '30', sleeve: '9.5' },"""

content = content.replace(old_block, new_block)
content = content.replace('© 2025 LEGACY CODE APPAREL', '© 2024 LEGACY CODE APPAREL')

with open('src/app/sizeguide/page.tsx', 'w') as f:
    f.write(content)

print("Success: sizes trimmed and year fixed")
