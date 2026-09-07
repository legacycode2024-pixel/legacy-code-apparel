with open('src/app/page.tsx', 'r') as f:
    content = f.read()

old_footer = """      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0a1931', color: '#c9a84c', fontSize: '13px', letterSpacing: '1px', borderTop: '2px solid #c9a84c' }}>© 2024 LEGACY CODE APPAREL</footer>
    </main>
  );
}"""

new_footer = """    </main>
  );
}"""

if old_footer in content:
    content = content.replace(old_footer, new_footer)
    with open('src/app/page.tsx', 'w') as f:
        f.write(content)
    print("Success: duplicate footer removed")
else:
    print("Could not find exact match — no changes made")
