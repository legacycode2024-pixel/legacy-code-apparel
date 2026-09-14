# 1. Add pixel to layout.tsx
with open('src/app/layout.tsx', 'r') as f:
    layout = f.read()

layout = layout.replace(
    "import type { Metadata } from 'next';",
    "import type { Metadata } from 'next';\nimport Script from 'next/script';"
)

layout = layout.replace(
    "      <body style={{ margin: 0, padding: 0 }}>",
    "      <body style={{ margin: 0, padding: 0 }}>\n        <Script id=\"opinly-pixel\" strategy=\"afterInteractive\" src=\"https://static.opinly.ai/p.js\" data-key=\"pk-oHN002lAsfur_zTeYjrnj_4ZvKe4z9h5BaUDHkF\" />"
)

with open('src/app/layout.tsx', 'w') as f:
    f.write(layout)

# 2. Checkout route: accept anonId, store in Stripe session metadata
with open('src/app/api/checkout/route.ts', 'r') as f:
    checkout = f.read()

checkout = checkout.replace(
    "const { items } = await req.json();",
    "const { items, anonId } = await req.json();"
)

checkout = checkout.replace(
    "      metadata: {\n        items: itemsSummary,\n      },",
    "      metadata: {\n        items: itemsSummary,\n        anonId: anonId || '',\n      },"
)

with open('src/app/api/checkout/route.ts', 'w') as f:
    f.write(checkout)

# 3. Cart page: send window.opinly.anonId with the checkout request
with open('src/app/cart/page.tsx', 'r') as f:
    cart = f.read()

cart = cart.replace(
    "      body: JSON.stringify({ items: cart }),",
    "      body: JSON.stringify({ items: cart, anonId: (window as any).opinly?.anonId }),"
)

with open('src/app/cart/page.tsx', 'w') as f:
    f.write(cart)

# 4. Webhook: track purchase server-side
with open('src/app/api/webhook/route.ts', 'r') as f:
    webhook = f.read()

webhook = webhook.replace(
    "import { supabase } from '../../lib/supabase';",
    "import { supabase } from '../../lib/supabase';\nimport { createOpinlyClient } from '@opinly/backend';"
)

webhook = webhook.replace(
    "    for (const item of parsedItems) {",
    "    const opinly = createOpinlyClient();\n    await opinly.track(\n      'purchase',\n      { value: session.amount_total / 100, currency: 'USD' },\n      { externalEventId: orderId, anonId: session.metadata?.anonId || undefined, email: customerEmail }\n    );\n\n    for (const item of parsedItems) {"
)

with open('src/app/api/webhook/route.ts', 'w') as f:
    f.write(webhook)

# 5. Add add_to_cart tracking in page.tsx
with open('src/app/page.tsx', 'r') as f:
    page = f.read()

page = page.replace(
    "    addToCart({ name: `${product.name} (${selectedColor})`, price: product.price, size: selectedSize, quantity: 1, image: product.image });",
    "    addToCart({ name: `${product.name} (${selectedColor})`, price: product.price, size: selectedSize, quantity: 1, image: product.image });\n    (window as any).opinly?.track('add_to_cart', { value: product.price, currency: 'USD', items: [product.name] });"
)

with open('src/app/page.tsx', 'w') as f:
    f.write(page)

print("Success: Opinly pixel, purchase tracking, and add_to_cart tracking all wired in")
