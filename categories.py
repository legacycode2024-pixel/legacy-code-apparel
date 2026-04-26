content = open('src/app/page.tsx').read()

old = """  const filtered = filter === 'All' ? allProducts : allProducts.filter(p => p.color === filter);"""

new = """  const bestSellers = ['Word Is Bond', 'Stand On It'];
  const newDrops = ['Pressure Tested'];
  const filtered = filter === 'All' ? allProducts
    : filter === 'Best Sellers' ? allProducts.filter(p => bestSellers.includes(p.name))
    : filter === 'New Drops' ? allProducts.filter(p => newDrops.includes(p.name))
    : filter === 'Black' ? allProducts.filter(p => p.color === 'Black')
    : filter === 'White' ? allProducts.filter(p => p.color === 'White')
    : allProducts.filter(p => p.name === filter);"""

content = content.replace(old, new)

old2 = """          {['All', 'Black', 'White'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 24px', backgroundColor: filter === f ? '#0a1931' : '#fff', color: filter === f ? '#c9a84c' : '#0a1931', border: '2px solid #0a1931', borderRadius: '24px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px' }}>{f}</button>
          ))}"""

new2 = """          {['All', 'Best Sellers', 'New Drops', 'Black', 'White', 'Stand On It', 'Actions Over Applause', 'Principles Over Popularity', 'Word Is Bond', "I Could've But I Didn't"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '8px 16px', backgroundColor: filter === f ? '#0a1931' : '#fff', color: filter === f ? '#c9a84c' : '#0a1931', border: '2px solid #0a1931', borderRadius: '24px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', letterSpacing: '1px', whiteSpace: 'nowrap' }}>{f}</button>
          ))}"""

content = content.replace(old2, new2)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
