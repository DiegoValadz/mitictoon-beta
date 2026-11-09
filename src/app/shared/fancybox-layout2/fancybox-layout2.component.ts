import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonFancyboxLayout2]',
  templateUrl: './fancybox-layout2.component.html',
  styleUrl: './fancybox-layout2.component.scss'
})
export class FancyboxLayout2Component {
  readonly variant = input(0);
}
