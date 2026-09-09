with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Update No Cap product data: current 'image' becomes 'imageBack', current 'image2' becomes 'imageSleeve', new front photo becomes 'image'
old_nocap = """    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    image2: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
  },"""
new_nocap = """    accent: '#c9a84c',
    image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788988611/5143FC13-BAED-4DC1-A872-AC4CF9304A98_iykbed.jpg',
    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    imageSleeve: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
  },"""
content = content.replace(old_nocap, new_nocap)

# 2. Update type
content = content.replace(
    "  image: string;\n  image2?: string;\n};",
    "  image: string;\n  imageBack?: string;\n  imageSleeve?: string;\n};"
)

# 3. Replace state + image display + button with a 3-way tab row
old_card_start = "function PreorderCard({ product, inventory }: { product: PreorderProduct; inventory: InventoryRow[] }) {\n  const [showBack, setShowBack] = useState(false);"
new_card_start = "function PreorderCard({ product, inventory }: { product: PreorderProduct; inventory: InventoryRow[] }) {\n  const [view, setView] = useState<'front' | 'back' | 'sleeve'>('front');\n  const activeImage = view === 'back' && product.imageBack ? product.imageBack : view === 'sleeve' && product.imageSleeve ? product.imageSleeve : product.image;"
content = content.replace(old_card_start, new_card_start)

old_image_block = """      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>
        <Image src={showBack && product.image2 ? product.image2 : product.image} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px' }}>PREORDER</div>
        {product.image2 && (
          <button onClick={(e) => { e.stopPropagation(); setShowBack(!showBack); }} style={{ position: 'absolute', bottom: '12px', right: '12px', backgroundColor: 'rgba(10,25,49,0.85)', color: '#fff', border: 'none', borderRadius: '20px', padding: '6px 14px', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>{showBack ? 'RIGHT SLEEVE' : 'BACK'}</button>
        )}
      </div>"""

new_image_block = """      <div style={{ position: 'relative', height: '340px', backgroundColor: '#f4f1eb' }}>
        <Image src={activeImage} alt={product.name} fill style={{ objectFit: 'cover' }} sizes="280px" />
        <div style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', padding: '4px 10px', borderRadius: '20px' }}>PREORDER</div>
        {(product.imageBack || product.imageSleeve) && (
          <div style={{ position: 'absolute', bottom: '12px', right: '12px', display: 'flex', gap: '6px' }}>
            <button onClick={(e) => { e.stopPropagation(); setView('front'); }} style={{ backgroundColor: view === 'front' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'front' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>FRONT</button>
            {product.imageBack && (
              <button onClick={(e) => { e.stopPropagation(); setView('back'); }} style={{ backgroundColor: view === 'back' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'back' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>BACK</button>
            )}
            {product.imageSleeve && (
              <button onClick={(e) => { e.stopPropagation(); setView('sleeve'); }} style={{ backgroundColor: view === 'sleeve' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'sleeve' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>SLEEVE</button>
            )}
          </div>
        )}
      </div>"""

content = content.replace(old_image_block, new_image_block)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Success: front/back/sleeve view tabs added")
