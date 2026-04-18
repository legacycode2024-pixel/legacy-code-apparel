import Navbar from '../components/Navbar';

export default function RefundsPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>LEGAL</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>Refund Policy</h1>
        <p style={{ fontSize: '14px', color: '#aaa', marginTop: '16px' }}>Last updated: March 2024</p>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>

        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>OUR COMMITMENT</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>At Legacy Code Apparel we stand behind every product we sell. If you are not completely satisfied with your purchase we are here to help.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>RETURNS</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>We accept returns within <strong>14 days</strong> of the delivery date. To be eligible for a return your item must be:</p>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px', marginBottom: '16px' }}>
            <li>Unworn and unwashed</li>
            <li>In the same condition you received it</li>
            <li>In the original packaging</li>
          </ul>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>To start a return email us at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931' }}>support@legacycodeapparel.store</a> with your order number and reason for return.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>RETURN SHIPPING</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>Return shipping costs depend on the reason for return:</p>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li><strong>Defective or wrong item received</strong> — Legacy Code Apparel will cover return shipping costs</li>
            <li><strong>Change of mind or wrong size ordered</strong> — Customer is responsible for return shipping costs</li>
          </ul>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>EXCHANGES</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>We gladly offer exchanges for a different size or style within 14 days of delivery. To request an exchange email us at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931' }}>support@legacycodeapparel.store</a> with your order number and the item you would like to exchange for.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>REFUND TIMELINE</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444', marginBottom: '16px' }}>Once we receive and inspect your return we will notify you by email. If approved your refund will be processed within <strong>7-10 business days</strong> back to your original payment method.</p>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>Please note that your bank or credit card company may take additional time to process and post the refund.</p>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>NON-RETURNABLE ITEMS</h2>
          <ul style={{ fontSize: '16px', lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
            <li>Items returned after 14 days of delivery</li>
            <li>Items that have been worn, washed or altered</li>
            <li>Sale items</li>
          </ul>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '40px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '400', color: '#c9a84c', marginBottom: '16px' }}>CONTACT US</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#444' }}>If you have any questions about our refund policy please contact us at <a href="mailto:support@legacycodeapparel.store" style={{ color: '#0a1931' }}>support@legacycodeapparel.store</a></p>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="/" style={{ display: 'inline-block', padding: '14px 36px', backgroundColor: '#0a1931', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px', borderRadius: '8px' }}>BACK TO SHOP</a>
        </div>

      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2025 LEGACY CODE APPAREL — ALL RIGHTS RESERVED</footer>
    </main>
  );
}