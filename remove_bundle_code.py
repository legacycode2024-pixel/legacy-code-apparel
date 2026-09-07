with open('src/app/cart/page.tsx', 'r') as f:
    content = f.read()

old_lines = """        {hasBundle && (
          <p style={{ fontSize: "14px", color: "green", marginBottom: "24px" }}>You qualify for 20% bundle discount — use code BUNDLE20 at checkout.</p>
        )}
"""

content = content.replace(old_lines, '')

with open('src/app/cart/page.tsx', 'w') as f:
    f.write(content)

print("Success: bundle code message removed")
