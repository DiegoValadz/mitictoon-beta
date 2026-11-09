import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonAnimatedProgressbars]',
  templateUrl: './animated-Progressbars.component.html',
  styleUrl: './animated-Progressbars.component.scss'
})
export class AnimatedProgressbarsComponent {
  readonly variant = input(0);
}
