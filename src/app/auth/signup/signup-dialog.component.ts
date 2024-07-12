import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sameFieldValue } from './same-field-value.directive';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpDialogComponent {
  private authService = inject(AuthService);

  signUpForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      sameFieldValue('password'),
    ]),
  });

  isLoading = signal(false);

  requestError = signal('');

  constructor(public dialogRef: MatDialogRef<SignUpDialogComponent>) {
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  close() {
    this.dialogRef.close();
  }

  isInvalidForm() {
    return this.signUpForm.invalid;
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

  getNameError() {
    if (!this.name?.invalid) {
      return null;
    }

    if (this.name.hasError('minlength')) {
      return `Insert at least ${this.name.getError('minlength')?.requiredLength} characters.`;
    }

    if (this.name.hasError('required')) {
      return 'Name is required';
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

  getConfirmPasswordError() {
    if (!this.confirmPassword?.invalid) {
      return null;
    }

    if (this.confirmPassword.hasError('sameFieldValue')) {
      return 'Password confirmation doesn\'t match.';
    }

    return null;
  }

  async sendForm() {
    const { email, password, name } = this.signUpForm.value;

    if (!email || !password || !name) {
      return;
    }

    this.isLoading.set(true);

    this.authService.signup(email, password, name)
      .pipe(finalize(() => {
        this.isLoading.set(false);
      }))
      .subscribe({
      error: (response) => {
        this.requestError.set(response.error.message);
      },
      next: () => {
        this.requestError.set('');
        this.close();
      },
    });
  }
}
