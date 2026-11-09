import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPt120]',
  templateUrl: './pt-120.component.html',
  styleUrl: './pt-120.component.scss'
})
export class Pt120Component {
  readonly variant = input(0);
}
