import { Routes } from '@angular/router';
export const routes: Routes = [
{path:'plantilla',loadChildren:()=>import('./template-preview/template-preview.routes').then(m=>m.TEMPLATE_ROUTES)},
{path:'',loadComponent:()=>import('./mitictoon/app/app.component').then(m=>m.AppComponent),children:[{path:'',title:'Un universo de historias · Mitictoon',loadComponent:()=>import('./mitictoon/home/home.component').then(m=>m.HomeComponent)},
{path:'portafolio',title:'Portafolio · Mitictoon',loadComponent:()=>import('./mitictoon/portfolio/portfolio.component').then(m=>m.PortfolioComponent)},
{path:'sobre-mi',title:'Sobre mí · Mitictoon',loadComponent:()=>import('./mitictoon/about/about.component').then(m=>m.AboutComponent)},
{path:'comisiones',title:'Cotiza tu comisión · Mitictoon',loadComponent:()=>import('./mitictoon/commission/commission.component').then(m=>m.CommissionComponent)},
{path:'servicios',title:'Servicios · Mitictoon',loadComponent:()=>import('./mitictoon/services/services.component').then(m=>m.ServicesComponent)},
{path:'animaciones',redirectTo:'portafolio',pathMatch:'full'},
{path:'archivo',title:'Archivo completo · Mitictoon',loadComponent:()=>import('./mitictoon/archive/archive.component').then(m=>m.ArchiveComponent)},
{path:'contacto',title:'Contacto · Mitictoon',loadComponent:()=>import('./mitictoon/contact/contact.component').then(m=>m.ContactComponent)},
{path:'home-creative-agency.html',redirectTo:'',pathMatch:'full'},
{path:'index.html',redirectTo:'',pathMatch:'full'},
{path:'home-main.html',redirectTo:'',pathMatch:'full'},
{path:'**',loadComponent:()=>import('./mitictoon/not-found/not-found.component').then(m=>m.NotFoundComponent)}]}];
