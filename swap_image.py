with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    name: 'Nothing to Hide',
    price: 53,
    tagline: 'Comfortable in your own skin, on purpose.',
    why: "This crop is for showing up as you actually are — no performance, no apology, no part of you dimmed down to fit somewhere else. Being seen isn't a risk when you already like who you are. Wear it easy, wear it true.",
    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774849264/stand_on_it-_front_oedg2v.jpg',"""

new_block = """    name: 'Nothing to Hide',
    price: 53,
    tagline: 'Comfortable in your own skin, on purpose.',
    why: "This crop is for showing up as you actually are — no performance, no apology, no part of you dimmed down to fit somewhere else. Being seen isn't a risk when you already like who you are. Wear it easy, wear it true.",
    accent: '#722f37',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png',"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: image updated")
else:
    print("Could not find exact match — no changes made")
