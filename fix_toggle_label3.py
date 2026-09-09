with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_button = "{showBack ? 'FRONT' : 'BACK'}"
new_button = "{showBack ? 'FRONT' : 'BACK & RIGHT SLEEVE'}"

if old_button in content:
    content = content.replace(old_button, new_button)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: toggle label updated")
else:
    print("Could not find match — check current file content")
