import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonGoogleMap]',
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {
  readonly variant = input(0);
}
