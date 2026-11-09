import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonShopSingle]',
  templateUrl: './shop-single.component.html',
  styleUrl: './shop-single.component.scss'
})
export class ShopSingleComponent {
  readonly variant = input(0);
}
