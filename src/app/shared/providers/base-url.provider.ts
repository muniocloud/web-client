import { InjectionToken } from "@angular/core";

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>('baseURL');

export const baseUrlProvider = { provide: BASE_URL, useValue: 'http://localhost:3000'};
