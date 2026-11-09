import { Component } from '@angular/core';
import { TemplatePage } from '../../template-page';
import { ContactInfoComponent } from '../../shared/contact-info/contact-info.component';
import { ContactLayout1Component } from '../../shared/contact-layout1/contact-layout1.component';
import { GoogleMapComponent } from '../../shared/google-map/google-map.component';
import { HamburgerMenuComponent } from '../../shared/hamburger-menu/hamburger-menu.component';
import { ScrollTopComponent } from '../../shared/scroll-top/scroll-top.component';
import { SearchPopupComponent } from '../../shared/search-popup/search-popup.component';
import { SiteFooterComponent } from '../../shared/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../shared/site-header/site-header.component';

@Component({
  selector: 'app-contact',
  imports: [ContactInfoComponent, ContactLayout1Component, GoogleMapComponent, HamburgerMenuComponent, ScrollTopComponent, SearchPopupComponent, SiteFooterComponent, SiteHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactPageComponent extends TemplatePage {}
