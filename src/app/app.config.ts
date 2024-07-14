import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { baseUrlProvider } from './shared/api/base-url.provider';
import { AuthService } from './auth/auth.service';
import { authInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withRouterConfig({
      onSameUrlNavigation: 'reload',
    })),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([authInterceptor])),
    baseUrlProvider,
    {
      provide: APP_INITIALIZER,
      deps: [AuthService],
      useFactory: () => null
    }
  ]
};
