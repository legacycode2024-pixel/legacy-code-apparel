with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_text = "why: \"This crop is for showing up as you actually are — no performance, no apology, no part of you dimmed down to fit somewhere else. Being seen isn't a risk when you already like who you are. Wear it easy, wear it true.\","
new_text = "why: \"This crop is for showing up as you actually are — no performance, no apology, no part of you dimmed down to fit somewhere else. Being seen isn't a risk when you already like who you are. Wear it easy, wear it true. Finished with a utility belt detail at the hem — a small nod to holding things together, on purpose.\","

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: utility belt added to description")
else:
    print("Could not find match — check current file content")
