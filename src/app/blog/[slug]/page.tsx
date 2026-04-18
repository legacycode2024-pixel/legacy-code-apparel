import Navbar from '../../components/Navbar';

const posts = [
  {
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
  {
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
  {
    slug: '5-ways-to-lead-with-integrity',
    date: 'March 1, 2024',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    content: [
      'Integrity is not a one time decision — it is a daily practice.',
      '1. Keep your word. If you say you will do something, do it.',
      '2. Own your mistakes. When you are wrong, say so.',
      '3. Treat everyone with respect.',
      '4. Do the right thing even when it is hard.',
      '5. Be consistent. Who you are in public should match who you are in private.',
    ],
  },
  {
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
  {
    slug: 'why-we-started-legacy-code-apparel',
    date: 'March 20, 2024',
    category: 'BRAND STORY',
    title: 'Why We Started Legacy Code Apparel',
    content: [
      'It started with a simple question — in a world that often rewards compromise, where are the people who still choose integrity?',
      'Legacy Code Apparel was founded in 2024 because we believed those people exist.',
      'We wanted to create something for those people. Not just a t-shirt with words on it, but a dedication to the values that define character and shape purpose.',
      'The LC logo represents our founder initials — a mark of commitment to excellence, ethical living, and a tradition of honor that never goes out of style.',
      'When you wear a Legacy Code tee, you are not just wearing a shirt. You are making a statement about who you are and the legacy you are leaving behind.',
    ],
  },
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1 style={{ fontSize: '32px', color: '#0a1931' }}>Post not found</h1>
          <a href="/blog" style={{ color: '#c9a84c', fontSize: '16px' }}>Back to Blog</a>
        </div>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '11px', letterSpacing: '3px', color: '#c9a84c', marginBottom: '16px' }}>{post.category} — {post.date}</p>
        <h1 style={{ fontSize: '42px', fontWeight: '400', margin: '0', letterSpacing: '-1px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.3' }}>{post.title}</h1>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>
        {post.content.map((para, index) => (
          <p key={index} style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', marginBottom: '24px' }}>{para}</p>
        ))}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/blog" style={{ color: '#0a1931', textDecoration: 'none', fontSize: '14px', letterSpacing: '1px', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>← BACK TO BLOG</a>
          <a href="/" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: '#0a1931', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px' }}>SHOP NOW</a>
        </div>
      </section>
    </main>
  );
}