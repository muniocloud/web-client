import { Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sameFieldValue } from '@shared/validators/same-field-value.validator';
import { MatDialogRef } from '@angular/material/dialog';
import { finalize } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';
import { SNACKBAR_DURATION_SIGNUP_INFO } from './signup.constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SamePasswordStateMatcher } from '@shared/matcher/same-password.matcher';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.scss',
})
export class SignUpDialogComponent {
  samePasswordMatcher = new SamePasswordStateMatcher();

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
      Validators.required,
    ]),
  }, [sameFieldValue('password', 'confirmPassword', 'samePassword')]);

  isLoading = false;

  requestError = '';

  constructor(
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<SignUpDialogComponent>,
    private readonly snackBar: MatSnackBar,
  ) {}

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
    if (!this.confirmPassword?.invalid && !this.signUpForm.hasError('samePassword')) {
      return null;
    }

    if (this.confirmPassword!.hasError('required')) {
      return 'Password confirmation is required.';
    }

    if (this.signUpForm.hasError('samePassword')) {
      return 'Password confirmation doesn\'t match.';
    }

    return null;
  }

  close() {
    this.dialogRef.close();
  }

  async sendForm() {
    const { email, password, name } = this.signUpForm.value;

    if (!email || !password || !name) {
      return;
    }

    this.isLoading = true;

    this.authService.signup(email, password, name)
      .pipe(
        finalize(() => {
        this.isLoading = false;
      }))
      .subscribe({
      error: (response) => {
        this.requestError = response.error.message;
      },
      next: () => {
        this.requestError = '';
        this.close();
        this.snackBar.open('Account created.', 'Dismiss', {
          duration: SNACKBAR_DURATION_SIGNUP_INFO,
        });
      },
    });
  }
}
