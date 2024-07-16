import { inject } from "@angular/core";
import { AuthService } from "../auth.service";
import { HttpHandlerFn, HttpRequest } from "@angular/common/http";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const authToken = inject(AuthService).getUserToken();
  const headers = req.headers.append('Authorization', `Bearer ${authToken}`);
  const newReq = req.clone({
    headers,
  });
  return next(newReq);
}