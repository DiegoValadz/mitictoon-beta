from pathlib import Path
from PIL import Image,ImageDraw
import json,concurrent.futures,subprocess
root=Path(__file__).resolve().parents[1];items=json.loads((root/'docs/behance-assets.json').read_text());out=Path('/tmp/mitictoon-review');out.mkdir(exist_ok=True)
def process(i):
 p=root/'public/assets/mitictoon'/i['file']
 try:
  im=Image.open(p);im.seek(0);im=im.convert('RGB');im.thumbnail((1600,2000));im.save(out/f"{i['index']:03}.png")
  ocr=subprocess.run(['/opt/homebrew/bin/tesseract',str(out/f"{i['index']:03}.png"),'stdout','--psm','11'],capture_output=True,text=True).stdout
  return {**i,'width':im.width,'height':im.height,'text':ocr}
 except Exception as e:return {**i,'error':str(e)}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:result=list(pool.map(process,items))
(root/'docs/behance-review.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
for start in range(0,len(items),24):
 sheet=Image.new('RGB',(1400,6*240),'#eee');d=ImageDraw.Draw(sheet)
 for pos,item in enumerate(items[start:start+24]):
  p=out/f"{item['index']:03}.png";x=pos%4*350;y=pos//4*240
  if p.exists():
   im=Image.open(p);im.thumbnail((340,210));sheet.paste(im,(x,y))
  d.text((x,y+213),f"{item['index']:03} / module {item['module']}",fill='black')
 sheet.save(out/f'sheet-{start//24}.jpg')
print('Reviewed',len(result),'assets; contact sheets in',out)
