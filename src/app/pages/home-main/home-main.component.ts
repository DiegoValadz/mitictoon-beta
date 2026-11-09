import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { ContactInfoComponent } from '../../shared/contact-info/contact-info.component';
import { ContactLayout1Component } from '../../shared/contact-layout1/contact-layout1.component';
import { CountersComponent } from '../../shared/counters/counters.component';
import { FancyboxLayout1Component } from '../../shared/fancybox-layout1/fancybox-layout1.component';
import { FancyboxLayout2Component } from '../../shared/fancybox-layout2/fancybox-layout2.component';
import { GoogleMapComponent } from '../../shared/google-map/google-map.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PortfolioMasonryLayout3Component } from '../../shared/portfolio-masonry-layout3/portfolio-masonry-layout3.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { TeamLayout1Component } from '../../shared/team-layout1/team-layout1.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';

@Component({
  selector: 'app-home-main',
  imports: [BannerLayout1Component, ClientsComponent, ContactInfoComponent, ContactLayout1Component, CountersComponent, FancyboxLayout1Component, FancyboxLayout2Component, GoogleMapComponent, HamburgerMenuComponent, PortfolioMasonryLayout3Component, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, SliderComponent, TeamLayout1Component, TestimonialsComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainPageComponent extends TemplatePage {}
