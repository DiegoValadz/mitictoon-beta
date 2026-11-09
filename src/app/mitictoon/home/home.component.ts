import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { PortfolioPreviewComponent } from '../portfolio-preview/portfolio-preview.component';
import { AboutPreviewComponent } from '../about-preview/about-preview.component';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CommissionProcessComponent } from '../commission-process/commission-process.component';
import { ServicePreviewComponent } from '../service-preview/service-preview.component';
import { ContactComponent } from '../contact/contact.component';
import { RevealDirective } from '../motion.directive';
@Component({selector:'app-home',imports:[RouterLink,HeroComponent,PortfolioPreviewComponent,AboutPreviewComponent,VideoPlayerComponent,TestimonialsComponent,CommissionProcessComponent,ServicePreviewComponent,ContactComponent,RevealDirective],templateUrl:'./home.component.html',styleUrl:'./home.component.scss'})
export class HomeComponent {}
