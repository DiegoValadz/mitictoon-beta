import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { PortfolioMasonryComponent } from '../../shared/portfolio-masonry/portfolio-masonry.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-portfolio-masonry',
  imports: [HamburgerMenuComponent, PageTitleComponent, PortfolioMasonryComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './portfolio-masonry.component.html',
  styleUrl: './portfolio-masonry.component.scss'
})
export class PortfolioMasonryPageComponent extends TemplatePage {}
