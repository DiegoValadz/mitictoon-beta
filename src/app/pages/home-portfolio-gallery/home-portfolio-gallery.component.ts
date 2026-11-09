import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { FixedSidebarComponent } from '../../shared/fixed-sidebar/fixed-sidebar.component';
import { PortfolioGridComponent } from '../../shared/portfolio-grid/portfolio-grid.component';

@Component({
  selector: 'app-home-portfolio-gallery',
  imports: [FixedSidebarComponent, PortfolioGridComponent],
  templateUrl: './home-portfolio-gallery.component.html',
  styleUrl: './home-portfolio-gallery.component.scss'
})
export class HomePortfolioGalleryPageComponent extends TemplatePage {}
