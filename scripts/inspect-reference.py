from html.parser import HTMLParser
from pathlib import Path
from collections import Counter
class Node:
 def __init__(self,tag,attrs,start,parent):self.tag=tag;self.attrs=dict(attrs);self.start=start;self.end=None;self.children=[];self.parent=parent
class Parser(HTMLParser):
 def __init__(self,source):
  super().__init__(convert_charrefs=False);self.source=source;self.offsets=[0];self.nodes=[];self.stack=[]
  for line in source.splitlines(keepends=True):self.offsets.append(self.offsets[-1]+len(line))
  self.feed(source)
 def pos(self):l,c=self.getpos();return self.offsets[l-1]+c
 def handle_starttag(self,t,a):
  n=Node(t,a,self.pos(),self.stack[-1] if self.stack else None);self.nodes.append(n)
  if n.parent:n.parent.children.append(n)
  if t in ['img','br','hr','input','meta','link','source','area','base','embed','param','track','wbr']:n.end=self.pos()+len(self.get_starttag_text())
  else:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i].tag==t:
    self.stack[i].end=self.source.index('>',self.pos())+1;self.stack=self.stack[:i];break
 def text(self,n):return self.source[n.start:n.end]
if __name__=='__main__':
 c=Counter()
 for p in Path('Reference/Lamba').glob('*.html'):
  q=Parser(p.read_text());w=next((n for n in q.nodes if 'wrapper' in n.attrs.get('class','').split()),None)
  if not w:print('NO WRAPPER',p)
  else:
   for n in w.children:c[(n.tag,n.attrs.get('class',''),q.text(n))]+=1
 for (t,cl,s),count in c.items():
  if count>1:print(count,t,cl,len(s))
 print('unique chunks',len(c))
