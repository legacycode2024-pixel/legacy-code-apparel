content = open('src/proxy.ts').read()
content = content.replace('export function middleware(req: NextRequest)', 'export function proxy(req: NextRequest)')
open('src/proxy.ts', 'w').write(content)
print('Done!')
