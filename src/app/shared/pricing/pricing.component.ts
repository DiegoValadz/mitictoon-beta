import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPricing]',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  readonly variant = input(0);
}
