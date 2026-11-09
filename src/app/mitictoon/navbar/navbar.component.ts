import { Component,HostListener } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({selector:'app-navbar',imports:[RouterLink,RouterLinkActive],templateUrl:'./navbar.component.html',styleUrl:'./navbar.component.scss'})
export class NavbarComponent {menu=false;scrolled=false;@HostListener('window:scroll') scroll(){this.scrolled=window.scrollY>0;}@HostListener('document:keydown.escape') escape(){this.menu=false;}}