import { InjectionToken } from "@angular/core";
import { environment } from "../../../environments/environment.development";

export const BASE_URL: InjectionToken<string> = new InjectionToken<string>('baseURL');

const apiUrl = environment.apiUrl;

export const baseUrlProvider = { provide: BASE_URL, useValue: apiUrl };
