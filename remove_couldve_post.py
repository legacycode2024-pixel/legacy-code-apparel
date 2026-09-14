post_block = """  {
    slug: 'i-couldve-but-i-didnt-story-behind-the-design',
    date: 'May 6, 2026',
    category: 'BRAND STORY',
    title: "I Could've But I Didn't — The Story Behind the Design",
    excerpt: 'Some of the most powerful decisions you will ever make are the ones nobody sees. The moments where you could have — but chose not to.',
    content: [
      'There is a moment that most people never talk about.',
      'It is not the moment you did something great. It is not the moment you stood up, spoke out or made the right choice in front of everyone watching.',
      'It is the quiet moment. The private one. The moment where you could have — and nobody would have ever known — but you did not.',
      'That is the moment this piece was built for.',
      'I Could Have But I Did Not is about integrity in its purest form. Not the kind that performs for an audience. The kind that shows up when there is no audience. The kind that holds the line when holding the line costs you something and nobody is around to give you credit for it.',
      'We live in a world that celebrates what people do. Legacy Code is about celebrating what people choose not to do.',
      'You could have lied but you did not. You could have taken the shortcut but you did not. You could have stayed silent when speaking up was needed but you did not. You could have walked away from your values when it got hard but you did not.',
      'Those decisions define you more than anything you post, publish or perform.',
      'This piece is for the person who has been tested in private and passed. The one who knows what they could have gotten away with — and chose not to anyway. Not because someone was watching. Because of who they are.',
      'That is not weakness. That is the highest form of strength.',
      'Wear it as a reminder of every time you held the line when nobody was watching. Wear it as a declaration that your character is not for sale and never has been.',
      'Because at the end of the day the legacy you leave is not built in the big moments. It is built in the quiet ones.',
      "I Could've But I Didn't. And that made all the difference.",
    ],
  },
"""

with open('src/app/blog/page.tsx', 'r') as f:
    listing = f.read()
removed_listing = post_block in listing
listing = listing.replace(post_block, '')
with open('src/app/blog/page.tsx', 'w') as f:
    f.write(listing)

with open('src/app/blog/[slug]/page.tsx', 'r') as f:
    detail = f.read()
removed_detail = post_block in detail
detail = detail.replace(post_block, '')
with open('src/app/blog/[slug]/page.tsx', 'w') as f:
    f.write(detail)

print(f"Listing removed: {removed_listing}, Detail removed: {removed_detail}")
