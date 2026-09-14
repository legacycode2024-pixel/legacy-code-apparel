with open('src/app/blog/page.tsx', 'r') as f:
    listing = f.read()

new_listing_post = """  {
    slug: 'what-it-means-to-wear-a-piece-no-one-else-has',
    date: 'September 7, 2026',
    category: 'BRAND STORY',
    title: 'What It Means to Wear a Piece No One Else Has',
    excerpt: 'A Legacy Code piece is not an item off a shelf. It is the only one that will ever exist in that exact size and color.',
    content: [
      'There is a difference between owning something and owning the something. Most clothes you buy exist in the thousands — same shirt, same size, same print, sitting in closets all over the country. You blend in without even trying to.',
      'A Legacy Code piece does not work that way. When you buy one, you are not buying an item off a shelf that gets restocked next week. You are buying the only one. The exact size, the exact color, the exact piece — it exists once, and then it is yours.',
      'That changes what it means to wear it. It is not just a hoodie or a sweatshirt anymore. It is proof you moved when it mattered, that you did not wait around for a restock that was never coming. There is a quiet kind of confidence in that — knowing nobody else in the room is wearing what you are wearing, not because you tried to be different, but because there genuinely is not another one.',
      'We did not build it this way to create hype. We built it this way because that is how we think things worth having should work — rare, intentional, and real. Not mass produced. Not disposable. Made once, worn with meaning.',
      'If you are wearing Legacy Code, you are not wearing a product. You are wearing the only one.',
    ],
  },
"""

marker = listing.index('const posts = [') + len('const posts = [')
listing = listing[:marker] + '\n' + new_listing_post + listing[marker:]

with open('src/app/blog/page.tsx', 'w') as f:
    f.write(listing)

with open('src/app/blog/[slug]/page.tsx', 'r') as f:
    detail = f.read()

new_detail_post = """  {
    slug: 'what-it-means-to-wear-a-piece-no-one-else-has',
    date: 'September 7, 2026',
    category: 'BRAND STORY',
    title: 'What It Means to Wear a Piece No One Else Has',
    content: [
      'There is a difference between owning something and owning the something. Most clothes you buy exist in the thousands — same shirt, same size, same print, sitting in closets all over the country. You blend in without even trying to.',
      'A Legacy Code piece does not work that way. When you buy one, you are not buying an item off a shelf that gets restocked next week. You are buying the only one. The exact size, the exact color, the exact piece — it exists once, and then it is yours.',
      'That changes what it means to wear it. It is not just a hoodie or a sweatshirt anymore. It is proof you moved when it mattered, that you did not wait around for a restock that was never coming. There is a quiet kind of confidence in that — knowing nobody else in the room is wearing what you are wearing, not because you tried to be different, but because there genuinely is not another one.',
      'We did not build it this way to create hype. We built it this way because that is how we think things worth having should work — rare, intentional, and real. Not mass produced. Not disposable. Made once, worn with meaning.',
      'If you are wearing Legacy Code, you are not wearing a product. You are wearing the only one.',
    ],
  },
"""

marker2 = detail.index('const posts = [') + len('const posts = [')
detail = detail[:marker2] + '\n' + new_detail_post + detail[marker2:]

with open('src/app/blog/[slug]/page.tsx', 'w') as f:
    f.write(detail)

print("Success: blog post added to both files")
