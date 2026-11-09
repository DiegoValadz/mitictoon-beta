import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonSlider]',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  readonly variant = input(0);
}
