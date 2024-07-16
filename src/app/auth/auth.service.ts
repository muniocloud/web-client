import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../shared/api/base-url.provider';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
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

  private getUser() {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }

  async loadUser() {
    if (!this.getUserToken()) {
      return;
    }

    const userObserver = await this.getUser();

    userObserver
      .subscribe({
        next: (value) => {
          this.currentUserSubject.next(value);
        },
        error: ({ status, statusText }: { status: number, statusText: string }) => {
          this.snackBar.open(`HTTP Error, ${status} ${statusText}.`, 'Dismiss', {
            duration: 5 * 1000,
          });
          if (status === HttpStatusCode.Unauthorized) {
            localStorage.removeItem('user-token');
            this.router.navigate(['/']);
          }
        }
      });
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        map(async (data) => {
          this.setupUser(data.accessToken);
          return true;
        })
      );
  }

  signup(email: string, password: string, name: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/signup`, { name, email, password })
      .pipe(
        map(async (data) => {
          this.setupUser(data.accessToken);
          return true;
        })
      );
  }

  private setupUser(accessToken: string) {
    localStorage.setItem('user-token', accessToken);
    this.loadUser();
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('user-token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }
}
