import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Accedi } from './accedi/accedi';
import { NotFound } from './not-found/not-found';
import { Filtri } from './filtri/filtri';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'accedi', component: Accedi },
  { path: 'filtri', component: Filtri },
  { path: '**', component: NotFound },
];
