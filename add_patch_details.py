with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_text = "why: \"What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric, built for the ones who keep it that way.\","
new_text = "why: \"What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric, built for the ones who keep it that way. Finished with patch details on the chest and right sleeve.\","

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: patch details added to No Cap description")
else:
    print("Could not find match — check current file content")
