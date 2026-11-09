import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../motion.directive';
@Component({selector:'app-about-preview',imports:[RouterLink,RevealDirective],templateUrl:'./about-preview.component.html',styleUrl:'./about-preview.component.scss'})
export class AboutPreviewComponent {}