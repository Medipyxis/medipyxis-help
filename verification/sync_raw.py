# Rewrites raw/<page>.md from the live <page>/index.html body, keeping the
# frontmatter and bumping last_reviewed.
# Usage: python3 verification/sync_raw.py <page>/index.html raw/<page>.md "<H1 or empty>" YYYY-MM-DD
import re, html, sys
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s): super().__init__(convert_charrefs=True); s.blocks=[]; s.buf=None; s.depth=0; s.href=[]
    def start(s): s.buf=[]
    def flush(s,prefix):
        if s.buf is not None:
            t=''.join(s.buf).strip()
            if t: s.blocks.append(('> ' if getattr(s,'quote',False) else '')+prefix+t)
        s.buf=None
    def handle_starttag(s,tag,a):
        a=dict(a)
        if tag in ('h2','h3','h4'): s.flush(s.cur()); s.kind='#'*int(tag[1])+' '; s.start()
        elif tag=='table': s.table=[]
        elif tag=='tr' and getattr(s,'table',None) is not None: s.table.append([])
        elif tag in ('td','th') and getattr(s,'table',None) is not None: s.start()
        elif tag=='p': s.kind=''; s.start()
        elif tag in ('ul','ol'):
            if s.buf is not None: s.flush(s.cur())
            s.depth+=1
            s.lists=getattr(s,'lists',[])+[[tag,0]]
        elif tag=='blockquote': s.quote=True
        elif tag=='li':
            s.kind=None; s.start()
            if getattr(s,'lists',None): s.lists[-1][1]+=1
        elif tag=='hr': s.blocks.append('---')
        elif tag=='strong': s.buf is not None and s.buf.append('**')
        elif tag=='em': s.buf is not None and s.buf.append('_')
        elif tag=='code': s.buf is not None and s.buf.append('`')
        elif tag=='a': s.href.append(a.get('href','')); s.buf is not None and s.buf.append('[')
    def bullet(s):
        l=getattr(s,'lists',None)
        mark=f"{l[-1][1]}. " if l and l[-1][0]=='ol' else '- '
        return '  '*(s.depth-1)+mark
    def cur(s): return s.bullet() if s.kind is None else s.kind
    def handle_endtag(s,tag):
        if tag in('h2','h3','h4','p') and getattr(s,'table',None) is None: s.flush(s.kind)
        elif tag in ('td','th') and getattr(s,'table',None) is not None:
            s.table[-1].append(''.join(s.buf or []).strip().replace('|','\\|')); s.buf=None
        elif tag=='table' and getattr(s,'table',None) is not None:
            rows=[r for r in s.table if r]
            if rows:
                n=max(len(r) for r in rows)
                rows=[r+['']*(n-len(r)) for r in rows]
                md=['| '+' | '.join(rows[0])+' |','|'+'---|'*n]+['| '+' | '.join(r)+' |' for r in rows[1:]]
                s.blocks.append('\n'.join(md))
            s.table=None
        elif tag=='li': s.flush(s.bullet())
        elif tag in ('ul','ol'):
            s.depth-=1; s.blocks.append('')
            if getattr(s,'lists',None): s.lists.pop()
        elif tag=='blockquote': s.quote=False
        elif tag=='strong': s.buf is not None and s.buf.append('**')
        elif tag=='em': s.buf is not None and s.buf.append('_')
        elif tag=='code': s.buf is not None and s.buf.append('`')
        elif tag=='a':
            h=s.href.pop()
            s.buf is not None and s.buf.append(f']({h})')
    def handle_data(s,d):
        if s.buf is not None: s.buf.append(d.replace('\n',' '))
def conv(b):
    p=P(); p.feed(b)
    out=[]; prev_li=False
    for blk in p.blocks:
        is_li=bool(re.match(r'\s*(- |\d+\. )',blk))
        if blk=='' : prev_li=False; continue
        out.append(('\n' if is_li and prev_li else '\n\n')+blk)
        prev_li=is_li
    return ''.join(out).strip()+'\n'
src,raw,h1,date=sys.argv[1:5]
s=open(src).read()
b=re.search(r'<div class="article-meta">.*?</div>\n(.*?)<div class="related-block">',s,re.S).group(1)
fm=open(raw).read().split('---',2)
front=re.sub(r'last_reviewed: [0-9-]+',f'last_reviewed: {date}',fm[1])
open(raw,'w').write('---'+front+'---\n\n'+(f'# {h1}\n\n' if h1 else '')+conv(b))
