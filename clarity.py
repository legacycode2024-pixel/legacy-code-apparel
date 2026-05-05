content = open('src/app/layout.tsx').read()
old = """export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>"""
new = """export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wmigaeqvyf");
        ` }} />
      </head>
      <body style={{ margin: 0, padding: 0 }}>"""
content = content.replace(old, new)
open('src/app/layout.tsx', 'w').write(content)
print('Done!')
