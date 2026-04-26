content = open('next.config.ts').read()
old = """  images: {
    domains: ['res.cloudinary.com'],
  },"""
new = """  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },"""
content = content.replace(old, new)
open('next.config.ts', 'w').write(content)
print('Done!')
