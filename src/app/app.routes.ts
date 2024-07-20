import { Routes } from '@angular/router';
import { dashboardRoutes } from './pages/dashboard/dashboard.routes';

export const routes: Routes = [
  ...dashboardRoutes,
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
];
