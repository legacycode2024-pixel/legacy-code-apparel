with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_text = "why: \"Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. This sweatshirt is for the ones who don't need a reason to keep going — discipline over motivation, every time. Heavyweight fleece. Built to be worn as often as the message needs saying.\","
new_text = "why: \"Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. This sweatshirt is for the ones who don't need a reason to keep going — discipline over motivation, every time. Heavyweight fleece. Built to be worn as often as the message needs saying. Finished with a signature detail on the sleeve — a personal mark on every piece.\","

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: sleeve signature added to description")
else:
    print("Could not find match — check current file content")
