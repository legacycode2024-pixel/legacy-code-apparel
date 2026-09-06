with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

content = content.replace('founded in 2025', 'founded in 2024')
content = content.replace('© 2025 LEGACY CODE APPAREL', '© 2024 LEGACY CODE APPAREL')

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)

print("Success: year updated")
