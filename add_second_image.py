with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Add image2 to No Cap product data
old_nocap = """    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
  },"""
new_nocap = """    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    image2: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
  },"""
content = content.replace(old_nocap, new_nocap)

# 2. Add optional image2 to type and add toggle state + button in card
content = content.replace(
    "const preorderProducts = [",
    "type PreorderProduct = {\n  name: string;\n  price: number;\n  tagline: string;\n  why: string;\n  accent: string;\n  image: string;\n  image2?: string;\n};\n\nconst preorderProducts: PreorderProduct[] = ["
)

content = content.replace(
    "function PreorderCard({ product, inventory }: { product: typeof preorderProducts[0]; inventory: InventoryRow[] }) {",
    "function PreorderCard({ product, inventory }: { product: PreorderProduct; inventory: InventoryRow[] }) {\n  const [showBack, setShowBack] = useState(false);"
)

content = content.replace(
    """      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>
        <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px' }}>PREORDER</div>
      </div>""",
    """      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>
        <Image src={showBack && product.image2 ? product.image2 : product.image} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px' }}>PREORDER</div>
        {product.image2 && (
          <button onClick={(e) => { e.stopPropagation(); setShowBack(!showBack); }} style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(10,25,49,0.85)', color: '#fff', border: 'none', borderRadius: '20px', padding: '6px 14px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>{showBack ? 'FRONT' : 'BACK'}</button>
        )}
      </div>"""
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Success: second image toggle added")
