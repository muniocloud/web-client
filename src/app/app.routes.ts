import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { publicGuard } from './auth/public.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canMatch: [authGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
    canActivate: [publicGuard],
  },
];
