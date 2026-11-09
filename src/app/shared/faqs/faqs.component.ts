import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonFaqs]',
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FaqsComponent {
  readonly variant = input(0);
}
