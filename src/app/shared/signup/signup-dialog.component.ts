import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sameFieldValue } from './same-field-value.directive';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrl: './signup-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpDialogComponent {
  signUpForm = new FormGroup({
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

  sendForm() {
    console.log('data', this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.confirmPassword);
  }
}
