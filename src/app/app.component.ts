import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AuthService } from './auth/auth.service';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { environment } from '@src/environments/environment';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from "./offline/offline.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, NavbarComponent, MatProgressSpinner, CommonModule, OfflineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-client';
  authService = inject(AuthService);
  isOnline = !environment.isOffline;
}
