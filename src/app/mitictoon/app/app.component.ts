import { NavbarComponent } from '../navbar/navbar.component';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({selector:'app-root',imports:[RouterLink,RouterOutlet,NavbarComponent],templateUrl:'./app.component.html',styleUrl:'./app.component.scss'})
export class AppComponent { menu=false; scrolled=false; showTop=false; year=new Date().getFullYear();
 @HostListener('window:scroll') scroll(){ this.scrolled=window.scrollY>0;this.showTop=window.scrollY>700; }
 @HostListener('document:keydown.escape') escape(){this.menu=false;}
 top(){window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
}
