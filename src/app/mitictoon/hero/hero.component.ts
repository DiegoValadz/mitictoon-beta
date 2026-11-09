import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../motion.directive';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({selector:'app-hero',imports:[RouterLink],templateUrl:'./hero.component.html',styleUrl:'./hero.component.scss'})
export class HeroComponent {slide=0;slides=[
 {title:'Tus ideas,',accent:'otro universo.',desc:'Ilustraciones con mucho color, personajes con personalidad e historias que merecen ser contadas.',image:'assets/art/ef722ad40e8b1c28.webp',alt:'Ilustración de personaje de cabello turquesa con una paleta rosa, azul y amarillo'},
 {title:'Personajes con',accent:'vida propia.',desc:'De un primer boceto a ese personaje que solo existía en tu imaginación.',image:'assets/art/45d2db31e4ed24ba.webp',alt:'Retrato de princesa en tonos amarillos y rosas'},
 {title:'Cada trazo,',accent:'una historia.',desc:'Pequeños detalles, grandes aventuras. Encuentra inspiración para tu próxima comisión.',image:'assets/art/a972c94dc63bf5e3.webp',alt:'Ilustración de personaje de cabello violeta y luz azul'}];change(d:number){this.slide=(this.slide+d+this.slides.length)%this.slides.length;}}
