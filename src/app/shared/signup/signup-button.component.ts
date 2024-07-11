import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignUpDialogComponent } from './signup-dialog.component';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
})
export class SignUpButtonComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(SignUpDialogComponent, {
      minWidth: '300px',
    });
  }
}
