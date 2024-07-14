import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../auth/auth.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginDialogComponent {
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  isLoading = signal(false);

  requestError = signal('');

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>) {
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  close() {
    this.dialogRef.close();
  }

  isInvalidForm() {
    return this.loginForm.invalid;
  }

  getEmailError() {
    if (!this.email?.invalid) {
      return null;
    }

    if (this.email.hasError('email')) {
      return 'Insert a valid e-mail address';
    }

    if (this.email.hasError('required')) {
      return 'E-mail is required';
    }

    return null;
  }

  getPasswordError() {
    if (!this.password?.invalid) {
      return null;
    }

    if (this.password.hasError('required')) {
      return 'Password is required';
    }

    if (this.password.hasError('minlength')) {
      return `Insert at least ${this.password.getError('minlength')?.requiredLength} characters.`;
    }

    return null;
  }

  async sendForm() {
    const { email, password } = this.loginForm.value;

    if (!email || !password) {
      return;
    }

    this.isLoading.set(true);

    this.authService.login(email, password)
      .pipe(finalize(() => {
        this.isLoading.set(false);
      }))
      .subscribe({
      error: (response) => {
        if (response.status === 401) {
          this.requestError.set('E-mail or password is wrong.');
          return;
        }

        this.requestError.set(response.error.message);
      },
      next: () => {
        this.requestError.set('');
        this.close();
      },
    });
  }
}
