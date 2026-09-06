with open('src/app/about/page.tsx', 'r') as f:
    content = f.read()

old_text = """          From Atlanta to the streets of New York City — Legacy Code Apparel hit Times Square in 2026. This is what happens when you stand on your values and refuse to quit.
        </p>"""

new_text = """          From Atlanta to the streets of New York City — Legacy Code Apparel hit Times Square in 2026. This is what happens when you stand on your values and refuse to quit.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.9', color: '#333', margin: '0 0 24px' }}>
          Legacy Code Apparel started as a tee brand out of Atlanta, then grew into something bigger — heavyweight hoodies, sweatshirts, and crops built the same way we started: on values, not trends.
        </p>"""

if old_text in content:
    content = content.replace(old_text, new_text)
    with open('src/app/about/page.tsx', 'w') as f:
        f.write(content)
    print("Success: origin story added")
else:
    print("Could not find exact match — no changes made")
