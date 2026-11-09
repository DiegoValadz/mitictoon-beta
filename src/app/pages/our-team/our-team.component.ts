import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';
import { TeamLayout1Component } from '../../shared/team-layout1/team-layout1.component';

@Component({
  selector: 'app-our-team',
  imports: [HamburgerMenuComponent, PageTitleComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent, TeamLayout1Component],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamPageComponent extends TemplatePage {}
