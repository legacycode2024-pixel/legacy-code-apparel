new_content = """import Navbar from '../components/Navbar';

const faqGroups = [
  {
    category: 'SHIPPING',
    faqs: [
      { question: 'How long does shipping take?', answer: 'Standard shipping takes 3-5 business days. You will receive a tracking number via email once your order ships.' },
      { question: 'Do you offer free shipping?', answer: 'Yes! We offer free shipping on all orders over $50. Orders under $50 ship for $5.01.' },
      { question: 'Do you ship internationally?', answer: 'Currently we ship within the United States only. International shipping is coming soon!' },
      { question: 'How do I track my order?', answer: 'Once your order ships you will receive a confirmation email with a tracking number.' },
    ],
  },
  {
    category: 'RETURNS & EXCHANGES',
    faqs: [
      { question: 'What is your return policy?', answer: 'We accept returns within 14 days of delivery. Items must be unworn, unwashed and in original condition. Email us at support@legacycodeapparel.store with your order number to start a return.' },
      { question: 'Can I exchange for a different size?', answer: 'Yes! Contact us at support@legacycodeapparel.store within 14 days and we will get you the right size.' },
    ],
  },
  {
    category: 'SIZING & FIT',
    faqs: [
      { question: 'What sizes do you offer?', answer: 'We offer S, M, L, XL, 2XL and 3XL on all styles.' },
      { question: 'How do the tees fit?', answer: 'Our tees have a relaxed unisex fit and are true to size. Size up if you prefer an oversized look.' },
      { question: 'What are your tees made of?', answer: 'Anvil by Gildan combed ring-spun cotton, 4.5 oz. Soft, lightweight and breathable.' },
    ],
  },
  {
    category: 'ORDERS & PAYMENT',
    faqs: [
      { question: 'What payment methods do you accept?', answer: 'We accept all major credit and debit cards through our secure Stripe checkout.' },
      { question: 'Can I cancel or modify my order?', answer: 'Contact us immediately at support@legacycodeapparel.store. We will do our best to make changes before your order ships.' },
    ],
  },
  {
    category: 'ABOUT THE BRAND',
    faqs: [
      { question: 'What does Legacy Code mean?', answer: 'Legacy Code means having bold integrity — being a good person and never being ashamed to stand up and do the right thing. It is your character, your values, your story worn with pride.' },
      { question: 'Where are you based?', answer: 'We are based in Atlanta, GA. Every order is fulfilled locally with care.' },
    ],
  },
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
        {faqGroups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '11px', letterSpacing: '4px', fontFamily: 'Arial, sans-serif', fontWeight: '700', color: '#c9a84c', marginBottom: '24px', borderBottom: '2px solid #c9a84c', paddingBottom: '8px' }}>{group.category}</h2>
            {group.faqs.map((faq, fi) => (
              <div key={fi} style={{ borderBottom: '1px solid #e5e5e5', padding: '20px 0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 10px', color: '#0a1931' }}>{faq.question}</h3>
                <p style={{ fontSize: '15px', lineHeight: '1.8', color: '#444', margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        ))}
        <div style={{ marginTop: '48px', padding: '32px', backgroundColor: '#0a1931', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#c9a84c', marginBottom: '8px', letterSpacing: '2px' }}>STILL HAVE QUESTIONS?</p>
          <p style={{ fontSize: '18px', color: '#fff', margin: '0 0 20px' }}>We are here to help!</p>
          <a href="/contact" style={{ display: 'inline-block', padding: '14px 36px', border: '2px solid #c9a84c', color: '#c9a84c', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px' }}>CONTACT US</a>
        </div>
      </section>
      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2025 LEGACY CODE APPAREL</footer>
    </main>
  );
}
"""
open('src/app/faq/page.tsx', 'w').write(new_content)
print('Done!')
