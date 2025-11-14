import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'quienes-somos', component: AboutComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: '**', redirectTo: '' }
];
