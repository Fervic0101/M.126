import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Accedi } from './accedi/accedi';
import { Supermercato } from './supermercato/supermercato';
import { Cliente } from './cliente/cliente';
import { ChisiamoComponent } from './chi siamo/chisiamo';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'accedi', component: Accedi },
  { path: 'supermercato', component: Supermercato },
  { path: 'cliente', component: Cliente },
  { path: 'chi-siamo', component: ChisiamoComponent },
];
