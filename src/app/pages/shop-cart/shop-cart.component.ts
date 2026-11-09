import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { ShoppingCartComponent } from '../../shared/shopping-cart/shopping-cart.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-shop-cart',
  imports: [HamburgerMenuComponent, PageTitleComponent, ScrollTopComponent, SearchPopupComponent, ShoppingCartComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.scss'
})
export class ShopCartPageComponent extends TemplatePage {}
