with open('src/app/faq/page.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "{ question: 'What sizes do you offer?', answer: 'We offer S, M, L, XL, 2XL and 3XL on all styles.' },",
    "{ question: 'What sizes do you offer?', answer: 'We offer M, L and XL on all styles.' },"
)

content = content.replace(
    "{ question: 'How do the tees fit?', answer: 'Our tees have a relaxed unisex fit and are true to size. Size up if you prefer an oversized look.' },",
    "{ question: 'How do the pieces fit?', answer: 'Our hoodies, sweatshirts, and crops have a relaxed, true-to-size fit. Size up if you prefer an oversized look.' },"
)

content = content.replace(
    "{ question: 'What are your tees made of?', answer: 'Anvil by Gildan combed ring-spun cotton, 4.5 oz. Soft, lightweight and breathable.' },",
    "{ question: 'What are your pieces made of?', answer: 'Heavyweight fleece — 53% polyester, 42% cotton, 5% other fibers. Soft, durable, and built to hold up wear after wear.' },"
)

content = content.replace(
    "'Yes! We offer free shipping on all orders over $45. Orders under $50 ship for $5.01.'",
    "'Yes! We offer free shipping on all orders over $50. Orders under $50 ship for $5.01.'"
)

content = content.replace('© 2025 LEGACY CODE APPAREL', '© 2024 LEGACY CODE APPAREL')

with open('src/app/faq/page.tsx', 'w') as f:
    f.write(content)

print("Success: FAQ updated")
