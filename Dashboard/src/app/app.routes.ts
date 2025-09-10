import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Accedi } from './accedi/accedi';
import { NotFound } from './not-found/not-found';
import { Admin } from './admin/admin';  // importa il nuovo componente
import { SupermarketForm } from './admin/supermarketform/supermarketform';
import { Cliente } from './cliente/cliente';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'accedi', component: Accedi },
  { path: 'admin', component: Admin },
  { path: 'admin/:supermarket', component: SupermarketForm },
  { path: 'cliente', component: Cliente }, 
  { path: '**', component: NotFound }
];
