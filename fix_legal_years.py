for path in ['src/app/terms/page.tsx', 'src/app/privacy/page.tsx', 'src/app/refunds/page.tsx', 'src/app/contact/page.tsx']:
    with open(path, 'r') as f:
        content = f.read()
    content = content.replace('© 2025 LEGACY CODE APPAREL', '© 2024 LEGACY CODE APPAREL')
    with open(path, 'w') as f:
        f.write(content)
    print(f"Updated {path}")
