with open('src/app/blog/page.tsx', 'r') as f:
    content = f.read()

post1 = """  {
    slug: 'perfect-sneakers-legacy-code-tee',
    date: 'April 17, 2026',
    category: 'STYLE',
    title: 'The Perfect Sneakers to Pair with Your Legacy Code Tee',
    excerpt: 'Your Legacy Code tee is a statement. Your sneakers should be too. Here are the perfect pairs to complete the look.',
    content: [
      'Your Legacy Code tee already says something about who you are. The right sneakers just make sure everyone hears it.',
      '1. Clean White Air Force 1s — You cannot go wrong. A crisp pair of white AF1s with a black Legacy Code tee is the classic combo that never fails. Simple, clean and confident. Let the message on your tee do the talking while your kicks keep it grounded.',
      '2. Jordan 1s — High top or low top, Jordans bring energy to any Legacy Code fit. Pair a bred or chicago colorway with the Word Is Bond tee for a look that hits hard. The boldness of the Jordan matches the boldness of the message.',
      '3. New Balance 550s — For a more laid back elevated look the NB 550 is undefeated. Pair with the Stand On It tee, clean dark jeans and an open button down for a smart casual fit that works anywhere from brunch to a casual Friday at the office.',
      '4. Adidas Sambas — The Samba has made a serious comeback and it pairs beautifully with Legacy Code tees. Low profile, clean silhouette and effortlessly stylish. Wear with the Principles Over Popularity tee and straight leg chinos for a look that is understated but intentional.',
      '5. Timberland 6-Inch Boots — When the weather calls for it, wheat Timbs with a Legacy Code tee is a culture classic. Pair with the Actions Over Applause tee and dark cargo pants for a look that is rugged, bold and purpose driven.',
      'The Bottom Line — Your sneakers are the foundation of your fit. Whatever you lace up, wear them with the same intentionality you wear your Legacy Code tee — with confidence, purpose and zero apologies.',
    ],
  },
"""

post2 = """  {
    slug: 'how-to-style-your-legacy-code-tee',
    date: 'March 10, 2025',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    excerpt: 'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it right.',
  },
"""

removed = 0
if post1 in content:
    content = content.replace(post1, '')
    removed += 1
if post2 in content:
    content = content.replace(post2, '')
    removed += 1

with open('src/app/blog/page.tsx', 'w') as f:
    f.write(content)

print(f"Success: removed {removed} of 2 posts")
