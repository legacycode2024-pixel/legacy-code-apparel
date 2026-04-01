import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />

      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#111', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#aaa' }}>EST. 2025</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Our Story</h1>
      </section>

      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#999', marginBottom: '16px' }}>THE BEGINNING</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', margin: 0 }}>
            Legacy Code Apparel was founded in 2025, rooted in one question — in a world that rewards compromise, where are the people who still choose integrity? The ones who stand firm in their values and do the right thing not because it's easy, but because it defines who they are.
          </p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '48px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#999', marginBottom: '16px' }}>WHAT LEGACY CODE MEANS</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', margin: '0 0 24px' }}>
            Legacy Code is more than a name — it's a standard. It represents bold integrity, the courage to be a good person in every room you walk into, and the conviction to never be ashamed of doing what's right.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', margin: 0 }}>
            It's your character, your values, your story — worn with pride.
          </p>
        </div>

        <div style={{ backgroundColor: '#111', color: '#fff', padding: '40px', borderRadius: '16px', marginBottom: '48px', textAlign: 'center' }}>
          <p style={{ fontSize: '22px', lineHeight: '1.8', fontStyle: 'italic', margin: 0, color: '#eee' }}>
            "This isn't just a t-shirt with words on it. It's a dedication to the values that define character, shape purpose, and leave something worth remembering."
          </p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '48px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#999', marginBottom: '16px' }}>WHAT YOU'RE WEARING</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', margin: 0 }}>
            Every Legacy Code tee is a statement of commitment — to excellence, to ethical living, and to a tradition of honor that never goes out of style. The LC mark, our founder's initials, is more than a logo. It's a promise.
          </p>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <a href="/" style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#111', color: '#fff', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px', fontFamily: 'Arial, sans-serif' }}>SHOP THE COLLECTION</a>
        </div>

      </section>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#111', color: '#666', fontSize: '13px', letterSpacing: '1px' }}>© 2025 LEGACY CODE APPAREL</footer>
    </main>
  );
}
