import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { PortfolioComponent } from '../../shared/portfolio/portfolio.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-portfolio-pinterest',
  imports: [HamburgerMenuComponent, PageTitleComponent, PortfolioComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './portfolio-pinterest.component.html',
  styleUrl: './portfolio-pinterest.component.scss'
})
export class PortfolioPinterestPageComponent extends TemplatePage {}
