import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { RelatedProductsComponent } from '../../shared/related-products/related-products.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { ShopSingleComponent } from '../../shared/shop-single/shop-single.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-shop-single-product',
  imports: [HamburgerMenuComponent, PageTitleComponent, RelatedProductsComponent, ScrollTopComponent, SearchPopupComponent, ShopSingleComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './shop-single-product.component.html',
  styleUrl: './shop-single-product.component.scss'
})
export class ShopSingleProductPageComponent extends TemplatePage {}
