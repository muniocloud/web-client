import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/homepage/homepage.component').then(c => c.HomepageComponent),
  }
];
