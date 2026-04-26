content = open('src/app/page.tsx').read()
content = content.replace(
    "<a href='#shop' style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', fontWeight: '700' }}>SHOP BEST SELLERS</a>",
    "<a href='#bestsellers' style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#c9a84c', color: '#0a1931', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', fontWeight: '700' }}>SHOP BEST SELLERS</a>"
)
content = content.replace(
    "<section style={{ padding: '40px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>",
    "<section id='bestsellers' style={{ padding: '40px 20px', backgroundColor: '#0a1931', textAlign: 'center' }}>"
)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
