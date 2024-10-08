import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { LogoComponent } from '@components/logo/logo.component';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { AvatarComponent } from "@components/avatar/avatar.component";
import { AuthService } from '@app/auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@shared/providers/base-url.provider';
import { MatProgressBar } from '@angular/material/progress-bar';
import { finalize } from 'rxjs';
import { DEFAULT_SESSION_CONTEXT, DEFAULT_SESSION_LESSONS, DEFAULT_SESSION_LEVEL } from './sessions-creator.constants';
import { Session } from './sessions-creator.types';
import { FirstNamePipe } from '@shared/pipes/first-name.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sessions-creator',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    LogoComponent,
    MatIcon,
    MatDivider,
    AvatarComponent,
    CommonModule,
    RouterOutlet,
    MatSelectModule,
    MatSliderModule,
    MatProgressBar,
    FirstNamePipe,
    MatProgressSpinnerModule
  ],
  templateUrl: './sessions-creator.component.html',
  styleUrl: './sessions-creator.component.scss'
})
export class SessionCreatorComponent {
  isCreatingSession = false;

  sessionCreatorForm = new FormGroup({
    level: new FormControl(DEFAULT_SESSION_LEVEL, [
      Validators.required,
    ]),
    lessons: new FormControl(DEFAULT_SESSION_LESSONS, [
      Validators.required,
    ]),
    context: new FormControl(DEFAULT_SESSION_CONTEXT, [
      Validators.required,
    ]),
  });

  constructor(
    private http: HttpClient,
    private readonly snackBar: MatSnackBar,
    @Inject(BASE_URL) private baseUrl: string,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  get isLoading() {
    return this.authService.isLoading;
  }

  createSession() {
    this.isCreatingSession = true;
    this.http.post<Session>(`${this.baseUrl}/sessions`, {
      level: +(this.sessionCreatorForm.value.level ?? 1),
      lessons: +(this.sessionCreatorForm.value.lessons ?? 2),
      context: this.sessionCreatorForm.value.context,
    })
      .pipe(
        finalize(() => {
          this.isCreatingSession = false;
        })
      )
      .subscribe({
        next: ({ sessionId }) => {
          this.router.navigate([`sessions/${sessionId}`]);
        },
        error: (response: { status: number, statusText: string }) => {
          this.snackBar.open(`Error: ${response.status} ${response.statusText}. Try again.`, 'Dismiss', {
            duration: 10000,
          });
        }
      });
  }

  get currentUser() {
    return this.authService.currentUser;
  }
}
