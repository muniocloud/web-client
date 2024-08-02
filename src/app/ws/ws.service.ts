import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor(private readonly authService: AuthService) {
  }

  createSocket(endpoint: string) {
    const token = this.authService.getUserToken();

    if (!token) {
      throw new Error('User not authenticated.');
    }

    return io(endpoint, {
      extraHeaders: {
        Authorization: token,
      }
    });
  }
}
