with open('src/app/blog/page.tsx', 'r') as f:
    listing = f.read()

new_listing_post = """  {
    slug: 'small-details-you-wont-notice-until-wearing-it',
    date: 'September 8, 2026',
    category: 'BRAND STORY',
    title: "The Small Details You Won't Notice Until You're Wearing It",
    excerpt: 'A utility belt. Patch details. A founder\\'s signature stitched into a sleeve. The details that separate clothing made to move units from clothing made to mean something.',
    content: [
      'Most streetwear brands stop at the print. Design goes on the fabric, fabric goes on the rack, rack goes to checkout. Legacy Code does not stop there.',
      'Look closer at "Nothing to Hide" and you will find a utility belt detail at the hem — small, deliberate, there because it belongs there. "No Cap" carries patch details on the chest and right sleeve, the kind of thing you would only notice up close. "Consistent by Choice" carries the founder\\'s own signature, stitched right into the sleeve — not a printed mark, a personal one.',
      'None of these details are required. A hoodie works fine without a patch. A sweatshirt sells without a signature. We added them anyway, because that is the difference between clothing made to move units and clothing made to mean something.',
      'If you have ever bought something and felt like it was made carelessly, you know what that absence feels like. We built Legacy Code so you would never have to feel that with us.',
      'That is the whole point of one-of-one. Not just rarity — care. The kind you can only put into something when you are not making a thousand of it.',
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
    slug: 'small-details-you-wont-notice-until-wearing-it',
    date: 'September 8, 2026',
    category: 'BRAND STORY',
    title: "The Small Details You Won't Notice Until You're Wearing It",
    content: [
      'Most streetwear brands stop at the print. Design goes on the fabric, fabric goes on the rack, rack goes to checkout. Legacy Code does not stop there.',
      'Look closer at "Nothing to Hide" and you will find a utility belt detail at the hem — small, deliberate, there because it belongs there. "No Cap" carries patch details on the chest and right sleeve, the kind of thing you would only notice up close. "Consistent by Choice" carries the founder\\'s own signature, stitched right into the sleeve — not a printed mark, a personal one.',
      'None of these details are required. A hoodie works fine without a patch. A sweatshirt sells without a signature. We added them anyway, because that is the difference between clothing made to move units and clothing made to mean something.',
      'If you have ever bought something and felt like it was made carelessly, you know what that absence feels like. We built Legacy Code so you would never have to feel that with us.',
      'That is the whole point of one-of-one. Not just rarity — care. The kind you can only put into something when you are not making a thousand of it.',
    ],
  },
"""

marker2 = detail.index('const posts = [') + len('const posts = [')
detail = detail[:marker2] + '\n' + new_detail_post + detail[marker2:]

with open('src/app/blog/[slug]/page.tsx', 'w') as f:
    f.write(detail)

print("Success: blog post added to both files")
