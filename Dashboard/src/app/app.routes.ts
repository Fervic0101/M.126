import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registrati } from './registrati/registrati';
import { NotFound } from './not-found/not-found';
import { LoginFornitore } from './login-fornitore/login-fornitore';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'registrati', component: Registrati },
  { path: 'loginFornitore', component: LoginFornitore },
  { path: '**', component: NotFound } 
];
