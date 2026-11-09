import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonShoppingCart]',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  readonly variant = input(0);
}
