import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonRelatedProducts]',
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {
  readonly variant = input(0);
}
