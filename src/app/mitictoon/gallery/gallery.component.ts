import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild, inject, input, OnDestroy } from '@angular/core';
import { ARTWORKS, Artwork, CATEGORIES } from '../art.data';
import { VIDEOS } from '../catalog.data';
import { VideoPlayerComponent } from '../video-player/video-player.component';
type GalleryWork = Artwork & { video?: typeof VIDEOS[number] };
@Component({selector:'app-gallery',imports:[VideoPlayerComponent],templateUrl:'./gallery.component.html',styleUrl:'./gallery.component.scss'})
export class GalleryComponent implements OnDestroy {
 preview=input(false); categories=CATEGORIES;filter='Todo';selected:GalleryWork|null=null;
 private change=inject(ChangeDetectorRef);private transition=0;
 @ViewChild('grid') grid!:ElementRef<HTMLElement>;
 @ViewChild('lightbox') dialog!:ElementRef<HTMLDialogElement>;
 private all:GalleryWork[]=[...ARTWORKS,...VIDEOS.map((v,i)=>({id:'video-'+i,title:v.title,category:'Animaciones',image:v.poster,thumbnail:v.poster,alt:v.title,service:'animation',video:v}))];
 get collection():GalleryWork[]{
  if(!this.preview())return this.all;
  const groups=CATEGORIES.slice(1).map(category=>ARTWORKS.filter(a=>a.category===category));
  return Array.from({length:5},(_,i)=>groups.map(group=>group[i])).flat().filter(Boolean);
 }
 get visible(){return this.collection.filter(a=>this.filter==='Todo'||a.category===this.filter);}
 async setFilter(category:string){
  if(category===this.filter)return;
  const token=++this.transition;const node=this.grid.nativeElement;
  const cards=Array.from(node.querySelectorAll<HTMLElement>('[data-work]'));
  cards.forEach(card=>card.getAnimations().forEach(a=>a.cancel()));
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const before=new Map(cards.map(card=>[card.dataset['work'],card.getBoundingClientRect()]));
  if(!reduced){await Promise.all(cards.filter(card=>category!=='Todo'&&card.dataset['category']!==category).map(card=>card.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.85)'}],{duration:180,easing:'ease-in',fill:'forwards'}).finished.catch(()=>{})));}
  if(token!==this.transition)return;
  this.filter=category;this.change.detectChanges();
  for(const card of Array.from(node.querySelectorAll<HTMLElement>('[data-work]'))){
   card.getAnimations().forEach(a=>a.cancel());if(reduced)continue;
   const old=before.get(card.dataset['work']);const rect=card.getBoundingClientRect();
   card.animate(old?[{transform:`translate(${old.left-rect.left}px,${old.top-rect.top}px)`,opacity:1},{transform:'translate(0,0)',opacity:1}]:[{transform:'translateY(30px) scale(.85)',opacity:0},{transform:'translateY(0) scale(1)',opacity:1}],{duration:450,easing:'cubic-bezier(.22,1,.36,1)'});
  }
 }
 open(work:GalleryWork){this.selected=work;this.dialog.nativeElement.showModal();}
 close(){this.dialog.nativeElement.close();this.selected=null;}
 backdrop(event:MouseEvent){if(event.target===this.dialog.nativeElement)this.close();}
 move(delta:number){const works=this.visible;const i=works.findIndex(w=>w.id===this.selected?.id);this.selected=works[(i+delta+works.length)%works.length];}
 ngOnDestroy(){this.transition++;this.grid?.nativeElement.querySelectorAll<HTMLElement>('[data-work]').forEach(card=>card.getAnimations().forEach(a=>a.cancel()));}
 @HostListener('document:keydown',['$event']) key(event:KeyboardEvent){if(!this.dialog?.nativeElement.open)return;if(event.key==='ArrowRight'){event.preventDefault();this.move(1);}if(event.key==='ArrowLeft'){event.preventDefault();this.move(-1);}}
}
