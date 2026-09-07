with open('src/app/cart/page.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "  const hasBundle = cart.reduce((sum, i) => sum + i.quantity, 0) >= 2;\n",
    ""
)

with open('src/app/cart/page.tsx', 'w') as f:
    f.write(content)

print("Success: unused line removed")
