import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, VIDEOS, SOURCE_ASSETS } from '../catalog.data';
import { VideoPlayerComponent } from '../video-player/video-player.component';
@Component({selector:'app-animations',imports:[RouterLink,VideoPlayerComponent],templateUrl:'./animations.component.html',styleUrl:'./animations.component.scss'})
export class AnimationsComponent {videos=VIDEOS;}
