import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';
import { HttpStatusCode } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACKBAR_DURATION_LOGIN_INFO } from './login.constants';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent {

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

  isLoading = false;

  requestError = '';

  constructor(
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<LoginDialogComponent>,
    private readonly snackBar: MatSnackBar,
  ) {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
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

  close() {
    this.dialogRef.close();
  }

  async sendForm() {
    const { email, password } = this.loginForm.value;

    if (!email || !password) {
      return;
    }

    this.isLoading = true;

    this.authService.login(email, password)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
      error: (error) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this.requestError = 'E-mail or password is wrong.';
          return;
        }

        this.requestError = error.error.message;
      },
      next: () => {
        this.requestError = '';
        this.snackBar.open('Login success!', 'Dismiss', {
          duration: SNACKBAR_DURATION_LOGIN_INFO,
        });
        this.close();
      },
    });
  }
}
