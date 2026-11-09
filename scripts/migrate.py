from pathlib import Path
from collections import defaultdict
import json,re,shutil,importlib.util
spec=importlib.util.spec_from_file_location('parse',Path(__file__).with_name('inspect-reference.py'));mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);Parser=mod.Parser
root=Path(__file__).resolve().parents[1];ref=root.parent/'Reference/Lamba'
(root/'public').mkdir(exist_ok=True);shutil.copytree(ref/'assets',root/'public/assets',dirs_exist_ok=True)
shutil.copytree(ref/'assets/scss',root/'src/styles/reference',dirs_exist_ok=True)
# Keep missing legacy asset URLs as browser URLs rather than inventing assets.
for p in (root/'src/styles/reference').rglob('*.scss'):
 s=p.read_text();s=s.replace('url(../images/', 'url(/assets/images/');p.write_text(s)
(root/'src/app').mkdir(parents=True,exist_ok=True)
base=json.loads((root.parent/'web/package.json').read_text());base['name']='mitictoon';base['scripts']={'start':'ng serve --host 127.0.0.1 --port 4300','build':'ng build','verify:reference':'node scripts/verify-reference.mjs'}
for k in list(base['dependencies']):
 if k.startswith('@fontsource'):del base['dependencies'][k]
base['devDependencies'].pop('tsx',None)
(root/'package.json').write_text(json.dumps(base,indent=2)+'\n')
shutil.copy(root.parent/'web/tsconfig.json',root/'tsconfig.json');shutil.copy(root.parent/'web/tsconfig.app.json',root/'tsconfig.app.json');shutil.copy(root.parent/'web/.gitignore',root/'.gitignore')
config={'version':1,'cli':{'analytics':False},'projects':{'mitictoon':{'projectType':'application','root':'','sourceRoot':'src','schematics':{'@schematics/angular:component':{'style':'scss'}},'architect':{'build':{'builder':'@angular/build:application','options':{'browser':'src/main.ts','tsConfig':'tsconfig.app.json','index':'src/index.html','assets':[{'glob':'**/*','input':'public'}],'styles':['src/styles.scss'],'scripts':['public/assets/js/jquery-3.5.1.min.js','public/assets/js/plugins.js','src/template-runtime.js']},'configurations':{'production':{'outputHashing':'all','budgets':[{'type':'initial','maximumWarning':'2MB','maximumError':'3MB'}]},'development':{'optimization':False,'sourceMap':True}},'defaultConfiguration':'production'},'serve':{'builder':'@angular/build:dev-server','configurations':{'development':{'buildTarget':'mitictoon:build:development'}},'defaultConfiguration':'development'}}}}}
(root/'angular.json').write_text(json.dumps(config,indent=2)+'\n')
head=(ref/'index.html').read_text().split('<head>')[1].split('</head>')[0];head=head.replace('<title>Lamba</title>','<title>Mitictoon</title>').replace('content="Lamba"','content="Mitictoon"');head=re.sub(r'\s*<link rel="stylesheet" href="assets/css/style.css" />','',head);head=head.replace('<meta charset=', '<base href="/">\n  <meta charset=',1)
(root/'src/index.html').write_text('<!doctype html>\n<html lang="en"><head>'+head+'</head><body><app-root></app-root></body></html>\n')
(root/'src/styles.scss').write_text('// Original SCSS import order preserves the template cascade.\n@use "./styles/reference/style";\n')

def cls(name):return ''.join(x.capitalize() for x in name.split('-'))+'Component'
def safe(s):return s.replace('@','&#64;').replace('{','&#123;').replace('}','&#125;')
def key(n):
 if n.tag=='header':return 'site-header'
 if n.tag=='footer':return 'site-footer'
 if n.attrs.get('id')=='scrollTopBtn':return 'scroll-top'
 c=n.attrs.get('class','').split()
 return (c[0] if c else n.tag).replace('_','-')
