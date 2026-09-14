with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_url = "image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789396046/Image_5_vapxz7.jpg',"
new_url = "image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789417910/402dcb02-f3cd-422a-ba44-ea701311375c_2_kvx9nr.jpg',"

if old_url in content:
    content = content.replace(old_url, new_url)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: front photo updated for Nothing to Hide")
else:
    print("Could not find match — check current file content")
