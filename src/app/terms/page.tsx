import Navbar from '../components/Navbar';

export default function TermsPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>LEGAL</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Terms of Service</h1>
        <p style={{ fontSize: '14px', color: '#aaa', marginTop: '16px' }}>Last updated: March 2024</p>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>AGREEMENT TO TERMS</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>By accessing and using legacycodeapparel.store you agree to be bound by these Terms of Service. If you do not agree to these terms please do not use our site.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>PRODUCTS AND ORDERS</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>We reserve the right to refuse service to anyone for any reason at any time. We reserve the right to limit quantities of any products or services. All product descriptions and prices are subject to change without notice.</p>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>We reserve the right to cancel any order at our discretion. If we cancel your order you will receive a full refund.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>PRICING AND PAYMENT</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>All prices are listed in US dollars. We accept all major credit and debit cards through Stripe. Payment must be received in full before your order is processed and shipped. We are not responsible for any fees charged by your bank or card issuer.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>SHIPPING</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>We ship within the United States only. Shipping times are estimates and are not guaranteed. We are not responsible for delays caused by the carrier, weather or other circumstances outside our control. Risk of loss and title for items purchased pass to you upon delivery to the carrier.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>RETURNS AND REFUNDS</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Returns and refunds are governed by our <a href='/refunds' style={{ color: '#0a1931' }}>Refund Policy</a> which is incorporated into these Terms of Service.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>INTELLECTUAL PROPERTY</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>All content on this site including text, graphics, logos, images and designs are the property of Legacy Code Apparel and are protected by applicable copyright and trademark laws. You may not reproduce, distribute or use any content without our express written permission.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>LIMITATION OF LIABILITY</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Legacy Code Apparel shall not be liable for any indirect, incidental, special or consequential damages arising from your use of our site or products. Our total liability to you for any claim arising from your purchase shall not exceed the amount you paid for the product.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>GOVERNING LAW</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Georgia, United States, without regard to its conflict of law provisions.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>CONTACT US</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>If you have any questions about these Terms of Service please contact us at <a href='mailto:support@legacycodeapparel.store' style={{ color: '#0a1931' }}>support@legacycodeapparel.store</a></p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href='/' style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#0a1931', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px' }}>BACK TO SHOP</a>
        </div>

      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2025 LEGACY CODE APPAREL — ALL RIGHTS RESERVED</footer>
    </main>
  );
}