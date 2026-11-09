import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonSearchPopup]',
  templateUrl: './search-popup.component.html',
  styleUrl: './search-popup.component.scss'
})
export class SearchPopupComponent {
  readonly variant = input(0);
}
