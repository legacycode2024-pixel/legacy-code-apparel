with open('src/app/layout.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n  description: 'Shop premium statement tees from Legacy Code Apparel. Minimalist graphic tees for people who lead with character. Value-driven apparel made in Atlanta. Free shipping over $45.',\n  keywords: 'integrity apparel, legacy tees, values based clothing, statement tees, minimalist graphic tees, premium tshirts, value driven apparel, atlanta apparel, character tees, legacy code apparel',",
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n  description: 'Shop premium heavyweight hoodies, sweatshirts, and crops from Legacy Code Apparel. One-of-one preorder pieces for people who lead with character. Value-driven apparel made in Atlanta. Free shipping over $50.',\n  keywords: 'integrity apparel, legacy code apparel, values based clothing, statement hoodies, heavyweight sweatshirts, premium streetwear, value driven apparel, atlanta apparel, character apparel, one of one preorder',"
)

content = content.replace(
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity. Free shipping over $45.',",
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n    description: 'Premium heavyweight hoodies, sweatshirts, and crops for people who lead with character. One-of-one preorder pieces rooted in integrity. Free shipping over $50.',"
)

content = content.replace(
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity.',",
    "title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',\n    description: 'Premium heavyweight hoodies, sweatshirts, and crops for people who lead with character. One-of-one preorder pieces rooted in integrity.',"
)

with open('src/app/layout.tsx', 'w') as f:
    f.write(content)

print("Success: site metadata updated")
