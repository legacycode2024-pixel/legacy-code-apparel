content = open('src/app/page.tsx').read()
content = content.replace(
    "['All', 'Best Sellers', 'New Drops', 'Black', 'White', 'Stand On It', 'Actions Over Applause', 'Principles Over Popularity', 'Word Is Bond', \"I Could've But I Didn't\"]",
    "['All', 'New Drops', 'Black', 'White', 'Stand On It', 'Actions Over Applause', 'Principles Over Popularity', 'Word Is Bond', \"I Could've But I Didn't\"]"
)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
