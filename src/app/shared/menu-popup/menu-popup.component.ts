import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonMenuPopup]',
  templateUrl: './menu-popup.component.html',
  styleUrl: './menu-popup.component.scss'
})
export class MenuPopupComponent {
  readonly variant = input(0);
}
