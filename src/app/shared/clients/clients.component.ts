import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonClients]',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  readonly variant = input(0);
}
