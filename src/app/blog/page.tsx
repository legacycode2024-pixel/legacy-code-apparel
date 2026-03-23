import Navbar from '../components/Navbar';

const posts = [
  {
    slug: '5-ways-to-lead-with-integrity',
    date: 'March 1, 2024',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    excerpt: 'Integrity is not a one time decision — it is a daily practice. Here are five simple but powerful ways to lead with integrity in everything you do.',
    content: [
      'Integrity is not a one time decision — it is a daily practice. It is built in the small moments, the quiet choices, the times when nobody is watching but you still do the right thing.',
      '1. Keep your word. If you say you will do something, do it. Nothing builds trust faster than being someone people can count on.',
      '2. Own your mistakes. When you are wrong, say so. Accountability is a sign of strength, not weakness.',
      '3. Treat everyone with respect. The way you treat people who can do nothing for you says everything about your character.',
      '4. Do the right thing even when it is hard. Integrity is tested most in difficult moments. That is where your legacy is built.',
      '5. Be consistent. Who you are in public should match who you are in private. Consistency is the foundation of trust.',
    ],
  },
  {
    slug: 'how-to-style-your-legacy-code-tee',
    date: 'March 10, 2024',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    excerpt: 'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it and make that statement loud and clear.',
    content: [
      'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it in a way that makes that statement loud and clear.',
      'Keep it simple. A Legacy Code tee paired with clean dark jeans and white sneakers is a classic look that never fails. Let the message on your tee speak for itself.',
      'Layer it up. Throw an open button-down shirt or a bomber jacket over your tee for a more polished look that still keeps the message visible.',
      'Dress it up. Pair your tee with chinos and clean leather shoes for a smart casual look that works for almost any occasion.',
      'Own it with confidence. The best way to style any Legacy Code tee is to wear it with the confidence of someone who actually lives by the values on it. That is what makes it truly stand out.',
    ],
  },
  {
    slug: 'why-we-started-legacy-code-apparel',
    date: 'March 20, 2024',
    category: 'BRAND STORY',
    title: 'Why We Started Legacy Code Apparel',
    excerpt: 'It started with a simple question — where are the people who still choose integrity? Here is the story behind Legacy Code Apparel.',
    content: [
      'It started with a simple question — in a world that often rewards compromise, where are the people who still choose integrity?',
      'Legacy Code Apparel was founded in 2024 because we believed those people exist. They are out there every day doing the right thing, standing firm in their values, leading with character even when it costs them something.',
      'We wanted to create something for those people. Not just a t-shirt with words on it, but a dedication to the values that define character and shape purpose.',
      'The LC logo represents our founder\'s initials, but it also represents something bigger — a mark of commitment to excellence, ethical living, and a tradition of honor that never goes out of style.',
      'When you wear a Legacy Code tee, you are not just wearing a shirt. You are making a statement about who you are and the legacy you are leaving behind. That is what this brand is all about.',
    ],
  },
];

export default function BlogPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>JOURNAL</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>The Legacy Blog</h1>
      </section>
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        {posts.map((post, index) => (
          <div key={index} style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid #e5e5e5' }}>
            <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c9a84c', marginBottom: '8px' }}>{post.category} — {post.date}</p>
            <h2 style={{ fontSize: '28px', fontWeight: '400', margin: '0 0 16px', color: '#0a1931', lineHeight: '1.3' }}>{post.title}</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', margin: '0 0 20px' }}>{post.excerpt}</p>
            <div style={{ display: 'none' }}>
              {post.content.map((para, i) => (
                <p key={i} style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '16px' }}>{para}</p>
              ))}
            </div>
            <a href={`/blog/${post.slug}`} style={{ fontSize: '13px', letterSpacing: '2px', color: '#0a1931', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>READ MORE →</a>
          </div>
        ))}
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}