import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { AnimatedProgressbarsComponent } from '../../shared/animated-Progressbars/animated-Progressbars.component';
import { BannerLayout2Component } from '../../shared/banner-layout2/banner-layout2.component';
import { BannerLayout3Component } from '../../shared/banner-layout3/banner-layout3.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { Pb0Component } from '../../shared/pb-0/pb-0.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-our-process',
  imports: [AnimatedProgressbarsComponent, BannerLayout2Component, BannerLayout3Component, HamburgerMenuComponent, Pb0Component, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './our-process.component.html',
  styleUrl: './our-process.component.scss'
})
export class OurProcessPageComponent extends TemplatePage {}
