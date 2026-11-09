import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonContactInfoLayout2]',
  templateUrl: './contact-info-layout2.component.html',
  styleUrl: './contact-info-layout2.component.scss'
})
export class ContactInfoLayout2Component {
  readonly variant = input(0);
}
