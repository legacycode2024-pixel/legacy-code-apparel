import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    "type InventoryRow = {\n  id: number;\n  product: string;\n  size: string;\n  color: string;\n  price: number;\n  sold: boolean;\n};",
    "type InventoryRow = {\n  id: number;\n  product: string;\n  size: string;\n  color: string;\n  price: number;\n  sold: boolean;\n  design: string;\n};"
)

content = content.replace(
    "  const productRows = inventory.filter(r => r.product === product.name);\n  const availableColors",
    "  const productRows = inventory.filter(r => r.product === product.name);\n  const currentDesign = productRows.find(r => !r.sold)?.design || '';\n  const availableColors"
)

content = content.replace(
    '<p style={{ margin: \'0 0 12px\', fontSize: \'13px\', color: \'#666\', lineHeight: \'1.7\', fontStyle: \'italic\' }}>{product.tagline}</p>',
    '<p style={{ margin: \'0 0 12px\', fontSize: \'13px\', color: \'#666\', lineHeight: \'1.7\', fontStyle: \'italic\' }}>{product.tagline}</p>\n        {currentDesign && (\n          <p style={{ margin: \'0 0 12px\', fontSize: \'11px\', fontWeight: 700, letterSpacing: \'1px\', color: product.accent }}>DESIGN: {currentDesign.toUpperCase()}</p>\n        )}'
)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)

print("Done")
