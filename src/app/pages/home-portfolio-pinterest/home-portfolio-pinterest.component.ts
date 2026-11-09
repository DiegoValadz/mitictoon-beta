import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { ClientsComponent } from '../../shared/clients/clients.component';
import { MenuPopupComponent } from '../../shared/menu-popup/menu-popup.component';
import { PortfolioComponent } from '../../shared/portfolio/portfolio.component';
import { Pt140Component } from '../../shared/pt-140/pt-140.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-home-portfolio-pinterest',
  imports: [ClientsComponent, MenuPopupComponent, PortfolioComponent, Pt140Component, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './home-portfolio-pinterest.component.html',
  styleUrl: './home-portfolio-pinterest.component.scss'
})
export class HomePortfolioPinterestPageComponent extends TemplatePage {}
