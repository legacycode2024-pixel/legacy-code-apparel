with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_block = """    name: 'Consistent by Choice',
    price: 61,
    tagline: 'Heavyweight fleece for the days you show up anyway.',
    why: "Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. This sweatshirt is for the ones who don't need a reason to keep going — discipline over motivation, every time. Heavyweight fleece. Built to be worn as often as the message needs saying.",
    accent: '#1a3a6b',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1774849264/stand_on_it-_front_oedg2v.jpg',"""

new_block = """    name: 'Consistent by Choice',
    price: 61,
    tagline: 'Heavyweight fleece for the days you show up anyway.',
    why: "Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. This sweatshirt is for the ones who don't need a reason to keep going — discipline over motivation, every time. Heavyweight fleece. Built to be worn as often as the message needs saying.",
    accent: '#1a3a6b',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638967/ChatGPT_Image_Sep_5_2026_at_04_09_02_PM_adky9z.png',"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: image updated")
else:
    print("Could not find exact match — no changes made")
