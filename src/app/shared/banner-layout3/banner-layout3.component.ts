import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBannerLayout3]',
  templateUrl: './banner-layout3.component.html',
  styleUrl: './banner-layout3.component.scss'
})
export class BannerLayout3Component {
  readonly variant = input(0);
}
