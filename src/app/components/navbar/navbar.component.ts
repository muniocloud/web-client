import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoComponent } from '../logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { SignUpModule } from '../signup/signup.module';
import { AvatarComponent } from '../avatar/avatar.component';
import { AuthService } from '@app/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACKBAR_DURATION_LOGOUT_INFO } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    LogoComponent,
    MatButtonModule,
    LoginModule,
    SignUpModule,
    AvatarComponent,
    CommonModule,
    MatDivider,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar
  ) {}

  isPublicContent() {
    return !this.authService.isAuthenticated();
  }

  getCurrentUser() {
    return this.authService.currentUser;
  }

  logout() {
    this.snackBar.open('Goodbye!', 'Dismiss', {
      duration: SNACKBAR_DURATION_LOGOUT_INFO,
    });

    return this.authService.logout();
  }
}
