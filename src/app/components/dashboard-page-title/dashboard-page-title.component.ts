import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-page-title',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './dashboard-page-title.component.html',
  styleUrl: './dashboard-page-title.component.scss'
})
export class DashboardPageTitleComponent {
  @Input({ required: true }) title!: string;

  onClickBack = output();

  emitClickBack() {
    this.onClickBack.emit();
  }
}
