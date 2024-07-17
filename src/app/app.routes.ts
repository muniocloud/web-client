import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canMatch: [authGuard],
  },
  {
    path: 'sessions/:sessionId/lessons/:lessonId',
    loadComponent: () => import('./pages/dashboard/lesson/lesson.component').then(c => c.LessonComponent),
    canMatch: [authGuard],
  },
  {
    path: 'sessions/:sessionId/result',
    loadComponent: () => import('./pages/dashboard/session-result/session-result.component').then(c => c.SessionResultComponent),
    canMatch: [authGuard],
  },
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
