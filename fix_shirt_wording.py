with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

content = content.replace("isn't just a t-shirt", "isn't just a piece")
content = content.replace("Legacy Code tee", "Legacy Code piece")

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)

print("Success: wording updated")
