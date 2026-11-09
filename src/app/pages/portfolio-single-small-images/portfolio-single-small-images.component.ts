import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { PortfolioSingleComponent } from '../../shared/portfolio-single/portfolio-single.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-portfolio-single-small-images',
  imports: [HamburgerMenuComponent, PageTitleComponent, PortfolioSingleComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './portfolio-single-small-images.component.html',
  styleUrl: './portfolio-single-small-images.component.scss'
})
export class PortfolioSingleSmallImagesPageComponent extends TemplatePage {}
