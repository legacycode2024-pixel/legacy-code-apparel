with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

old_text = "This isn't just a piece with words on it. It's a dedication to the values that define character, shape purpose, and leave something worth remembering."
new_text = "These aren't just pieces with words on them. They are a dedication to the values that define character, shape purpose, and leave something worth remembering."

content = content.replace(old_text, new_text)

with open('src/app/about/page.tsx', 'w') as f:
    f.write(content)

print("Success: quote updated")
