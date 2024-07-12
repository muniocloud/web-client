import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { BASE_URL } from '../shared/api/base-url.provider';
import { BehaviorSubject, finalize, map, Observable } from 'rxjs';

type User = {
  name: string;
  avatarUrl: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  private currentUser: Observable<User | null>;
  isLoading = signal(false);

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
    this.isLoading.set(true);
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.loadUser();
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUserSubject.value;
  }

  getUserToken() {
    return localStorage.getItem('user-token');
  }

  async loadUser() {
    if (!this.getUserToken()) {
      this.isLoading.set(false);
      return;
    }

    (await this.getUser()).pipe(finalize(() => {
      this.isLoading.set(false);
    }))
    .subscribe(value => {
      this.currentUserSubject.next(value);
    });
  }

  getUser() {
    return this.http.get<User>(`${this.baseUrl}/user`);
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, { email, password }).pipe(
      map(async (data) => {
        localStorage.setItem('user-token', data.accessToken);
        this.loadUser();
        return true;
      }),
    );
  }

  signup(email: string, password: string, name: string) {
    return this.http.post<any>(`${this.baseUrl}/auth/signup`, { name, email, password }).pipe(
      map(async (data) => {
        localStorage.setItem('user-token', data.accessToken);
        this.loadUser();
        return true;
      }),
    );
  }

  logout() {
    localStorage.removeItem('user-token');
    this.currentUserSubject.next(null);
  }
}
