import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBlogGrid]',
  templateUrl: './blog-grid.component.html',
  styleUrl: './blog-grid.component.scss'
})
export class BlogGridComponent {
  readonly variant = input(0);
}
