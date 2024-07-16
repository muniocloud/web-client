import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BASE_URL } from '../../../shared/providers/base-url.provider';
import { BehaviorSubject, finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import markdownit from 'markdown-it'

type SessionResult = {
  feedback: string;
  rating: number;
};

@Component({
  selector: 'app-session-result',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './session-result.component.html',
  styleUrl: './session-result.component.scss'
})
export class SessionResultComponent {
  sessionId: number = 0;
  isLoading: boolean = false;
  sessionFeedbackContent: string = '';
  sessionResult = new BehaviorSubject<SessionResult | null>(null);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {

    this.route.paramMap.subscribe((params) => {
      this.sessionId = +params.get('sessionId')!;

      this.http
        .get<SessionResult>(`${baseUrl}/sessions/${this.sessionId}/result`)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((data) => {
          this.sessionResult.next(data);
          this.sessionFeedbackContent = markdownit().render(data.feedback);
        });
    });
  }

  getTitleByRating(rating: number) {
    if (rating <= 3) {
      return 'We need to improve!';
    }

    if (rating <= 5) {
      return 'Almost done, we have some work to do!';
    }

    if (rating <= 8) {
      return 'You are doing well!!';
    }

    return 'Congratulations!! 🎉🎉'
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
