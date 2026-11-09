import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPortfolio]',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  readonly variant = input(0);
}
