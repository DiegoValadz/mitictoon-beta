import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonContactInfo]',
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss'
})
export class ContactInfoComponent {
  readonly variant = input(0);
}
