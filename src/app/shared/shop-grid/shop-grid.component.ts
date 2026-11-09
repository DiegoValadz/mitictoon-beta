import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonShopGrid]',
  templateUrl: './shop-grid.component.html',
  styleUrl: './shop-grid.component.scss'
})
export class ShopGridComponent {
  readonly variant = input(0);
}
