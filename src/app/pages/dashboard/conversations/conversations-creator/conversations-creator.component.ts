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
import { FirstNamePipe } from '@shared/pipes/first-name.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DEFAULT_CONVERSATION_CONTEXT, DEFAULT_CONVERSATION_DURATION, DEFAULT_CONVERSATION_LEVEL } from './conversations-creator.constants';
import { CreateConversationResponse } from './conversations-creator.types';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-conversations-creator',
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
  templateUrl: './conversations-creator.component.html',
  styleUrl: './conversations-creator.component.scss'
})
export class ConversationsCreatorComponent {
  isCreatingConversation = false;
  textError = '';

  conversationCreatorForm = new FormGroup({
    level: new FormControl(DEFAULT_CONVERSATION_LEVEL, [
      Validators.required,
    ]),
    duration: new FormControl(DEFAULT_CONVERSATION_DURATION, [
      Validators.required,
    ]),
    context: new FormControl(DEFAULT_CONVERSATION_CONTEXT, [
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

  createConversation() {
    this.isCreatingConversation = true;
    this.http.post<CreateConversationResponse>(`${this.baseUrl}/conversations`, {
      level: +(this.conversationCreatorForm.value.level!),
      duration: +(this.conversationCreatorForm.value.duration!),
      context: this.conversationCreatorForm.value.context,
    })
    .pipe(
      finalize(() => {
        this.isCreatingConversation = false;
      })
    )
    .subscribe({
      next: ({ conversationId }) => {
        this.router.navigate([`conversations/${conversationId}`]);
      },
      error: (response: { status: number, statusText: string }) => {
        this.snackBar.open(`Error: ${response.status} ${response.statusText}`, 'Dismiss', {
          duration: 10000,
        });
      },
    });
  }

  get currentUser() {
    return this.authService.currentUser;
  }
}
