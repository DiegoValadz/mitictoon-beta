import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBannerLayout2]',
  templateUrl: './banner-layout2.component.html',
  styleUrl: './banner-layout2.component.scss'
})
export class BannerLayout2Component {
  readonly variant = input(0);
}
