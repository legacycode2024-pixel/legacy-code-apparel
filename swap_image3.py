with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    name: 'No Cap',
    price: 71,
    tagline: 'Hood up, truth out.',
    why: "What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric, built for the ones who keep it that way.",
    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774849264/stand_on_it-_front_oedg2v.jpg',"""

new_block = """    name: 'No Cap',
    price: 71,
    tagline: 'Hood up, truth out.',
    why: "What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric, built for the ones who keep it that way.",
    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: image updated")
else:
    print("Could not find exact match — no changes made")
