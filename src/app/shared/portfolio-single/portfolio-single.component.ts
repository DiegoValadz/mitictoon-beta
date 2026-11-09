import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPortfolioSingle]',
  templateUrl: './portfolio-single.component.html',
  styleUrl: './portfolio-single.component.scss'
})
export class PortfolioSingleComponent {
  readonly variant = input(0);
}
