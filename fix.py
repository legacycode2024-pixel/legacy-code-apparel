content = open('src/app/page.tsx').read()
content = content.replace("'100% cotton, 5.3 oz midweight'", "'Anvil by Gildan, 4.5 oz combed ring-spun cotton'")
open('src/app/page.tsx', 'w').write(content)
print('Done!')
