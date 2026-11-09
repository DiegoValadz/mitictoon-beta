import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({selector:'app-service-preview',imports:[RouterLink],templateUrl:'./service-preview.component.html',styleUrl:'./service-preview.component.scss'})
export class ServicePreviewComponent implements OnDestroy {
 @ViewChild('track') track!:ElementRef<HTMLElement>;index=0;
 private autoplay=window.setInterval(()=>this.next(),4200);
 families=[{title:'Ilustraciones',text:'Un personaje que se parece a ti. Un mundo que todavía no existe. Una idea lista para llenarse de color.',detail:'Iconos · Medio cuerpo · Cuerpo completo · Chibis · Banners · Retro',icon:'✳',fragment:'iconos'},{title:'Cómics',text:'De la primera viñeta al último giro de la historia. Cada página tiene algo que contar.',detail:'Anime · Cartoon · Mitictoon · Webtoon',icon:'▧',fragment:'comic-anime'},{title:'Animaciones',text:'Un gesto, un movimiento y toda una personalidad. Dale vida a lo que hasta ahora solo imaginabas.',detail:'Frame x Frame · Motion Graphics · Mixta · GIFs',icon:'▷',fragment:'frame'},{title:'Todo para Stream',text:'Un espacio tan tuyo como tu comunidad. Haz que cada directo tenga su propia identidad.',detail:'Emotes · PNGtuber · Alertas · Overlays · Fondos',icon:'✦',fragment:'emotes'}];
 next(){this.go((this.index+1)%this.families.length);}
 move(delta:number){this.restart();this.go(Math.max(0,Math.min(this.families.length-1,this.index+delta)));}
 go(index:number){const track=this.track.nativeElement;const card=track.children[index] as HTMLElement;track.scrollTo({left:card.offsetLeft-track.offsetLeft,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
 sync(){const track=this.track.nativeElement;const width=(track.children[0] as HTMLElement).getBoundingClientRect().width+24;this.index=Math.min(this.families.length-1,Math.round(track.scrollLeft/width));}
 key(event:KeyboardEvent){if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();this.move(event.key==='ArrowRight'?1:-1);}}
 pause(){window.clearInterval(this.autoplay);}
 resume(){this.restart();}
 restart(){window.clearInterval(this.autoplay);this.autoplay=window.setInterval(()=>this.next(),4200);}
 pointerMove(event:PointerEvent){const card=event.currentTarget as HTMLElement;const rect=card.getBoundingClientRect();card.style.setProperty('--cursor-x',`${event.clientX-rect.left}px`);card.style.setProperty('--cursor-y',`${event.clientY-rect.top}px`);}
 pointerEnter(event:PointerEvent){(event.currentTarget as HTMLElement).classList.add('cursor-active');}
 pointerLeave(event:PointerEvent){(event.currentTarget as HTMLElement).classList.remove('cursor-active');}
 ngOnDestroy(){window.clearInterval(this.autoplay);}
}
