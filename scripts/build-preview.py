"""既存の画面・ロジックを変更せず、Chromeで直接開けるHTMLを生成する。"""
from pathlib import Path
import base64
import hashlib
import re

root = Path(__file__).resolve().parent.parent
html = (root / 'index.html').read_text()
css = (root / 'style.css').read_text()
script = '\n'.join((root / name).read_text() for name in ['config.js', 'quiz.js', 'app.js'])
def digest(text):
    return base64.b64encode(hashlib.sha256(text.encode()).digest()).decode()
policy = ("default-src 'none'; script-src 'sha256-" + digest(script) + "'; "
          "style-src 'sha256-" + digest(css) + "'; img-src data:; "
          "connect-src 'none'; form-action 'none'; base-uri 'none'")
html = re.sub(r'(<meta http-equiv="Content-Security-Policy" content=")[^"]*(">)', lambda m: m[1] + policy + m[2], html)
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>' + css + '</style>')
html = re.sub(r'<script defer src="(?:config|quiz|app)\.js"></script>', '', html)
html = html.replace('</body>', '<script>' + script + '</script></body>')
(root / 'onaka-biyori-preview.html').write_text(html)
print('Created onaka-biyori-preview.html')
