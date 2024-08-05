import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '@src/app/auth/auth.service';
import { FirstNamePipe } from '@src/app/shared/pipes/first-name.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { FeedbackBtnComponent } from "../../../components/feedback-btn/feedback-btn.component";


@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, FirstNamePipe, MatCardModule, MatButtonModule, RouterLink, FeedbackBtnComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent {

  constructor(
    private authService: AuthService,
  ) {}

  get currentUser() {
    return this.authService.currentUser;
  }

  get isLoading() {
    return this.authService.isLoading;
  }

  getTimeGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
      return 'Good morning';
    } else if (hours < 18) {
      return 'Good afternoon';
    }

    return 'Good evening';
  }
}
