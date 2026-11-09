import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PortfolioMasonryComponent } from '../../shared/portfolio-masonry/portfolio-masonry.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-home-portfolio-metro',
  imports: [HamburgerMenuComponent, PortfolioMasonryComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './home-portfolio-metro.component.html',
  styleUrl: './home-portfolio-metro.component.scss'
})
export class HomePortfolioMetroPageComponent extends TemplatePage {}
