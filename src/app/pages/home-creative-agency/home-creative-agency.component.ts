import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { AwardsComponent } from '../../shared/awards/awards.component';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { ContactInfoComponent } from '../../shared/contact-info/contact-info.component';
import { ContactLayout1Component } from '../../shared/contact-layout1/contact-layout1.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { Pb0Component } from '../../shared/pb-0/pb-0.component';
import { PortfolioMasonryComponent } from '../../shared/portfolio-masonry/portfolio-masonry.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-home-creative-agency',
  imports: [AwardsComponent, BannerLayout1Component, ClientsComponent, ContactInfoComponent, ContactLayout1Component, HamburgerMenuComponent, Pb0Component, PortfolioMasonryComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, SliderComponent, TestimonialsComponent, VideoComponent],
  templateUrl: './home-creative-agency.component.html',
  styleUrl: './home-creative-agency.component.scss'
})
export class HomeCreativeAgencyPageComponent extends TemplatePage {}
