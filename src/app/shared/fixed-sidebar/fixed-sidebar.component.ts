import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonFixedSidebar]',
  templateUrl: './fixed-sidebar.component.html',
  styleUrl: './fixed-sidebar.component.scss'
})
export class FixedSidebarComponent {
  readonly variant = input(0);
}
