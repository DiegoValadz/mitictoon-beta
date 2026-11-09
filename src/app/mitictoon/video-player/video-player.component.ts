import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, VIDEOS, SOURCE_ASSETS } from '../catalog.data';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { inject } from '@angular/core';
@Component({selector:'app-video-player',imports:[],templateUrl:'./video-player.component.html',styleUrl:'./video-player.component.scss'})
export class VideoPlayerComponent {video=input(VIDEOS[0]);safe:SafeResourceUrl|null=null;private sanitizer=inject(DomSanitizer);play(){const url=this.video().url;if(/^https:\/\/www-ccv\.adobe\.io\/v1\/player\/ccv\/[^/]+\/embed\?/.test(url))this.safe=this.sanitizer.bypassSecurityTrustResourceUrl(url);}}
