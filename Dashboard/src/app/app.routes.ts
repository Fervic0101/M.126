import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Accedi } from './accedi/accedi';
import { ChiSiamo } from './chi-siamo/chi-siamo';
import { Cliente } from './cliente/cliente';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'accedi', component: Accedi },

  { path: 'chi-siamo', component: ChiSiamo },
  { path: 'cliente', component: Cliente },
];
