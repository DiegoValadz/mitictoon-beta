import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, VIDEOS, SOURCE_ASSETS } from '../catalog.data';

@Component({selector:'app-services',imports:[RouterLink],templateUrl:'./services.component.html',styleUrl:'./services.component.scss'})
export class ServicesComponent {services=SERVICES;families=["Ilustraciones","Cómics","Animaciones","Todo para Stream"];}
