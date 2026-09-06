import Navbar from '../components/Navbar';

export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>LEGAL</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '14px', color: '#aaa', marginTop: '16px' }}>Last updated: March 2024</p>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>OVERVIEW</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Legacy Code Apparel is committed to protecting your privacy. This policy explains how we collect, use and protect your personal information when you visit legacycodeapparel.store or make a purchase from us.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>INFORMATION WE COLLECT</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>We collect information you provide directly to us, including:</p>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li>Name and email address when you sign up for our newsletter</li>
            <li>Shipping address and contact information when you place an order</li>
            <li>Payment information processed securely through Stripe</li>
            <li>Communications you send us via email</li>
          </ul>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginTop: '16px' }}>We also automatically collect certain information when you visit our site, including your IP address, browser type, pages visited and time spent on our site via Google Analytics.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>HOW WE USE YOUR INFORMATION</h2>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li>To process and fulfill your orders</li>
            <li>To send order confirmations and shipping updates</li>
            <li>To send newsletter emails if you have subscribed</li>
            <li>To improve our website and customer experience</li>
            <li>To respond to your questions and support requests</li>
          </ul>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>PAYMENT PROCESSING</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>All payments are processed securely through Stripe. We do not store your credit card information on our servers. Stripe is PCI compliant and uses industry-standard encryption to protect your payment data. You can read Stripe privacy policy at stripe.com/privacy.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>EMAIL MARKETING</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>If you subscribe to our newsletter, your email address will be stored and managed through Mailchimp. You can unsubscribe at any time by clicking the unsubscribe link in any email we send. We will never sell or share your email address with third parties.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>COOKIES</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Our website uses cookies to improve your browsing experience and analyze site traffic through Google Analytics. You can disable cookies in your browser settings, though this may affect some functionality of the site.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>YOUR RIGHTS</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>You have the right to access, update or delete your personal information at any time. To exercise these rights, contact us at support@legacycodeapparel.store.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>CONTACT US</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>If you have any questions about this privacy policy, please contact us at:</p>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Legacy Code Apparel<br />Georgia, United States<br /><a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931' }}>support@legacycodeapparel.store</a></p>
        </div>

      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL — ALL RIGHTS RESERVED</footer>
    </main>
  );
}