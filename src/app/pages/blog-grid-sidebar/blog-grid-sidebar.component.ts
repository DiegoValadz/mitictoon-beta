import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { BlogGridComponent } from '../../shared/blog-grid/blog-grid.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-blog-grid-sidebar',
  imports: [BlogGridComponent, HamburgerMenuComponent, PageTitleComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './blog-grid-sidebar.component.html',
  styleUrl: './blog-grid-sidebar.component.scss'
})
export class BlogGridSidebarPageComponent extends TemplatePage {}
