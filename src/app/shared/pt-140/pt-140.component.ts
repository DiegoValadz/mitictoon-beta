import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPt140]',
  templateUrl: './pt-140.component.html',
  styleUrl: './pt-140.component.scss'
})
export class Pt140Component {
  readonly variant = input(0);
}
