import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { BASE_URL } from '../shared/api/base-url.provider';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

type User = {
  name: string;
  avatarUrl: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  private currentUser: Observable<User | null>;
  isLoading = signal(false);

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    private router: Router
  ) {
    this.isLoading.set(true);
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.loadUser();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.getUserToken();
  }

  getUserToken() {
    return localStorage.getItem('user-token');
  }

  async loadUser() {
    if (!this.getUserToken()) {
      this.isLoading.set(false);
      return;
    }

    const userObserver = await this.getUser();

    userObserver
      .pipe(
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe((value) => {
        this.currentUserSubject.next(value);
        if (value) {
          return;
        }
      });
  }

  private getUser() {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        map(async (data) => {
          localStorage.setItem('user-token', data.accessToken);
          this.loadUser();
          this.router.navigate(['/']);
          return true;
        })
      );
  }

  signup(email: string, password: string, name: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/signup`, { name, email, password })
      .pipe(
        map(async (data) => {
          localStorage.setItem('user-token', data.accessToken);
          this.loadUser();
          this.router.navigate(['/']);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('user-token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}
