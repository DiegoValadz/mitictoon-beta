import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, VIDEOS, SOURCE_ASSETS } from '../catalog.data';
import { VideoPlayerComponent } from '../video-player/video-player.component';
@Component({selector:'app-archive',imports:[VideoPlayerComponent],templateUrl:'./archive.component.html',styleUrl:'./archive.component.scss'})
export class ArchiveComponent {assets=SOURCE_ASSETS;videos=VIDEOS;modules=Array.from({length:104},(_,i)=>i);}
