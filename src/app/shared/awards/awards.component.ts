import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonAwards]',
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  readonly variant = input(0);
}
