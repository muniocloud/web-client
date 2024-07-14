import { Component, Inject, ViewChild, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { LogoComponent } from '../../components/logo/logo.component';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { AvatarComponent } from "../../components/avatar/avatar.component";
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../shared/api/base-url.provider';
import { MatProgressBar } from '@angular/material/progress-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dashboard',
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
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  authService = inject(AuthService);

  isLoading = signal(false);

  sessionCreatorForm = new FormGroup({
    difficult: new FormControl('1', [
      Validators.required,
    ]),
    lessons: new FormControl('3', [
      Validators.required,
    ]),
    context: new FormControl('routine', [
      Validators.required,
    ]),
  });

  @ViewChild('drawer') drawer!: MatDrawer;
  
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    private router: Router,
  ) {}

  createSession() {
    this.isLoading.set(true);
    this.http.post<{
      sessionId: number;
      lessonsIds: number[];
    }>(`${this.baseUrl}/sessions`, {
      level: +(this.sessionCreatorForm.value.difficult ?? 1),
      lessons: +(this.sessionCreatorForm.value.lessons ?? 2),
      context: this.sessionCreatorForm.value.context,
    })
    .pipe(finalize(() => this.isLoading.set(false)))
    .subscribe(({ sessionId, lessonsIds } ) => {
      this.router.navigate([`sessions/${sessionId}/lessons/${lessonsIds[0]}`]);
    });
  }

  public toggleDrawer() {
    this.drawer.toggle();
  }
}
