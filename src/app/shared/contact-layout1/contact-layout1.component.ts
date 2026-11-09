import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonContactLayout1]',
  templateUrl: './contact-layout1.component.html',
  styleUrl: './contact-layout1.component.scss'
})
export class ContactLayout1Component {
  readonly variant = input(0);
}
