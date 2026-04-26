content = open('src/app/layout.tsx').read()
old = """export const metadata: Metadata = {
  title: 'Legacy Code Apparel | Integrity Tees with Meaning',
  description: 'Legacy Code Apparel — wear your values, leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose. Free shipping over $50.',
  keywords: 'integrity apparel, legacy tees, values based clothing, honor tshirts, moral principles apparel, legacy code apparel',
  openGraph: {
    title: 'Legacy Code Apparel | Integrity Tees with Meaning',
    description: 'Wear your values. Leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose.',
    url: 'https://legacycodeapparel.store',
    siteName: 'Legacy Code Apparel',
    images: [{ url: 'https://legacycodeapparel.store/images/og-image.jpg', width: 800, height: 800, alt: 'Legacy Code Apparel' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Code Apparel | Integrity Tees with Meaning',
    description: 'Wear your values. Leave a legacy. Shop integrity tees dedicated to honor, character and moral purpose.',
    images: ['https://legacycodeapparel.store/images/og-image.jpg'],
  },
};"""
new = """export const metadata: Metadata = {
  title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
  description: 'Shop premium statement tees from Legacy Code Apparel. Minimalist graphic tees for people who lead with character. Value-driven apparel made in Atlanta. Free shipping over $50.',
  keywords: 'integrity apparel, legacy tees, values based clothing, statement tees, minimalist graphic tees, premium tshirts, value driven apparel, atlanta apparel, character tees, legacy code apparel',
  openGraph: {
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity. Free shipping over $50.',
    url: 'https://legacycodeapparel.store',
    siteName: 'Legacy Code Apparel',
    images: [{ url: 'https://res.cloudinary.com/dozyoetnr/image/upload/v1775277592/IMG_7062_pz5yll.jpg', width: 1200, height: 630, alt: 'Legacy Code Apparel — Wear Your Values' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Code Apparel | Wear Your Values | Shop Now!',
    description: 'Premium statement tees for people who lead with character. Shop minimalist graphic tees rooted in integrity.',
    images: ['https://res.cloudinary.com/dozyoetnr/image/upload/v1775277592/IMG_7062_pz5yll.jpg'],
  },
};"""
content = content.replace(old, new)
open('src/app/layout.tsx', 'w').write(content)
print('Done!')
