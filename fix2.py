import os
import glob

files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True)
for f in files:
    content = open(f).read()
    new = content.replace('over $50', 'over $45').replace('over $50.', 'over $45.')
    if new != content:
        open(f, 'w').write(new)
        print(f'Updated: {f}')
print('Done!')
