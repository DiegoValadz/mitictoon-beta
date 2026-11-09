import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBannerLayout1]',
  templateUrl: './banner-layout1.component.html',
  styleUrl: './banner-layout1.component.scss'
})
export class BannerLayout1Component {
  readonly variant = input(0);
}
