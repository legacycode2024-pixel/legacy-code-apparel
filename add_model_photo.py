with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# 1. Add imageModel to No Cap product data
old_nocap = """    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    imageSleeve: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
  },"""
new_nocap = """    imageBack: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png',
    imageSleeve: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788961819/D13078E4-AB75-4C99-AABF-1A2066A8CE70_wf72gn.jpg',
    imageModel: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1789963828/5FC67237-1DF0-4D7E-AD4C-50E13780490E_jmrr0d.png',
  },"""
content = content.replace(old_nocap, new_nocap)

# 2. Update type
content = content.replace(
    "  imageBack?: string;\n  imageSleeve?: string;\n};",
    "  imageBack?: string;\n  imageSleeve?: string;\n  imageModel?: string;\n};"
)

# 3. Update view state type and activeImage logic
content = content.replace(
    "const [view, setView] = useState<'front' | 'back' | 'sleeve'>('front');\n  const activeImage = view === 'back' && product.imageBack ? product.imageBack : view === 'sleeve' && product.imageSleeve ? product.imageSleeve : product.image;",
    "const [view, setView] = useState<'front' | 'back' | 'sleeve' | 'model'>('front');\n  const activeImage = view === 'back' && product.imageBack ? product.imageBack : view === 'sleeve' && product.imageSleeve ? product.imageSleeve : view === 'model' && product.imageModel ? product.imageModel : product.image;"
)

# 4. Update tab row condition and add MODEL button
old_tabs_open = "{(product.imageBack || product.imageSleeve) && ("
new_tabs_open = "{(product.imageBack || product.imageSleeve || product.imageModel) && ("
content = content.replace(old_tabs_open, new_tabs_open)

old_sleeve_button_block = """            {product.imageSleeve && (
              <button onClick={(e) => { e.stopPropagation(); setView('sleeve'); }} style={{ backgroundColor: view === 'sleeve' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'sleeve' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>SLEEVE</button>
            )}
          </div>
        )}"""
new_sleeve_button_block = """            {product.imageSleeve && (
              <button onClick={(e) => { e.stopPropagation(); setView('sleeve'); }} style={{ backgroundColor: view === 'sleeve' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'sleeve' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>SLEEVE</button>
            )}
            {product.imageModel && (
              <button onClick={(e) => { e.stopPropagation(); setView('model'); }} style={{ backgroundColor: view === 'model' ? '#c9a84c' : 'rgba(10,25,49,0.85)', color: view === 'model' ? '#0a1931' : '#fff', border: 'none', borderRadius: '20px', padding: '6px 10px', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', cursor: 'pointer' }}>MODEL</button>
            )}
          </div>
        )}"""
content = content.replace(old_sleeve_button_block, new_sleeve_button_block)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Success: model photo tab added for No Cap")
