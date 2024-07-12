import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../shared/api/base-url.provider';
import { BehaviorSubject, map, Observable } from 'rxjs';

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

  constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
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
    (await this.getUser()).subscribe(value => {
      this.currentUserSubject.next(value);
    });
  }

  async getUser() {
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

  logout() {
    localStorage.removeItem('user-token');
    this.currentUserSubject.next(null);
  }
}
