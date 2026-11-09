import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { AwardsComponent } from '../../shared/awards/awards.component';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { FancyboxLayout1Component } from '../../shared/fancybox-layout1/fancybox-layout1.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { Pb0Component } from '../../shared/pb-0/pb-0.component';
import { PortfolioMasonryLayout3Component } from '../../shared/portfolio-masonry-layout3/portfolio-masonry-layout3.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-about-me',
  imports: [AwardsComponent, BannerLayout1Component, FancyboxLayout1Component, HamburgerMenuComponent, PageTitleComponent, Pb0Component, PortfolioMasonryLayout3Component, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMePageComponent extends TemplatePage {}
