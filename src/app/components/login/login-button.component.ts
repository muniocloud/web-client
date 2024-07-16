import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog.component';
import { DIALOG_MIN_WIDTH } from './login.constants';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
})
export class LoginButtonComponent {
  constructor(private readonly dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent, {
      minWidth: DIALOG_MIN_WIDTH,
    });
  }

}
