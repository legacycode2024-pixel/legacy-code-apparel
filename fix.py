content = open('src/app/page.tsx').read()
content = content.replace('Easy returns within 30 days', 'Easy returns within 14 days')
open('src/app/page.tsx', 'w').write(content)
print('Done!')
