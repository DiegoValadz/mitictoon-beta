import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonPage404]',
  templateUrl: './page-404.component.html',
  styleUrl: './page-404.component.scss'
})
export class Page404Component {
  readonly variant = input(0);
}
