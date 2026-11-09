import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PortfolioGridComponent } from '../../shared/portfolio-grid/portfolio-grid.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-portfolio-4columns-wide',
  imports: [HamburgerMenuComponent, PortfolioGridComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './portfolio-4columns-wide.component.html',
  styleUrl: './portfolio-4columns-wide.component.scss'
})
export class Portfolio4columnsWidePageComponent extends TemplatePage {}
