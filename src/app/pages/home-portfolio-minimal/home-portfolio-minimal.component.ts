import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { MenuPopupComponent } from '../../shared/menu-popup/menu-popup.component';
import { PortfolioGridComponent } from '../../shared/portfolio-grid/portfolio-grid.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-home-portfolio-minimal',
  imports: [MenuPopupComponent, PortfolioGridComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './home-portfolio-minimal.component.html',
  styleUrl: './home-portfolio-minimal.component.scss'
})
export class HomePortfolioMinimalPageComponent extends TemplatePage {}
