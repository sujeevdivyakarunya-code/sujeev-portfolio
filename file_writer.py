import sys, os, base64
if len(sys.argv) >= 3:
    path = base64.b64decode(sys.argv[1]).decode('utf-8')
    content = base64.b64decode(sys.argv[2]).decode('utf-8')
    if os.path.dirname(path):
        os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wardet {path}  written successfully')
