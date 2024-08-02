import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL } from '@src/app/shared/providers/base-url.provider';
import { BehaviorSubject, finalize } from 'rxjs';
import { Session, SessionFeedback } from './session.types';
import { DashboardPageTitleComponent } from "../../../../components/dashboard-page-title/dashboard-page-title.component";
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { SessionFeedbackComponent } from "./session-feedback/session-feedback.component";
import { SessionContentComponent } from "./session-content/session-content.component";

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [DashboardPageTitleComponent, CommonModule, MatProgressSpinnerModule, MatButtonModule, SessionFeedbackComponent, SessionContentComponent],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
  private sessionId: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  session: BehaviorSubject<Session | null> = new BehaviorSubject<Session | null>(null);

  isLoading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    @Inject(BASE_URL) private readonly baseUrl: string,
    private readonly snackBar: MatSnackBar
  ) {
    this.subscribeSession();
    this.subscribeSessionId();
    this.subscribeRoute();
  }

  private subscribeRoute() {
    this.route.paramMap.subscribe((params) => {
      const sessionId = +params.get('sessionId')!;
      this.sessionId.next(sessionId);
    });
  }

  private subscribeSessionId() {
    this.sessionId.subscribe((sessionId) => {
      if (!sessionId) {
        return;
      }

      this.http
        .get<Session>(`${this.baseUrl}/sessions/${this.sessionId.value}`)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe({
          next: (data) => {
            this.session.next(data);
          },
          error: (response: { status: number, statusText: string }) => {
            this.error = `${response.status} ${response.statusText}`;
            this.snackBar.open(`Error: ${response.status} ${response.statusText}`, 'Dismiss', {
              duration: 10000,
            });
          }
        });
    });
  }

  private subscribeSession() {
    this.session.subscribe((session) => {
      if (!session) {
        return;
      }
    });
  }

  finishSession() {
    this.isLoading = true;
    this.http
      .post<SessionFeedback>(`${this.baseUrl}/sessions/${this.sessionId.value}/finish`, {})
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (data) => {
          const currentSession = this.session.value;
          if (!currentSession) {
            return;
          }

          const newSession: Session = {
            ...currentSession,
            feedback: data.feedback,
            rating: data.rating,
          };

          this.session.next(newSession);
        },
        error: (response: { status: number, statusText: string }) => {
          this.error = `${response.status} ${response.statusText}`;
          this.snackBar.open(`Error: ${response.status} ${response.statusText}`, 'Dismiss', {
            duration: 10000,
          });
        }
      });
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
