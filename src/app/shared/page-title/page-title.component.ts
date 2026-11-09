import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPageTitle]',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  readonly variant = input(0);
}
