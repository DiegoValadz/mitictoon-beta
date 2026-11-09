import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { BlogGridComponent } from '../../shared/blog-grid/blog-grid.component';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { FancyboxLayout1Component } from '../../shared/fancybox-layout1/fancybox-layout1.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PortfolioGridComponent } from '../../shared/portfolio-grid/portfolio-grid.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { TeamLayout1Component } from '../../shared/team-layout1/team-layout1.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';
import { VideoComponent } from '../../shared/video/video.component';

@Component({
  selector: 'app-home-design-studio',
  imports: [BannerLayout1Component, BlogGridComponent, ClientsComponent, FancyboxLayout1Component, HamburgerMenuComponent, PortfolioGridComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, SliderComponent, TeamLayout1Component, TestimonialsComponent, VideoComponent],
  templateUrl: './home-design-studio.component.html',
  styleUrl: './home-design-studio.component.scss'
})
export class HomeDesignStudioPageComponent extends TemplatePage {}
