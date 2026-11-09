import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {parseFragment} from 'parse5';
const root=path.resolve(import.meta.dirname,'..');
const map=JSON.parse(fs.readFileSync(path.join(root,'scripts/migration-map.json'),'utf8'));
function normalize(node){
 if(node.nodeName==='#comment')return null;
 if(node.nodeName==='#text'){const text=node.value.replace(/\s+/g,' ').trim();return text?['text',text]:null;}
 return [node.tagName??node.nodeName,(node.attrs??[]).map(a=>[a.name,a.value]).sort(),(node.childNodes??[]).map(normalize).filter(Boolean)];
}
const shared=new Map();
for(const name of Object.keys(map.components)){
 const attr='mitictoon'+name.split('-').map(v=>v.charAt(0).toUpperCase()+v.slice(1).toLowerCase()).join('');
 const file=fs.readFileSync(path.join(root,`src/app/shared/${name}/${name}.component.html`),'utf8');
 shared.set(attr,[...file.matchAll(/@case \((\d+)\) \{\n([\s\S]*?)\n\}/g)].map(m=>m[2]));
 for(const ext of ['html','ts','scss'])assert.ok(fs.existsSync(path.join(root,`src/app/shared/${name}/${name}.component.${ext}`)));
}
for(const page of map.pages){
 let generated=fs.readFileSync(path.join(root,`src/app/pages/${page.slug}/${page.slug}.component.html`),'utf8');
 generated=generated.replace(/<(\w+)([^>]*?) (mitictoon\w+) \[variant\]="(\d+)"\s*>([\s\S]*?)<\/\1>/g,(_,tag,attrs,name,variant)=>`<${tag}${attrs}>${shared.get(name)[Number(variant)]}</${tag}>`);
 const original=fs.readFileSync(path.join(root,'../Reference/Lamba',page.source),'utf8');
 const body=original.match(/<body[^>]*>([\s\S]*?)<\/body>/)[1].trim();
 const originalWrapper=parseFragment(body).childNodes.find(n=>n.attrs?.some(a=>a.name==='class'&&a.value.split(' ').includes('wrapper')));
 const generatedWrapper=parseFragment(generated).childNodes.find(n=>n.tagName==='div');
 assert.deepEqual(normalize(generatedWrapper),normalize(originalWrapper),page.source+' must preserve the original DOM');
}
function files(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const assets=path.join(root,'../Reference/Lamba/assets');
for(const source of files(assets))assert.ok(fs.readFileSync(source).equals(fs.readFileSync(path.join(root,'public/assets',path.relative(assets,source)))),source);
console.log(`PASS: ${map.pages.length} pages preserve the original parsed DOM; ${shared.size} reusable components have HTML/TS/SCSS; every original asset is byte-identical.`);
