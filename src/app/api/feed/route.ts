export async function GET() {
  const products = [
    { id: 'no-cap', title: 'No Cap Hoodie', description: "What's real stays real, every time you pull it up. No gimmicks, no shortcuts, no dressing things up — just straight talk and solid fabric.", price: '71.00', link: 'https://legacycodeapparel.store/#shop', image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788704201/ChatGPT_Image_Sep_6_2026_at_10_13_58_AM_sl2yop.png' },
    { id: 'consistent-by-choice', title: 'Consistent by Choice Sweatshirt', description: "Showing up isn't luck. It's a decision you make again, every single day, even when nobody's watching. Heavyweight fleece.", price: '61.00', link: 'https://legacycodeapparel.store/#shop', image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638967/ChatGPT_Image_Sep_5_2026_at_04_09_02_PM_adky9z.png' },
    { id: 'nothing-to-hide', title: 'Nothing to Hide Crop', description: 'This crop is for showing up as you actually are — no performance, no apology. Being seen isn\'t a risk when you already like who you are.', price: '53.00', link: 'https://legacycodeapparel.store/#shop', image: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1788638035/word-is-bond-crop-product_wwuorv.png' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Legacy Code Apparel</title>
    <link>https://legacycodeapparel.store</link>
    <description>Integrity Pieces with Meaning</description>
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
