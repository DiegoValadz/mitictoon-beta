import { AfterViewInit, Directive, NgZone, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare global {interface Window {initializeMitictoonTemplate:()=>void;jQuery:any;}}
/** Bridge for the supplied plugins. Components render first; the original code initializes once. */
@Directive()
export abstract class TemplatePage implements AfterViewInit,OnDestroy {
 private zone=inject(NgZone);
 private route=inject(ActivatedRoute);
 private frame=0;
 ngAfterViewInit():void {
  document.body.className=this.route.snapshot.data['bodyClass']??'';
  this.zone.runOutsideAngular(()=>{
   this.frame=requestAnimationFrame(()=>{
    // <base href="/"> must not change the original page-local hash links.
    for(const anchor of Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))) {
     anchor.setAttribute('href',location.pathname+location.search+anchor.getAttribute('href'));
    }
    for(const anchor of Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))) {
     const href=anchor.getAttribute('href')!;
     if(/^(?:\.\/)?[^/:?#]+\.html(?:[?#].*)?$/.test(href))anchor.setAttribute('href','/plantilla/'+href.replace(/^\.\//,''));
    }
    window.initializeMitictoonTemplate();
    // Angular's deferred view can render after window.load has already fired.
    if(document.readyState==='complete')window.jQuery('.preloader').remove();
   });
  });
 }
 ngOnDestroy():void {cancelAnimationFrame(this.frame);}
}
