import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { AwardsComponent } from '../../shared/awards/awards.component';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { ContactInfoComponent } from '../../shared/contact-info/contact-info.component';
import { ContactLayout1Component } from '../../shared/contact-layout1/contact-layout1.component';
import { FancyboxLayout1Component } from '../../shared/fancybox-layout1/fancybox-layout1.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-our-services',
  imports: [AwardsComponent, BannerLayout1Component, ContactInfoComponent, ContactLayout1Component, FancyboxLayout1Component, HamburgerMenuComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, VideoComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesPageComponent extends TemplatePage {}
