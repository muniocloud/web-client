import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpButtonComponent } from './signup-button.component';
import { SignUpDialogComponent } from './signup-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from '../../components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    LogoComponent,
    ReactiveFormsModule,
  ],
  declarations: [SignUpButtonComponent, SignUpDialogComponent],
  exports: [SignUpButtonComponent],
})
export class SignUpModule { }
