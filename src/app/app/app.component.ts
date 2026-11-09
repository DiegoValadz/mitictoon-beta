import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({selector:'app-root',imports:[RouterOutlet],templateUrl:'./app.component.html',styleUrl:'./app.component.scss'})
export class AppComponent {
 constructor(){
  const setTheme=(url:string)=>document.documentElement.classList.toggle('template-preview',/^\/plantilla(?:\/|[?#]|$)/.test(url));
  setTheme(location.pathname);
  inject(Router).events.pipe(takeUntilDestroyed()).subscribe(event=>{if(event instanceof NavigationEnd)setTheme(event.urlAfterRedirects);});
 }
}
