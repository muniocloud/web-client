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
        path: 'sessions',
        loadComponent: () => import('./sessions/sessions.component').then(c => c.SessionsComponent),
        canMatch: [authGuard],
      },
      {
        path: 'sessions/:sessionId',
        loadComponent: () => import('./sessions/session/session.component').then(c => c.SessionComponent),
        canMatch: [authGuard],
      },
      {
        path: 'conversations',
        loadComponent: () => import('./conversations/conversations.component').then(c => c.ConversationsComponent),
        canMatch: [authGuard],
      },
      {
        path: 'conversations/:conversationId',
        loadComponent: () => import('./conversations/conversation/conversation.component').then(c => c.ConversationComponent),
        canMatch: [authGuard],
      },
    ]
  },
];
