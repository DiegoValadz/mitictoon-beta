import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonCounters]',
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  readonly variant = input(0);
}
