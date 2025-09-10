import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Accedi } from './accedi/accedi';
import { NotFound } from './not-found/not-found';
import { GestioneUtenti } from './gestione-utenti/gestione-utenti';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'accedi', component: Accedi },
  { path: 'gestione-utenti', component: GestioneUtenti },
  { path: '**', component: NotFound },
];
