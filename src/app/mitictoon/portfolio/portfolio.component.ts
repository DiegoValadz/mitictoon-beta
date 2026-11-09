import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({selector:'app-portfolio',imports:[GalleryComponent,RouterLink],templateUrl:'./portfolio.component.html',styleUrl:'./portfolio.component.scss'})
export class PortfolioComponent {}
