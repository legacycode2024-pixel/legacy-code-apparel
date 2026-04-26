content = open('src/app/page.tsx').read()
old = """      <section id='shop' style={{ padding: '60px 20px' }}>"""
new = """      <section style={{ padding: '40px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', color: '#c9a84c', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>MOST LOVED</p>
        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#fff', marginBottom: '40px' }}>Best Sellers</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
          {allProducts.filter(p => ['Word Is Bond', 'Stand On It'].includes(p.name) && p.color === 'Black').map(product => (
            <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <a href='#shop' style={{ display: 'inline-block', marginTop: '32px', padding: '12px 32px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px' }}>VIEW FULL COLLECTION</a>
      </section>

      <section id='shop' style={{ padding: '60px 20px' }}>"""
content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
