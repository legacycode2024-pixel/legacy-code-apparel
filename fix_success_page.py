with open('src/app/success/page.tsx', 'r') as f:
    content = f.read()

old_text = "Your preorder is confirmed! We will have your tee shipped by May 15, 2026. Standard shipping is 3-5 business days once we are fully stocked. Thank you for supporting Legacy Code Apparel!"
new_text = "Your preorder is confirmed! Since each piece is one-of-one and produced after the preorder window closes, expect your order to ship within 3-4 weeks of purchase. Thank you for supporting Legacy Code Apparel!"

content = content.replace(old_text, new_text)

with open('src/app/success/page.tsx', 'w') as f:
    f.write(content)

print("Success: success page updated")
