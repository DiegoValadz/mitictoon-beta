import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { AwardsComponent } from '../../shared/awards/awards.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { PricingComponent } from '../../shared/pricing/pricing.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-our-pricing',
  imports: [AwardsComponent, HamburgerMenuComponent, PageTitleComponent, PricingComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './our-pricing.component.html',
  styleUrl: './our-pricing.component.scss'
})
export class OurPricingPageComponent extends TemplatePage {}
