# Fix EST year in about page
content = open('src/app/about/page.tsx').read()
content = content.replace("EST. 2025", "EST. 2024")
open('src/app/about/page.tsx', 'w').write(content)

# Highlight Contact in navbar
content = open('src/app/components/Navbar.tsx').read()
content = content.replace(
    '<a href="/contact" style={{ color: \'#fff\', textDecoration: \'none\' }}>CONTACT</a>',
    '<a href="/contact" style={{ color: \'#c9a84c\', textDecoration: \'none\', border: \'1px solid #c9a84c\', padding: \'6px 14px\', borderRadius: \'20px\' }}>CONTACT</a>'
)
open('src/app/components/Navbar.tsx', 'w').write(content)
print('Done!')
