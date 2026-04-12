export async function GET() {
  const products = [
    { id: 'stand-on-it', title: 'Stand On It Tee', description: 'For the ones who never fold. Stand on your word, your principles, your convictions no matter the pressure.', price: '30.00', link: 'https://legacycodeapparel.store/products/stand-on-it', image: 'https://legacycodeapparel.store/images/standonit-back.png' },
    { id: 'actions-over-applause', title: 'Actions Over Applause Tee', description: 'You do not need a crowd to validate what you do. Let your actions speak.', price: '30.00', link: 'https://legacycodeapparel.store/products/actions-over-applause', image: 'https://legacycodeapparel.store/images/actions-front.png' },
    { id: 'principles-over-popularity', title: 'Principles Over Popularity Tee', description: 'Trends fade. Principles last. Never trade your values for validation.', price: '30.00', link: 'https://legacycodeapparel.store/products/principles-over-popularity', image: 'https://legacycodeapparel.store/images/principles-front.png' },
    { id: 'right-over-easy', title: 'Right Over Easy Tee', description: 'The easy road and the right road are rarely the same. Choose right every time.', price: '30.00', link: 'https://legacycodeapparel.store/products/right-over-easy', image: 'https://legacycodeapparel.store/images/right-front.png' },
    { id: 'word-is-bond', title: 'Word Is Bond Tee', description: 'No signature required. Your word is your contract.', price: '30.00', link: 'https://legacycodeapparel.store/products/word-is-bond', image: 'https://legacycodeapparel.store/images/word-front.png' },
    { id: 'i-couldve-but-i-didnt', title: 'I Couldve But I Didnt Tee', description: 'Having the power to do something and choosing not to is real strength.', price: '30.00', link: 'https://legacycodeapparel.store/products/i-couldve-but-i-didnt', image: 'https://legacycodeapparel.store/images/couldve-front.png' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Legacy Code Apparel</title>
    <link>https://legacycodeapparel.store</link>
    <description>Integrity Tees with Meaning</description>
    ${products.map(p => `
    <item>
      <g:id>${p.id}</g:id>
      <g:title>${p.title}</g:title>
      <g:description>${p.description}</g:description>
      <g:link>${p.link}</g:link>
      <g:image_link>${p.image}</g:image_link>
      <g:price>${p.price} USD</g:price>
      <g:availability>in stock</g:availability>
      <g:condition>new</g:condition>
      <g:brand>Legacy Code Apparel</g:brand>
      <g:google_product_category>Apparel and Accessories</g:google_product_category>
    </item>`).join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}