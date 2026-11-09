import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { CountersComponent } from '../../shared/counters/counters.component';
import { FancyboxLayout2Component } from '../../shared/fancybox-layout2/fancybox-layout2.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { TeamLayout1Component } from '../../shared/team-layout1/team-layout1.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';

@Component({
  selector: 'app-about-us',
  imports: [BannerLayout1Component, ClientsComponent, CountersComponent, FancyboxLayout2Component, HamburgerMenuComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, TeamLayout1Component, TestimonialsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsPageComponent extends TemplatePage {}
