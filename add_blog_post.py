with open('src/app/blog/page.tsx', 'r') as f:
    listing = f.read()

new_listing_post = """  {
    slug: 'why-one-of-one-streetwear-matters',
    date: 'September 6, 2026',
    category: 'BRAND STORY',
    title: 'Why One-of-One Streetwear Matters (And Why We Build That Way)',
    excerpt: 'Most clothing brands chase volume. Legacy Code Apparel does the opposite — every piece is one of one, never restocked.',
    content: [
      'Most clothing brands chase volume. More units, more restocks, more of the same shirt in a hundred closets. Legacy Code Apparel does the opposite.',
      'Every piece we drop is one of one. Once a size and color sells, it is gone — no restock, no reprint, no second chance. That is not a marketing gimmick. It is how we have built this brand from day one: on the belief that what you wear should mean something, and meaning does not come from mass production.',
      'When you buy a Legacy Code piece, you are not buying inventory. You are buying the only one that will ever exist in that exact size and color. That is rare in an industry built on sameness.',
      'This is also why we do not cut corners on materials. Heavyweight fleece, real weight in your hands, built to actually last — because if it is the only one, it should hold up like it.',
      'If you are looking for something that is not sitting in a hundred other closets, that is exactly what we build.',
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
    slug: 'why-one-of-one-streetwear-matters',
    date: 'September 6, 2026',
    category: 'BRAND STORY',
    title: 'Why One-of-One Streetwear Matters (And Why We Build That Way)',
    content: [
      'Most clothing brands chase volume. More units, more restocks, more of the same shirt in a hundred closets. Legacy Code Apparel does the opposite.',
      'Every piece we drop is one of one. Once a size and color sells, it is gone — no restock, no reprint, no second chance. That is not a marketing gimmick. It is how we have built this brand from day one: on the belief that what you wear should mean something, and meaning does not come from mass production.',
      'When you buy a Legacy Code piece, you are not buying inventory. You are buying the only one that will ever exist in that exact size and color. That is rare in an industry built on sameness.',
      'This is also why we do not cut corners on materials. Heavyweight fleece, real weight in your hands, built to actually last — because if it is the only one, it should hold up like it.',
      'If you are looking for something that is not sitting in a hundred other closets, that is exactly what we build.',
    ],
  },
"""

marker2 = detail.index('const posts = [') + len('const posts = [')
detail = detail[:marker2] + '\n' + new_detail_post + detail[marker2:]

with open('src/app/blog/[slug]/page.tsx', 'w') as f:
    f.write(detail)

print("Success: blog post added to both files")
