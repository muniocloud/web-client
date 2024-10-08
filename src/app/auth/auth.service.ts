import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../shared/providers/base-url.provider';
import { BehaviorSubject, catchError, finalize, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { User } from './auth.types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  private isLoadingUser: boolean = false;

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.loadUser();
  }

  get isLoading() {
    return this.isLoadingUser;
  }

  get currentUser() {
    return this.currentUserSubject.value;
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

    this.isLoadingUser = true;

    const userObserver = await this.getUser();

    userObserver
      .pipe(finalize(() => {
        this.isLoadingUser = false;
      }))
      .subscribe({
        next: (value) => {
          this.currentUserSubject.next(value);
        },
        error: ({ status, statusText }: { status: number, statusText: string }) => {
          this.snackBar.open(`HTTP Error, ${status} ${statusText}.`, 'Dismiss');
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
        }),
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
