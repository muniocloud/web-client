import { Routes } from '@angular/router';
import { authGuard } from '@app/auth/guards/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
    canMatch: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./session/session-creator/session-creator.component').then(c => c.SessionCreatorComponent),
        canMatch: [authGuard],
      },
      {
        path: 'sessions/:sessionId/lessons/:lessonId',
        loadComponent: () => import('./session/lesson/lesson.component').then(c => c.LessonComponent),
        canMatch: [authGuard],
      },
      {
        path: 'sessions/:sessionId/result',
        loadComponent: () => import('./session/session-result/session-result.component').then(c => c.SessionResultComponent),
        canMatch: [authGuard],
      },
    ]
  },
];
