import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog.component';
import { LoginButtonComponent } from './login-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { LogoComponent } from "../logo/logo.component";
import { ReactiveFormsModule } from '@angular/forms';

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
  declarations: [LoginDialogComponent, LoginButtonComponent],
  exports: [LoginButtonComponent],
})
export class LoginModule { }
