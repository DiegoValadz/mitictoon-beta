import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonSiteFooter]',
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  readonly variant = input(0);
}
