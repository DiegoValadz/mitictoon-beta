import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonTeamLayout1]',
  templateUrl: './team-layout1.component.html',
  styleUrl: './team-layout1.component.scss'
})
export class TeamLayout1Component {
  readonly variant = input(0);
}
