# Portfolio Builder
import os

def write_f(path, content):
    d = os.path.dirname(path)
    if d:
        os.makedirs(d, exist_ok=True)
    with open(path, 'w', encoding='utf-8') as out:
        out.write(content.strip() + '\n')
    print('Generated:', path)

print('Generator script initialized')
