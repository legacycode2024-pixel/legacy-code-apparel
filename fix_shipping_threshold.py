with open('src/app/api/checkout/route.ts', 'r') as f:
    content = f.read()
content = content.replace('if (total >= 45) {', 'if (total >= 50) {')
with open('src/app/api/checkout/route.ts', 'w') as f:
    f.write(content)

with open('src/app/cart/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('const freeShipping = total >= 45;', 'const freeShipping = total >= 50;')
with open('src/app/cart/page.tsx', 'w') as f:
    f.write(content)

print("Success: shipping threshold fixed to $50 in checkout and cart")
