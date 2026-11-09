import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonSiteHeader]',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {
  readonly variant = input(0);
}
