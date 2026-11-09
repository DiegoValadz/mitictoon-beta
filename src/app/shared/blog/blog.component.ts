import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBlog]',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  readonly variant = input(0);
}
