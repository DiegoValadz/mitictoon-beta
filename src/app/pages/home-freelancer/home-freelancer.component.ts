import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { BannerLayout1Component } from '../../shared/banner-layout1/banner-layout1.component';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PortfolioComponent } from '../../shared/portfolio/portfolio.component';
import { Pt120Component } from '../../shared/pt-120/pt-120.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { TestimonialsComponent } from '../../shared/testimonials/testimonials.component';

@Component({
  selector: 'app-home-freelancer',
  imports: [BannerLayout1Component, ClientsComponent, HamburgerMenuComponent, PortfolioComponent, Pt120Component, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, TestimonialsComponent],
  templateUrl: './home-freelancer.component.html',
  styleUrl: './home-freelancer.component.scss'
})
export class HomeFreelancerPageComponent extends TemplatePage {}
