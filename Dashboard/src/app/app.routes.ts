import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { ClientPage } from './client-page/client-page';
import { AdminPage } from './admin-page/admin-page';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home },
  { path: 'login', component: Login },
  { path: 'client-page', component: ClientPage },
  { path: 'admin-page', component: AdminPage },
  { path: '**', component: NotFound },
];
