import Navbar from '../components/Navbar';

const faqs = [
  { question: 'What is your return policy?', answer: 'We accept returns within 30 days of purchase. Items must be unworn, unwashed and in original condition. To start a return email us at support@legacycodeapparel.com with your order number.' },
  { question: 'How long does shipping take?', answer: 'Standard shipping takes 5-7 business days. You will receive a tracking number via email once your order ships.' },
  { question: 'Do you offer free shipping?', answer: 'Yes! We offer free shipping on all orders over $50. Orders under $50 ship for $5.01.' },
  { question: 'What sizes do you offer?', answer: 'We offer S, M, L, XL, 2XL and 3XL on all styles.' },
  { question: 'What are your tees made of?', answer: 'Our tees are made from 100% premium cotton for maximum comfort and durability.' },
  { question: 'Can I exchange for a different size?', answer: 'Yes! Contact us at support@legacycodeapparel.com within 30 days and we will get you the right size.' },
  { question: 'How do I track my order?', answer: 'Once your order ships you will receive a confirmation email with a tracking number.' },
  { question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards through our secure Stripe checkout.' },
  { question: 'Do you ship internationally?', answer: 'Currently we ship within the United States only. International shipping is coming soon!' },
  { question: 'What does Legacy Code mean?', answer: 'Legacy Code means having bold integrity — being a good person and never being ashamed to stand up and do the right thing. It is your character, your values, your story worn with pride.' },
];

export default function FAQPage() {
  return (
    <main style={{ fontFamily: 'Georgia, serif', backgroundColor: '#FAFAFA', minHeight: '100vh', color: '#111' }}>
      <Navbar />
      <section style={{ textAlign: 'center', padding: '80px 20px 60px', backgroundColor: '#0a1931', color: '#fff' }}>
        <p style={{ fontSize: '12px', letterSpacing: '4px', marginBottom: '16px', color: '#c9a84c' }}>HELP CENTER</p>
        <h1 style={{ fontSize: '52px', fontWeight: '400', margin: '0', letterSpacing: '-1px' }}>FAQ & Returns</h1>
      </section>
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 20px' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ borderBottom: '1px solid #e5e5e5', padding: '24px 0' }}>
            <h3 style={{ fontSize: '17px', fontWeight: '600', margin: '0 0 12px', color: '#0a1931' }}>{faq.question}</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', margin: 0 }}>{faq.answer}</p>
          </div>
        ))}
        <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#0a1931', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#c9a84c', marginBottom: '8px', letterSpacing: '2px' }}>STILL HAVE QUESTIONS?</p>
          <p style={{ fontSize: '18px', color: '#fff', margin: '0 0 20px' }}>We are here to help!</p>
          <a href="mailto:support@legacycodeapparel.com" style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>CONTACT US</a>
        </div>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}