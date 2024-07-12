import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, HomepageComponent, MatProgressSpinner],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  authService = inject(AuthService);
}
