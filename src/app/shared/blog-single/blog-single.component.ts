import { Component, input } from '@angular/core';

@Component({
  selector: '[mitictoonBlogSingle]',
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent {
  readonly variant = input(0);
}
