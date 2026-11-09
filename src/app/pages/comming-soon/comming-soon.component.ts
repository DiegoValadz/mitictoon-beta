import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { Page404Component } from '../../shared/page-404/page-404.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-comming-soon',
  imports: [HamburgerMenuComponent, Page404Component, SearchPopupComponent, SiteHeaderComponent],
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.scss'
})
export class CommingSoonPageComponent extends TemplatePage {}
