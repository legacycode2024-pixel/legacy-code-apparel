with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_button = "{showBack ? 'FRONT' : 'BACK & SLEEVE'}"
new_button = "{showBack ? 'FRONT' : 'BACK & RIGHT SLEEVE'}"

content = content.replace(old_button, new_button)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Success: toggle label updated")
