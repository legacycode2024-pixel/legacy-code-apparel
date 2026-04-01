import Navbar from '../../components/Navbar';

const posts: Record<string, { date: string; category: string; title: string; content: string[] }> = {
  '5-ways-to-lead-with-integrity': {
    date: 'March 1, 2024',
    category: 'CHARACTER',
    title: '5 Ways to Lead with Integrity Every Day',
    content: [
      'Integrity is not a one time decision — it is a daily practice. It is built in the small moments, the quiet choices, the times when nobody is watching but you still do the right thing.',
      '1. Keep your word. If you say you will do something, do it. Nothing builds trust faster than being someone people can count on.',
      '2. Own your mistakes. When you are wrong, say so. Accountability is a sign of strength, not weakness.',
      '3. Treat everyone with respect. The way you treat people who can do nothing for you says everything about your character.',
      '4. Do the right thing even when it is hard. Integrity is tested most in difficult moments. That is where your legacy is built.',
      '5. Be consistent. Who you are in public should match who you are in private. Consistency is the foundation of trust.',
    ],
  },
  'how-to-style-your-legacy-code-tee': {
    date: 'March 10, 2024',
    category: 'STYLE',
    title: 'How to Style Your Legacy Code Tee',
    content: [
      'Your Legacy Code tee is more than just a shirt — it is a statement. Here is how to wear it in a way that makes that statement loud and clear.',
      'Keep it simple. A Legacy Code tee paired with clean dark jeans and white sneakers is a classic look that never fails. Let the message on your tee speak for itself.',
      'Layer it up. Throw an open button-down shirt or a bomber jacket over your tee for a more polished look that still keeps the message visible.',
      'Dress it up. Pair your tee with chinos and clean leather shoes for a smart casual look that works for almost any occasion.',
      'Own it with confidence. The best way to style any Legacy Code tee is to wear it with the confidence of someone who actually lives by the values on it. That is what makes it truly stand out.',
    ],
  },
  'why-we-started-legacy-code-apparel': {
    date: 'March 20, 2024',
    category: 'BRAND STORY',
    title: 'Why We Started Legacy Code Apparel',
    content: [
      'It started with a simple question — in a world that often rewards compromise, where are the people who still choose integrity?',
      'Legacy Code Apparel was founded in 2024 because we believed those people exist. They are out there every day doing the right thing, standing firm in their values, leading with character even when it costs them something.',
      'We wanted to create something for those people. Not just a t-shirt with words on it, but a dedication to the values that define character and shape purpose.',
      'The LC logo represents our initials, but it also represents something bigger — a mark of commitment to excellence, ethical living, and a tradition of honor that never goes out of style.',
      'When you wear a Legacy Code tee, you are not just wearing a shirt. You are making a statement about who you are and the legacy you are leaving behind. That is what this brand is all about.',
    ],
  },
  'what-does-it-mean-to-stand-on-it': {
    date: 'March 25, 2024',
    category: 'CHARACTER',
    title: 'What Does It Mean to Stand On It?',
    content: [
      'Standing on it is not a phrase — it is a posture. It is the decision to plant your feet firmly on what you believe and refuse to move, no matter what comes against you.',
      'In a world that constantly pressures you to adjust, compromise, and soften your position, standing on it is an act of courage. It means that when the crowd goes left, you go right — not to be difficult, but because you know what you stand for.',
      'Standing on it means your values are not negotiable. It means your word does not change based on who is in the room. It means you are the same person in private that you are in public.',
      'It is easy to stand on something when it costs you nothing. The real test comes when standing on it costs you something — a relationship, an opportunity, a moment of comfort. That is when you find out if what you believe is truly what you stand on.',
      'Legacy Code Apparel was built for people who have made that decision. People who have looked pressure in the face and said — I know what I stand for, and I am not moving.',
      'When you wear Stand On It, you are not just wearing a tee. You are making a declaration. You are telling the world that your foundation is solid, your values are real, and your integrity is not for sale.',
      'That is what it means to stand on it.',
    ],
  },
  'the-difference-between-right-and-easy': {
    date: 'March 27, 2024',
    category: 'CHARACTER',
    title: 'The Difference Between Right and Easy',
    content: [
      'There is a fork in the road that every person faces at some point. On one side is the path that is right. On the other is the path that is easy. They rarely lead to the same place.',
      'The easy path is tempting because it requires less of you. It asks you to look the other way, to go along, to stay quiet when you should speak up. It promises comfort in the short term but costs you something far more valuable over time — your integrity.',
      'The right path is harder. It asks you to speak when silence is safer. To refuse when everyone else is saying yes. To hold your standard when lowering it would make life much simpler.',
      'But here is what most people discover too late — the right path, though harder, leads somewhere worth going. It builds something that cannot be taken from you. It builds character.',
      'Every time you choose right over easy you become someone who can be trusted. Someone whose word means something. Someone who leaves a legacy worth leaving.',
      'Legacy Code Apparel exists for the people who already know this. Who have already chosen the harder path and would choose it again. Because they understand that what you build through doing right will outlast anything you gain by taking the easy way out.',
      'Choose right. Every time. Even when — especially when — easy is standing right beside it.',
    ],
  },
  'how-to-outwork-self-doubt': {
    date: 'March 29, 2024',
    category: 'MINDSET',
    title: 'How to Outwork Self Doubt',
    content: [
      'Self doubt is not your enemy. It is a signal. It means you care about what you are doing. It means the stakes feel real. The problem is not that self doubt shows up — the problem is when we let it make decisions for us.',
      'Every person who has ever built something worth building has faced self doubt. The difference between those who succeed and those who do not is not the absence of doubt — it is what they do while the doubt is present.',
      'Show up anyway. Self doubt feeds on inaction. The longer you wait, the louder it gets. The moment you take one step forward, its power begins to shrink. You do not have to feel confident to act. You just have to act.',
      'Focus on what you can control. Self doubt loves to pull your attention toward everything that could go wrong. Redirect it. What can you do today? What is the next right step? Stay in your lane and stay in motion.',
      'Let your work speak. Self doubt says you are not ready, not good enough, not capable. The only real answer to that is evidence. Build it. Create it. Show up consistently and let the work accumulate until the evidence becomes undeniable.',
      'Remember why you started. Behind every goal is a reason that matters. When doubt gets loud, go back to that reason. Let it be louder than the doubt.',
      'At Legacy Code Apparel we believe that doubt is not a stop sign — it is a test. And the way you pass that test is simple. You outwork it. Every single day.',
    ],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return (
      <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1 style={{ fontSize: '32px', color: '#0a1931' }}>Post not found</h1>
          <a href="/blog" style={{ color: '#c9a84c' }}>Back to Blog</a>
        </div>
      </main>
    );
  }
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>{post.category} — {post.date}</p>
        <h1 style={{ fontSize: '42px', fontWeight: '400', margin: '0 auto', letterSpacing: '-1px', maxWidth: '700px', lineHeight: '1.3' }}>{post.title}</h1>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>
        {post.content.map((para, index) => (
          <p key={index} style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', marginBottom: '24px' }}>{para}</p>
        ))}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #e5e5e5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: '13px', letterSpacing: '2px', color: '#0a1931', textDecoration: 'none', borderBottom: '1px solid #c9a84c', paddingBottom: '2px' }}>BACK TO BLOG</a>
          <a href="/" style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: '#0a1931', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px', border: '2px solid #c9a84c' }}>SHOP NOW</a>
        </div>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}