groups=defaultdict(list);pages=[]
for path in sorted(ref.glob('*.html')):
 source=path.read_text();parser=Parser(source);wrapper=next(n for n in parser.nodes if 'wrapper' in n.attrs.get('class','').split());body=next(n for n in parser.nodes if n.tag=='body');chunks=[]
 for n in wrapper.children:
  group=key(n);raw=parser.text(n);begin=raw.index('>')+1;end=raw.rfind('</');inner=raw[begin:end] if n.tag not in ['img','input','br'] else ''
  if group=='pricing':inner += '\n</div>' # Match the browser's implicit closure in the source.
  variants=groups[group]
  if inner not in variants:variants.append(inner)
  index=variants.index(inner);attr='mitictoon'+''.join(x.capitalize() for x in group.split('-'));opening=raw[:begin-1]+f' {attr} [variant]="{index}">';chunks.append((n,group,opening+raw[end:]))
 wraw=parser.text(wrapper);out=wraw;used=[]
 for n,g,replacement in reversed(chunks):
  a=n.start-wrapper.start;b=n.end-wrapper.start;out=out[:a]+replacement+out[b:];used.append(g)
 slug='home-main' if path.stem=='index' else ('not-found' if path.stem=='404' else path.stem)
 directory=root/'src/app/pages'/slug;directory.mkdir(parents=True,exist_ok=True)
 imports='\n'.join(f"import {{ {cls(g)} }} from '../../shared/{g}/{g}.component';" for g in sorted(set(used)))
 ts=f"import {{ Component }} from '@angular/core';\nimport {{ TemplatePage }} from '../../template-page';\n{imports}\n\n@Component({{\n  selector: 'app-{slug}',\n  imports: [{', '.join(cls(g) for g in sorted(set(used)))}],\n  templateUrl: './{slug}.component.html',\n  styleUrl: './{slug}.component.scss'\n}})\nexport class {cls(slug).replace("Component","PageComponent")} extends TemplatePage {{}}\n"
 (directory/f'{slug}.component.ts').write_text(ts);(directory/f'{slug}.component.html').write_text(safe(out));(directory/f'{slug}.component.scss').write_text('// Preserve the original wrapper and section geometry.\n:host { display: contents; }\n')
 pages.append({'source':path.name,'slug':slug,'bodyClass':body.attrs.get('class','')})
for group,variants in groups.items():
 directory=root/'src/app/shared'/group;directory.mkdir(parents=True,exist_ok=True);attr='mitictoon'+''.join(x.capitalize() for x in group.split('-'))
 (directory/f'{group}.component.ts').write_text(f"import {{ Component, input }} from '@angular/core';\n\n@Component({{\n  selector: '[{attr}]',\n  templateUrl: './{group}.component.html',\n  styleUrl: './{group}.component.scss'\n}})\nexport class {cls(group)} {{\n  readonly variant = input(0);\n}}\n")
 html='@switch (variant()) {\n'+''.join('@case ('+str(i)+') {\n'+safe(v)+'\n}\n' for i,v in enumerate(variants))+'}\n'
 (directory/f'{group}.component.html').write_text(html);(directory/f'{group}.component.scss').write_text('// Attribute selector: the host is the original HTML element, with its original classes.\n// Visual rules stay in src/styles/reference to preserve the exact global cascade.\n')
routes=["import { Routes } from '@angular/router';","export const routes: Routes = ["]
for p in pages:
 paths=['',p['source']] if p['source']=='index.html' else [p['source']]
 for path in paths:routes.append(f"  {{path:{json.dumps(path)},title:'Mitictoon',data:{{bodyClass:{json.dumps(p['bodyClass'])}}},loadComponent:()=>import('./pages/{p['slug']}/{p['slug']}.component').then(m=>m.{cls(p['slug']).replace('Component','PageComponent')})}},")
routes.append("  {path:'**',redirectTo:'404.html'}\n];\n");(root/'src/app/app.routes.ts').write_text('\n'.join(routes))
(root/'scripts/migration-map.json').write_text(json.dumps({'pages':pages,'components':{g:len(v) for g,v in groups.items()}},indent=2))
main=(ref/'assets/js/main.js').read_text();main=main.replace('$(function () {','window.initializeMitictoonTemplate = function () {',1);i=main.rfind('});');main=main[:i]+'};'+main[i+3:]
(root/'src/template-runtime.js').write_text(main)
print(f'Migrated {len(pages)} pages and {len(groups)} shared components')

import runpy
runpy.run_path(str(root/'scripts/organize-styles.py'))
