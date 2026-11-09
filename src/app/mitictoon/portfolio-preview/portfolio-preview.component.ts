import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({selector:'app-portfolio-preview',imports:[RouterLink,GalleryComponent],templateUrl:'./portfolio-preview.component.html',styleUrl:'./portfolio-preview.component.scss'})
export class PortfolioPreviewComponent {}