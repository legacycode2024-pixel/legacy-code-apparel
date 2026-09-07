with open('src/app/components/Footer.tsx', 'r') as f:
    content = f.read()
content = content.replace('© 2025 LEGACY CODE APPAREL', '© 2024 LEGACY CODE APPAREL')
with open('src/app/components/Footer.tsx', 'w') as f:
    f.write(content)
print("Success: global footer year fixed")
