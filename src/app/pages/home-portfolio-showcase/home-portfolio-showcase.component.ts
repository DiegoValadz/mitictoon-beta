import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { ContactInfoLayout2Component } from '../../shared/contact-info-layout2/contact-info-layout2.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { SliderComponent } from '../../shared/slider/slider.component';

@Component({
  selector: 'app-home-portfolio-showcase',
  imports: [ContactInfoLayout2Component, HamburgerMenuComponent, SearchPopupComponent, SiteHeaderComponent, SliderComponent],
  templateUrl: './home-portfolio-showcase.component.html',
  styleUrl: './home-portfolio-showcase.component.scss'
})
export class HomePortfolioShowcasePageComponent extends TemplatePage {}
