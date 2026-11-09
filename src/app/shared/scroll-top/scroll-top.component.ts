import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonScrollTop]',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss'
})
export class ScrollTopComponent {
  readonly variant = input(0);
}
