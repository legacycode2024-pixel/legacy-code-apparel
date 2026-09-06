with open('src/app/faq/page.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "'Heavyweight fleece — 53% polyester, 42% cotton, 5% other fibers. Soft, durable, and built to hold up wear after wear.'",
    "'Heavyweight polyester-cotton blend fleece (exact ratio varies slightly by piece), plus a small percentage of other fibers. Soft, durable, and built to hold up wear after wear.'"
)

with open('src/app/faq/page.tsx', 'w') as f:
    f.write(content)

print("Success: fabric wording updated")
