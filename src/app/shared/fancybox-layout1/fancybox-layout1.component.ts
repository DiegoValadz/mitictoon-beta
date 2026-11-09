import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonFancyboxLayout1]',
  templateUrl: './fancybox-layout1.component.html',
  styleUrl: './fancybox-layout1.component.scss'
})
export class FancyboxLayout1Component {
  readonly variant = input(0);
}
