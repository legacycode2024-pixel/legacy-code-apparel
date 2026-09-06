import re

# ---- 1. Listing page: remove Right Over Easy post ----
with open('src/app/blog/page.tsx', 'r') as f:
    listing = f.read()

right_over_easy_listing = """  {
    slug: 'right-over-easy-story-behind-the-design',
    date: 'March 28, 2025',
    category: 'BRAND STORY',
    title: 'Right Over Easy — The Story Behind the Design',
    excerpt: 'The word RIGHT sits above the word EASY. That is not an accident. That is a statement about the road most people choose — and the one worth taking.',
    content: [
      'Look at the design on the Right Over Easy tee and you will see exactly what it means — the word RIGHT sits above the word EASY. That is not an accident. That is a statement.',
      'The easy road is the most traveled road. In work, in relationships, in how we carry ourselves every day — people naturally gravitate toward what is comfortable, what is convenient, what requires the least resistance. It is human nature. But just because something is easy does not mean it is right.',
      'Think about it. How many times have you seen someone take a shortcut at work instead of doing the job properly? How many relationships fall apart because people choose what feels good in the moment over what is actually right?',
      'Right Over Easy is for the rare ones. The ones who do not mind the extra work. The ones who choose honesty even when a lie would be easier. The ones who raise their kids with discipline and values even when it is hard.',
      'Doing the right thing is rarely the easy thing. But it is always worth it.',
      'That is what this tee represents — a daily commitment to choosing right over easy in every area of your life. Wear it as a reminder. Wear it as a declaration. Because the easy road is crowded. The right road takes character.',
    ],
  },
"""
removed_listing = right_over_easy_listing in listing
listing = listing.replace(right_over_easy_listing, '')

# Update "I Could've But I Didn't" wording in listing
listing = listing.replace("That is the moment this tee was built for.", "That is the moment this piece was built for.")
listing = listing.replace("This tee is for the person who has been tested in private and passed.", "This piece is for the person who has been tested in private and passed.")

with open('src/app/blog/page.tsx', 'w') as f:
    f.write(listing)

# ---- 2. Slug detail page: remove sneakers, style, and right-over-easy posts ----
with open('src/app/blog/[slug]/page.tsx', 'r') as f:
    detail = f.read()

sneakers_detail = """  {
    slug: 'perfect-sneakers-legacy-code-tee',
    date: 'April 17, 2026',
    category: 'STYLE',
    title: 'The Perfect Sneakers to Pair with Your Legacy Code Tee',
    content: [
      'Your Legacy Code tee already says something about who you are. The right sneakers just make sure everyone hears it.',
      '1. Clean White Air Force 1s — You cannot go wrong. A crisp pair of white AF1s with a black Legacy Code tee is the classic combo that never fails. Simple, clean and confident.',
      '2. Jordan 1s — High top or low top, Jordans bring energy to any Legacy Code fit. Pair a bred or chicago colorway with the Word Is Bond tee for a look that hits hard.',
      '3. New Balance 550s — For a more laid back elevated look the NB 550 is undefeated. Pair with the Stand On It tee, clean dark jeans and an open button down for a smart casual fit.',
      '4. Adidas Sambas — The Samba has made a serious comeback and it pairs beautifully with Legacy Code tees. Wear with the Principles Over Popularity tee and straight leg chinos.',
      '5. Timberland 6-Inch Boots — Wheat Timbs with a Legacy Code tee is a culture classic. Pair with the Actions Over Applause tee and dark cargo pants for a rugged bold look.',
      'The Bottom Line — Whatever you lace up, wear them with the same intentionality you wear your Legacy Code tee — with confidence, purpose and zero apologies.',
    ],
  },
"""

right_over_easy_detail = """  {
    slug: 'right-over-easy-story-behind-the-design',
    date: 'March 28, 2024',
    category: 'BRAND STORY',
    title: 'Right Over Easy — The Story Behind the Design',
    content: [
      'Look at the design on the Right Over Easy tee and you will see exactly what it means — the word RIGHT sits above the word EASY. That is not an accident. That is a statement.',
      'The easy road is the most traveled road. In work, in relationships, in how we carry ourselves every day — people naturally gravitate toward what is comfortable, what is convenient, what requires the least resistance.',
      'Think about it. How many times have you seen someone take a shortcut at work instead of doing the job properly? How many relationships fall apart because people choose what feels good in the moment over what is actually right?',
      'Right Over Easy is for the rare ones. The ones who do not mind the extra work. The ones who choose honesty even when a lie would be easier.',
      'Doing the right thing is rarely the easy thing. But it is always worth it.',
      'That is what this tee represents — a daily commitment to choosing right over easy in every area of your life. Wear it as a reminder. Wear it as a declaration. Because the easy road is crowded. The right road takes character.',
    ],
  },
"""

style_detail = """  {
    slug: 'how-to-style-your-legacy-code-tee',
    date: 'March 10, 2024',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    content: [
      'Your Legacy Code tee is more than just a shirt — it is a statement.',
      'Keep it simple. A Legacy Code tee paired with clean dark jeans and white sneakers is a classic look that never fails.',
      'Layer it up. Throw an open button-down shirt or a bomber jacket over your tee for a more polished look.',
      'Dress it up. Pair your tee with chinos and clean leather shoes for a smart casual look.',
      'Own it with confidence. The best way to style any Legacy Code tee is to wear it with the confidence of someone who actually lives by the values on it.',
    ],
  },
"""

removed_sneakers = sneakers_detail in detail
removed_row = right_over_easy_detail in detail
removed_style = style_detail in detail

detail = detail.replace(sneakers_detail, '')
detail = detail.replace(right_over_easy_detail, '')
detail = detail.replace(style_detail, '')

detail = detail.replace("That is the moment this tee was built for.", "That is the moment this piece was built for.")
detail = detail.replace("This tee is for the person who has been tested in private and passed.", "This piece is for the person who has been tested in private and passed.")

with open('src/app/blog/[slug]/page.tsx', 'w') as f:
    f.write(detail)

print(f"Listing: removed Right Over Easy = {removed_listing}")
print(f"Detail: removed sneakers = {removed_sneakers}, right-over-easy = {removed_row}, style = {removed_style}")
