'use client';
import Navbar from '../components/Navbar';

const posts = [
  {
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

  {
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
  {
    slug: '5-ways-to-lead-with-integrity',
    date: 'March 1, 2025',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    excerpt: 'Integrity is not a one time decision — it is a daily practice built in the small moments and quiet choices.',
  },
  {
    slug: 'why-we-started-legacy-code-apparel',
    date: 'March 20, 2025',
    category: 'BRAND STORY',
    title: 'Why We Started Legacy Code Apparel',
    excerpt: 'It started with a simple question — in a world that rewards compromise, where are the people who still choose integrity?',
  },
  {
    slug: 'what-does-it-mean-to-stand-on-it',
    date: 'March 25, 2025',
    category: 'CHARACTER',
    title: 'What Does It Mean to Stand On It?',
    excerpt: 'Standing on it is not a phrase — it is a posture. It is the decision to plant your feet on what you believe and refuse to move.',
  },
  {
    slug: 'the-difference-between-right-and-easy',
    date: 'March 27, 2025',
    category: 'CHARACTER',
    title: 'The Difference Between Right and Easy',
    excerpt: 'There is a fork in the road that every person faces. On one side is the path that is right. On the other is the path that is easy.',
  },
  {
    slug: 'how-to-outwork-self-doubt',
    date: 'March 29, 2025',
    category: 'MINDSET',
    title: 'How to Outwork Self Doubt',
    excerpt: 'Self doubt is not your enemy — it is a signal. The difference between those who succeed is what they do while the doubt is present.',
  },
];

export default function BlogPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f4f1eb', minHeight: '100vh', color: '#0a1931' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>LEGACY CODE</p>
        <h1 style={{ fontSize: '42px', fontWeight: '400', margin: '0 auto', letterSpacing: '-1px', maxWidth: '700px' }}>The Blog</h1>
      </section>
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {posts.slice().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => (
            <div key={post.slug} style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e5e5', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px', flex: 1 }}>
                <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c9a84c', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>{post.category} — {post.date}</p>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', lineHeight: '1.4', color: '#0a1931' }}>{post.title}</h2>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7', marginBottom: '20px' }}>{post.excerpt}</p>
              </div>
              <div style={{ padding: '0 28px 28px' }}>
                <a href={`/blog/${post.slug}`} style={{ fontSize: '13px', letterSpacing: '2px', color: '#0a1931', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>READ MORE →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2025 LEGACY CODE APPAREL</footer>
    </main>
  );
}
