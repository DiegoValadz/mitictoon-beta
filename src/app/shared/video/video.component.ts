import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonVideo]',
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  readonly variant = input(0);
}
