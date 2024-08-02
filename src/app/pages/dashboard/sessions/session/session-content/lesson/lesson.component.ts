import { Component, Inject, Input, output, ViewChild } from '@angular/core';
import { Lesson } from '../../session.types';
import { BehaviorSubject, finalize, Subscription } from 'rxjs';
import { LessonFeedback } from './lesson.types';
import { AudioRecorderComponent } from "../../../../../../components/audio-recorder/audio-recorder.component";
import { AudioVisualizerComponent } from "../../../../../../components/audio-visualizer/audio-visualizer.component";
import { CommonModule } from '@angular/common';
import { RecordedData } from '@src/app/shared/services/audio-recorder.types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '@src/app/shared/providers/base-url.provider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [AudioRecorderComponent, AudioVisualizerComponent, CommonModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  @Input({ required: true }) lesson!: Lesson;
  @Input({ required: true }) sessionId!: number;

  onNextLesson = output<number | null>();

  feedback: BehaviorSubject<LessonFeedback | null> = new BehaviorSubject<LessonFeedback | null>(null);
  recordedData: RecordedData | null = null;
  @ViewChild('audioRecorder') recorder!: AudioRecorderComponent;
  private recordedDataSubscription: Subscription | null = null;
  isSubmitting: boolean = false;

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
    private readonly snackBar: MatSnackBar,
  ) {}
  
/**
 * Agora falta pegar o RecordedDAta que já está salvo e enviar uma requisição pro back. Popular o feedback
 * No nextlesson, eu envio o feedback e peço pro componente pai decidir se vai querer finalizar a seção ou ir para a próxima
 * -> dps, só remover os componentes antigos
 */
  retryLesson() {
    this.feedback.next(null);
  }

  nextLesson() {
    const nextLessonId = this.feedback.value?.nextLessonId ?? null
    this.feedback.next(null);
    this.onNextLesson.emit(nextLessonId);
  }

  subscribeAudioRecorder() {
    this.recordedDataSubscription?.unsubscribe();
    this.recordedDataSubscription = this.recorder.getRecordedData().subscribe(data => {
      this.recordedData = data;
      this.answerLesson(data);
    });
  }

  answerLesson(data: RecordedData) {
    this.isSubmitting = true;
    const formData = new FormData();
    formData.append('audio', data.data);

    this.http
      .post<LessonFeedback>(
        `${this.baseUrl}/sessions/${this.sessionId}/lessons/${this.lesson.id}`,
        formData
      )
      .pipe(
        finalize(() => {
          this.isSubmitting = false;
        })
      )
      .subscribe({
        next: (value: any) => {
          this.feedback.next(value);
        },
        error: () => {
          this.snackBar.open('We\'re with troble to send your answer. Please, try again.', 'Ok');
        },
      });
  }

  ngOnDestroy() {
    this.recordedDataSubscription?.unsubscribe();
  }
}
