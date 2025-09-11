import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { Registrati } from './registrati/registrati';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'registrati', component: Registrati },
  { path: '**', component: NotFound } 
];
