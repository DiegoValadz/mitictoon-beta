import {AfterViewInit,Directive,ElementRef,OnDestroy,inject} from '@angular/core';
/** Recreates the reference AOS fade-left (800ms, 50px offset), without global jQuery handlers. */
@Directive({selector:'[appReveal]',host:{class:'reveal-panel'}})
export class RevealDirective implements AfterViewInit,OnDestroy {
 private el=inject(ElementRef<HTMLElement>);private observer?:IntersectionObserver;
 ngAfterViewInit(){if(matchMedia('(prefers-reduced-motion: reduce)').matches){return;}
 this.el.nativeElement.classList.add('reveal-pending');
 this.observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){this.el.nativeElement.classList.remove('reveal-pending');this.observer?.disconnect();}}},{rootMargin:'0px 0px -50px 0px'});this.observer.observe(this.el.nativeElement);}
 ngOnDestroy(){this.observer?.disconnect();}
}
/** Keep the reference masonry layout responsive when images, captions or filters change. */
@Directive({selector:'[appMasonryItem]'})
export class MasonryItemDirective implements AfterViewInit,OnDestroy {
 private el=inject(ElementRef<HTMLElement>);private observer?:ResizeObserver;
 ngAfterViewInit(){const node=this.el.nativeElement;this.observer=new ResizeObserver(()=>{const height=node.getBoundingClientRect().height;node.style.gridRowEnd=`span ${Math.ceil((height+20)/30)}`;});this.observer.observe(node);}
 ngOnDestroy(){this.observer?.disconnect();}
}
