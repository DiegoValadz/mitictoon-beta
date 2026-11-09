import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPortfolioGrid]',
  templateUrl: './portfolio-grid.component.html',
  styleUrl: './portfolio-grid.component.scss'
})
export class PortfolioGridComponent {
  readonly variant = input(0);
}
