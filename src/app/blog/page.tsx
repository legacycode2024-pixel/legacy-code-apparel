'use client';
import Navbar from '../components/Navbar';

const posts = [
  {
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
  {
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
  {
    slug: '5-ways-to-lead-with-integrity',
    date: 'March 1, 2025',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    excerpt: 'Integrity is not a one time decision — it is a daily practice built in the small moments and quiet choices.',
  },
  {
    slug: 'how-to-style-your-legacy-code-tee',
    date: 'March 10, 2025',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    excerpt: 'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it right.',
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
