content = open('src/app/page.tsx').read()
old = '''      <video ref={vid1Ref} muted playsInline onEnded={handleVid1End} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1, transition: 'opacity 1.5s' }}>
        <source src="/images/standonit-video.mov" type="video/mp4" />
      </video>
      <video ref={vid2Ref} muted playsInline onEnded={handleVid2End} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0, transition: 'opacity 1.5s' }}>
        <source src="/images/variety-tees.mov" type="video/mp4" />
      </video>'''
new = '''      <video ref={vid1Ref} muted playsInline loop style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 1, transition: 'opacity 1.5s' }}>
        <source src="/images/variety-tees.mov" type="video/mp4" />
      </video>'''
content = content.replace(old, new)
open('src/app/page.tsx', 'w').write(content)
print('Done!')
