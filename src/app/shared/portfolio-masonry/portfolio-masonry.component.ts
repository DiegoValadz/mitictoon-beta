import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPortfolioMasonry]',
  templateUrl: './portfolio-masonry.component.html',
  styleUrl: './portfolio-masonry.component.scss'
})
export class PortfolioMasonryComponent {
  readonly variant = input(0);
}
