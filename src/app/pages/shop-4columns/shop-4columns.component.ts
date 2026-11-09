import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { ShopGridComponent } from '../../shared/shop-grid/shop-grid.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-shop-4columns',
  imports: [HamburgerMenuComponent, PageTitleComponent, ScrollTopComponent, SearchPopupComponent, ShopGridComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './shop-4columns.component.html',
  styleUrl: './shop-4columns.component.scss'
})
export class Shop4columnsPageComponent extends TemplatePage {}
