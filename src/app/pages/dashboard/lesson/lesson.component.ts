import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, finalize } from 'rxjs';
import { BASE_URL } from '../../../shared/providers/base-url.provider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDivider } from '@angular/material/divider';
import { AudioRecorderComponent } from "../../../components/audio-recorder/audio-recorder.component";
import { LessonViewComponent } from "./lesson-view/lesson-view.component";
import { RecordedData } from '../../../shared/services/audio-recorder.types';
import { AnswerFeedback, Lesson } from './lesson.types';
import { LessonResultComponent } from "./lesson-result/lesson-result.component";
@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatProgressBarModule,
    MatDivider,
    MatButtonModule,
    AudioRecorderComponent,
    LessonViewComponent,
    LessonResultComponent
],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  private sessionId: number = 0;
  private lessonId: number = 0;

  isSubmitting = false;
  isLoading: boolean = false;

  phrase: string = '';
  feedback = new BehaviorSubject<AnswerFeedback | null>(null);
  recordedData: RecordedData | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {
    this.isLoading = true;

    this.route.paramMap.subscribe((params) => {
      this.sessionId = +params.get('sessionId')!;
      this.lessonId = +params.get('lessonId')!;

      this.http
        .get<Lesson>(`${baseUrl}/sessions/${this.sessionId}/lessons/${this.lessonId}`)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((data) => {
          this.phrase = data.phrase;
        });
    });
  }

  answerLesson(data: RecordedData) {
    this.recordedData = data;

    if (!data) {
      return;
    }

    this.isSubmitting = true;

    const formData = new FormData();
    formData.append('audio', this.recordedData.data);

    this.http
      .post<AnswerFeedback>(
        `${this.baseUrl}/sessions/${this.sessionId}/lessons/${this.lessonId}`,
        formData
      )
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe((value: any) => {
        this.feedback.next(value);
      });
  }

  retryLesson() {
    this.feedback.next(null);
  }

  nextLesson() {
    const feedback = this.feedback.value;

    if (!feedback) {
      return;
    }

    this.feedback.next(null);
    this.isLoading = true;

    if (feedback.nextLessonId) {
      this.router.navigate([`sessions/${this.sessionId}/lessons/${feedback.nextLessonId}`]);
      return;
    }

    this.router.navigate([`sessions/${this.sessionId}/result`]);
  }
}
