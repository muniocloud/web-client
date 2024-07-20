import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL } from '@shared/providers/base-url.provider';
import { BehaviorSubject, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import markdownit from 'markdown-it'
import { SessionResult } from './session-result.types';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageErrorComponent } from "@components/page-error/page-error.component";
import { getTitle } from '@shared/utils/feedback-title';


@Component({
  selector: 'app-session-result',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, PageErrorComponent],
  templateUrl: './session-result.component.html',
  styleUrl: './session-result.component.scss'
})
export class SessionResultComponent {
  sessionId: number = 0;
  isLoading: boolean = false;
  sessionFeedbackContent: string = '';
  sessionFeedbackTitle: string = '';
  sessionResult = new BehaviorSubject<SessionResult | null>(null);
  pageError = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {
    this.isLoading = true;

    this.route.paramMap.subscribe((params) => {
      this.sessionId = +params.get('sessionId')!;

      this.http
        .get<SessionResult>(`${baseUrl}/sessions/${this.sessionId}/result`)
        .pipe(finalize(() => {
          this.isLoading = false;
        }))
        .subscribe({
          next: (data) => {
            this.sessionResult.next(data);
            this.sessionFeedbackContent = markdownit().render(data.feedback);
            this.sessionFeedbackTitle = getTitle(data.rating);
          },
          error: (response: { status: number, statusText: string }) => {
            this.pageError = `${response.status} ${response.statusText}`;
          },
        });
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
