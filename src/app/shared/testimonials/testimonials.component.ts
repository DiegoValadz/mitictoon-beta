import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonTestimonials]',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  readonly variant = input(0);
}
