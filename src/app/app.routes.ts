import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { publicGuard } from './auth/public.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canMatch: [authGuard],
    children: [
      {
        path: 'session',
        loadComponent: () => import('./pages/dashboard/session/session.component').then(c => c.SessionComponent)
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
  },
];
