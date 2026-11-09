import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonHamburgerMenu]',
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  readonly variant = input(0);
}
