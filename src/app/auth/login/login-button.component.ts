import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
})
export class LoginButtonComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(LoginDialogComponent, {
      minWidth: '300px',
    });
  }

}
