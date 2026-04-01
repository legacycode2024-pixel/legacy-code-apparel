'use client';
import Navbar from '../components/Navbar';

const posts = [
  {
    slug: '5-ways-to-lead-with-integrity',
    date: 'March 1, 2024',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    excerpt: 'Integrity is not a one time decision — it is a daily practice built in the small moments and quiet choices.',
  },
  {
    slug: 'how-to-style-your-legacy-code-tee',
    date: 'March 10, 2024',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    excerpt: 'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it right.',
  },
  {
    slug: 'why-we-started-legacy-code-apparel',
    date: 'March 20, 2024',
    category: 'BRAND STORY',
    title: 'Why We Started Legacy Code Apparel',
    excerpt: 'It started with a simple question — in a world that rewards compromise, where are the people who still choose integrity?',
  },
  {
    slug: 'what-does-it-mean-to-stand-on-it',
    date: 'March 25, 2024',
    category: 'CHARACTER',
    title: 'What Does It Mean to Stand On It?',
    excerpt: 'Standing on it is not a phrase — it is a posture. It is the decision to plant your feet on what you believe and refuse to move.',
  },
  {
    slug: 'the-difference-between-right-and-easy',
    date: 'March 27, 2024',
    category: 'CHARACTER',
    title: 'The Difference Between Right and Easy',
    excerpt: 'There is a fork in the road that every person faces. On one side is the path that is right. On the other is the path that is easy.',
  },
  {
    slug: 'how-to-outwork-self-doubt',
    date: 'March 29, 2024',
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
          {posts.map((post) => (
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
