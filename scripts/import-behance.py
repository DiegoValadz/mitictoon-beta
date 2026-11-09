from pathlib import Path
import json,urllib.request,concurrent.futures,shutil,time,subprocess
root=Path(__file__).resolve().parents[1];modules=json.loads((root/'docs/behance-modules.json').read_text());target=root/'public/assets/mitictoon';target.mkdir(exist_ok=True)
cache=Path('/var/folders/y7/ss0j4g6j2y3_0ldywvty59s00000gn/T/browser-use/assets/856527f0-0604-4067-9b39-4803f7f055ce');manifest=json.loads((cache/'manifest.json').read_text()) if (cache/'manifest.json').exists() else {'assets':[]};cached={a['url']:a for a in manifest['assets']}
images=[];seen=set()
for m in modules:
 for item in m['images']:
  if item['src'] in seen:continue
  seen.add(item['src']);url=item['src'];index=len(images);file=f'piece-{index:03d}'+('.gif' if url.endswith('.gif') else '.webp')
  images.append({'index':index,'module':m['index'],'source':url,'file':file,'kind':'gif' if url.endswith('.gif') else 'image'})
def fetch(i):
 dest=target/i['file']
 if dest.exists() and dest.stat().st_size:return i
 if i['source'] in cached:shutil.copy(cached[i['source']]['path'],dest);return i
 try:
  subprocess.run(['/usr/bin/curl','--fail','--location','--silent','--show-error','--retry','2','--max-time','90',i['source'],'--output',str(dest)+'.part'],check=True,capture_output=True)
  Path(str(dest)+'.part').replace(dest)
 except Exception as e:i['error']=str(e)
 return i
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:results=list(pool.map(fetch,images))
(root/'docs/behance-assets.json').write_text(json.dumps(results,indent=2))
failed=[i for i in results if 'error'in i];print(json.dumps({'downloaded':len(results)-len(failed),'failed':len(failed),'errors':failed[:2]}))
