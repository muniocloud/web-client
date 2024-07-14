import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, ViewChild, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subject, finalize } from 'rxjs';
import { BASE_URL } from '../../../shared/api/base-url.provider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AudioRecordingService } from '../../../shared/audio-recording.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDivider } from '@angular/material/divider';
import WaveSurfer from 'wavesurfer.js'

type AnswerFeedback = {
  rating: number;
  feedback: string;
  nextLessonId: number | null;
};

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
  ],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  sessionId: number = 0;
  lessonId: number = 0;
  isLoading: boolean = false;
  isSubmitting = signal(false);
  phrse: string = '';
  recordingTime: string = '';
  recorded: Blob | null = null;
  recordedUrl: string | null = null;
  answerFeedback = new BehaviorSubject<AnswerFeedback | null>(null);
  waveSurfer: WaveSurfer | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private audioRecording: AudioRecordingService,
    @Inject(BASE_URL) private baseUrl: string
  ) {
    this.isLoading = true;

    this.route.paramMap.subscribe((params) => {
      this.sessionId = +params.get('sessionId')!;
      this.lessonId = +params.get('lessonId')!;

      this.http
        .get<{
          phrase: string;
        }>(`${baseUrl}/sessions/${this.sessionId}/lessons/${this.lessonId}`)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((data) => {
          this.phrse = data.phrase;
        });
    });

    this.audioRecording.getRecordedTime().subscribe((value) => {
      this.recordingTime = value;
    });

    this.audioRecording.getRecordedBlob().subscribe((value) => {
      this.recorded = value;

      if (this.recorded) {
        this.answerLesson();
      }
    });

    this.audioRecording.getRecordedUrl().subscribe((value) => {
      this.recordedUrl = value;
    });
  }

  answerLesson() {
    if (!this.recorded) {
      return;
    }

    this.isSubmitting.set(true);

    const formData = new FormData();
    formData.append('audio', this.recorded);

    this.http
      .post<AnswerFeedback>(
        `${this.baseUrl}/sessions/${this.sessionId}/lessons/${this.lessonId}`,
        formData
      )
      .pipe(
        finalize(() => {
          this.isSubmitting.set(false);
        })
      )
      .subscribe((value: any) => {
        this.answerFeedback.next(value);
        this.recordingTime = '00:00';
        setTimeout(() => {
          this.waveSurfer = WaveSurfer.create({
            container: '#waveaudio',
            waveColor: '#ffffff',
            progressColor: '#1e95f2',
            width: '100%',
            height: 48,
            barWidth: 2,
            url: this.recordedUrl!,
          });
        }, 0);
      });
  }

  toggleAudio() {
    this.waveSurfer?.playPause();
  }

  isPlayingAudio() {
    return !!this.waveSurfer?.isPlaying();
  }

  retryLesson() {
    this.answerFeedback.next(null);
  }

  nextLesson() {
    const feedback = this.answerFeedback.value;

    if (!feedback) {
      return;
    }

    this.answerFeedback.next(null);

    if (feedback.nextLessonId) {
      this.router.navigate([`sessions/${this.sessionId}/lessons/${feedback.nextLessonId}`]);
      return;
    }

    this.router.navigate([`sessions/${this.sessionId}/result`]);
  }

  getAnswerTitle(rating: number) {
    if (rating <= 3) {
      return 'Let\'s try again?';
    }

    if (rating <= 5) {
      return 'Ok, we need to improve it!';
    }

    if (rating <= 8) {
      return 'Almost done!';
    }

    return 'You are good!';
  }

  isRecording() {
    return this.audioRecording.isRecording();
  }

  stopRecording() {
    this.audioRecording.stopRecording();
  }

  startRecording() {
    this.audioRecording.startRecording();
  }
}
