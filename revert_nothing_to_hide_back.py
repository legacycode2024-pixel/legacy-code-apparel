with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_url = "imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789419070/Image_1_q5bfbu.jpg',"
new_url = "imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',"

if old_url in content:
    content = content.replace(old_url, new_url)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: back photo reverted to Word Is Bond")
else:
    print("Could not find match — check current file content")
